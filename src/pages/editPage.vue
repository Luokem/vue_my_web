<template>
		
		<div  class="editContent">
      <h3>发布</h3>
      <div class="titleBox">
        <span>标题名称: &nbsp;</span>
        <input type="text" name="" v-model="title" class="title"><br>
        <span>标题分类: &nbsp;</span>
        <TitleSelect :selections="titleClassify" :selectionss="titleClassify2" @onChange="onChange('select',$event)" />
      </div>
			<div class="handlerFile">
        <span>标题图片:</span>
        <div class="imgBtn"  @click="upload()" >
          <div class="imgbox">
                <img :src="previewImg" alt="" id="preview" >   
          </div>        
          <label for="" data-brief="更换图片"></label>
          <input   class="input" type="file" ref="file"  accept="image/png,image/gif,image/jpeg"  @change="img2Upload($event)" multiple >

       </div>
        
      </div>
      <div class="edit0r">
         <span>编辑内容:</span>
          <Textarea name="" :textContent="textContent"  @onChange=
          "onChange('textarea',$event)"></Textarea>
       </div>

      <button class="saveBtn" type="" @click="sureBtn($event)">我要发布</button>
      
       <div>
          <p class="hr"></p>
           <ImportExcel :excelField="excelField"  />
       </div>

		</div>
</template>

<script type="text/javascript">
  import TitleSelect from '../lib/select.vue'
  import Textarea from '../lib/textarea.vue'
  import  ImportExcel from '../lib/importExcel.vue'
  import apiUrl from '../res/apiUrl.js'

	export default {
    components: {
      TitleSelect , Textarea,ImportExcel
    },
		data() {
			return {
				title: '',
				filesdata: '',
        select: {value: 0},
        path: '',
        textarea: '',
        textContent:'',
				previewImg: require('../assets/logo.png'),
         titleClassify : [
          {
            label: '前端',
            key: 'qianduan',
            value: 0,
            show: true
          },

          {
            label: '后端',
            key: 'houduan',
            value: 1,
            show: true
          },
            {
            label: '大数据',
            key: 'dashuju',
            value: 2,
            show: false
          },
           {
            label: '人工智能',
            key: 'rengongzhineng',
            value: 3,
            show: false
          },
          {
            label: '其他',
            key: 'qita',
            value: 4,
            show: true
          },
        ],
        titleClassify2: {
        "qianduan":[
          {
            label:'html',
            value: '01',
          },
          {
            label: 'css',
            value: '02',
          },
          {
            label: 'js',
            value: '03'
          },
          {
            label: '前端框架',
            value: '04'
          },
          {
            label: 'ui框架',
            value: '05'
          }
        ],
        "houduan":[
          {
            label: 'nodejs',
            value: '10'
          },
          {
            label: 'Mongodb',
            value: '11'
          }
        ],
        "dashuju":[
          
        ],
        "rengongzhineng": [
         
        ],
        "qita": [
          {
            label: '其他',
            value: "40"
          },
          {
            label: '项目总结',
            value: '41'
          }
        ]
      },
      excelField: ["学生卡号", '性别','学生名字','英文名字','生日日期','手机','身份证','微信','入学年份','家长姓名','地址','描述'],
     
			}
		},
		methods: {
			img2Upload(e) {
				this.filesdata = e.target.files; // this.filesdata = this.$refs.file.files[0]
				var windowURL = window.URL || window.webkitURL;
				this.previewImg = windowURL.createObjectURL(e.target.files[0]);

        let param = new FormData(); //创建form对象
        for(let i = 0;i<this.filesdata.length;i++) {
           param.append('imgUpload', this.filesdata[i])
        }

            // console.log(param.get('imgUpload[0]')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
            let config = {
              headers:{'Content-Type':'multipart/form-data'}
            }; //添加请求头
            this.$http.post(apiUrl.imgUpload,param,config)
              .then(response=>{
                console.log(response.data);
                this.path = '/'+ response.data.data[0].path.replace(/(\\)/g, '/')
             })
              .catch((err) => {
                console.log(err)
              })
		        
			},
      upload() {
          this.$refs.file.click()
      },
			sureBtn() {
        if(this.title == '' || this.textarea == ''){
          alert('标题或者内容不能为空')
          return;
        }
				let params = {
          title: this.title,
          classify: this.select.value,
          path: this.path,
          textarea: this.textarea

        };
         console.log(params)
        this.$http.post(apiUrl.editContent,params)
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
			},
      onChange(txt, data) {
        this[txt] = data
        console.log(txt, data)
      },
		},
		
	}
</script>

<style type="text/css" media="screen" scoped>
  .editContent {
    border:  1px solid gray;
    box-shadow:  1px 1px 5px gray;
    padding:  30px;
    width:  90%;
    height:  calc(100% - 60px - 2px - 2px);
    margin:  0 auto 50px;
  }
  h3 {
    text-align:  center;
    font-weight:  bold;
    font-size:  1.6em;
    margin:  20px 0;
    font-family:  inherit;
    letter-spacing: 10px;
    border-bottom:  1px solid gray;
    padding-bottom: 10px;
  }
	input {
		border:  1px solid black;
		border-radius:  3px;
	}

	a {
		color:  black;
		font-size:  .8em;
	}

  .handlerFile {
    width: 300px;
    position: relative;
  }

  .handlerFile span:first-child {
    position: absolute;
    top:  50%;
    transform: translateY(-50%);
  }

  .titleBox {
    width:  400px;
  }

  .titleBox input {
    margin-bottom:  15px;
  }

  .title {
    text-indent: 10px;
    padding: 3px;
  }

	#preview  {
	   border:  1px solid gray;
    border-radius:  50%;
		width:  101px;
		height: 101px;
    line-height: 100px;
		display: inline-block;
	}
  .imgbox {
     /* float:  left; */
    position: absolute;
    top:  0;
    left:  0;
    z-index:  10;
  }

	.imgBtn {
		position: relative;
    width: 100px;
    height:  100px;  
    border-radius: 50%;
    margin:  20px auto;
    cursor:  pointer;
	}

  label {
    position: absolute;
    bottom: -2px;
    left:  50%;
    transform:  translateX(-50%);
    z-index: 11;
    width:  102px;
    height: 50px;
    border-radius: 0 0 51px 51px / 0 0 50px 50px;
    overflow: hidden;
    margin-left:  2px;
  }

 
  .imgBtn label::before {
    display: inline-block;
    width:  104px;
    height: 20px;
    line-height: 20px;
    text-align:  center;
    content:  attr(data-brief);
    transition:  all 0.5s ease-in;
    background:  gray;
    opacity: .8;
    color:  black;
    margin-top:  30px;
    font-size:  12px;
  }


  .imgBtn:hover label::before {
    color:  #fff;
    z-index: 100;
    opacity:  .5;
    background: gray;


  }

	.input {
		display: none;
	}

  .saveBtn{
    display: block;
    padding:  5px 20px;
    background: rgb(65,184,31);
    border-radius: 5px;
    margin:  50px 0;
    text-align:  left;
    color:  #fff;
    cursor:  pointer;
  }

  .imgurl {
    width:  100px;
    height:  100px;
    border:  1px solid gray;
    border:  5px;
  }

  /* 
    导入表格
  */

  .hr {
    width:  100%;
    height:  1px;
    border-bottom:  1px solid gray;
  } 

  

</style>


