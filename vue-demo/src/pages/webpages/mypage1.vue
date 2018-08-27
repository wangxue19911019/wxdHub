<template>
  <div class="mypage">
    <el-button size="small" type="primary" @click="testClick1">es6-map测试</el-button>
    <el-button size="small" type="primary" @click="testClick2">js-for测试</el-button>
  </div>
</template>

<script>
    export default {
      data() {
        return{
          data: [1,2,3]
        }
      },
      methods: {
        testClick1(){
          //es6
          //map不能跳出，原因要从map流程中得到，因为map本身更精确来讲是个迭代，而不是循环。
          this.data.map(item => {
            console.log(item);
            return
          })

          //some是遇到ture就退出 但只是跳出自己本身的循环 不是整个方法
          /*this.data.some(item => {
            console.log(item);
            //return
            return true
          })*/

          //之所以无法return,也没有break从map中出来，所以才有了ES6中的for of语句。
          /*for (var item of this.data) {
            console.log(item);
            return
          }*/
          alert("后面的内容")
        },
        testClick2(){
          //js
          for(let i=0;i<this.data.length;i++){
            console.log(this.data[i]);
            return
          }
          alert("后面的内容")
        }
      }
    }
</script>

<style scoped>

</style>
