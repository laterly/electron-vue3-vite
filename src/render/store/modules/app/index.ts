import { ref } from "vue";
import { defineStore } from "pinia";
import { Names } from "../../types";

export const useAppStore = defineStore(Names.App, () => {
  const count = ref<number>(0);
  const setCount = (data: number) => {
    count.value = data;
  };

  return { count, setCount };
});
