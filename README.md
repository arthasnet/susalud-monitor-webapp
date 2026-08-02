# Susalud Digital - Arquitectura y Guía de Desarrollo

Repositorio del proyecto Susalud Digital, un sistema de gestión de expedientes médicos electrónicos y procesos de atención. Este repositorio contiene la arquitectura del proyecto, guías de desarrollo, y ejemplos de desarrollo con IA.

## 📋 Índice

- [Visión General](#-visión-general)
- [Arquitectura](#-arquitectura)
- [Guías de Desarrollo](#-guías-de-desarrollo)
- [Ejemplos con IA](#-ejemplos-con-ia)
- [Contribuir](#-contribuir)

---

## 👁️ Visión General

Susalud Digital es una plataforma integral para la gestión de expedientes médicos electrónicos y procesos clínicos. El proyecto está estructurado en módulos de Microfrontend para facilitar el escalamiento y mantenimiento.

### Módulos

- **`apps`**: Aplicaciones principales del sistema
  - **`susalud-app`**: Aplicación principal
  - **`susalud-web`**: Aplicación web
  - **`susalud-api`**: API RESTful
  - **`susalud-db`**: Configuración de base de datos
  - **`susalud-test`**: Tests y validaciones
- **`packages`**: Componentes y utilidades compartidas
  - **`susalud-component-library`**: Librería de componentes UI
  - **`susalud-core-utils`**: Utilidades core
  - **`susalud-design-system`**: Sistema de diseño y temas
  - **`susalud-form-utils`**: Utilidades para formularios
  - **`susalud-http`**: Cliente HTTP
  - **`susalud-icons`**: Librería de iconos
  - **`susalud-notifications`**: Notificaciones y alertas
  - **`susalud-routes`**: Configuración de rutas
  - **`susalud-storage`**: Manejo de almacenamiento local
  - **`susalud-theme`**: Temas y estilos
  - **`susalud-types`**: Definiciones de tipos
  - **`susalud-ui`**: Componentes de UI
- **`tools`**: Herramientas y utilidades del proyecto

---

## 📐 Arquitectura

El proyecto sigue una arquitectura de Microfrontend con una organización modular y capas bien definidas.

### Estructura de Directorios

```
/
├── apps/                   # Aplicaciones principales
│   ├── susalud-app/        # Aplicación principal
│   ├── susalud-web/        # Aplicación web
│   ├── susalud-api/        # API RESTful
│   ├── susalud-db/         # Configuración de base de datos
│   └── susalud-test/       # Tests y validaciones
├── packages/               # Librerías compartidas
│   ├── susalud-component-library/
│   ├── susalud-core-utils/
│   ├── susalud-design-system/
│   ├── susalud-form-utils/
│   ├── susalud-http/
│   ├── susalud-icons/
│   ├── susalud-notifications/
│   ├── susalud-routes/
│   ├── susalud-storage/
│   ├── susalud-theme/
│   ├── susalud-types/
│   └── susalud-ui/
└── tools/                  # Herramientas del proyecto
```

### Diagrama de Capas

```mermaid
graph TD
    User[Usuario] -->|HTTP/HTTPS| Frontend[Frontend] & Mobile[Mobile]
    Frontend -->|API Calls| API[API RESTful]
    Mobile -->|API Calls| API
    API -->|Queries| DB[Base de Datos]
    
    subgraph Frontend [Frontend Layer]
        Frontend
        ComponentLibrary[Librería de Componentes]
        DesignSystem[Sistema de Diseño]
        Theme[Temas y Estilos]
        Icons[Iconos]
    end
    
    subgraph Backend [Backend Layer]
        API
        Auth[Autenticación]
        Users[Gestión de Usuarios]
        MedicalRecords[Expedientes Médicos]
        Appointments[Citas]
        Billing[Facturación]
    end
    
    ComponentLibrary --- DesignSystem
    DesignSystem --- Theme
    Theme --- Icons
    API --- Auth
    API --- Users
    API --- MedicalRecords
    API --- Appointments
    API --- Billing
```

### Tecnologías Utilizadas

- **Frontend**: React, Next.js, TypeScript
- **Mobile**: React Native, Expo
- **Backend**: Node.js, Express, NestJS
- **Database**: PostgreSQL
- **Testing**: Jest, React Testing Library
- **Containerization**: Docker, Docker Compose

---

## 🚀 Guías de Desarrollo

### Configuración del Entorno

#### Requisitos Previos

- Node.js 18.x o superior
- npm 9.x o superior
- Docker y Docker Compose (opcional)

#### Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/susalud-digital/susalud-digital.git
   cd susalud-digital
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

### Desarrollo de Aplicaciones

#### Aplicación Principal (`apps/susalud-app`)

```bash
cd apps/susalud-app
npm run dev
```

#### API RESTful (`apps/susalud-api`)

```bash
cd apps/susalud-api
npm run dev
```

#### Mobile (`apps/susalud-mobile`)

```bash
cd apps/susalud-mobile
npm start
```

### Desarrollo de Componentes

#### Librería de Componentes (`packages/susalud-component-library`)

```bash
cd packages/susalud-component-library
npm run dev
```

#### Sistema de Diseño (`packages/susalud-design-system`)

```bash
cd packages/susalud-design-system
npm run dev
```

### Flujo de Trabajo

1. **Desarrollo de Frontend**:
   - Crear nuevas páginas en `apps/susalud-app/src/pages`
   - Agregar componentes en `apps/susalud-app/src/components`
   - Crear servicios en `apps/susalud-app/src/services`

2. **Desarrollo de API**:
   - Agregar nuevos endpoints en `apps/susalud-api/src/controllers`
   - Crear modelos en `apps/susalud-api/src/models`
   - Agregar servicios en `apps/susalud-api/src/services`

3. **Desarrollo de Componentes**:
   - Agregar nuevos componentes en `packages/susalud-component-library/src/components`
   - Actualizar el sistema de diseño en `packages/susalud-design-system`

### Convenciones de Código

- **TypeScript**: Todas las aplicaciones deben usar TypeScript
- **Nomenclatura**: `kebab-case` para archivos, `PascalCase` para componentes, `camelCase` para funciones
- **Estructura de Componentes**:
  ```typescript
  // packages/susalud-component-library/src/components/Button/Button.tsx
  import React from 'react';
  import { Button as UIButton, ButtonProps as UIButtonProps } from 'ui';
  import { useDesignSystem } from '../../hooks/useDesignSystem';
  import styles from './Button.module.scss';

  interface ButtonProps extends UIButtonProps {
    /**
     * Tipo de botón
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    /**
     * Tamaño del botón
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Texto del botón
     */
    children: React.React
