<template>
  <h1>{{ msg }}</h1>
  <button @click="() => appStore.setCount(Number(appStore.count) +1)">count is: {{ appStore.count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts" setup>
import { useAppStore } from "../store";

defineProps<{ msg: string }>();

const appStore = useAppStore();
</script>
