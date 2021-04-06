<template>
    <div class="form-item">
        <label :for="id">{{ label }}</label>
        <input
                :type="type"
                :id="id"
                :placeholder="placeholder"
                :value="value"
                @input="$emit('input',$event.target.value)">
    </div>
</template>


<script>
    export default ({
        name: 'inputField',
        props: {
            label: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: false,
                default: 'text'
            },
            value: {
                type: String,
                required: false
            },
            id: {
                type: String,
                required: true
            },
            placeholder: {
                type: String,
                required: false
            }
        },
        methods: {}
    })
</script>