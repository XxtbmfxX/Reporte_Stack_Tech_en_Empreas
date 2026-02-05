# Configuración de DeepResearch para GitHub Pages

## Setup de GitHub Pages

Tu proyecto está automáticamente configurado para GitHub Pages. No se requiere configuración adicional.

### URLs de acceso

- **Landing Page**: `/index.html` (Dashboard principal)
- **Investigación 1**: `/investigaciones/tech-stack-pymes.html`
- **Investigación 2**: `/investigaciones/herramientas-rrhh.html`

### Pasos para verificar el deployment

1. En GitHub, ve a **Settings > Pages**
2. Confirma que **Source** está configurado en: "Deploy from a branch" > **main** > **root**
3. Espera 1-2 minutos para que GitHub Page genere el sitio
4. Tu sitio estará disponible en: `https://{usuario}.github.io/{repo-name}`

### Para desarrollo local

```bash
# Simplemente abre el archivo en tu navegador
open index.html

# O usa un servidor simple (optional)
python3 -m http.server 8000
# Luego accede a http://localhost:8000
```

### Estructura de rutas

Todas las URLs son **relativas a la raíz**, lo cual es perfecto para GitHub Pages:

```html
<!-- Desde index.html (raíz) -->
<a href="investigaciones/tech-stack-pymes.html">Ir a Investigación</a>

<!-- Desde una investigación, volver al hub -->
<a href="../../index.html">Volver al Hub</a>
```

### Si experimentas problemas de rutas en GitHub Pages

Si los enlaces no funcionan en GitHub Pages pero sí localmente, asegúrate de:

1. Que la rama está correctamente configurada en Settings > Pages
2. Que los nombres de archivo coinciden exactamente (sensibles a mayúsculas/minúsculas en Linux)
3. Hacer un hard refresh en el navegador: `Ctrl+Shift+R` (Windows/Linux) o `Cmd+Shift+R` (Mac)

### Para agregar un dominio personalizado (opcional)

1. Ve a **Settings > Pages > Custom Domain**
2. Ingresa tu dominio
3. Configura los DNS records en tu proveedor de dominio
4. GitHub validará el dominio automáticamente

---

**Última actualización**: Febrero 2025
