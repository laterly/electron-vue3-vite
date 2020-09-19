<template>
  <div class="home">
    <p v-show="isShowBack">首页</p>
     <p v-show="$store.state.isShowBack">首页</p>
    <button @click="show">展示隐藏</button>
    <button @click="toPage">跳转路由</button>
  </div>
</template>

<script>
import { computed,reactive,toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "Home",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const state=reactive(store.state);
    const show = () => {
      console.log('store',store.state);
      store.commit("toggleShow");
    };
    const toPage = () => {
      console.log("route", route);
      router.push({
        name: "List",
        params: {
          type: "movie"
        }
      });
    };
    return {
      ...toRefs(state),
      show,
      toPage
    };
  }
};
</script>
