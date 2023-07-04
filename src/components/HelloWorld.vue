<script setup>
import { ref } from 'vue';
const name = ref("is a boy")
</script>

<template>
    <div class="bg-pink">hello {{ name }} this is hello world components</div>
    <button class="bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600">
    Button
    </button>
</template>

<style scoped lang="scss">
</style>