<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts" setup>
import { ref } from "vue";

defineProps<{ msg: string }>()

const count = ref<number>(0);
</script>
