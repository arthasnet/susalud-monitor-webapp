import React from 'react';
import { X, ShieldAlert, FileText, AlertCircle, Building2, MapPin, Scale, DollarSign, Calendar } from 'lucide-react';
import { TIPOS_INFRACCION_INFO } from '../data/susaludMockData';

export default function ClinicDetailModal({ clinic, onClose }) {
  if (!clinic) return null;

  const totalSoles = clinic.multasUIT * 5350; // UIT ~ 5,350 Soles

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="glass-card" 
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          border: '1px solid rgba(0, 242, 254, 0.4)',
          boxShadow: 'var(--shadow-danger)',
          position: 'relative'
        }}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            right: '1.25rem',
            top: '1.25rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: 'none',
            color: 'var(--text-muted)',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--primary)' }}>
              CÓDIGO RENIPRESS: {clinic.id}
            </span>
            <span className="badge badge-danger">
              Nivel de Riesgo: {clinic.nivelRiesgo}
            </span>
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#FFF' }}>
            {clinic.nombre}
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
            <Building2 size={14} /> {clinic.razonSocial} • <MapPin size={14} /> {clinic.distrito}, {clinic.departamento} (Categoría {clinic.categoria})
          </p>
        </div>

        {/* Grid Stats */}
        <div className="grid-cols-4" style={{ marginBottom: '1.5rem' }}>
          <div style={{ background: 'rgba(255, 75, 114, 0.1)', padding: '0.85rem', borderRadius: '10px', border: '1px solid rgba(255, 75, 114, 0.25)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--danger)', fontWeight: 600 }}>Negligencias Confirmadas</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFF' }}>{clinic.negligenciasCount}</div>
          </div>
          <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '0.85rem', borderRadius: '10px', border: '1px solid rgba(245, 158, 11, 0.25)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--warning)', fontWeight: 600 }}>Sanciones Firmes</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFF' }}>{clinic.sancionesCount}</div>
          </div>
          <div style={{ background: 'rgba(0, 242, 254, 0.1)', padding: '0.85rem', borderRadius: '10px', border: '1px solid rgba(0, 242, 254, 0.25)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600 }}>Multas Acumuladas</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary)' }}>{clinic.multasUIT} UIT</div>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '0.85rem', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Total Reclamos</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFF' }}>{clinic.reclamosTotales}</div>
          </div>
        </div>

        {/* Infraction Breakdown */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem', color: '#FFF', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <AlertCircle size={16} color="var(--warning)" /> Desglose de Infracciones Registradas en SUSALUD
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {clinic.desgloseInfracciones && Object.keys(clinic.desgloseInfracciones).map(key => {
              const count = clinic.desgloseInfracciones[key];
              const info = TIPOS_INFRACCION_INFO[key] || { label: key, color: '#00F2FE' };
              return (
                <div key={key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0.85rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '6px', border: '1px solid var(--border-color)', fontSize: '0.82rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: info.color }}></span>
                    <span>{info.label}</span>
                  </div>
                  <strong style={{ color: '#FFF' }}>{count} denuncias</strong>
                </div>
              );
            })}
          </div>
        </div>

        {/* Resolutions */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem', color: '#FFF', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Scale size={16} color="var(--primary)" /> Historial de Resoluciones Sancionadoras Destacadas
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {clinic.resolucionesDestacadas && clinic.resolucionesDestacadas.map((res, i) => (
              <div key={i} style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                  <span style={{ fontWeight: 700, color: 'var(--primary)', fontFamily: 'monospace', fontSize: '0.85rem' }}>
                    {res.nro}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Calendar size={12} /> {res.fecha}
                  </span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--danger)', fontWeight: 600, marginBottom: '0.2rem' }}>
                  Sanción: {res.sancion}
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Motivo: {res.motivo}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
          <button className="btn btn-secondary" onClick={onClose}>
            Cerrar Ficha
          </button>
        </div>
      </div>
    </div>
  );
}
