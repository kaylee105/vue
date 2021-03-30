<template>
    <div id="app">
        <Header></Header>
        <section class="content">
            <div class="form-group">
                <input-field v-model="id" label="아이디" id="id"
                             placeholder="아이디를 입력하세요."/>
                <input-field v-model="password" type="password" label="비밀번호" id="pw"
                             placeholder="비밀번호를 입력하세요."/>
                <input-field v-model="email" type="email" label="이메일" id="email"
                             placeholder="이메일을 입력하세요."/>

                <textarea-field v-model="textarea" label="내용" id="textarea" placeholder="내용을 입력해주세요."/>

                <div class="form-item">
                    <p class="title">라디오</p>
                    <div class="chk-wrap">
                        <radio-field v-model="radio" id="radio" name="radio" val="아이디 저장"
                                     label="아이디 저장"></radio-field>
                        <radio-field v-model="radio" id="radio2" name="radio" val="자동로그인 저장"
                                     label="자동로그인 저장"></radio-field>
                    </div>
                </div>

                <div class="form-item">
                    <p class="title">체크박스</p>
                    <div class="chk-wrap">
                        <check-field v-model="check" id="checkbox" name="checkbox" label="선택1"></check-field>
                    </div>
                </div>
            </div>

            <div class="result">
                <h3>결과</h3>
                <p>아이디 : {{id}}</p>
                <p>비밀번호 : {{password}}</p>
                <p>이메일 : {{email}}</p>
                <p>텍스트 : {{textarea}}</p>
                <p>라디오 : {{radio}}</p>
                <p>체크박스 : {{check}}</p>
            </div>
        </section>
    </div>
</template>

<script>
    import Header from "@/components/layout/Header";
    import inputField from "@/components/form/inputField";
    import textareaField from "@/components/form/textareaField";
    import checkField from "@/components/form/checkField";
    import radioField from "@/components/form/radioField";

    export default {
        name: "Guide",
        components: {
            Header,
            'input-field': inputField,
            'textarea-field': textareaField,
            'check-field': checkField,
            'radio-field': radioField,
        },
        data() {
            return {
                id: '',
                password: '',
                email: '',
                textarea: '',
                radio: '',
                check: '',
            }
        }
    }
</script>

<style lang="scss" scoped>
    .result {
        margin-top:100px;
        h3 {
            font-size:30px;
            margin-bottom:20px;
        }
    }
</style>