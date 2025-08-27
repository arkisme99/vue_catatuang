import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref(
    localStorage.getItem("pref-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  function applyTheme(t) {
    document.documentElement.classList.toggle("dark", t === "dark");
  }

  function setTheme(t) {
    theme.value = t;
    localStorage.setItem("pref-theme", t);
  }

  function toggleTheme() {
    setTheme(theme.value === "dark" ? "light" : "dark");
    applyTheme(theme.value);
  }

  return { theme, applyTheme, setTheme, toggleTheme };
});
