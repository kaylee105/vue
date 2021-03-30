<template>
    <div id="app">
        <Header></Header>
        <section class="content">
            {{content}}
        </section>
    </div>
</template>

<script>
    import Header from "@/components/layout/Header";

    export default {
        name: 'Contact',
        components: {
            Header,
        },
        data() {
            return {
                content: 'Contact'
            }
        },
        methods: {}
    }
</script>
