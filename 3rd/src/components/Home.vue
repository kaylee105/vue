<template>
    <div id="app">
        <Header></Header>
        <section class="content">
            {{content}}
        </section>
    </div>
</template>

<script>
    import Header from "@/components/Header"

    export default {
        name: 'Home',
        components: {
            Header
        },
        data() {
            return {
                content: 'Home'
            }
        }

    };
</script>
<style lang="scss">
    * {padding: 0;margin: 0;}
    .content {
        text-align: center;
        padding:100px;
    }
</style>