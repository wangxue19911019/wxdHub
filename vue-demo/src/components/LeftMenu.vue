<template>
  <div id="left-menu">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo el-menu-dark" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
    export default {
      props: ["isCollapse"],
      data() {
        return {
        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      },
      watch: {
      }
    }
</script>
<style lang="less">
  .el-menu-dark {
    background: #324157;
    border-right: 0;
    &:not(.el-menu--collapse){
      min-width: 200px;
    }
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
