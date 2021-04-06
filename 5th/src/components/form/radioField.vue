<template>
    <div class="radio-box">
        <input type="radio"
               :id="id"
               :value="val"
               :name="name"
               :checked="checked"
               @input="$emit('input',$event.target.value)"
        >
        <label :for="id">{{ label }}</label>
    </div>
</template>


<script>
    export default ({
        name: 'radioField',
        props: ['id', 'val', 'label', 'name', 'checked'],
        data() {
            return {};
        },
        methods: {}
    })
</script>