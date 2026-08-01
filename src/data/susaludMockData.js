// Dataset Estructurado SUSALUD - IPRESS & Registro de Sanciones/Reclamos en el Perú (Top 20+ Clínicas)
// Fuente de referencia: Superintendencia Nacional de Salud (SUSALUD) - RENIPRESS

export const ANIOS_DISPONIBLES = [2026, 2025, 2024, 2023];

export const TRIMESTRES_DISPONIBLES = [
  { id: 'ALL', label: 'Todos los Trimestres' },
  { id: 'Q1', label: 'Q1 (Ene - Mar)' },
  { id: 'Q2', label: 'Q2 (Abr - Jun)' },
  { id: 'Q3', label: 'Q3 (Jul - Sep)' },
  { id: 'Q4', label: 'Q4 (Oct - Dic)' }
];

export const MESES_DISPONIBLES = [
  { id: 'ALL', label: 'Todos los Meses' },
  { id: 1, label: 'Enero' },
  { id: 2, label: 'Febrero' },
  { id: 3, label: 'Marzo' },
  { id: 4, label: 'Abril' },
  { id: 5, label: 'Mayo' },
  { id: 6, label: 'Junio' },
  { id: 7, label: 'Julio' },
  { id: 8, label: 'Agosto' },
  { id: 9, label: 'Septiembre' },
  { id: 10, label: 'Octubre' },
  { id: 11, label: 'Noviembre' },
  { id: 12, label: 'Diciembre' }
];

