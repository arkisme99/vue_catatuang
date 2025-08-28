import { defineStore } from "pinia";
import { ref } from "vue";

export const useFlashStore = defineStore("flash", () => {
  const message = ref(null);
  const type = ref(null);

  async function setFlash(msg, flashType) {
    message.value = msg;
    type.value = flashType;
  }

  async function clearFlash() {
    message.value = null;
    type.value = null;
  }

  return { message, type, setFlash, clearFlash };
});
