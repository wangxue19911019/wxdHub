<template>
<div id="home">
  scdss
</div>
</template>

<script>
  import { login,forgetpassword} from '@/api/getdata.js'
    export default {
      data() {
        return {

        }
      },
      mounted() {
        forgetpassword().then(res=>{
          console.log(res)
        })
      }
    }
</script>

<style scoped>

</style>
