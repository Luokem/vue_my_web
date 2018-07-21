<template>
	<div>
		 <button class="upExcel" @click="upExcel">导入表格</button>
		 <button class="upExcel" @click="outputExcel">导出表格</button>
         <input id="upload" type="file" ref="upexcel" @change="importfxx($event)"  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"  style="display: none;"/>
         <transition name="fade">
           <div v-if="excelActive">
             <table>
               <thead>
                 <tr>
                   <th v-for="(item, index) in excelField">{{item}}</th>
                 </tr>
               </thead>
               <tbody>
                 <tr v-for="(item, index) in Data">
                   <td v-for="(it , i) in excelField">{{item[it]}}</td>
                 </tr>
               
               </tbody>
             </table>
           </div>
       </transition>
      
	</div>
</template>

<script type="text/javascript">
	import  XLSX  from  'xlsx'
	export default {
		props: {
			excelField: {
				type: Array,
				default: []
			}	
		},
		data() {
			return {
				  file: '',
       			 Data: [],
       			 excelActive: false,
			}
		},
		methods: {
			 upExcel() {
        this.$refs.upexcel.click()
      },
		      importfxx(obj) {
		      let _this = this;
		      console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxx1");
		      let inputDOM = this.$refs.upexcel;
		      // 通过DOM取文件数据
		       
		      this.file = event.currentTarget.files[0];
		       
		      var rABS = false; //是否将文件读取为二进制字符串
		      var f = this.file;
		       
		      var reader = new FileReader();
		      //if (!FileReader.prototype.readAsBinaryString) {
		      FileReader.prototype.readAsBinaryString = function(f) {
		      var binary = "";
		      var rABS = false; //是否将文件读取为二进制字符串
		      var pt = this;
		      var wb; //读取完成的数据
		      var outdata;
		      var reader = new FileReader();
		      reader.onload = function(e) {
		          var bytes = new Uint8Array(reader.result);
		          var length = bytes.byteLength;
		          for(var i = 0; i < length; i++) {
		            binary += String.fromCharCode(bytes[i]);
		          }
		          
		          if(rABS) {
		            wb = XLSX.read(btoa(fixdata(binary)), { //手动转化
		              type: 'base64'
		            });
		           
		          } else {
		            wb = XLSX.read(binary, {
		            type: 'binary'
		            });
		          }
		          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);//outdata就是你想要的东西
		          _this.Data = outdata;
		          _this.excelActive = true;
		          console.log('excelData',_this.Data)
		        }
		        reader.readAsArrayBuffer(f);
		      }
		      if(rABS) {
		        reader.readAsArrayBuffer(f);
		      } else {
		      reader.readAsBinaryString(f);
		      }
    	  },

			outputExcel: function() {　//兼容ie10哦！
			require.ensure([], () => {　　　　　　　　
			const { export_json_to_excel } = require('../vendor/Export2Excel');　　//引入文件　　　　　　
			const tHeader = ['用户名', '姓名', '部门', '职位', '邮箱', '充值']; //将对应的属性名转换成中文
			//	const tHeader = [];
			　　　　　　　　
			const filterVal = ['userName', 'realName', 'department', 'position', 'email', 'money'];//table表格中对应的属性名　　　　　 　　　
			const list = this.sels;　　　　　　　　
			const data = this.formatJson(filterVal, list);　　　　　　　　
			export_json_to_excel(tHeader, data, '列表excel');　　　　　　
			})
			 

		}
	}
	}
</script>

<style type="text/css" media="screen" scoped>
 .upExcel {
    padding:  5px 10px;
    background:  e3e3e3;
    color:  #fff;
    margin-right:  2em;
  }

 table {
  width: 100%;
  background: #fff;
  border-collapse: collapse;
  border-spacing:  0;
  margin-top:  2.3em;
  margin-bottom:  2.3em;
  padding-bottom:  100px;
  }
  td,
  th {
 
  text-align: center;
  padding: 10px 0;
  }
  th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
  cursor: pointer;
  }
  th.active {
  background: #35495e;
  }
  td {
     border: 1px solid #e3e3e3;
    color:  gray;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all 1s ease;
  }
	
</style>

