<template>
    <div id="app">
        <Header></Header>
        <section class="content">
            <div class="form-item">
                <input-field
                        v-model="sendData.name"
                        :inputLabel="formData[0].inputLabel"
                        :inputId="formData[0].inputId"
                        :inputPlaceholder="formData[0].inputPlaceholder"/>
            </div>
        </section>
    </div>
</template>

<script>
    import Header from "@/components/layout/Header";
    import InputField from "@/components/form/inputField";

    export default {
        name: 'Contact',
        components: {
            Header,
            InputField
        },
        data() {
            return {
                sendData: {
                },
                formData: [{
                    inputLabel: '이름',
                    inputId: 'name',
                    inputPlaceholder: '이름을 입력해주세요',
                    inputValue: 'ㅇㅇㅇ',
                }]
            }
        },
        methods: {
        }
    }
</script>
