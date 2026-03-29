lpi-linux

# lpt1-linux

Repositorio de prácticas para la preparación del examen LPI Linux Essentials (010-160).

## Estructura del repositorio

- info-lpt1-exam  
  Material teórico y objetivos oficiales del examen.

- linux-commands  
  Comandos básicos de Linux organizados por categoría (navegación, búsqueda, gestión de archivos).

- gitCommands  
  Comandos relacionados con Git y manejo de ramas.

- exercises  
  Ejercicios prácticos realizados durante el aprendizaje.

## Objetivo

Consolidar los fundamentos de Linux, practicar el uso de la línea de comandos y aplicar control de versiones con Git.

## Git Flow

En Git Flow existen dos ramas principales:

- `main` tiene el código estable y listo para producción. Solo recibe cambios ya integrados y testeados.
- `develop`: es la rama de integración donde se combinan nuevas funcionalidades en desarrollo.

### Flujo básico

1. Se parte de `main`.
2. Se crea `develop` desde `main`.
3. Cada nueva funcionalidad se desarrolla en una rama `feature/*` creada desde `develop`.
4. Una vez terminada, la rama `feature` se mergea en `develop` luego de la revisión y aprobación mediante Pull Request.
5. Cuando el conjunto de cambios está listo para una versión estable, `develop` se mergea en `main`.

### Objetivo del modelo

- `main` se mantiene siempre estable.
- `develop` acumula el trabajo en progreso.
- Las funcionalidades se desarrollan de forma aislada en ramas `feature/*`.
