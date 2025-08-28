/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_PATH: string
  // tambahkan variabel lain kalau ada
  // readonly VITE_SOME_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
