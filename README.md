# Trueque frontend v2: implementando React

Esta es la versión 2 del frontend de la plataforma de trueque estudiantil, pero mejorada con React
y una estructura de carpetas más organizada.

## 🗂️ Estructura de carpetas del proyecto

A continuación se describen las carpetas principales del proyecto y su función:

### 📁 `assets/`
Contiene recursos estáticos como imágenes, íconos, fuentes y otros archivos multimedia.

### 📁 `components/`
Incluye todos los componentes reutilizables de la interfaz (UI), como botones, modales, tarjetas, inputs personalizados, etc.

### 📁 `layouts/`
Agrupa estructuras grandes reutilizables de página como `AdminLayout`, que contienen elementos comunes como `Header`, `Footer` o `Sidebar` y renderizan diferentes vistas mediante `children`.

### 📁 `pages/`
Aquí se ubican las vistas principales del proyecto. Cada archivo representa una página del sitio (por ejemplo, `InicioAdmin.jsx`, `Login.jsx`, etc.).

### 📁 `router/`
Contiene la configuración del enrutamiento del proyecto usando React Router. Aquí defines qué componente se renderiza según la ruta.

### 📁 `service/`
Incluye archivos responsables de comunicarse con APIs, manejar peticiones HTTP y lógica relacionada con servicios externos o internos.

### 📁 `styles/`
Contiene los archivos CSS organizados por pantallas, secciones o componentes. Ayuda a mantener el estilo desacoplado del JSX.

### 📁 `utils/`
Incluye funciones auxiliares, helpers o constantes que pueden ser usadas en múltiples partes de la aplicación.

---

✅ Este enfoque modular y organizado facilita el mantenimiento, escalabilidad y reutilización del código en proyectos React de tamaño mediano o grande.
