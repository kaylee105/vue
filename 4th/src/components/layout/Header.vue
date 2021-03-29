<template>
    <header>
        <nav>
            <v-link href="/">Home</v-link>
            <v-link href="/About">About</v-link>
            <v-link href="/Contact">Contact</v-link>
        </nav>
    </header>
</template>

<script>
    import VLink from '@/components/VLink'

    export default {
        name: "Header",
        components: {
            VLink
        },
    }
</script>
<style lang="scss" scoped>
    header {
        width: 100%;
        height: 50px;
        background: #000;
        nav {
            width:100%;height:100%;
            display: flex;
            align-items: center;
            justify-content: center;
            a {
                color:#fff;
                text-decoration: none;
                margin:0 30px;
            }
        }
    }
</style>