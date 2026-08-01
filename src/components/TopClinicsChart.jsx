import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell, 
  CartesianGrid 
} from 'recharts';
import { ShieldAlert, ArrowUpDown, Info, ListOrdered } from 'lucide-react';

export default function TopClinicsChart({ clinics, onSelectClinic }) {
  const [sortKey, setSortKey] = useState('negligenciasCount');
  const [topLimit, setTopLimit] = useState(20); // Default to Top 20 as requested!

  // Ordenar clínicas según el filtro seleccionado y limitar por topLimit
  const sortedClinics = [...clinics]
    .sort((a, b) => b[sortKey] - a[sortKey])
    .slice(0, topLimit);

  const getBarColor = (index, value) => {
    if (sortKey === 'negligenciasCount') {
      if (index < 5) return '#FF4B72';  // Top 5 Red/Rose
      if (index < 10) return '#F59E0B'; // Top 6-10 Amber
      if (index < 15) return '#00F2FE'; // Top 11-15 Cyan
      return '#3B82F6';                // Top 16-20 Blue
    }
    if (sortKey === 'multasUIT') return '#00F2FE';
    return '#3B82F6';
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={{
          background: '#0F172A',
          border: '1px solid rgba(0, 242, 254, 0.4)',
          borderRadius: '10px',
          padding: '0.85rem 1.1rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
          color: '#FFF',
          maxWidth: '320px'
        }}>
          <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#00F2FE', marginBottom: '0.3rem' }}>
            {data.nombre}
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            {data.distrito}, {data.departamento} • Categoría {data.categoria}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.82rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--danger)', fontWeight: 600 }}>Denuncias por Negligencia:</span>
              <strong style={{ color: '#FFF' }}>{data.negligenciasCount}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--warning)' }}>Sanciones Firmes:</span>
              <strong>{data.sancionesCount}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--primary)' }}>Multas Acumuladas:</span>
              <strong>{data.multasUIT} UIT</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Total Reclamos:</span>
              <span>{data.reclamosTotales}</span>
            </div>
          </div>
          <div style={{ marginTop: '0.6rem', fontSize: '0.7rem', color: '#00F2FE', textAlign: 'right', fontStyle: 'italic' }}>
            Haz clic para ver el expediente completo →
          </div>
        </div>
      );
    }
    return null;
  };

  // Dynamic height based on number of clinics shown
  const chartHeight = Math.max(450, sortedClinics.length * 34);

  return (
    <div className="glass-card" style={{ marginBottom: '1.5rem' }}>
      {/* Header Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldAlert size={22} color="var(--danger)" />
            <h2 style={{ fontSize: '1.3rem', fontWeight: '800' }}>
              Top {sortedClinics.length} Clínicas con Más Registros de Negligencias y Sanciones
            </h2>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            Reporte de clasificación de establecimientos privados de salud según resoluciones e informes de SUSALUD.
          </p>
        </div>

        {/* Sort & Quantity Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
          {/* Top Quantity Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <ListOrdered size={15} color="var(--primary)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Mostrar:</span>
            <select
              className="input-field"
              value={topLimit}
              onChange={(e) => setTopLimit(Number(e.target.value))}
              style={{ padding: '0.4rem 0.6rem', fontSize: '0.82rem', width: 'auto' }}
            >
              <option value={5}>Top 5</option>
              <option value={10}>Top 10</option>
              <option value={20}>Top 20</option>
              <option value={50}>Todas las IPRESS</option>
            </select>
          </div>

          {/* Sort Key Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <ArrowUpDown size={15} color="var(--text-muted)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Ordenar por:</span>
            <select 
              className="input-field" 
              value={sortKey} 
              onChange={(e) => setSortKey(e.target.value)}
              style={{ padding: '0.4rem 0.6rem', fontSize: '0.82rem', width: 'auto' }}
            >
              <option value="negligenciasCount">Negligencias Médicas</option>
              <option value="multasUIT">Multas en UIT</option>
              <option value="sancionesCount">Sanciones Firmes</option>
              <option value="reclamosTotales">Total de Reclamos</option>
            </select>
          </div>
        </div>
      </div>

      {/* Recharts Bar Chart */}
      <div style={{ width: '100%', height: chartHeight }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sortedClinics}
            layout="vertical"
            margin={{ top: 10, right: 35, left: 160, bottom: 10 }}
            onClick={(state) => {
              if (state && state.activePayload && state.activePayload.length) {
                onSelectClinic(state.activePayload[0].payload);
              }
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" horizontal={false} />
            <XAxis 
              type="number" 
              stroke="var(--text-muted)" 
              fontSize={12} 
              tickLine={false} 
            />
            <YAxis 
              dataKey="nombre" 
              type="category" 
              stroke="var(--text-main)" 
              fontSize={12} 
              tickLine={false} 
              width={150}
              tick={({ x, y, payload }) => (
                <g transform={`translate(${x},${y})`}>
                  <text 
                    x={-8} 
                    y={4} 
                    textAnchor="end" 
                    fill="#F1F5F9" 
                    fontSize={11.5} 
                    fontWeight={500}
                    style={{ cursor: 'pointer' }}
                  >
                    {payload.value.length > 24 ? `${payload.value.substring(0, 22)}...` : payload.value}
                  </text>
                </g>
              )}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255, 255, 255, 0.03)' }} />
            <Bar 
              dataKey={sortKey} 
              radius={[0, 8, 8, 0]} 
              barSize={20}
              style={{ cursor: 'pointer' }}
            >
              {sortedClinics.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={getBarColor(index, entry[sortKey])} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend & Note */}
      <div style={{
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        marginTop: '1rem',
        paddingTop: '0.8rem',
        borderTop: '1px solid var(--border-color)',
        fontSize: '0.78rem',
        color: 'var(--text-muted)',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }}>
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: 12, height: 12, borderRadius: 3, background: '#FF4B72' }}></span>
            <span>Riesgo Crítico (Top 1-5)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: 12, height: 12, borderRadius: 3, background: '#F59E0B' }}></span>
            <span>Riesgo Alto (Top 6-10)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: 12, height: 12, borderRadius: 3, background: '#00F2FE' }}></span>
            <span>Riesgo Moderado (Top 11-15)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: 12, height: 12, borderRadius: 3, background: '#3B82F6' }}></span>
            <span>Supervisión Normal (Top 16-20)</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <Info size={14} color="var(--primary)" />
          <span>Haz clic en cualquier barra para ver el expediente completo</span>
        </div>
      </div>
    </div>
  );
}
