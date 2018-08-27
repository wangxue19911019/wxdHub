<template>
  <div id="left-menu">
    <el-menu router default-active="1-1" class="el-menu-vertical-demo el-menu-dark" :collapse="isCollapse" :unique-opened="true">
      <template v-for="(item,index) in menuList">

        <el-menu-item v-if="!item.noDropdown" :index="item.path">
          <i :class="item.icon"></i>
          <span slot="title" v-text="item.name"></span>
        </el-menu-item>

        <el-submenu v-if="item.noDropdown" :index="item.id">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title" v-text="item.name"></span>
          </template>
          <template v-for="(c,index) in item.children">
            <el-menu-item :index="c.path" v-text="c.name"></el-menu-item>
          </template>
        </el-submenu>

      </template>
    </el-menu>
  </div>
</template>

<script>
    export default {
      props: ["isCollapse"],
      data() {
        return {
          menuList:[
            {
              id: "1",
              name: "导航一",
              icon: "el-icon-message",
              noDropdown: true,
              children: [{
                name: "选项一",
                path: "/home"
              },{
                name: "选项二",
                path: "/mypage1"
              }]
            },{
              id: "2",
              name: "导航二",
              icon: "el-icon-menu",
              noDropdown: true,
              children: [{
                name: "es6map",
                path: "/mypage1"
              },{
                name: "draggable",
                path: "/mypage2"
              }]
            },
            {
              id: "3",
              name: "导航三",
              icon: "el-icon-message",
              noDropdown: true,
              children: [{
                name: "选项一",
                path: "31"
              },{
                name: "选项二",
                path: "33"
              }]
            },
            {
              id: "4",
              name: "导航四",
              icon: "el-icon-setting",
              noDropdown: false,
              path: "41"
            }
          ]
        }
      },
      methods: {

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