export const SUSALUD_DATASET = [
  {
    id: "IPRESS-001024",
    nombre: "Clínica Javier Prado",
    razonSocial: "Clínica Javier Prado S.A.",
    departamento: "Lima",
    provincia: "Lima",
    distrito: "San Isidro",
    categoria: "III-1",
    tipo: "Clínica Privada",
    nivelRiesgo: "Muy Alto",
    estadoAtencion: "Bajo Supervisión Estricta",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 1, negligencias: 4, sanciones: 1, reclamos: 28, multasUIT: 15.0 },
      { anio: 2026, trimestre: 'Q1', mes: 2, negligencias: 3, sanciones: 1, reclamos: 24, multasUIT: 10.0 },
      { anio: 2026, trimestre: 'Q1', mes: 3, negligencias: 5, sanciones: 2, reclamos: 31, multasUIT: 20.0 },
      { anio: 2025, trimestre: 'Q1', mes: 1, negligencias: 3, sanciones: 1, reclamos: 25, multasUIT: 12.0 },
      { anio: 2025, trimestre: 'Q2', mes: 4, negligencias: 4, sanciones: 1, reclamos: 29, multasUIT: 18.0 },
      { anio: 2025, trimestre: 'Q3', mes: 7, negligencias: 6, sanciones: 2, reclamos: 34, multasUIT: 35.0 },
      { anio: 2025, trimestre: 'Q4', mes: 11, negligencias: 5, sanciones: 2, reclamos: 30, multasUIT: 25.5 },
      { anio: 2024, trimestre: 'Q2', mes: 6, negligencias: 7, sanciones: 2, reclamos: 45, multasUIT: 50.0 },
      { anio: 2024, trimestre: 'Q4', mes: 10, negligencias: 5, sanciones: 2, reclamos: 49, multasUIT: 0.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 16,
      retrasoEmergencia: 11,
      diagnosticoErroneo: 7,
      faltaInsumosEquipos: 5,
      cobrosIndebidos: 3
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2025-089", fecha: "2025-11-14", sancion: "Multa de 35 UIT", motivo: "Negligencia médica grave en área de cuidados intensivos (UCI)" },
      { nro: "RES-SUSALUD-2024-142", fecha: "2024-06-20", sancion: "Multa de 50 UIT", motivo: "Falta de atención inoportuna en servicio de emergencia" }
    ]
  },
  {
    id: "IPRESS-003891",
    nombre: "Clínica San Pablo - Surco",
    razonSocial: "Complejo Hospitalario San Pablo S.A.C.",
    departamento: "Lima",
    provincia: "Lima",
    distrito: "Santiago de Surco",
    categoria: "III-1",
    tipo: "Clínica Privada",
    nivelRiesgo: "Muy Alto",
    estadoAtencion: "Medidas Correctivas Aplicadas",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 1, negligencias: 3, sanciones: 1, reclamos: 32, multasUIT: 12.0 },
      { anio: 2026, trimestre: 'Q1', mes: 2, negligencias: 4, sanciones: 1, reclamos: 35, multasUIT: 15.0 },
      { anio: 2025, trimestre: 'Q1', mes: 3, negligencias: 5, sanciones: 2, reclamos: 40, multasUIT: 20.0 },
      { anio: 2025, trimestre: 'Q2', mes: 5, negligencias: 4, sanciones: 1, reclamos: 38, multasUIT: 18.0 },
      { anio: 2025, trimestre: 'Q4', mes: 12, negligencias: 8, sanciones: 3, reclamos: 55, multasUIT: 45.0 },
      { anio: 2024, trimestre: 'Q3', mes: 8, negligencias: 7, sanciones: 2, reclamos: 48, multasUIT: 30.0 },
      { anio: 2024, trimestre: 'Q4', mes: 11, negligencias: 7, sanciones: 2, reclamos: 42, multasUIT: 20.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 14,
      retrasoEmergencia: 10,
      diagnosticoErroneo: 8,
      faltaInsumosEquipos: 4,
      cobrosIndebidos: 2
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2025-112", fecha: "2025-12-01", sancion: "Multa de 45 UIT", motivo: "Error en administración de medicamentos posoperatorios" }
    ]
  },
  {
    id: "IPRESS-002105",
    nombre: "Clínica Internacional - Lima Cercado",
    razonSocial: "Clínica Internacional S.A.",
    departamento: "Lima",
    provincia: "Lima",
    distrito: "Lima",
    categoria: "III-1",
    tipo: "Clínica Privada",
    nivelRiesgo: "Alto",
    estadoAtencion: "En Proceso Sancionador",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 1, negligencias: 2, sanciones: 1, reclamos: 22, multasUIT: 10.0 },
      { anio: 2025, trimestre: 'Q2', mes: 4, negligencias: 6, sanciones: 2, reclamos: 38, multasUIT: 25.0 },
      { anio: 2025, trimestre: 'Q3', mes: 8, negligencias: 5, sanciones: 1, reclamos: 33, multasUIT: 20.0 },
      { anio: 2024, trimestre: 'Q1', mes: 2, negligencias: 8, sanciones: 2, reclamos: 50, multasUIT: 35.0 },
      { anio: 2024, trimestre: 'Q3', mes: 9, negligencias: 6, sanciones: 2, reclamos: 42, multasUIT: 20.0 },
      { anio: 2023, trimestre: 'Q4', mes: 11, negligencias: 4, sanciones: 1, reclamos: 30, multasUIT: 10.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 11,
      retrasoEmergencia: 9,
      diagnosticoErroneo: 5,
      faltaInsumosEquipos: 3,
      cobrosIndebidos: 3
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2025-045", fecha: "2025-04-18", sancion: "Multa de 25 UIT", motivo: "Negligencia en atención obstétrica y retraso en cesárea" }
    ]
  },
  {
    id: "IPRESS-004512",
    nombre: "Clínica Ricardo Palma",
    razonSocial: "Clínica Ricardo Palma S.A.",
    departamento: "Lima",
    provincia: "Lima",
    distrito: "San Isidro",
    categoria: "III-1",
    tipo: "Clínica Privada",
    nivelRiesgo: "Alto",
    estadoAtencion: "Supervisada",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 2, negligencias: 3, sanciones: 1, reclamos: 29, multasUIT: 10.0 },
      { anio: 2025, trimestre: 'Q1', mes: 2, negligencias: 5, sanciones: 1, reclamos: 34, multasUIT: 15.0 },
      { anio: 2025, trimestre: 'Q3', mes: 9, negligencias: 6, sanciones: 2, reclamos: 41, multasUIT: 25.0 },
      { anio: 2024, trimestre: 'Q3', mes: 9, negligencias: 5, sanciones: 1, reclamos: 45, multasUIT: 15.0 },
      { anio: 2024, trimestre: 'Q4', mes: 12, negligencias: 7, sanciones: 2, reclamos: 48, multasUIT: 30.0 },
      { anio: 2023, trimestre: 'Q2', mes: 5, negligencias: 3, sanciones: 1, reclamos: 28, multasUIT: 10.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 9,
      retrasoEmergencia: 10,
      diagnosticoErroneo: 6,
      faltaInsumosEquipos: 2,
      cobrosIndebidos: 2
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2024-210", fecha: "2024-09-05", sancion: "Amonestación Escrita y Multa 15 UIT", motivo: "Demora excesiva en transferencia a trauma shock" }
    ]
  },
  {
    id: "IPRESS-008920",
    nombre: "Clínica Arequipa",
    razonSocial: "Clínica Arequipa S.A.",
    departamento: "Arequipa",
    provincia: "Arequipa",
    distrito: "Arequipa",
    categoria: "II-2",
    tipo: "Clínica Privada",
    nivelRiesgo: "Alto",
    estadoAtencion: "Proceso Abierto",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 1, negligencias: 3, sanciones: 1, reclamos: 21, multasUIT: 10.0 },
      { anio: 2025, trimestre: 'Q1', mes: 2, negligencias: 5, sanciones: 2, reclamos: 30, multasUIT: 30.0 },
      { anio: 2025, trimestre: 'Q2', mes: 6, negligencias: 4, sanciones: 1, reclamos: 28, multasUIT: 15.0 },
      { anio: 2024, trimestre: 'Q2', mes: 5, negligencias: 6, sanciones: 2, reclamos: 32, multasUIT: 20.0 },
      { anio: 2024, trimestre: 'Q4', mes: 10, negligencias: 5, sanciones: 2, reclamos: 31, multasUIT: 15.0 },
      { anio: 2023, trimestre: 'Q3', mes: 7, negligencias: 3, sanciones: 2, reclamos: 22, multasUIT: 5.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 10,
      retrasoEmergencia: 7,
      diagnosticoErroneo: 4,
      faltaInsumosEquipos: 3,
      cobrosIndebidos: 2
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2025-019", fecha: "2025-02-10", sancion: "Multa de 30 UIT", motivo: "Negligencia anestesiológica durante intervención quirúrgica" }
    ]
  },
  {
    id: "IPRESS-007431",
    nombre: "Clínica Sanchez Ferrer (Trujillo)",
    razonSocial: "Clínica Sanchez Ferrer S.A.C.",
    departamento: "La Libertad",
    provincia: "Trujillo",
    distrito: "Trujillo",
    categoria: "II-2",
    tipo: "Clínica Privada",
    nivelRiesgo: "Alto",
    estadoAtencion: "Medidas Correctivas",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 3, negligencias: 2, sanciones: 1, reclamos: 18, multasUIT: 8.0 },
      { anio: 2025, trimestre: 'Q3', mes: 7, negligencias: 5, sanciones: 2, reclamos: 31, multasUIT: 20.0 },
      { anio: 2025, trimestre: 'Q4', mes: 11, negligencias: 4, sanciones: 1, reclamos: 27, multasUIT: 15.0 },
      { anio: 2024, trimestre: 'Q1', mes: 3, negligencias: 6, sanciones: 1, reclamos: 35, multasUIT: 24.5 },
      { anio: 2024, trimestre: 'Q3', mes: 8, negligencias: 5, sanciones: 2, reclamos: 30, multasUIT: 15.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 8,
      retrasoEmergencia: 6,
      diagnosticoErroneo: 4,
      faltaInsumosEquipos: 2,
      cobrosIndebidos: 2
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2025-067", fecha: "2025-07-22", sancion: "Multa de 20 UIT", motivo: "Inobservancia de protocolos de bioseguridad en quirófano" }
    ]
  },
  {
    id: "IPRESS-005612",
    nombre: "Clínica San Felipe - Jesús María",
    razonSocial: "Clínica San Felipe S.A.",
    departamento: "Lima",
    provincia: "Lima",
    distrito: "Jesús María",
    categoria: "III-1",
    tipo: "Clínica Privada",
    nivelRiesgo: "Moderado",
    estadoAtencion: "Supervisada",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 2, negligencias: 2, sanciones: 0, reclamos: 20, multasUIT: 0.0 },
      { anio: 2025, trimestre: 'Q2', mes: 4, negligencias: 4, sanciones: 1, reclamos: 32, multasUIT: 15.0 },
      { anio: 2025, trimestre: 'Q4', mes: 10, negligencias: 5, sanciones: 2, reclamos: 38, multasUIT: 20.0 },
      { anio: 2024, trimestre: 'Q2', mes: 4, negligencias: 5, sanciones: 1, reclamos: 41, multasUIT: 15.0 },
      { anio: 2024, trimestre: 'Q4', mes: 12, negligencias: 4, sanciones: 1, reclamos: 34, multasUIT: 15.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 7,
      retrasoEmergencia: 5,
      diagnosticoErroneo: 4,
      faltaInsumosEquipos: 2,
      cobrosIndebidos: 2
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2024-098", fecha: "2024-04-12", sancion: "Multa de 15 UIT", motivo: "Incumplimiento de entrega de historia clínica a familiar directo" }
    ]
  },
  {
    id: "IPRESS-009104",
    nombre: "Clínica Miraflores (Piura)",
    razonSocial: "Centro Médico Miraflores S.R.L.",
    departamento: "Piura",
    provincia: "Piura",
    distrito: "Castilla",
    categoria: "II-2",
    tipo: "Clínica Privada",
    nivelRiesgo: "Alto",
    estadoAtencion: "Proceso Abierto",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 1, negligencias: 2, sanciones: 1, reclamos: 15, multasUIT: 5.0 },
      { anio: 2025, trimestre: 'Q4', mes: 10, negligencias: 5, sanciones: 2, reclamos: 28, multasUIT: 25.0 },
      { anio: 2025, trimestre: 'Q2', mes: 5, negligencias: 4, sanciones: 1, reclamos: 22, multasUIT: 15.0 },
      { anio: 2024, trimestre: 'Q3', mes: 7, negligencias: 5, sanciones: 1, reclamos: 29, multasUIT: 15.0 },
      { anio: 2024, trimestre: 'Q1', mes: 2, negligencias: 3, sanciones: 1, reclamos: 18, multasUIT: 10.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 6,
      retrasoEmergencia: 6,
      diagnosticoErroneo: 4,
      faltaInsumosEquipos: 2,
      cobrosIndebidos: 1
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2025-103", fecha: "2025-10-09", sancion: "Multa de 25 UIT", motivo: "Negligencia pediátrica en sala de emergencias" }
    ]
  },
  {
    id: "IPRESS-006320",
    nombre: "Clínica Pardo (Cusco)",
    razonSocial: "Servicios Médicos Pardo S.A.C.",
    departamento: "Cusco",
    provincia: "Cusco",
    distrito: "Wanchaq",
    categoria: "II-2",
    tipo: "Clínica Privada",
    nivelRiesgo: "Moderado",
    estadoAtencion: "Medidas Correctivas",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 2, negligencias: 2, sanciones: 0, reclamos: 14, multasUIT: 0.0 },
      { anio: 2025, trimestre: 'Q3', mes: 8, negligencias: 4, sanciones: 1, reclamos: 25, multasUIT: 15.0 },
      { anio: 2025, trimestre: 'Q1', mes: 3, negligencias: 3, sanciones: 1, reclamos: 20, multasUIT: 10.0 },
      { anio: 2024, trimestre: 'Q3', mes: 8, negligencias: 5, sanciones: 2, reclamos: 30, multasUIT: 20.0 },
      { anio: 2024, trimestre: 'Q1', mes: 1, negligencias: 3, sanciones: 1, reclamos: 18, multasUIT: 10.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 5,
      retrasoEmergencia: 5,
      diagnosticoErroneo: 4,
      faltaInsumosEquipos: 2,
      cobrosIndebidos: 1
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2024-180", fecha: "2024-08-11", sancion: "Multa de 20 UIT", motivo: "Falta de banco de sangre operativo durante urgencia" }
    ]
  },
  {
    id: "IPRESS-003310",
    nombre: "Clínica Chiclayo",
    razonSocial: "Clínica Chiclayo S.A.",
    departamento: "Lambayeque",
    provincia: "Chiclayo",
    distrito: "Chiclayo",
    categoria: "II-2",
    tipo: "Clínica Privada",
    nivelRiesgo: "Moderado",
    estadoAtencion: "Supervisada",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 1, negligencias: 1, sanciones: 0, reclamos: 12, multasUIT: 0.0 },
      { anio: 2025, trimestre: 'Q2', mes: 5, negligencias: 4, sanciones: 1, reclamos: 22, multasUIT: 12.0 },
      { anio: 2025, trimestre: 'Q4', mes: 11, negligencias: 3, sanciones: 1, reclamos: 20, multasUIT: 10.0 },
      { anio: 2024, trimestre: 'Q1', mes: 3, negligencias: 4, sanciones: 1, reclamos: 25, multasUIT: 12.0 },
      { anio: 2024, trimestre: 'Q3', mes: 9, negligencias: 3, sanciones: 1, reclamos: 21, multasUIT: 14.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 4,
      retrasoEmergencia: 5,
      diagnosticoErroneo: 3,
      faltaInsumosEquipos: 2,
      cobrosIndebidos: 1
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2024-055", fecha: "2024-03-02", sancion: "Multa de 12 UIT", motivo: "Negligencia por falta de médico especialista de turno" }
    ]
  },
  {
    id: "IPRESS-008112",
    nombre: "Clínica Bellavista (Callao)",
    razonSocial: "Clínica Bellavista S.A.",
    departamento: "Callao",
    provincia: "Callao",
    distrito: "Bellavista",
    categoria: "II-2",
    tipo: "Clínica Privada",
    nivelRiesgo: "Moderado",
    estadoAtencion: "Supervisada",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 2, negligencias: 1, sanciones: 0, reclamos: 11, multasUIT: 0.0 },
      { anio: 2025, trimestre: 'Q1', mes: 3, negligencias: 4, sanciones: 1, reclamos: 22, multasUIT: 14.0 },
      { anio: 2025, trimestre: 'Q3', mes: 8, negligencias: 3, sanciones: 1, reclamos: 20, multasUIT: 10.0 },
      { anio: 2024, trimestre: 'Q2', mes: 6, negligencias: 4, sanciones: 1, reclamos: 26, multasUIT: 12.0 },
      { anio: 2024, trimestre: 'Q4', mes: 10, negligencias: 2, sanciones: 1, reclamos: 18, multasUIT: 6.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 4,
      retrasoEmergencia: 4,
      diagnosticoErroneo: 3,
      faltaInsumosEquipos: 2,
      cobrosIndebidos: 1
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2025-030", fecha: "2025-03-12", sancion: "Multa 14 UIT", motivo: "Falta de consentimiento informado firmado en cirugía" }
    ]
  },
  {
    id: "IPRESS-001920",
    nombre: "Clínica Stella Maris",
    razonSocial: "Asociación Stella Maris",
    departamento: "Lima",
    provincia: "Lima",
    distrito: "Pueblo Libre",
    categoria: "II-2",
    tipo: "Clínica Privada",
    nivelRiesgo: "Bajo",
    estadoAtencion: "Cumplimiento Normal",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 1, negligencias: 1, sanciones: 0, reclamos: 15, multasUIT: 0.0 },
      { anio: 2025, trimestre: 'Q2', mes: 4, negligencias: 3, sanciones: 1, reclamos: 28, multasUIT: 10.0 },
      { anio: 2025, trimestre: 'Q4', mes: 11, negligencias: 2, sanciones: 0, reclamos: 22, multasUIT: 0.0 },
      { anio: 2024, trimestre: 'Q1', mes: 1, negligencias: 3, sanciones: 1, reclamos: 30, multasUIT: 8.0 },
      { anio: 2024, trimestre: 'Q3', mes: 7, negligencias: 3, sanciones: 1, reclamos: 25, multasUIT: 17.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 3,
      retrasoEmergencia: 4,
      diagnosticoErroneo: 3,
      faltaInsumosEquipos: 1,
      cobrosIndebidos: 1
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2024-012", fecha: "2024-01-15", sancion: "Amonestación y Multa 8 UIT", motivo: "Retraso en informe auditado de atención" }
    ]
  },
  {
    id: "IPRESS-009940",
    nombre: "Clínica Delgado - Miraflores",
    razonSocial: "AUNA Salud S.A.A. - Clínica Delgado",
    departamento: "Lima",
    provincia: "Lima",
    distrito: "Miraflores",
    categoria: "III-1",
    tipo: "Clínica Privada",
    nivelRiesgo: "Alto",
    estadoAtencion: "Supervisada",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 2, negligencias: 3, sanciones: 1, reclamos: 26, multasUIT: 12.0 },
      { anio: 2025, trimestre: 'Q3', mes: 9, negligencias: 5, sanciones: 2, reclamos: 35, multasUIT: 28.0 },
      { anio: 2025, trimestre: 'Q4', mes: 12, negligencias: 4, sanciones: 1, reclamos: 30, multasUIT: 18.0 },
      { anio: 2024, trimestre: 'Q2', mes: 5, negligencias: 5, sanciones: 1, reclamos: 32, multasUIT: 22.0 },
      { anio: 2024, trimestre: 'Q4', mes: 11, negligencias: 4, sanciones: 1, reclamos: 28, multasUIT: 15.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 7,
      retrasoEmergencia: 6,
      diagnosticoErroneo: 4,
      faltaInsumosEquipos: 2,
      cobrosIndebidos: 2
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2025-095", fecha: "2025-09-18", sancion: "Multa 28 UIT", motivo: "Omisión de socorro médico inmediato a paciente grave" }
    ]
  },
  {
    id: "IPRESS-005118",
    nombre: "Clínica Anglo Americana",
    razonSocial: "Clínica Anglo Americana S.A.",
    departamento: "Lima",
    provincia: "Lima",
    distrito: "San Isidro",
    categoria: "III-1",
    tipo: "Clínica Privada",
    nivelRiesgo: "Moderado",
    estadoAtencion: "Supervisada",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 1, negligencias: 1, sanciones: 0, reclamos: 19, multasUIT: 0.0 },
      { anio: 2025, trimestre: 'Q2', mes: 6, negligencias: 4, sanciones: 1, reclamos: 29, multasUIT: 15.0 },
      { anio: 2025, trimestre: 'Q4', mes: 10, negligencias: 3, sanciones: 1, reclamos: 24, multasUIT: 12.0 },
      { anio: 2024, trimestre: 'Q3', mes: 8, negligencias: 4, sanciones: 1, reclamos: 30, multasUIT: 18.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 4,
      retrasoEmergencia: 4,
      diagnosticoErroneo: 2,
      faltaInsumosEquipos: 1,
      cobrosIndebidos: 1
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2025-060", fecha: "2025-06-11", sancion: "Multa 15 UIT", motivo: "Manejo inadecuado de consentimiento informado" }
    ]
  },
  {
    id: "IPRESS-007820",
    nombre: "Clínica Montesur",
    razonSocial: "Clínica Gineceno Obstétrica Montesur S.A.",
    departamento: "Lima",
    provincia: "Lima",
    distrito: "Santiago de Surco",
    categoria: "II-2",
    tipo: "Clínica Especializada",
    nivelRiesgo: "Moderado",
    estadoAtencion: "Medidas Correctivas",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 2, negligencias: 1, sanciones: 0, reclamos: 14, multasUIT: 0.0 },
      { anio: 2025, trimestre: 'Q3', mes: 8, negligencias: 4, sanciones: 1, reclamos: 22, multasUIT: 18.0 },
      { anio: 2025, trimestre: 'Q1', mes: 2, negligencias: 3, sanciones: 1, reclamos: 18, multasUIT: 12.0 },
      { anio: 2024, trimestre: 'Q4', mes: 11, negligencias: 3, sanciones: 1, reclamos: 20, multasUIT: 10.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 5,
      retrasoEmergencia: 3,
      diagnosticoErroneo: 2,
      faltaInsumosEquipos: 1,
      cobrosIndebidos: 0
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2025-081", fecha: "2025-08-20", sancion: "Multa 18 UIT", motivo: "Negligencia durante parto con sufrimiento fetal no detectado" }
    ]
  },
  {
    id: "IPRESS-003112",
    nombre: "Clínica Maison de Santé - Chorrillos",
    razonSocial: "Sociedad Francesa de Beneficencia",
    departamento: "Lima",
    provincia: "Lima",
    distrito: "Chorrillos",
    categoria: "II-2",
    tipo: "Clínica Privada",
    nivelRiesgo: "Moderado",
    estadoAtencion: "Supervisada",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 1, negligencias: 1, sanciones: 0, reclamos: 10, multasUIT: 0.0 },
      { anio: 2025, trimestre: 'Q2', mes: 4, negligencias: 3, sanciones: 1, reclamos: 21, multasUIT: 10.0 },
      { anio: 2025, trimestre: 'Q4', mes: 11, negligencias: 3, sanciones: 1, reclamos: 19, multasUIT: 12.0 },
      { anio: 2024, trimestre: 'Q2', mes: 5, negligencias: 3, sanciones: 1, reclamos: 22, multasUIT: 10.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 3,
      retrasoEmergencia: 3,
      diagnosticoErroneo: 2,
      faltaInsumosEquipos: 1,
      cobrosIndebidos: 1
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2024-130", fecha: "2024-05-30", sancion: "Multa 10 UIT", motivo: "Afectación del derecho a la información del paciente" }
    ]
  },
  {
    id: "IPRESS-004889",
    nombre: "Clínica San Gabriel",
    razonSocial: "Clínica San Gabriel S.A.C.",
    departamento: "Lima",
    provincia: "Lima",
    distrito: "San Miguel",
    categoria: "II-2",
    tipo: "Clínica Privada",
    nivelRiesgo: "Alto",
    estadoAtencion: "Medidas Correctivas",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 2, negligencias: 2, sanciones: 1, reclamos: 18, multasUIT: 8.0 },
      { anio: 2025, trimestre: 'Q3', mes: 7, negligencias: 5, sanciones: 2, reclamos: 32, multasUIT: 24.0 },
      { anio: 2025, trimestre: 'Q1', mes: 3, negligencias: 3, sanciones: 1, reclamos: 20, multasUIT: 12.0 },
      { anio: 2024, trimestre: 'Q4', mes: 10, negligencias: 4, sanciones: 1, reclamos: 25, multasUIT: 16.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 5,
      retrasoEmergencia: 5,
      diagnosticoErroneo: 2,
      faltaInsumosEquipos: 1,
      cobrosIndebidos: 1
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2025-074", fecha: "2025-07-02", sancion: "Multa 24 UIT", motivo: "Retraso injustificado en ingreso a quirófano de emergencia" }
    ]
  },
  {
    id: "IPRESS-006742",
    nombre: "Clínica Montefiori",
    razonSocial: "Clínica Montefiori S.A.",
    departamento: "Lima",
    provincia: "Lima",
    distrito: "La Molina",
    categoria: "II-2",
    tipo: "Clínica Privada",
    nivelRiesgo: "Moderado",
    estadoAtencion: "Supervisada",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 1, negligencias: 1, sanciones: 0, reclamos: 11, multasUIT: 0.0 },
      { anio: 2025, trimestre: 'Q2', mes: 5, negligencias: 3, sanciones: 1, reclamos: 20, multasUIT: 10.0 },
      { anio: 2025, trimestre: 'Q4', mes: 12, negligencias: 3, sanciones: 1, reclamos: 18, multasUIT: 12.0 },
      { anio: 2024, trimestre: 'Q3', mes: 8, negligencias: 3, sanciones: 1, reclamos: 21, multasUIT: 10.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 3,
      retrasoEmergencia: 4,
      diagnosticoErroneo: 1,
      faltaInsumosEquipos: 1,
      cobrosIndebidos: 1
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2024-192", fecha: "2024-08-25", sancion: "Multa 10 UIT", motivo: "Problemas en custodia y conservación de historias clínicas" }
    ]
  },
  {
    id: "IPRESS-009410",
    nombre: "Clínica San Juan de Dios (Arequipa)",
    razonSocial: "Orden Hospitalaria San Juan de Dios",
    departamento: "Arequipa",
    provincia: "Arequipa",
    distrito: "Cayma",
    categoria: "II-2",
    tipo: "Clínica Privada / Beneficencia",
    nivelRiesgo: "Bajo",
    estadoAtencion: "Cumplimiento Normal",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 2, negligencias: 0, sanciones: 0, reclamos: 8, multasUIT: 0.0 },
      { anio: 2025, trimestre: 'Q3', mes: 9, negligencias: 2, sanciones: 0, reclamos: 18, multasUIT: 0.0 },
      { anio: 2025, trimestre: 'Q1', mes: 2, negligencias: 2, sanciones: 1, reclamos: 15, multasUIT: 8.0 },
      { anio: 2024, trimestre: 'Q2', mes: 4, negligencias: 2, sanciones: 0, reclamos: 16, multasUIT: 0.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 2,
      retrasoEmergencia: 2,
      diagnosticoErroneo: 1,
      faltaInsumosEquipos: 1,
      cobrosIndebidos: 0
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2025-015", fecha: "2025-02-05", sancion: "Amonestación Escrita", motivo: "Demora en tramitación de reclamo de usuario" }
    ]
  },
  {
    id: "IPRESS-002781",
    nombre: "Clínica Limatambo",
    razonSocial: "Clínica Limatambo S.A.",
    departamento: "Lima",
    provincia: "Lima",
    distrito: "San Borja",
    categoria: "II-2",
    tipo: "Clínica Privada",
    nivelRiesgo: "Moderado",
    estadoAtencion: "Supervisada",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 1, negligencias: 1, sanciones: 0, reclamos: 12, multasUIT: 0.0 },
      { anio: 2025, trimestre: 'Q4', mes: 10, negligencias: 3, sanciones: 1, reclamos: 22, multasUIT: 14.0 },
      { anio: 2025, trimestre: 'Q2', mes: 5, negligencias: 2, sanciones: 1, reclamos: 17, multasUIT: 10.0 },
      { anio: 2024, trimestre: 'Q3', mes: 7, negligencias: 3, sanciones: 1, reclamos: 20, multasUIT: 10.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 3,
      retrasoEmergencia: 3,
      diagnosticoErroneo: 2,
      faltaInsumosEquipos: 1,
      cobrosIndebidos: 0
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2025-101", fecha: "2025-10-04", sancion: "Multa 14 UIT", motivo: "Negligencia por omisión en exámenes previas a cirugía" }
    ]
  },
  {
    id: "IPRESS-003662",
    nombre: "Clínica Providencia",
    razonSocial: "Clínica Providencia S.A.C.",
    departamento: "Lima",
    provincia: "Lima",
    distrito: "San Miguel",
    categoria: "II-2",
    tipo: "Clínica Privada",
    nivelRiesgo: "Moderado",
    estadoAtencion: "Supervisada",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 2, negligencias: 1, sanciones: 0, reclamos: 10, multasUIT: 0.0 },
      { anio: 2025, trimestre: 'Q3', mes: 8, negligencias: 3, sanciones: 1, reclamos: 19, multasUIT: 12.0 },
      { anio: 2025, trimestre: 'Q1', mes: 3, negligencias: 2, sanciones: 0, reclamos: 15, multasUIT: 0.0 },
      { anio: 2024, trimestre: 'Q4', mes: 11, negligencias: 3, sanciones: 1, reclamos: 18, multasUIT: 10.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 3,
      retrasoEmergencia: 2,
      diagnosticoErroneo: 2,
      faltaInsumosEquipos: 1,
      cobrosIndebidos: 1
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2025-083", fecha: "2025-08-28", sancion: "Multa 12 UIT", motivo: "Demora en atención de emergencia en paciente de tercera edad" }
    ]
  },
  {
    id: "IPRESS-001255",
    nombre: "Clínica San Borja",
    razonSocial: "Clínica San Borja S.A.",
    departamento: "Lima",
    provincia: "Lima",
    distrito: "San Borja",
    categoria: "II-2",
    tipo: "Clínica Privada",
    nivelRiesgo: "Bajo",
    estadoAtencion: "Cumplimiento Normal",
    historial: [
      { anio: 2026, trimestre: 'Q1', mes: 1, negligencias: 0, sanciones: 0, reclamos: 9, multasUIT: 0.0 },
      { anio: 2025, trimestre: 'Q2', mes: 5, negligencias: 2, sanciones: 0, reclamos: 16, multasUIT: 0.0 },
      { anio: 2025, trimestre: 'Q4', mes: 11, negligencias: 2, sanciones: 1, reclamos: 14, multasUIT: 8.0 },
      { anio: 2024, trimestre: 'Q1', mes: 2, negligencias: 2, sanciones: 0, reclamos: 15, multasUIT: 0.0 }
    ],
    desgloseInfracciones: {
      malaPraxisQuirurgica: 2,
      retrasoEmergencia: 2,
      diagnosticoErroneo: 1,
      faltaInsumosEquipos: 1,
      cobrosIndebidos: 0
    },
    resolucionesDestacadas: [
      { nro: "RES-SUSALUD-2025-115", fecha: "2025-11-20", sancion: "Multa 8 UIT", motivo: "Falta menor en actualización de libro de reclamaciones" }
    ]
  }
];

export const TIPOS_INFRACCION_INFO = {
  malaPraxisQuirurgica: { label: "Mala Praxis / Error Quirúrgico", color: "#FF4B72" },
  retrasoEmergencia: { label: "Atención Inoportuna en Emergencia", color: "#F59E0B" },
  diagnosticoErroneo: { label: "Diagnóstico Erróneo / Incompleto", color: "#06B6D4" },
  faltaInsumosEquipos: { label: "Falta de Equipos / Insumos Críticos", color: "#A855F7" },
  cobrosIndebidos: { label: "Cobros Indebidos / Negación de Cobertura", color: "#3B82F6" }
};
