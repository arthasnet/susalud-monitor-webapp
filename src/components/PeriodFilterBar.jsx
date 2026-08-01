import React from 'react';
import { Calendar, Filter, Clock, RotateCcw } from 'lucide-react';
import { ANIOS_DISPONIBLES, TRIMESTRES_DISPONIBLES, MESES_DISPONIBLES } from '../data/susaludMockData';

export default function PeriodFilterBar({ periodFilters, setPeriodFilters }) {
  const handleAnioChange = (e) => {
    setPeriodFilters(prev => ({ ...prev, anio: e.target.value }));
  };

  const handleTrimestreChange = (e) => {
    setPeriodFilters(prev => ({ ...prev, trimestre: e.target.value }));
  };

  const handleMesChange = (e) => {
    setPeriodFilters(prev => ({ ...prev, mes: e.target.value }));
  };

  const resetPeriodFilters = () => {
    setPeriodFilters({ anio: 'ALL', trimestre: 'ALL', mes: 'ALL' });
  };

  const isFiltered = periodFilters.anio !== 'ALL' || periodFilters.trimestre !== 'ALL' || periodFilters.mes !== 'ALL';

  const getActivePeriodLabel = () => {
    const parts = [];
    if (periodFilters.anio !== 'ALL') parts.push(`Año ${periodFilters.anio}`);
    else parts.push('Todos los Años');

    if (periodFilters.trimestre !== 'ALL') {
      const q = TRIMESTRES_DISPONIBLES.find(t => t.id === periodFilters.trimestre);
      if (q) parts.push(q.label);
    }

    if (periodFilters.mes !== 'ALL') {
      const m = MESES_DISPONIBLES.find(m => m.id === Number(periodFilters.mes));
      if (m) parts.push(`Mes: ${m.label}`);
    }

    return parts.join(' • ');
  };

  return (
    <div style={{
      background: 'rgba(19, 27, 46, 0.95)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(0, 242, 254, 0.25)',
      borderRadius: '14px',
      padding: '1rem 1.25rem',
      marginBottom: '1.5rem',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      {/* Title & Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '10px',
          background: 'rgba(0, 242, 254, 0.12)',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--primary)'
        }}>
          <Calendar size={20} />
        </div>
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
            Filtro Temporal de Negligencias
          </div>
          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#FFF', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Período:</span>
            <span style={{ color: 'var(--primary)' }}>{getActivePeriodLabel()}</span>
          </div>
        </div>
      </div>

      {/* Dropdown Filters (Año, Trimestre, Mes) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
        {/* Año Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>Año:</label>
          <select 
            className="input-field"
            value={periodFilters.anio}
            onChange={handleAnioChange}
            style={{ padding: '0.4rem 0.7rem', fontSize: '0.82rem', width: 'auto', background: '#0F172A' }}
          >
            <option value="ALL">Todos los Años</option>
            {ANIOS_DISPONIBLES.map(a => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>

        {/* Trimestre Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>Trimestre:</label>
          <select 
            className="input-field"
            value={periodFilters.trimestre}
            onChange={handleTrimestreChange}
            style={{ padding: '0.4rem 0.7rem', fontSize: '0.82rem', width: 'auto', background: '#0F172A' }}
          >
            {TRIMESTRES_DISPONIBLES.map(t => (
              <option key={t.id} value={t.id}>{t.label}</option>
            ))}
          </select>
        </div>

        {/* Mes Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>Mes:</label>
          <select 
            className="input-field"
            value={periodFilters.mes}
            onChange={handleMesChange}
            style={{ padding: '0.4rem 0.7rem', fontSize: '0.82rem', width: 'auto', background: '#0F172A' }}
          >
            {MESES_DISPONIBLES.map(m => (
              <option key={m.id} value={m.id}>{m.label}</option>
            ))}
          </select>
        </div>

        {/* Reset button if filtered */}
        {isFiltered && (
          <button 
            className="btn btn-secondary" 
            onClick={resetPeriodFilters}
            style={{ padding: '0.4rem 0.75rem', fontSize: '0.78rem', color: 'var(--danger)', borderColor: 'rgba(255, 75, 114, 0.3)' }}
          >
            <RotateCcw size={13} /> Limpiar Filtros
          </button>
        )}
      </div>
    </div>
  );
}
