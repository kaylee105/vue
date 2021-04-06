<template>
    <div id="webzine">
        <ul>
            <li v-for="(item, key) in boardData" :key="key">
                <figure>
                    <img :src="item.image" alt="">
                </figure>
                <figcaption>
                    <p class="title">{{item.title}}</p>
                    <p class="desc">{{item.desc}}</p>
                    <p class="date">{{item.date}}</p>
                    <p class="hit">조회수 : {{item.hit}}</p>
                </figcaption>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "webzine",
        props: ['boardData']
    }
</script>

<style lang="scss" scoped>
    #webzine {
        ul {
            border-bottom: 1px solid #000;
            li {
                display: flex;
                align-items: center;
                border-top: 1px solid #000;
                figure {
                    width: 20%;
                    img {
                        max-width: 100%;
                    }
                }
                figcaption {
                    width:70%;
                    padding-left:20px;
                    text-align: left;
                }
                p {
                    margin-bottom:10px;
                }
                .title {
                    font-size:18px;
                }
            }
        }
    }
</style>