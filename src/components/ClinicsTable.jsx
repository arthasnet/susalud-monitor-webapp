import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  Filter, 
  ExternalLink, 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle,
  FileSpreadsheet,
  Download
} from 'lucide-react';

export default function ClinicsTable({ clinics, onSelectClinic, searchQuery, setSearchQuery }) {
  const [selectedDept, setSelectedDept] = useState('ALL');
  const [selectedRisk, setSelectedRisk] = useState('ALL');

  // Filtrado de la tabla
  const filteredClinics = clinics.filter(c => {
    const matchesSearch = 
      c.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.razonSocial.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.distrito.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDept = selectedDept === 'ALL' || c.departamento === selectedDept;
    const matchesRisk = selectedRisk === 'ALL' || c.nivelRiesgo === selectedRisk;

    return matchesSearch && matchesDept && matchesRisk;
  });

  const getRiskBadge = (risk) => {
    switch (risk) {
      case 'Muy Alto':
        return <span className="badge badge-danger"><ShieldAlert size={12} /> Muy Alto</span>;
      case 'Alto':
        return <span className="badge badge-warning"><AlertTriangle size={12} /> Alto</span>;
      case 'Moderado':
        return <span className="badge badge-info">Moderado</span>;
      default:
        return <span className="badge badge-success"><CheckCircle size={12} /> Bajo</span>;
    }
  };

  const exportToCSV = () => {
    const headers = ["Código IPRESS", "Nombre", "Razón Social", "Departamento", "Distrito", "Categoría", "Negligencias", "Sanciones", "Multa (UIT)", "Nivel Riesgo"];
    const rows = filteredClinics.map(c => [
      c.id,
      `"${c.nombre}"`,
      `"${c.razonSocial}"`,
      c.departamento,
      c.distrito,
      c.categoria,
      c.negligenciasCount,
      c.sancionesCount,
      c.multasUIT,
      c.nivelRiesgo
    ]);
    
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `susalud_negligencias_clinicas_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="glass-card">
      {/* Table Bar Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Building2 size={20} color="var(--primary)" />
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700' }}>
              Directorio Nacional de IPRESS Sancionadas y Denunciadas
            </h3>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Mostrando {filteredClinics.length} de {clinics.length} registros de clínicas en el Perú.
          </p>
        </div>

        {/* Filters & Export */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {/* Department Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Filter size={14} color="var(--text-muted)" />
            <select 
              className="input-field"
              value={selectedDept} 
              onChange={(e) => setSelectedDept(e.target.value)}
              style={{ padding: '0.4rem 0.6rem', fontSize: '0.8rem', width: 'auto' }}
            >
              <option value="ALL">Todas las Regiones</option>
              <option value="Lima">Lima</option>
              <option value="Arequipa">Arequipa</option>
              <option value="La Libertad">La Libertad</option>
              <option value="Piura">Piura</option>
              <option value="Cusco">Cusco</option>
              <option value="Lambayeque">Lambayeque</option>
              <option value="Callao">Callao</option>
            </select>
          </div>

          {/* Risk Filter */}
          <select 
            className="input-field"
            value={selectedRisk} 
            onChange={(e) => setSelectedRisk(e.target.value)}
            style={{ padding: '0.4rem 0.6rem', fontSize: '0.8rem', width: 'auto' }}
          >
            <option value="ALL">Todos los Niveles de Riesgo</option>
            <option value="Muy Alto">Riesgo Muy Alto</option>
            <option value="Alto">Riesgo Alto</option>
            <option value="Moderado">Riesgo Moderado</option>
            <option value="Bajo">Riesgo Bajo</option>
          </select>

          <button className="btn btn-secondary" onClick={exportToCSV} style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}>
            <Download size={14} /> Exportar CSV
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div style={{ overflowX: 'auto', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ background: 'rgba(255, 255, 255, 0.03)', borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '0.85rem 1rem' }}>Código IPRESS</th>
              <th style={{ padding: '0.85rem 1rem' }}>Clínica / Establecimiento</th>
              <th style={{ padding: '0.85rem 1rem' }}>Ubicación</th>
              <th style={{ padding: '0.85rem 1rem' }}>Categoría</th>
              <th style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>Negligencias</th>
              <th style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>Sanciones</th>
              <th style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>Multas (UIT)</th>
              <th style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>Nivel Riesgo</th>
              <th style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {filteredClinics.length === 0 ? (
              <tr>
                <td colSpan={9} style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                  No se encontraron clínicas que coincidan con la búsqueda o filtros.
                </td>
              </tr>
            ) : (
              filteredClinics.map((clinic, index) => (
                <tr 
                  key={clinic.id}
                  style={{
                    borderBottom: '1px solid var(--border-color)',
                    background: index % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.015)',
                    transition: 'background 0.2s'
                  }}
                  className="table-row-hover"
                >
                  <td style={{ padding: '0.85rem 1rem', fontFamily: 'monospace', color: 'var(--primary)' }}>
                    {clinic.id}
                  </td>
                  <td style={{ padding: '0.85rem 1rem' }}>
                    <strong style={{ color: '#FFF', display: 'block' }}>{clinic.nombre}</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>{clinic.razonSocial}</span>
                  </td>
                  <td style={{ padding: '0.85rem 1rem' }}>
                    {clinic.distrito}, <span style={{ color: 'var(--text-muted)' }}>{clinic.departamento}</span>
                  </td>
                  <td style={{ padding: '0.85rem 1rem' }}>
                    <span style={{ padding: '0.2rem 0.5rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px', fontSize: '0.78rem' }}>
                      {clinic.categoria}
                    </span>
                  </td>
                  <td style={{ padding: '0.85rem 1rem', textAlign: 'center', fontWeight: '700', color: clinic.negligenciasCount > 25 ? 'var(--danger)' : 'var(--text-main)' }}>
                    {clinic.negligenciasCount}
                  </td>
                  <td style={{ padding: '0.85rem 1rem', textAlign: 'center', fontWeight: '600', color: 'var(--warning)' }}>
                    {clinic.sancionesCount}
                  </td>
                  <td style={{ padding: '0.85rem 1rem', textAlign: 'right', fontWeight: '700', color: 'var(--primary)' }}>
                    {clinic.multasUIT} UIT
                  </td>
                  <td style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>
                    {getRiskBadge(clinic.nivelRiesgo)}
                  </td>
                  <td style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>
                    <button 
                      className="btn btn-secondary" 
                      onClick={() => onSelectClinic(clinic)}
                      style={{ padding: '0.35rem 0.65rem', fontSize: '0.78rem' }}
                    >
                      Ver Ficha <ExternalLink size={12} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
