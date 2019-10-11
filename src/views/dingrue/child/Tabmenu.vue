<template>
  <div>
    <div v-for="(item,index) in categories" :key="index">{{item.title}}</div>
  </div>
</template>

<script>
    export default {
        name: "Menu",
        props:{
            categories:{
                type:Array
            }
        }
    }
</script>

<style scoped>

</style>
