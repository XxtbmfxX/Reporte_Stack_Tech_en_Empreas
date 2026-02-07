# Guía de Mantenimiento: PDFs y Vercel Blob

## 🎯 Arquitectura actual

Los PDFs están almacenados en **Vercel Blob Storage**, no en el repositorio.

### Estructura de archivos
```
DeepResearch/
├── src/config/pdfs.ts          # Configuración centralizada de URLs
├── src/pages/                  # Páginas que usan los PDFs
├── public/pdfs/               # Archivos locales (NO subidos a GitHub)
├── Investigaciones/           # Archivos originales (NO subidos a GitHub)
└── .gitignore                 # Excluye pdfs/ e Investigaciones/
```

## 📋 Configuración

### Archivo: `src/config/pdfs.ts`
Contiene:
- `BLOB_BASE_URL`: URL pública del Blob (segura para exponer)
- `PDF_FILES`: Diccionario de PDFs con sus nombres
- `getPdfUrl(key)`: Función para obtener URLs

```typescript
import { getPdfUrl } from '../config/pdfs';

const pdfUrl = getPdfUrl('anatomiaDigitalPyme');
// Returns: https://kw9lfumcncnepibk.public.blob.vercel-storage.com/Anatomía_Digital_PYME_2025.pdf
```

## 🔄 Flujo de trabajo

### ¿Dónde están los PDFs?
| Ubicación | Propósito | En GitHub? |
|-----------|----------|-----------|
| `public/pdfs/` | Desarrollo local | ❌ NO (en .gitignore) |
| `Investigaciones/` | Almacenamiento original | ❌ NO (en .gitignore) |
| Vercel Blob | Producción/Distribución | ✅ EN LA NUBE |

### Para actualizar un PDF:

1. **Reemplazar archivo local**
   ```bash
   # Actualizar en public/pdfs/ o Investigaciones/
   cp nuevo-archivo.pdf public/pdfs/Nombre_del_PDF.pdf
   ```

2. **Subir a Vercel Blob**
   - Ve a [Vercel Dashboard](https://vercel.com/dashboard) → Storage → Tu Blob Store
   - Sube el archivo con el mismo nombre
   - O usa el CLI: `npx vercel@latest blob upload public/pdfs/archivo.pdf`

3. **Git (sin cambios)**
   - El archivo local no se subirá a GitHub (está en .gitignore)
   - No necesitas hacer commit

## 🔐 Variables de Entorno

### Archivo: `.env.local`
```env
BLOB_READ_WRITE_TOKEN="vercel_blob_rw_..."
```

⚠️ **Nunca subas este archivo a GitHub** (ya está en .gitignore)

### En `astro.config.mjs`
El token se usa **solo en servidor**, no se expone al cliente.

## ✅ Buenas prácticas

| Práctica | Razón |
|----------|-------|
| No editar PDFs en git | Reduce tamaño del repo |
| Usar nombres exactos | Las URLs dependen de ellos |
| Mantener .gitignore actualizado | Evita commits accidentales |
| Centralizar URLs en config/ | Fácil de mantener y actualizar |
| Usar `getPdfUrl()` en páginas | Cambios centralizados |

## 🐛 Troubleshooting

### PDF no se carga
1. Verifica que el archivo exista en Vercel Blob
2. Confirma el nombre exacto en `PDF_FILES` en [src/config/pdfs.ts](src/config/pdfs.ts)
3. Revisa Network tab en Chrome DevTools

### Archivo en .gitignore pero sigue tracked
```bash
git rm --cached archivo.pdf
git commit -m "Remove tracked file"
```

## 📚 Referencias

- [Vercel Blob Docs](https://vercel.com/docs/vercel-blob)
- [Astro Config Reference](https://docs.astro.build/en/reference/configuration-reference/)
- [.gitignore Best Practices](https://github.com/github/gitignore)

## 📊 Tamaño del repositorio

### Antes (con PDFs)
- ~150+ MB

### Después (solo código)
- ~60KB en `src/config/`

**Ahorro: 99.9%** 🎉
