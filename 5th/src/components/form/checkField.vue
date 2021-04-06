<template>
    <div class="chk-box">
        <input type="checkbox"
               :id="id"
               :value="value"
               :name="name"
               @input="$emit('input',$event.target.checked)"
        >
        <label :for="id">{{ label }}</label>
    </div>
</template>


<script>
    export default ({
        name: 'checkField',
        props: ['id', 'value', 'name', 'label'],
        data() {
            return {};
        },
        methods: {}
    })
</script>
