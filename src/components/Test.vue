<template>
<!--    <button @click="add">You clicked me {{ count }} times.</button>-->
    <h3>{{ title }}</h3>
</template>

<script>
    export default {
        name: "Test",
        data(){
            return{
                count:0

            }
        },
        methods:{
            add(){
                return this.count++
            }
        },
        props: ['title']

    }
</script>

<style scoped>

</style>