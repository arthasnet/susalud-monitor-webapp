import React from 'react';
import { ShieldAlert, AlertTriangle, Scale, DollarSign, Building2 } from 'lucide-react';

export default function MetricsOverview({ summary }) {
  const uitFormatted = new Intl.NumberFormat('es-PE', { maximumFractionDigits: 1 }).format(summary.multasTotalesUIT);
  const solesFormatted = new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN', maximumFractionDigits: 0 })
    .format(summary.multasTotalesUIT * summary.uitValorSol);

  return (
    <div className="grid-cols-4" style={{ marginBottom: '1.5rem' }}>
      {/* Metric 1: Total Denuncias Negligencia */}
      <div className="glass-card" style={{ borderLeft: '4px solid var(--danger)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
              Casos de Negligencia
            </span>
            <div style={{ fontSize: '2.1rem', fontWeight: '800', color: '#FFF', margin: '0.2rem 0' }}>
              {summary.totalNegligenciasConfirmadas}
            </div>
            <span className="badge badge-danger">
              <ShieldAlert size={12} /> Alta Prioridad SUSALUD
            </span>
          </div>
          <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'var(--danger-bg)', color: 'var(--danger)' }}>
            <AlertTriangle size={24} />
          </div>
        </div>
      </div>

      {/* Metric 2: Sanciones Impuestas */}
      <div className="glass-card" style={{ borderLeft: '4px solid var(--warning)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
              Sanciones Firmes
            </span>
            <div style={{ fontSize: '2.1rem', fontWeight: '800', color: '#FFF', margin: '0.2rem 0' }}>
              {summary.totalSancionesImpuestas}
            </div>
            <span className="badge badge-warning">
              <Scale size={12} /> Resoluciones Firmes
            </span>
          </div>
          <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'var(--warning-bg)', color: 'var(--warning)' }}>
            <Scale size={24} />
          </div>
        </div>
      </div>

      {/* Metric 3: Multas Acumuladas UIT */}
      <div className="glass-card" style={{ borderLeft: '4px solid var(--primary)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
              Multas Acumuladas
            </span>
            <div style={{ fontSize: '1.9rem', fontWeight: '800', color: 'var(--primary)', margin: '0.2rem 0' }}>
              {uitFormatted} <span style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>UIT</span>
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Aproximadamente {solesFormatted}
            </span>
          </div>
          <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(0, 242, 254, 0.12)', color: 'var(--primary)' }}>
            <DollarSign size={24} />
          </div>
        </div>
      </div>

      {/* Metric 4: Total Reclamos Atendidos */}
      <div className="glass-card" style={{ borderLeft: '4px solid var(--info)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
              Total Reclamos Registrados
            </span>
            <div style={{ fontSize: '2.1rem', fontWeight: '800', color: '#FFF', margin: '0.2rem 0' }}>
              {summary.totalReclamosNacional}
            </div>
            <span className="badge badge-info">
              <Building2 size={12} /> IPRESS Privadas
            </span>
          </div>
          <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'var(--info-bg)', color: 'var(--info)' }}>
            <Building2 size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
