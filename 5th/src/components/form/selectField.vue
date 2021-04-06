<template>
    <div class="form-item">
        <label :for="id">{{ label }}</label>
        <select :id="id" v-on:input="updateValue($event.target.value)">
            <option v-for="(item, index) in items" :value="index">{{ item }}</option>
        </select>
    </div>
</template>


<script>
    export default ({
        name: 'selectField',
        data() {
            return {};
        },
        props: ['value', 'items', 'id', 'label'],
        methods: {
            updateValue: function (value) {
                this.$emit('input', value);
            }
        }

    })
</script>
