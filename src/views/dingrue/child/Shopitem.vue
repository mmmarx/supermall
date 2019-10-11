<template>
    <div v-for="item in lists">{{item}}</div>
</template>

<script>
    export default {
        name: "Imlist",
        props:{
            lists:{
                type:Array
            }
        }
    }
</script>

<style scoped>

</style>
