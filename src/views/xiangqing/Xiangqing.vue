<template>
    <div>
      <div slot="center">详情</div>
    </div>
</template>

<script>
  import Navbar from "components/common/navbar/Navbar";
    export default {
        name: "Xqing",
        components:{
            Navbar
        },
        data(){
            return{
                iid:null
            }
        },
        created() {
            console.log(this.$route.query.id)
           this.iid=this.$route.query.id
        }

    }
</script>

<style scoped>

</style>
