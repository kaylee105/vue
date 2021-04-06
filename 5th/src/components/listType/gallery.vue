<template>
    <div id="gallery">
        <ul>
            <li v-for="(item, key) in boardData" :key="key">
                <figure :style="{backgroundImage: `url(${item.image})`}"></figure>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "gallery",
        props: ['boardData']
    }
</script>

<style lang="scss" scoped>
    #gallery {
        ul {
            display:flex;
            flex-wrap: wrap;
            align-items: flex-end;
            li {
                position:relative;
                width:33.3%;
                figure {
                    width:100%;height:300px;
                    background-size:cover;
                    background-position: center;
                }
            }
        }
    }
</style>