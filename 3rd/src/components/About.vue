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
        name: 'About',
        components: {
            Header
        },
        data() {
            return {
                content: 'About'
            }
        }

    };
</script>
