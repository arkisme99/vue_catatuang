import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", () => {
  const theme = useLocalStorage(
    "pref-theme",
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  function applyTheme(t: string) {
    document.documentElement.classList.toggle("dark", t === "dark");
  }

  function setTheme(t: string) {
    theme.value = t;
    // localStorage.setItem("pref-theme", t);
    useLocalStorage("pref-theme", t);
  }

  function toggleTheme() {
    setTheme(theme.value === "dark" ? "light" : "dark");
    applyTheme(theme.value);
  }

  return { theme, applyTheme, setTheme, toggleTheme };
});
