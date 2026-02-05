# 🚀 Guía Rápida: Agregar Nueva Investigación

## Pasos para Agregar una Investigación

### 1️⃣ Crear el archivo HTML

```bash
# Copia la plantilla
cp investigaciones/PLANTILLA.html investigaciones/mi-nueva-investigacion.html
```

### 2️⃣ Personalizar el contenido

Abre `investigaciones/mi-nueva-investigacion.html` y edita:
- `<title>` - Título de la página
- Secciones de contenido
- Metadata (fecha, público objetivo)

### 3️⃣ Actualizar el Dashboard

En `index.html`, localiza la sección `<!-- Investigation Cards -->` y agrega:

```html
<!-- Card 3: Mi Nueva Investigación -->
<div class="investigation-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:border-primary">
    <div class="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
        <i class="fa-solid fa-[ICONO] text-white text-5xl opacity-80"></i>
    </div>
    <div class="p-6">
        <div class="flex items-center gap-2 mb-3">
            <h3 class="text-xl font-bold text-gray-900">Título de la Investigación</h3>
            <span class="badge badge-purple">V1.0</span>
        </div>
        <p class="text-gray-600 text-sm mb-4">
            Descripción breve de la investigación.
        </p>
        <div class="flex flex-wrap gap-2 mb-6">
            <span class="badge badge-purple">TAG1</span>
            <span class="badge badge-purple">TAG2</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-xs text-gray-500">📅 Febrero 2025</span>
            <a href="investigaciones/mi-nueva-investigacion.html" class="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium text-sm">
                Leer <i class="fa-solid fa-arrow-right"></i>
            </a>
        </div>
    </div>
</div>
```

**Iconos disponibles:** [Font Awesome Icons](https://fontawesome.com/icons)

**Colores para badges:**
- `.badge-blue` - Azul (para Tech Stack)
- `.badge-orange` - Naranja (para RRHH)
- `.badge-purple` - Púrpura (para nuevas)

### 4️⃣ Hacer Commit

```bash
git add .
git commit -m "feat: agregar investigación - Título"
git push origin main
```

### 5️⃣ Verificar Deploy

GitHub Pages se actualizará automáticamente. Tu investigación estará en:
```
https://{usuario}.github.io/Reporte_Stack_Tech_en_Empreas/investigaciones/mi-nueva-investigacion.html
```

---

## 📁 Estructura de Carpetas

```
investigaciones/
├── PLANTILLA.html              ← Copia esto para nuevas investigaciones
├── tech-stack-pymes.html       ← Investigación 1
├── herramientas-rrhh.html      ← Investigación 2
└── mi-nueva-investigacion.html ← Tu nueva investigación
```

---

## 🎨 Recursos Disponibles

### CSS (Tailwind)
Todos los estilos de Tailwind v3 están disponibles via CDN:
```html
<div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    Contenido
</div>
```

### Iconos (Font Awesome)
```html
<i class="fa-solid fa-[nombre]"></i>
```

### Gráficos (Chart.js)
Si necesitas gráficos, Chart.js está disponible. Consulta el código de las investigaciones existentes.

---

## ✅ Checklist antes de Publicar

- [ ] Contenido revisado y sin errores ortográficos
- [ ] Links internos funcionan (rutas relativas)
- [ ] Título y metadatos actualizados
- [ ] Tarjeta agregada en index.html
- [ ] Commit message descriptivo
- [ ] Verificar que aparece en el hub después de hacer push

---

## 📞 Preguntas Frecuentes

**P: ¿Por qué mis links no funcionan en GitHub Pages?**  
R: Asegúrate de usar rutas relativas: `../../index.html` (desde investigación) o `investigaciones/archivo.html` (desde dashboard)

**P: ¿Puedo agregar CSS personalizado?**  
R: Sí, crea `assets/css/custom.css` e importa en tu investigación:
```html
<link rel="stylesheet" href="../../assets/css/custom.css">
```

**P: ¿Qué pasa si tengo muchas investigaciones?**  
R: El dashboard sigue siendo escalable. Si tienes 10+, considera crear categorías o un sistema de filtrado.

---

**Última actualización**: Febrero 2025
