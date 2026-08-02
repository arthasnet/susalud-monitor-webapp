# Sistema de Diseño Visual & UX - Observatorio SUSALUD Digital

Este documento especifica la guía de estilos visuales, tokens CSS, componentes UI y estética **Dark Mode Glassmorphic** utilizada en la aplicación.

---

## 🎨 Paleta de Colores y Tokens CSS

El sistema de diseño utiliza variables CSS con soporte nativo de temas.

### Primary & Accent Colors
- **Cyan Neon (`--primary`)**: `#00F2FE` (Gradients: `linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)`)
- **Blue Sapphire (`--secondary`)**: `#3B82F6`

### Status Badges & Indicators
- **Danger / Crítico (`--danger`)**: `#FF4B72` (Background: `rgba(255, 75, 114, 0.12)`)
- **Warning / Alto (`--warning`)**: `#F59E0B` (Background: `rgba(245, 158, 11, 0.12)`)
- **Success / Bajo (`--success`)**: `#10B981` (Background: `rgba(16, 185, 129, 0.12)`)
- **Info / Neutro (`--info`)**: `#06B6D4` (Background: `rgba(6, 182, 212, 0.12)`)

---

## 🖼️ Efecto Glassmorphism & Micro-animaciones

### CSS Glassmorphic Card Spec
```css
.glass-card {
  background: #131B2E;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.25s ease-in-out;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
}

.glass-card:hover {
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}
```

---

## 📈 Estilización de Gráficos Interactivos (Recharts)

1. **TopClinicsChart**: Bar Chart horizontal con degradados dinámicos Cyan-to-Blue, bordes redondeados y tooltips oscuros personalizados.
2. **DepartmentDistribution**: Pie Chart con anillo dona (Donut Chart) e indicadores contextuales.
3. **InfractionTypeChart**: Bar Chart vertical con etiquetas anguladas y formato de leyendas claras.
