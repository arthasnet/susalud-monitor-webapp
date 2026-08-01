import React from 'react';
import { Activity, ShieldAlert, Database, Search, RefreshCw, FileText } from 'lucide-react';

export default function Header({ 
  activeTab, 
  setActiveTab, 
  searchQuery, 
  setSearchQuery, 
  apiStatus,
  onRefresh
}) {
  return (
    <header style={{ marginBottom: '2rem' }}>
      {/* Top Banner */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        paddingBottom: '1.25rem',
        borderBottom: '1px solid var(--border-color)'
      }}>
        {/* Logo & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.15), rgba(255, 75, 114, 0.15))',
            border: '1px solid rgba(0, 242, 254, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-glow)'
          }}>
            <ShieldAlert size={28} color="#00F2FE" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span className="badge badge-info" style={{ fontSize: '0.7rem' }}>
                PERÚ • SUSALUD DATOS ABIERTOS
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                <span className="pulse-dot online"></span>
                <span>API Status: {apiStatus.online ? 'En Línea' : 'Cache Híbrido'}</span>
              </div>
            </div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: '800', marginTop: '0.2rem', color: '#FFF' }}>
              Observatorio de Sanciones y Negligencias Médicas
            </h1>
          </div>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Search bar */}
          <div style={{ position: 'relative', width: '260px' }}>
            <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              className="input-field"
              placeholder="Buscar clínica o IPRESS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ paddingLeft: '2.2rem', fontSize: '0.85rem' }}
            />
          </div>

          <button 
            className="btn btn-secondary" 
            onClick={onRefresh}
            title="Actualizar datos de API"
            style={{ padding: '0.6rem 0.9rem' }}
          >
            <RefreshCw size={16} />
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <nav className="tabs-header" style={{ marginTop: '1.25rem' }}>
        <button 
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <Activity size={18} />
          Dashboard General
        </button>
        <button 
          className={`tab-btn ${activeTab === 'ranking' ? 'active' : ''}`}
          onClick={() => setActiveTab('ranking')}
        >
          <ShieldAlert size={18} />
          Ranking de Negligencias
        </button>
        <button 
          className={`tab-btn ${activeTab === 'tabla' ? 'active' : ''}`}
          onClick={() => setActiveTab('tabla')}
        >
          <FileText size={18} />
          Directorio IPRESS ({searchQuery ? 'Filtrado' : '12'})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'api' ? 'active' : ''}`}
          onClick={() => setActiveTab('api')}
        >
          <Database size={18} />
          Conexión API Live
        </button>
      </nav>
    </header>
  );
}
