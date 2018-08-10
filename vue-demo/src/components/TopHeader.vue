<template>
  <div id="top-header">
    <span class="logo">VUE-DEMO</span>
    <i @click="switchShow" class="icon el-icon-menu"></i>
    <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>-->
  </div>
</template>

<script>
    export default {
      data() {
        return {
          isCollapse: true
        };
      },
      methods: {
        switchShow(){
          this.isCollapse = !this.isCollapse
        }
      },
      watch: {
        isCollapse(val){
          this.$emit("emitCollapse",val)
        }
      }
    }
</script>

<style lang="less" scoped>
#top-header {
  width: 100%;
  height: 60px;
  background: #409eff;
  .logo {
     font-size: 25px;
     line-height: 60px;
     margin-left: 20px;
  }
  .icon {
    font-size: 20px;
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>
