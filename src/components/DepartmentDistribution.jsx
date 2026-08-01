import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { MapPin } from 'lucide-react';

const REGION_COLORS = {
  Lima: '#00F2FE',
  Arequipa: '#FF4B72',
  'La Libertad': '#F59E0B',
  Piura: '#10B981',
  Cusco: '#A855F7',
  Lambayeque: '#3B82F6',
  Callao: '#06B6D4'
};

export default function DepartmentDistribution({ clinics }) {
  // Agrupar denuncias de negligencia por departamento
  const departmentMap = {};
  clinics.forEach(c => {
    departmentMap[c.departamento] = (departmentMap[c.departamento] || 0) + c.negligenciasCount;
  });

  const chartData = Object.keys(departmentMap).map(dept => ({
    name: dept,
    value: departmentMap[dept],
    color: REGION_COLORS[dept] || '#3B82F6'
  })).sort((a, b) => b.value - a.value);

  const totalNegligencias = chartData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="glass-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <MapPin size={20} color="var(--primary)" />
        <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>
          Distribución por Departamentos (Perú)
        </h3>
      </div>

      <div style={{ width: '100%', height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value} casos (${Math.round((value / totalNegligencias) * 100)}%)`, 'Negligencias']}
              contentStyle={{
                background: '#0F172A',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                borderRadius: '8px',
                color: '#FFF',
                fontSize: '0.82rem'
              }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36} 
              formatter={(value) => <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginTop: '0.75rem', fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center' }}>
        Lima y Arequipa concentran el <strong>{Math.round(((departmentMap['Lima'] + departmentMap['Arequipa']) / totalNegligencias) * 100)}%</strong> del total de negligencias registradas.
      </div>
    </div>
  );
}
