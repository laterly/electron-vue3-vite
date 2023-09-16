import { ref } from "vue";
import { defineStore } from "pinia";
import { Names } from "../../types";

export const useAppStore = defineStore(Names.App, () => {
  const count = ref<string>("");
  const setCount = (data: string) => {
    count.value = data;
  };

  return { count, setCount };
});
