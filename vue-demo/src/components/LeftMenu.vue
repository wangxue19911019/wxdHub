<template>
  <div id="left-menu">
    <el-menu default-active="2" class="el-menu-vertical-demo el-menu-dark" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
    export default {
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>
<style lang="less">
  .el-menu-dark {
    background: #324157;
    border-right: 0;
    .el-submenu__title{
      color: #bfcbd9 !important;
      &:hover{
        background: #48576a;
      }
    }
    .el-menu-item{
      color: #bfcbd9 !important;
    }
    .el-submenu{
      .el-menu {
        background: #1f2d3d;
      }
    }
    .el-menu-item-group__title {
      display: none;
    }
  }
</style>
<style lang="less" scoped>
#left-menu {
  width: 200px;
  height: 100%;
  background: #324157;
  .el-menu-item {
    &:hover{
       background: #48576a;
     }
    &:focus{
      background: #48576a;
    }
    &.is-active{
      background: #409eff;
      color: #fff !important;
    }
  }
  .el-menu-item:hover {
    background: #48576a;
  }
}
</style>
