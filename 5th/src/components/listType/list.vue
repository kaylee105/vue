<template>
    <div id="list">
        <table>
            <colgroup>
                <col>
                <col>
                <col>
                <col>
                <col>
            </colgroup>
            <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>날짜</th>
                <th>조회수</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, key) in boardData" :key="key">
                <td>{{item.num}}</td>
                <td>{{item.title}}</td>
                <td>{{item.author}}</td>
                <td>{{item.date}}</td>
                <td>{{item.hit}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        name: "list",
        props: ['boardData']
    }
</script>