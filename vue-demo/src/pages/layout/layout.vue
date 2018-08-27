<template>
  <div id="layout">
    <top-header @emitCollapse="emitCollapse"></top-header>
    <div id="content">
      <left-menu :isCollapse="isCollapse"></left-menu>
      <div id="rightContent">
        <bread-crumb></bread-crumb>
        <div id="appContent">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import TopHeader from "../../components/TopHeader"
  import LeftMenu from "../../components/LeftMenu"
  import BreadCrumb from "../../components/BreadCrumb"

  export default {
    data() {
      return {
        isCollapse: false
      }
    },
    created(){

    },
    computed: {
      ...mapState({
      })
    },
    methods: {
      emitCollapse(data){
        this.isCollapse = data
      }
    },
    components: {
      TopHeader,
      LeftMenu,
      BreadCrumb
    }

  }
</script>

<style lang="less" scoped>
#layout {
  height: 100%;
  #content {
    width: 100%;
    height: calc(100% - 60px);
    display: flex;
    flex-flow: row;
    #rightContent {
      height: 100%;
      margin: 15px;
      flex: 1;
      #appContent {
        height: calc(100% - 80px);
        overflow-y: auto;
        background: #fff;
        margin-top: 10px;
        padding: 20px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
