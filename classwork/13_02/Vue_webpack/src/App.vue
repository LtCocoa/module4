<template>
    <div>
        <p>{{ greeting }} World!</p>
        <img src="./assets/1.jpg">
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                greeting: 'Hello'
            }
        }
    }
</script>

<style scoped>
    p {
        font-size: 2em;
        text-align: center;
    }
    img {
        width: 500px
    }
</style>