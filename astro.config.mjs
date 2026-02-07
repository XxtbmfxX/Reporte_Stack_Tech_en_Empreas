// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  env: {
    schema: {
      // URL base del Vercel Blob Storage (pública, accesible en cliente y servidor)
      BLOB_BASE_URL: envField.string({
        context: "client",
        access: "public",
        default: "https://kw9lfumcncnepibk.public.blob.vercel-storage.com"
      }),
      // Token de lectura/escritura (secreto, solo servidor)
      BLOB_READ_WRITE_TOKEN: envField.string({
        context: "server",
        access: "secret",
        optional: true
      })
    }
  }
});