webpackJsonp([4],{CsTH:function(t,o){},HOrZ:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n={data:function(){return{Top:!1,height:0}},methods:{toTop:function(){window.scrollTo(0,0)},toBottom:function(){var t=document.body.clientHeight;window.scrollTo(0,t)},scrollHeight:function(){var t=document.documentElement;window.addEventListener("scroll",function(o){console.log(111,this),t.scrollTop>300?(o.Top=!0,console.log("topbottom",o.Top)):o.Top=!1}(this),!1)}},mounted:function(){this.scrollHeight()}},a={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.Top?e("div",{staticClass:"active"},[e("div",[e("div",{staticClass:"top"},[e("a",{attrs:{href:"javascript: ;"},on:{click:function(o){t.toTop(o)}}},[t._v("顶部")])]),t._v(" "),e("div",{staticClass:"bottom"},[e("a",{attrs:{href:"javascript:;"},on:{click:function(o){t.toBottom(o)}}},[t._v("底部")])])])]):t._e()},staticRenderFns:[]};var s=e("VU/8")(n,a,!1,function(t){e("TIKq")},"data-v-7c57dcc8",null).exports,i=(e("/ocq"),{props:{distence:{type:Number,default:200}},data:function(){return{isShow:!1,active:!0,oldHeight:0}},methods:{Show:function(){var t=this,o=document.getElementsByClassName("load")[0],e=document.documentElement,n=parseInt(window.innerHeight),a=setTimeout(function(){window.onscroll=function(){var s=parseInt(e.scrollTop),i=parseInt(o.offsetTop);i-s-n<t.distence?(t.isShow=!0,t.active&&(t.$emit("hotLoad"),clearTimeout(a),t.active=!1,t.oldHeight=i)):t.isShow=!1,t.oldHeight<=i&&(t.isShow=!1,t.active=!0)}},100)}},mounted:function(){this.Show()}}),c={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"load"},[o("transition",{attrs:{name:"load"}},[this.isShow?o("div",[this._v("正在加载...")]):this._e()])],1)},staticRenderFns:[]};var r={components:{TopBottom:s,HotLoad:e("VU/8")(i,c,!1,function(t){e("Q+rL")},null,null).exports},data:function(){return{datas:[],storageData:[],storageIndex:0,startNumber:5,eachSize:4,imgurl:e("7Otq"),nowIndex:"",active:!1,read:!0,load:!1,dataShowed:!1,timeId:""}},methods:{goto:function(t){console.log(t)},Dates:function(t){return new Date(t).getFullYear()+"-"+(new Date(t).getMonth()+1)+"-"+new Date(t).getDate()+"   "+new Date(t).getHours()+":"+new Date(t).getMinutes()},month:function(t){return-1!==[1,3,5,7,8,10,12].indexOf(t)?31:-1!==[4,6,9,11].indexOf(t)?30:28},getDelTime:function(t){},mouseover:function(t){this.nowIndex=t,this.active=!0},mouseout:function(){this.nowIndex="",this.active=!1},rows:function(t){var o=t.match(/(\n|\t)/g);return null==o||1==o.length?((o=[]).push(1),o):(o.push(1),o)},readMore:function(){this.read=!1},showData:function(){var t,o=void 0;t=this.storageIndex,o=this.showOne?this.eachSize:this.startNumber,this.showOne=!0;var e=this.storageData.splice(t,o);this.datas=this.datas.concat(e),this.storageData.length<o?this.load=!1:this.load=!0},loadMore:function(){this.showData()},hotLoad:function(t){var o=this;this.timeId=setTimeout(function(){o.showData()},500)}},completed:{},created:function(){var t=this;console.log(11,this.$route.params);var o=this.$route.params.type;this.$http.post("/qianduan",{classify:o}).then(function(o){console.log(o),t.storageData=o.data.data,t.datas=o.data.data}).catch(function(t){console.log(t)})},beforeDestroyed:function(){this.datas=[],console.log("11111")}},d={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"qianduan",class:{showMord:!t.read}},[e("ul",{},t._l(t.datas,function(o,n){return e("li",{staticClass:"clearfix",on:{click:function(o){t.goto(n)}}},[e("div",{staticClass:"clearfix"},[e("div",{staticClass:"imgBox"},[e("img",{attrs:{src:o.path||t.imgurl,alt:""}})]),t._v(" "),e("h3",{class:{active:t.nowIndex==n},on:{mouseover:function(o){t.mouseover(n)},mouseout:function(o){t.mouseout(n)}}},[e("span",[t._v("标题:")]),e("span"),t._v(t._s(o.title))])]),t._v(" "),e("div",{staticClass:"code"},[e("pre",{staticClass:"clearfix"},[t._v("\t\t\t  \t   "),e("code",[t._v("\n\t\t\t  \t   \t"+t._s(o.textarea)+"\n\t\t\t  \t   ")]),t._v("\n\t\t\t  \t  \n\t\t\t   ")]),t._v(" "),e("div",{staticClass:"numShow"},t._l(t.rows(o.textarea),function(o,n){return e("i",[t._v("\n\t\t\t  \t   \t\t"+t._s(n+1)+"\n\t\t\t  \t   \t")])}))]),t._v(" "),e("div",{staticClass:"textTime"},[e("span",[t._v(t._s(t.Dates(o.date)))]),t._v(" "),e("span",[t._v("第"+t._s(n+1)+"篇")])])])})),t._v(" "),e("HotLoad",{attrs:{dataShowed:t.dataShowed,distance:100},on:{hotLoad:function(o){t.hotLoad("dataShowed")}}}),t._v(" "),e("TopBottom")],1)},staticRenderFns:[]};var u=e("VU/8")(r,d,!1,function(t){e("CsTH")},"data-v-2297aa22",null);o.default=u.exports},"Q+rL":function(t,o){},TIKq:function(t,o){}});