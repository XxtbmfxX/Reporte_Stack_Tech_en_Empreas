# DeepResearch 🔬

**Centro de Investigaciones Tecnológicas para PYMES**

Una aplicación web para compartir investigaciones detalladas sobre adopción de tecnología, herramientas y tendencias en empresas medianas. Diseñada para GitHub Pages.

---

## 📋 Estructura del Proyecto

```
DeepResearch/
├── index.html                          # Dashboard principal (hub de investigaciones)
├── README.md                           # Este archivo
├── .gitignore                          # Configuración de git
│
├── investigaciones/                    # Carpeta de investigaciones
│   ├── tech-stack-pymes.html          # Investigación 1: Tech Stack en PYMES Chile
│   └── herramientas-rrhh.html         # Investigación 2: Análisis Herramientas RRHH
│
└── assets/                             # Recursos compartidos (futura expansión)
    ├── css/                           # Estilos compartidos
    ├── js/                            # Scripts compartidos
    └── images/                        # Imágenes, logos, iconos
```

---

## 🚀 Características

✅ **Dashboard Central**: Página principal con catálogo de investigaciones  
✅ **Navegación Limpia**: Links entre el hub y cada investigación  
✅ **GitHub Pages Ready**: Configurado para deploy automático  
✅ **Escalable**: Estructura lista para agregar más investigaciones  
✅ **Responsive**: Diseño mobile-first con Tailwind CSS  
✅ **Sin Dependencias**: HTML, CSS (Tailwind CDN), JavaScript puro  

---

## 📚 Investigaciones Disponibles

### 1. **Tech Stack PYMES Chile** 
- **Ubicación**: `/investigaciones/tech-stack-pymes.html`
- **Contenido**: Panorama de adopción tecnológica, modelos de despliegue (SaaS vs On-Premise), cadena de valor, compliance, IA/LLM
- **Fecha**: Febrero 2025
- **Público**: Empresas 50+ empleados

### 2. **Herramientas RRHH: Buk, Talana & Webdox**
- **Ubicación**: `/investigaciones/herramientas-rrhh.html`
- **Contenido**: Análisis comparativo de plataformas RRHH, funcionalidades, compliance laboral, integración IA
- **Fecha**: Febrero 2025
- **Público**: Empresas 50-200 empleados

---

## 🔧 Cómo Agregar una Nueva Investigación

1. **Crear el archivo HTML** en `investigaciones/mi-investigacion.html`
2. **Actualizar `index.html`**: Agregar nueva tarjeta en la sección "Catálogo de Investigaciones"
3. **Commit y Push**:
   ```bash
   git add .
   git commit -m "feat: nueva investigación - [nombre]"
   git push origin main
   ```
4. **Deploy**: GitHub Pages se actualizará automáticamente en segundos

---

## 🌐 Deployment (GitHub Pages)

Esta aplicación está configurada para GitHub Pages. Basta con:

1. Asegurarse de que el repositorio está público
2. Ir a **Settings > Pages** en GitHub
3. Seleccionar **Deploy from a branch** > **main**
4. La app estará disponible en: `https://usuario.github.io/Reporte_Stack_Tech_en_Empreas/`

---

## 📖 Tecnologías Usadas

- **HTML5**: Estructura semántica
- **Tailwind CSS**: Framework de estilos (CDN)
- **Chart.js**: Visualizaciones de datos (CDN)
- **Font Awesome 6**: Iconografía (CDN)
- **Google Fonts**: Inter (CDN)
- **JavaScript Vanilla**: Interactividad sin dependencias

---

## 📝 Notas de Desarrollo

### Para locales
Simplemente abre `index.html` en tu navegador. No requiere servidor.

### Para agregar estilos globales
- Crea archivos en `assets/css/`
- Importa en el `<head>` de tus investigaciones

### Para agregar scripts compartidos
- Crea archivos en `assets/js/`
- Importa en el `<body>` de tus investigaciones

---

## 📧 Contacto

Creado para compartir investigaciones con tu equipo. Para preguntas o mejoras, contacta al equipo DeepResearch.

---

## 📄 Licencia

Uso interno. Todos los derechos reservados 2025.
