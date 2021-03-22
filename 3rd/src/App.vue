<template>
    <div id="app">
        <nav class="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/info"> Info</router-link>
        </nav>
        <!--<gnb></gnb>-->
        <section class="content">
            <router-view/>
        </section>
    </div>
</template>

<script>
    export default {
        name: "home",
    }
</script>

<style lang="scss">
    body {
        margin: 0;
        padding: 0;
    }
    .content {
        padding:100px 0;
        text-align: center;
    }
</style>