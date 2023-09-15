<!--<template>
  <div class="home">
    <p v-show="isShowBack">首页</p>
     <p v-show="$store.state.isShowBack">首页</p>
    <button @click="show">展示隐藏</button>
    <button @click="toPage">跳转路由</button>
  </div>
</template>-->
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
    <HelloWorld msg="Hello Electron 10.0 + Vue 3.0 + Vite" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { computed, reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const state = reactive(store.state);
    const show = () => {
      console.log("store", store.state);
      store.commit("toggleShow");
    };
    const toPage = () => {
      console.log("route", route);
      router.push({
        name: "List",
        params: {
          type: "movie",
        },
      });
    };
    return {
      ...toRefs(state),
      show,
      toPage,
    };
  },
};
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
