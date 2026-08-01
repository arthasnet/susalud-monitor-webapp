import React, { useState } from 'react';
import { Database, Play, CheckCircle2, XCircle, Clock, Code, Server, Info } from 'lucide-react';
import { testSusaludEndpoint } from '../services/susaludApi';

export default function ApiConnectionConsole({ useLiveApi, setUseLiveApi }) {
  const [selectedEndpoint, setSelectedEndpoint] = useState('https://www.datosabiertos.gob.pe/api/3/action/package_search?q=susalud');
  const [customQuery, setCustomQuery] = useState('reclamos');
  const [testResult, setTestResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTestEndpoint = async () => {
    setLoading(true);
    setTestResult(null);
    const result = await testSusaludEndpoint(`${selectedEndpoint}&q=${encodeURIComponent(customQuery)}`);
    setTestResult(result);
    setLoading(false);
  };

  return (
    <div className="glass-card">
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Database size={22} color="var(--primary)" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700' }}>
              Consola de Integración y Diagnóstico API de SUSALUD
            </h2>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            Prueba de consumo en tiempo real de los servicios y datasets CKAN de la Superintendencia Nacional de Salud.
          </p>
        </div>

        {/* Live / Cache Switcher */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          background: 'rgba(255, 255, 255, 0.04)',
          padding: '0.5rem 1rem',
          borderRadius: '10px',
          border: '1px solid var(--border-color)'
        }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>Motor de Datos Activo:</span>
          <button
            className={`btn ${!useLiveApi ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setUseLiveApi(false)}
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
          >
            Dataset Oficial Enriquecido
          </button>
          <button
            className={`btn ${useLiveApi ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setUseLiveApi(true)}
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
          >
            Live CKAN Fetch
          </button>
        </div>
      </div>

      {/* Endpoint Selector Bar */}
      <div style={{
        background: 'rgba(11, 15, 23, 0.9)',
        padding: '1.25rem',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        marginBottom: '1.5rem'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr auto', gap: '1rem', alignItems: 'end' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
              URL de Endpoint API SUSALUD (CKAN Standard):
            </label>
            <select
              className="input-field"
              value={selectedEndpoint}
              onChange={(e) => setSelectedEndpoint(e.target.value)}
              style={{ fontSize: '0.85rem' }}
            >
              <option value="https://www.datosabiertos.gob.pe/api/3/action/package_search?type=dataset">
                https://www.datosabiertos.gob.pe/api/3/action/package_search (Gob.pe API)
              </option>
              <option value="http://datos.susalud.gob.pe/api/3/action/package_search?type=dataset">
                http://datos.susalud.gob.pe/api/3/action/package_search (SUSALUD Direct API)
              </option>
              <option value="https://www.datosabiertos.gob.pe/api/3/action/datastore_search">
                https://www.datosabiertos.gob.pe/api/3/action/datastore_search (Datastore API)
              </option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
              Parámetro de búsqueda `q`:
            </label>
            <input 
              type="text" 
              className="input-field"
              value={customQuery}
              onChange={(e) => setCustomQuery(e.target.value)}
              placeholder="susalud, reclamos, ipress..."
            />
          </div>

          <button 
            className="btn btn-primary" 
            onClick={handleTestEndpoint}
            disabled={loading}
            style={{ height: '38px', minWidth: '140px', justifyContent: 'center' }}
          >
            {loading ? <Clock className="spin" size={16} /> : <Play size={16} />}
            {loading ? 'Consultando...' : 'Ejecutar GET'}
          </button>
        </div>
      </div>

      {/* Response Status Panel */}
      {testResult && (
        <div style={{ marginBottom: '1.5rem', animation: 'fadeIn 0.2s' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem',
            borderRadius: '10px',
            background: testResult.ok ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 75, 114, 0.1)',
            border: `1px solid ${testResult.ok ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255, 75, 114, 0.3)'}`,
            marginBottom: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {testResult.ok ? <CheckCircle2 size={24} color="var(--success)" /> : <XCircle size={24} color="var(--danger)" />}
              <div>
                <strong style={{ color: testResult.ok ? 'var(--success)' : 'var(--danger)', fontSize: '0.95rem' }}>
                  {testResult.ok ? `HTTP 200 OK (${testResult.statusText})` : `Petición Completada - Nota de Conectividad HTTP ${testResult.status}`}
                </strong>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {testResult.error || 'Respuesta válida obtenida exitosamente del servidor.'}
                </p>
              </div>
            </div>
            <div style={{ fontSize: '0.82rem', fontFamily: 'monospace', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Clock size={14} /> Latencia: {testResult.latencyMs} ms
            </div>
          </div>

          {/* JSON Payload Output */}
          <div style={{ background: '#070B12', borderRadius: '10px', padding: '1rem', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--primary)', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Code size={14} /> Respuesta JSON de la API
              </span>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Content-Type: application/json</span>
            </div>
            <pre style={{
              fontFamily: 'Consolas, Monaco, monospace',
              fontSize: '0.78rem',
              color: '#A7F3D0',
              maxHeight: '280px',
              overflowY: 'auto',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all'
            }}>
              {JSON.stringify(testResult.data || { info: testResult.error, tip: "Las APIs gubernamentales suelen requerir proxy backend o habilitación de CORS para consumo directo desde el cliente web." }, null, 2)}
            </pre>
          </div>
        </div>
      )}

      {/* Info Notice */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        padding: '0.85rem 1rem',
        background: 'rgba(0, 242, 254, 0.05)',
        border: '1px solid rgba(0, 242, 254, 0.2)',
        borderRadius: '10px',
        fontSize: '0.8rem',
        color: 'var(--text-muted)'
      }}>
        <Info size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong style={{ color: '#FFF' }}>Transparencia y Seguridad de Datos:</strong> Los datos presentados combinan las resoluciones públicas sancionadoras del Registro de Sanciones Firmes de SUSALUD y la Plataforma Nacional de Datos Abiertos del Perú.
        </div>
      </div>
    </div>
  );
}
