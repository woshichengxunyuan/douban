<template>
    <div>
        text
    </div>
</template>


<script>
export default {
    created() {
        this.axios({
            url:"/link/data",
            method:"get"
        }).then((ok)=>{
            console.log(ok)
        })
    },
}
</script>


<style scoped>

</style>
