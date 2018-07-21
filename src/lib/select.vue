<template>
    <div class="selection-component">
      <div class="selection-show" @click="toggleDrop">
        <div class="select-text">
           <span>{{ selections[nowIndex].label }} {{this.list2Text}}</span>
        </div>
        <div class="arrow"></div>
      </div>
      <div class="selection-list" v-if="isDrop">
        <ul>
          <li v-for="(item, index) in selections" @click="chooseSelection(index)" @mouseover="showDrop2(index)" @mouseout="notShowDrop2()">{{ item.label }}
            <ul class="selection-list2" v-if="active&&nowIndex2 == index&&item.show">
              <li v-for="(item2, index2) in selectionss[item.key]"  @click="list2Label(item2,index,$event)">{{item2.label}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    selections: {
      type: Array,
      default: [{
        label: 'test',
        value: 0
      }]
    },
    selectionss: {
      type: Object,
      defalt: [
        {
          label: 'test',
          value: 0
        }
      ]
    },
  },
  data () {
    return {
      isDrop: false,
      isDrop2: false,
      nowIndex: 0,
      nowIndex2:  0,    
      active: false,
      list2Text: '',
    }
  },
  methods: {
    toggleDrop () {
      this.isDrop = !this.isDrop
      this.active = false,
      this.list2Text = ''
    },
    chooseSelection (index) {
      this.nowIndex = index
      this.isDrop = false
      this.$emit('onChange', this.selections[this.nowIndex])
    },
    showDrop2(index) {
      this.nowIndex2 = index
      this.active= true
    },
    notShowDrop2(){
      this.active = false
    },
    list2Label(item,index,e) {
      this.list2Text = item.label;
      e.stopPropagation()
      this.isDrop = false;
      this.active = false;
      this.nowIndex = index;
      this.$emit('onChange',item)
    }
  }
}
</script>

<style scoped>
.selection-component {
  position: relative;
  display: inline-block;
}
.selection-show {
  border: 1px solid #e3e3e3;
  padding: 0 20px 0 10px; 
  width:  100px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 25px;
  line-height: 25px;
  border-radius: 3px;
  background: #fff;
  position: relative;
}
.select-text {
  position: absolute;
  width:  300px;
  z-index:  8;
}
.select-text span {
   position:  absolute;
   display: block;
   /* overflow: scroll; */
   z-index: 7;
}
.selection-show .arrow {
  display: inline-block;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #e3e3e3;
  width: 0;
  height: 0;
  margin-top: -1px;
  margin-left: 6px;
  margin-right: -14px;
  float:  right;
  position: relative;
  top:  50%;
  z-index:  10;
}
.selection-list {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 25px;
  width: 100%;
  background: #fff;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  z-index: 16;
}
.selection-list ul li {
  padding: 5px 15px 5px 10px;
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  cursor: pointer;
  background: #fff;
  white-space: nowrap;
  /* overflow: hidden; */
  text-overflow: ellipsis;
  position:  relative;
}
.selection-list > ul > li:hover {
  background: #e3e3e3;
}

.selection-list > ul > li:hover .selection-list2{
  background: #fff;
}

.selection-list2 {
  background: #fff;
  width:  100%;
  position:  absolute;
  top:  0;
  right:  0;
  z-index:  99999;
  transform:  translateX(100%);
  border:  1px solid #e3e3e3;
}

.selection-list2 li{
  color:  gray;
}
.selection-list2 li:hover{
  background: #e3e3e3;
}
</style>
