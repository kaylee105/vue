<template>
    <div class="form-item">
        <label :for="id">{{ label }}</label>
        <textarea
                :id="id"
                :placeholder="placeholder"
                @input="$emit('input',$event.target.value)">
        </textarea>
    </div>
</template>

<script>
    export default {
        name: "textareaField",
        props: {
            label: {
                type: String,
                required: true
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
        methods: {},
    }
</script>