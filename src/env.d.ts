/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly XC_AUTH: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }