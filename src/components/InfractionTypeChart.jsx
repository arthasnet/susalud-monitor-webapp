import React from 'react';
import { TIPOS_INFRACCION_INFO } from '../data/susaludMockData';
import { Activity } from 'lucide-react';

export default function InfractionTypeChart({ clinics }) {
  // Sumar desglose de infracciones
  const totals = {
    malaPraxisQuirurgica: 0,
    retrasoEmergencia: 0,
    diagnosticoErroneo: 0,
    faltaInsumosEquipos: 0,
    cobrosIndebidos: 0
  };

  clinics.forEach(c => {
    if (c.desgloseInfracciones) {
      totals.malaPraxisQuirurgica += c.desgloseInfracciones.malaPraxisQuirurgica || 0;
      totals.retrasoEmergencia += c.desgloseInfracciones.retrasoEmergencia || 0;
      totals.diagnosticoErroneo += c.desgloseInfracciones.diagnosticoErroneo || 0;
      totals.faltaInsumosEquipos += c.desgloseInfracciones.faltaInsumosEquipos || 0;
      totals.cobrosIndebidos += c.desgloseInfracciones.cobrosIndebidos || 0;
    }
  });

  const totalCasos = Object.values(totals).reduce((a, b) => a + b, 0);

  const items = Object.keys(totals).map(key => ({
    key,
    count: totals[key],
    percentage: Math.round((totals[key] / totalCasos) * 100),
    label: TIPOS_INFRACCION_INFO[key].label,
    color: TIPOS_INFRACCION_INFO[key].color
  })).sort((a, b) => b.count - a.count);

  return (
    <div className="glass-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <Activity size={20} color="var(--danger)" />
        <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>
          Tipos de Negligencia e Infracciones Más Recurrentes
        </h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
        {items.map(item => (
          <div key={item.key}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.3rem' }}>
              <span style={{ fontWeight: 500, color: 'var(--text-main)' }}>{item.label}</span>
              <span style={{ color: item.color, fontWeight: 700 }}>
                {item.count} casos ({item.percentage}%)
              </span>
            </div>
            {/* Progress Bar Container */}
            <div style={{
              width: '100%',
              height: '8px',
              background: 'rgba(255, 255, 255, 0.06)',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${item.percentage}%`,
                height: '100%',
                background: item.color,
                borderRadius: '4px',
                transition: 'width 0.6s ease'
              }} />
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '1.25rem',
        padding: '0.75rem',
        background: 'rgba(255, 75, 114, 0.08)',
        borderRadius: '8px',
        border: '1px solid rgba(255, 75, 114, 0.2)',
        fontSize: '0.76rem',
        color: 'var(--text-muted)'
      }}>
        <strong style={{ color: 'var(--danger)' }}>Nota de Calificación SUSALUD:</strong> La <em>Mala Praxis Quirúrgica</em> representa la principal causa de sanciones firmes con multas superiores a 30 UIT.
      </div>
    </div>
  );
}
