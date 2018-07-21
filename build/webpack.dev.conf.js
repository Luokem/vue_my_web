'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const express = require('express')
const multer = require('multer')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})


/*== express ==*/
var apiServer = express()
var bodyParser = require('body-parser')
apiServer.use(bodyParser.urlencoded({extended: false}))
apiServer.use(bodyParser.json())
var cookieParser = require('cookie-parser')
// var apiRouter = express.Router()
var fs = require('fs')
var nodeJson = require('../static/mock/nodeJson.js')

apiServer.use(function(req, res,next){
   res.header("Access-Control-Allow-Origin", req.headers.origin || '*');//指定可以http://localhost:8080,不能单单是*
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   res.header('Access-Control-Allow-Credentials','true')
  if(req.method == 'OPTIONS') {

    //让options请求快速返回

    res.sendStatus(200);

} else {

    next();

}
}) 

apiServer.use(cookieParser())

// apiServer.route('/')
// .get((req, res) => {
//   if(req.cookie.isFirst) {
//     console.log(req.cookie.isFirst)
//   }
//   else {
//     res.cookie('isFirst',1, {maxAge: 60 * 1000})
//   }
// })

apiServer.route('/st-edit') 
.post((req, res) => {
  res.json({err: '0',tip: 'success'})
})

/*
  --处理图片上传
*/ 
var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./static/pictures");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

var upload = multer({ storage: Storage }).array("imgUpload", 3); //Field name and max count


apiServer.route('/imgUpload')
.post((req,res) => {
 

  upload(req, res, function (err) {
    console.log(req.files)//正常这里打印不出来，因为是数组对象，有错误又可以打印出来
        if (err) {
             res.json({err:'1', tip: 'file uploader error'});
        }else {
         res.json({err: '0', tip: "file uploaded sucessfully!",data: req.files});//req.files[0].path 保存在服务器路径
        }
    });
})

/*
  编辑内容,假设用户身份为username1,
*/ 
apiServer.route('/editContent')
.post((req, res) => {
  nodeJson.createUserInformation(req.body)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    res.json(err)
  })
})

/*
  前端内容展示
*/
apiServer.route('/qianduan')
.post((req, res) => {
  var ret = nodeJson.showQianduan(req.body)
  ret.then((data) => {
    res.json(data)
  })
  .catch((err) => {
    res.json(err)
  })
})



// apiServer.use('/', apiRouter);//在one路径上建立路由
apiServer.listen(8089, function(err) {
  if(err) {
    console.log(err)
    return
  }
  console.log('listening at http://localhost:8089'+ '\n'  )
})



