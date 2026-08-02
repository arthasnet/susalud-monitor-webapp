# Arquitectura de Software - Observatorio SUSALUD Digital

Este documento describe la arquitectura técnica, diseño por dominios, flujo de datos y patrones de mantenibilidad del **Observatorio SUSALUD Digital**.

---

## 🏛️ Visión General de la Arquitectura

El sistema implementa una **Arquitectura Guiada por Dominios en el Frontend (Domain-Driven Frontend Architecture)**. Cada módulo funcional se agrupa dentro de su propio contexto delimitado (Bounded Context), desacoplando la lógica de negocio, los servicios de datos y los componentes de la interfaz de usuario.

```mermaid
graph TD
    subgraph UI ["Capa de Presentación (React UI)"]
        App["App.jsx (Orquestador)"]
        SharedUI["Shared UI (Header, Footer)"]
    end

    subgraph Domains ["Capa de Dominios (Bounded Contexts)"]
        subgraph ClinicsDomain ["Dominio Clínicas (clinics)"]
            ClinicsHook["useClinics Hook"]
            ClinicsTable["ClinicsTable"]
            ClinicsChart["TopClinicsChart"]
            ClinicsService["clinicService.js"]
            ClinicsData["clinicsDataset.js"]
        end

        subgraph MetricsDomain ["Dominio Métricas (metrics)"]
            MetricsView["MetricsOverview"]
            MetricsService["metricsService.js"]
        end

        subgraph FiltersDomain ["Dominio Filtros (filters)"]
            FilterBar["PeriodFilterBar"]
        end

        subgraph ApiDomain ["Dominio API Consola (api-console)"]
            ApiConsole["ApiConnectionConsole"]
            CkanService["ckanApiService.js"]
        end
    end

    App --> SharedUI
    App --> ClinicsHook
    ClinicsHook --> ClinicsService
    ClinicsService --> ClinicsData
    App --> MetricsView
    MetricsView --> MetricsService
    App --> FilterBar
    App --> ApiConsole
    ApiConsole --> CkanService
```

---

## 🧩 Estructura Modular por Dominios

```
src/
├── domains/
│   ├── clinics/                   # Dominio de Clínicas e IPRESS
│   │   ├── components/            # Componentes visuales de clínicas
│   │   │   ├── ClinicDetailModal.jsx
│   │   │   ├── ClinicsTable.jsx
│   │   │   ├── TopClinicsChart.jsx
│   │   │   ├── DepartmentDistribution.jsx
│   │   │   └── InfractionTypeChart.jsx
│   │   ├── hooks/                 # Custom Hooks del dominio
│   │   │   └── useClinics.js
│   │   ├── services/              # Lógica de negocio y filtrado
│   │   │   └── clinicService.js
│   │   └── data/                  # Dataset oficial y mockdata
│   │       └── clinicsDataset.js
│   │
│   ├── metrics/                   # Dominio de Métricas Nacionales
│   │   ├── components/
│   │   │   └── MetricsOverview.jsx
│   │   └── services/
│   │       └── metricsService.js
│   │
│   ├── filters/                   # Dominio de Filtros Temporales
│   │   └── components/
│   │       └── PeriodFilterBar.jsx
│   │
│   └── api-console/               # Dominio de Monitoreo e Integración API
│       ├── components/
│       │   └── ApiConnectionConsole.jsx
│       └── services/
│           └── ckanApiService.js
│
├── shared/                        # Recursos Reutilizables Compartidos
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   └── styles/
│       └── index.css
│
├── App.jsx                        # Orquestador del Dashboard
└── main.jsx                       # Punto de entrada de React
```

---

## 🔄 Flujo de Datos y Reactividad

```mermaid
sequenceDiagram
    autonumber
    actor Usuario
    participant UI as Componentes UI
    participant Hook as useClinics Hook
    participant Service as clinicService
    participant API as CKAN Open Data / Local Cache

    Usuario->>UI: Selecciona Filtro (Año / Trimestre / Búsqueda)
    UI->>Hook: Actualiza estado de filtro
    Hook->>Service: Invoca filterClinicsByPeriod(dataset, filters)
    Service->>Service: Procesa agregación de negligencias y UITs
    Service-->>Hook: Devuelve dataset procesado y resumen
    Hook->>Service: Solicita cálculo de métricas nacionales
    Service-->>Hook: Retorna métricas de resumen
    Hook-->>UI: Re-renderiza gráficos y tablas de forma reactiva
    
    opt Uso de Live API
        Hook->>API: GET datosabiertos.gob.pe/api/3/action/package_search
        API-->>Hook: Retorna payload JSON / Status
    end
```

---

## 🛡️ Principios Arquitectónicos Aplicados

1. **Single Responsibility Principle (SRP)**:
   - Los componentes de UI solo renderizan la vista y delegan la lógica de filtrado y agregación a los servicios del dominio.
2. **Separation of Concerns (SoC)**:
   - El estado reactivo de las clínicas se aísla dentro del custom hook `useClinics`.
3. **Resiliencia y Fallback Activo**:
   - Si la API pública de datos abiertos de SUSALUD se encuentra fuera de servicio o bloqueada por CORS, el sistema conmuta suavemente al dataset optimizado en caché local manteniendo la operatividad continua.
4. **Design System basado en Tokens CSS**:
   - Todos los estilos se manejan centralizadamente mediante variables CSS para facilitar cambios de temas (Dark Mode / High Contrast).
