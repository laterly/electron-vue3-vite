import { ref } from "vue";
import { defineStore } from "pinia";
import { Names } from "../../types";

export const useUserStore = defineStore(Names.User, () => {
  const userName = ref<string>("");
  const setUserName = (data: string) => {
    userName.value = data;
  };

  return { userName, setUserName };
});
