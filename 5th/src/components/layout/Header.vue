<template>
    <header id="header">
        <nav id="nav">
            <ul>
                <li v-for="(item, index) of listItem" :key="index">
                    <router-link :to="item.link">{{ item.name }}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                listItem: [
                    {
                        name: 'Home',
                        link: '/',
                    },
                    {
                        name: 'About',
                        link: '/about',
                    },
                    {
                        name: 'Board',
                        link: '/board',
                    },
                    {
                        name: 'Guide',
                        link: '/guide',
                    },
                ],
            }
        },
    }
</script>