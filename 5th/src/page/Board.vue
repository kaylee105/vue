<template>
    <div id="app">
        <Header></Header>
        <section class="content">
            <div class="filter-box">
                <ul>
                    <li>
                        <a href="#" @click="listType('list')"><i class="ico-list"></i>리스트</a>
                    </li>
                    <li>
                        <a href="#" @click="listType('gallery')"><i class="ico-gallery"></i>갤러리</a>

                    </li>
                    <li>
                        <a href="#" @click="listType('webzine')"><i class="ico-webzine"></i>웹진</a>
                    </li>
                </ul>
            </div>

            <div class="board-wrap">
                <transition>
                    <component :is="type" :boardData="boardData"/>
                </transition>
            </div>
        </section>
    </div>
</template>

<script>
    import Header from "@/components/layout/Header";

    import list from "@/components/listType/list";
    import gallery from "@/components/listType/gallery";
    import webzine from "@/components/listType/webzine";

    export default {
        name: 'Board',
        components: {
            Header,
            list,
            gallery,
            webzine,
        },
        data() {
            return {
                type: 'list',
                boardData: [
                    {
                        num: 1,
                        title: '제목111',
                        desc: '내용 내용 내용 내용 내용 내용 내용',
                        image: require('@/assets/images/01.jpg'),
                        hit: 10,
                        author: 'Kaylee',
                        date: '2021/04/05',
                    },
                    {
                        num: 2,
                        title: '제목222',
                        desc: '내용~~~~~~~~',
                        image: require('@/assets/images/02.jpg'),
                        hit: 20,
                        author: 'Joy',
                        date: '2021/04/03',
                    },
                    {
                        num: 3,
                        title: '제목333',
                        desc: '내용입니다',
                        image: require('@/assets/images/03.jpg'),
                        hit: 30,
                        author: 'ella',
                        date: '2021/04/01',
                    },
                    {
                        num: 4,
                        title: '제목444',
                        desc: '내용내용내용내용',
                        image: require('@/assets/images/05.jpg'),
                        hit: 40,
                        author: 'sally',
                        date: '2021/04/02',
                    },
                    {
                        num: 5,
                        title: '제목555',
                        desc: '내용내용',
                        image: require('@/assets/images/04.jpg'),
                        hit: 5,
                        author: 'jewdri',
                        date: '2021/03/02',
                    }
                ]
            }
        },
        methods: {
            listType(type) {
                this.type = type
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        max-width:1440px;
        margin:0 auto;
    }
    .filter-box {
        ul {
            li {
                display: inline-flex;

                a {
                    display: inline-flex;
                    align-items: center;
                }

                & + li {
                    margin-left: 20px;
                }

                [class^='ico-'] {
                    margin-right: 5px;
                }
            }
        }
    }
    .board-wrap {
        padding-top:50px;
    }
</style>
