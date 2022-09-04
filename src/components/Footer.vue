<template>
    <footer>
        <p>Adria Taxi Pula {{ title }}</p>
        <small class="text-muted">2022 Adria Taxi Pula. All rights reserved</small>
    </footer>
</template>
<script>
export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data(){
        return{
        }
    }
}
</script>
<style scoped>
footer{
    background: #222;
    padding: 6px;
}
p{
        font-size: 12px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color: rgba(255, 255, 255, 0.804);
        text-align: center;
}
</style>