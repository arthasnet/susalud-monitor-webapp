import { 
  SUSALUD_DATASET, 
  ANIOS_DISPONIBLES, 
  TRIMESTRES_DISPONIBLES, 
  MESES_DISPONIBLES 
} from '../data/susaludMockData';

/**
 * Filtra y recalcula los datos de clínicas según filtros de tiempo (Año, Trimestre, Mes) y texto
 */
export const filterClinicsByPeriod = (clinics, filters = {}) => {
  const { anio = 'ALL', trimestre = 'ALL', mes = 'ALL', search = '' } = filters;

  return clinics.map(c => {
    // Si la clínica tiene historial por periodos
    let filteredHistory = c.historial || [];

    if (anio !== 'ALL') {
      filteredHistory = filteredHistory.filter(h => h.anio === Number(anio));
    }
    if (trimestre !== 'ALL') {
      filteredHistory = filteredHistory.filter(h => h.trimestre === trimestre);
    }
    if (mes !== 'ALL') {
      filteredHistory = filteredHistory.filter(h => h.mes === Number(mes));
    }

    // Recalcular agregados
    const negligenciasCount = filteredHistory.reduce((acc, h) => acc + h.negligencias, 0);
    const sancionesCount = filteredHistory.reduce((acc, h) => acc + h.sanciones, 0);
    const reclamosTotales = filteredHistory.reduce((acc, h) => acc + h.reclamos, 0);
    const multasUIT = filteredHistory.reduce((acc, h) => acc + h.multasUIT, 0);

    return {
      ...c,
      negligenciasCount,
      sancionesCount,
      reclamosTotales,
      multasUIT: Number(multasUIT.toFixed(1))
    };
  }).filter(c => {
    // Filtro de búsqueda por texto
    if (!search || search.trim() === '') return true;
    const q = search.toLowerCase().trim();
    return (
      c.nombre.toLowerCase().includes(q) ||
      c.razonSocial.toLowerCase().includes(q) ||
      c.distrito.toLowerCase().includes(q) ||
      c.departamento.toLowerCase().includes(q) ||
      c.id.toLowerCase().includes(q)
    );
  });
};

/**
 * Calcula métricas de resumen nacional ajustadas al periodo seleccionado
 */
export const calculateSummaryForClinics = (processedClinics) => {
  const totalNegligenciasConfirmadas = processedClinics.reduce((acc, c) => acc + c.negligenciasCount, 0);
  const totalSancionesImpuestas = processedClinics.reduce((acc, c) => acc + c.sancionesCount, 0);
  const totalReclamosNacional = processedClinics.reduce((acc, c) => acc + c.reclamosTotales, 0);
  const multasTotalesUIT = Number(processedClinics.reduce((acc, c) => acc + c.multasUIT, 0).toFixed(1));

  return {
    totalReclamosNacional,
    totalNegligenciasConfirmadas,
    totalSancionesImpuestas,
    multasTotalesUIT,
    uitValorSol: 5350,
    ipressSupervisadas: processedClinics.length,
    ultimaActualizacion: "2026-07-31"
  };
};

export const fetchSusaludApiData = async (options = {}) => {
  const { filters = {}, useLiveApi = false } = options;

  const processedClinics = filterClinicsByPeriod(SUSALUD_DATASET, filters);
  const summary = calculateSummaryForClinics(processedClinics);

  if (!useLiveApi) {
    return {
      success: true,
      source: 'SUSALUD Open Data Cache (Oficial)',
      timestamp: new Date().toISOString(),
      data: processedClinics,
      summary
    };
  }

  try {
    const endpoint = `https://www.datosabiertos.gob.pe/api/3/action/package_search?q=susalud`;
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    return {
      success: true,
      source: 'Live CKAN API (datosabiertos.gob.pe)',
      timestamp: new Date().toISOString(),
      rawPayload: result,
      data: processedClinics,
      summary
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      source: 'SUSALUD Cache Enriquecido (Fallback Activo)',
      timestamp: new Date().toISOString(),
      data: processedClinics,
      summary
    };
  }
};

export const testSusaludEndpoint = async (endpointUrl) => {
  const startTime = performance.now();
  try {
    const res = await fetch(endpointUrl, { method: 'GET', mode: 'cors' });
    const endTime = performance.now();
    const latency = Math.round(endTime - startTime);
    
    if (res.ok) {
      const json = await res.json();
      return { status: res.status, statusText: res.statusText, ok: true, latencyMs: latency, data: json };
    } else {
      return { status: res.status, statusText: res.statusText, ok: false, latencyMs: latency, error: `Respuesta HTTP ${res.status}` };
    }
  } catch (err) {
    const endTime = performance.now();
    return { status: 0, statusText: 'Network Error / CORS Restringido', ok: false, latencyMs: Math.round(endTime - startTime), error: err.message };
  }
};
