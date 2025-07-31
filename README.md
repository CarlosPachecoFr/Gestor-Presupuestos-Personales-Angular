# Gestor-Presupuestos-Personales-Angular

## Descripción

**Gestor de Presupuestos Personales** es una aplicación web desarrollada con **Angular** que permite a los usuarios gestionar sus finanzas personales de manera eficiente. Con esta herramienta, puedes añadir ingresos y gastos, establecer metas financieras (por ejemplo, ahorrar para comprar un coche) y visualizar reportes para tener un mejor control de tus finanzas. El frontend está dockerizado y depende de un backend basado en microservicios, disponible en el repositorio [Gestor-Presupuestos-Personales-Microservicios](https://github.com/CarlosPachecoFr/Gestor-Presupuestos-Personales-Microservicios).

Los datos (ingresos, gastos y presupuestos) se almacenan en una base de datos gestionada por el backend. El frontend utiliza **LocalStorage** para almacenar el token de autenticación. El proyecto está diseñado para ser intuitivo, responsive y fácil de usar, con un enfoque en la experiencia del usuario y la funcionalidad práctica para la gestión financiera diaria. **El proyecto está finalizado**, pero abierto a mejoras y contribuciones futuras.

## Características principales

- 📊 **Registro de transacciones**: Añade ingresos y gastos en las categorías correspondientes.
- 💰 **Metas financieras**: Permite crear y gestionar metas de ahorro, como ahorrar una cantidad específica para un objetivo (por ejemplo, comprar un coche).
- 📈 **Reportes visuales**: Visualiza tus finanzas con gráficos claros y detallados.
- 📱 **Diseño responsive**: Compatible con dispositivos móviles y de escritorio gracias a **Tailwind CSS**.
- 🔒 **Almacenamiento seguro**: Los datos se guardan en una base de datos a través del backend; el token de autenticación se almacena en LocalStorage.
- 🐳 **Dockerizado**: El frontend está configurado para ejecutarse en un contenedor Docker (método recomendado).

## Tecnologías utilizadas

- **Angular**: Framework principal para el desarrollo del frontend.
- **Angular CLI**: Herramienta para generar, construir y servir el proyecto Angular (usada en desarrollo local sin Docker).
- **TypeScript**: Para un código más robusto y mantenible.
- **HTML5/Tailwind CSS**: Para la estructura y estilos responsivos de la interfaz.
- **ApexCharts.js**: Para la visualización de datos financieros.
- **LocalStorage**: Para almacenar el token de autenticación.
- **Docker**: Para la contenedorización del frontend.
- **Backend de Microservicios**: Implementado en el repositorio [Gestor-Presupuestos-Personales-Microservicios](https://github.com/CarlosPachecoFr/Gestor-Presupuestos-Personales-Microservicios).

## Requisitos previos

- **Node.js** (versión 16 o superior): Necesario para instalar dependencias y ejecutar el entorno de desarrollo local sin Docker.
- **Angular CLI** (solo para ejecución sin Docker): Necesario para ejecutar comandos como `ng serve` o `ng build`. Instálalo globalmente con:
  ```bash
  npm install -g @angular/cli
  ```
- **Docker** y **Docker Compose**: Requerido para la ejecución del frontend en un contenedor (método recomendado).
- **Git**: Para clonar el repositorio.
- Acceso al backend de microservicios (ver [repositorio del backend](https://github.com/CarlosPachecoFr/Gestor-Presupuestos-Personales-Microservicios)).

## Instalación

Se recomienda usar **Docker** para ejecutar el proyecto, ya que simplifica la configuración y asegura un entorno consistente. A continuación, se detallan las dos opciones disponibles:

### Opción 1: Ejecución con Docker (Recomendada)

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/CarlosPachecoFr/Gestor-Presupuestos-Personales-Angular.git
   ```

2. **Accede al directorio del proyecto**:
   ```bash
   cd Gestor-Presupuestos-Personales-Angular
   ```

3. **Construye la imagen de Docker**:
   ```bash
   docker build -t gestor-presupuestos-angular .
   ```

4. **Despliega el contenedor**:
   ```bash
   docker run -p 4200:4000 gestor-presupuestos-angular
   ```

5. Abre tu navegador en `http://localhost:4200` para ver la aplicación.

**Nota**: Asegúrate de que el backend de microservicios esté configurado y en ejecución. Consulta las instrucciones en el [repositorio del backend](https://github.com/CarlosPachecoFr/Gestor-Presupuestos-Personales-Microservicios). Verifica que la URL de la API en `src/environments/environment.ts` o `src/environments/environment.prod.ts` coincida con la de tu backend.

### Opción 2: Ejecución sin Docker

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/CarlosPachecoFr/Gestor-Presupuestos-Personales-Angular.git
   ```

2. **Accede al directorio del proyecto**:
   ```bash
   cd Gestor-Presupuestos-Personales-Angular
   ```

3. **Instala las dependencias** (requiere Node.js y Angular CLI):
   ```bash
   npm install
   ```

4. **Inicia el servidor de desarrollo** (requiere Angular CLI):
   ```bash
   ng serve
   ```

5. Abre tu navegador en `http://localhost:4200` para ver la aplicación.

**Nota**: El backend de microservicios debe estar en ejecución para que el frontend funcione correctamente. Verifica que la URL de la API en `src/environments/environment.ts` o `src/environments/environment.prod.ts` coincida con la de tu backend.

## Configuración del backend

El frontend depende de un backend basado en microservicios que almacena los datos en una base de datos. Para configurarlo:

1. Clona el repositorio del backend:
   ```bash
   git clone https://github.com/CarlosPachecoFr/Gestor-Presupuestos-Personales-Microservicios.git
   ```

2. Sigue las instrucciones de instalación en el [README del backend](https://github.com/CarlosPachecoFr/Gestor-Presupuestos-Personales-Microservicios).

3. Asegúrate de que la URL de la API en `src/environments/environment.ts` o `src/environments/environment.prod.ts` esté correctamente configurada para conectar con el backend.

## Uso

1. **Registra tus transacciones**: Añade ingresos y gastos en las categorías correspondientes.
2. **Crea presupuestos**: Define límites de gasto por categoría o período.
3. **Consulta reportes**: Revisa los gráficos para analizar tus patrones de gasto.
4. **Personaliza**: Ajusta las categorías y configuraciones según tus necesidades.

## Contribuir

¡Las contribuciones son bienvenidas! Si deseas proponer mejoras o nuevas funcionalidades, sigue estos pasos:

1. Haz un **fork** del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz **commit** (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube los cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Abre un **Pull Request** en este repositorio.

Por favor, asegúrate de seguir las [guías de contribución](CONTRIBUTING.md) (en desarrollo) y mantener un código limpio y bien documentado.

## Estado del proyecto

Este proyecto está **finalizado**, pero abierto a mejoras futuras, como la posibilidad de editar o eliminar transacciones. Revisa las [issues](https://github.com/CarlosPachecoFr/Gestor-Presupuestos-Personales-Angular/issues) para conocer las propuestas de mejora o errores reportados.

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE). Consulta el archivo `LICENSE` para más detalles.

## Contacto

Si tienes preguntas, sugerencias o quieres colaborar, puedes contactarme a través de:

- **GitHub**: [CarlosPachecoFr](https://github.com/CarlosPachecoFr)
- **Correo**: carlospachecofrutos@gmail.com

¡Gracias por tu interés en **Gestor de Presupuestos Personales**! 🚀
