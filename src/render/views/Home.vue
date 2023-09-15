<template>
  <div class="home-page">
    <div class="logo-box">
      <img
        style="height: 200px"
        src="@/assets/icons/electron.png"
        alt="Electron logo"
      />
      <img alt="Vue logo" src="@/assets/logo.png" />
    </div>
    <HelloWorld msg="Hello Electron + Vue 3.0 + Vite" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";

</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #2f3241;
}
.logo-box {
  width: 100%;
  display: flex;
  width: 100%;
  justify-content: center;
}
.home-page {
  width: 100%;
  height: 100%;
  background-color: #2f3241;
}
</style>
