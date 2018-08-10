<template>
  <div id="bread-crumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
  #bread-crumb{
    width: 100%;
    height: 45px;
    background: #fff;
  }
  .el-breadcrumb {
    line-height: 3;
    padding-left: 10px;
    box-sizing: border-box;
  }
</style>
