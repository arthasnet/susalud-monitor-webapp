import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MetricsOverview from './components/MetricsOverview';
import TopClinicsChart from './components/TopClinicsChart';
import DepartmentDistribution from './components/DepartmentDistribution';
import InfractionTypeChart from './components/InfractionTypeChart';
import ClinicsTable from './components/ClinicsTable';
import ClinicDetailModal from './components/ClinicDetailModal';
import ApiConnectionConsole from './components/ApiConnectionConsole';
import PeriodFilterBar from './components/PeriodFilterBar';
import { fetchSusaludApiData } from './services/susaludApi';
import { RefreshCw } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [useLiveApi, setUseLiveApi] = useState(false);
  
  // Period Filters state: Año, Trimestre, Mes
  const [periodFilters, setPeriodFilters] = useState({
    anio: 'ALL',
    trimestre: 'ALL',
    mes: 'ALL'
  });

  const [clinics, setClinics] = useState([]);
  const [metrics, setMetrics] = useState({
    totalReclamosNacional: 0,
    totalNegligenciasConfirmadas: 0,
    totalSancionesImpuestas: 0,
    multasTotalesUIT: 0,
    uitValorSol: 5350,
    ipressSupervisadas: 0
  });
  const [loading, setLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState({ online: true, source: 'SUSALUD Open Data Cache (Oficial)' });

  const loadData = async () => {
    setLoading(true);
    const result = await fetchSusaludApiData({ 
      filters: { ...periodFilters, search: searchQuery }, 
      useLiveApi 
    });

    if (result.data) {
      setClinics(result.data);
    }
    if (result.summary) {
      setMetrics(result.summary);
    }
    setApiStatus({
      online: result.success,
      source: result.source
    });
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [useLiveApi, periodFilters, searchQuery]);

  return (
    <div className="app-container">
      {/* Top Navigation & Brand Header */}
      <Header 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        apiStatus={apiStatus}
        onRefresh={loadData}
      />

      {/* Time Period Filter Bar (Años, Trimestres, Meses) */}
      <PeriodFilterBar 
        periodFilters={periodFilters}
        setPeriodFilters={setPeriodFilters}
      />

      {/* Main Content Render */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '5rem', color: 'var(--text-muted)' }}>
          <RefreshCw className="spin" size={32} color="var(--primary)" />
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>Filtrando datos de negligencias del Observatorio SUSALUD...</p>
        </div>
      ) : (
        <>
          {/* Tab 1: Overview Dashboard */}
          {activeTab === 'overview' && (
            <div>
              <MetricsOverview summary={metrics} />

              <TopClinicsChart 
                clinics={clinics} 
                onSelectClinic={(clinic) => setSelectedClinic(clinic)} 
              />

              <div className="grid-cols-2">
                <DepartmentDistribution clinics={clinics} />
                <InfractionTypeChart clinics={clinics} />
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <ClinicsTable 
                  clinics={clinics}
                  onSelectClinic={(clinic) => setSelectedClinic(clinic)}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </div>
            </div>
          )}

          {/* Tab 2: Ranking Focus (Top 20) */}
          {activeTab === 'ranking' && (
            <div>
              <TopClinicsChart 
                clinics={clinics} 
                onSelectClinic={(clinic) => setSelectedClinic(clinic)} 
              />
              <div className="grid-cols-2">
                <InfractionTypeChart clinics={clinics} />
                <DepartmentDistribution clinics={clinics} />
              </div>
            </div>
          )}

          {/* Tab 3: Directory Table */}
          {activeTab === 'tabla' && (
            <div>
              <ClinicsTable 
                clinics={clinics}
                onSelectClinic={(clinic) => setSelectedClinic(clinic)}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
          )}

          {/* Tab 4: API Console */}
          {activeTab === 'api' && (
            <ApiConnectionConsole 
              useLiveApi={useLiveApi}
              setUseLiveApi={setUseLiveApi}
            />
          )}
        </>
      )}

      {/* Clinic Detail Modal Popup */}
      <ClinicDetailModal 
        clinic={selectedClinic} 
        onClose={() => setSelectedClinic(null)} 
      />

      {/* Footer */}
      <footer style={{
        marginTop: '3.5rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid var(--border-color)',
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        fontSize: '0.8rem',
        color: 'var(--text-subtle)'
      }}>
        <div>
          © 2026 Observatorio de Salud y Datos Abiertos del Perú • Fuentes: <strong>SUSALUD / RENIPRESS</strong>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <span>Línea Gratuita de Atención: 113 (Opción 7)</span>
          <span>•</span>
          <span>Portal Oficial: gob.pe/susalud</span>
        </div>
      </footer>
    </div>
  );
}
