# Git Flow

## Concepto
Modelo de ramificación que define cómo se organizan las ramas y el ciclo de vida del desarrollo.

## Ramas principales
- main → código en producción
- develop → integración continua de cambios

## Ramas de soporte
- feature → nuevas funcionalidades
- release → preparación de versiones
- hotfix → correcciones urgentes en producción

## Flujo de trabajo
1. Crear feature desde develop
2. Integrar en develop mediante Pull Request
3. Crear release desde develop
4. Merge a main y tag de versión
5. Hotfix directo desde main si es necesario
