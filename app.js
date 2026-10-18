/**
 * FINORA — Plataforma Inteligente de Crédito y Cartera
 * Vanilla JavaScript Enterprise Engine
 */

// ==========================================================================
// STATE MANAGEMENT & MOCK DATABASE (COLOMBIA)
// ==========================================================================
const FinoraState = {
  currentView: 'overview',
  activePeriod: '30d',
  simulatedClientPortal: false,
  
  // Simulator State
  simulator: {
    monto: 3000000,
    meses: 6,
    tasaMensual: 0.0215 // 2.15% Mes Vencido
  },

  // Active item in drawers
  selectedSolicitud: null,
  selectedTransaction: null,
  selectedClient: null,

  // Datasets
  recentActivity: [
    { fecha: '02 Sep 2026', operacion: 'Desembolso', cliente: 'Carlos Rodríguez', monto: 2500000, estado: 'Completado', badge: 'badge-success' },
    { fecha: '02 Sep 2026', operacion: 'Recaudo', cliente: 'Laura Martínez', monto: 480000, estado: 'Conciliado', badge: 'badge-success' },
    { fecha: '01 Sep 2026', operacion: 'Solicitud', cliente: 'Andrés Gómez', monto: 4000000, estado: 'En revisión', badge: 'badge-warning' },
    { fecha: '01 Sep 2026', operacion: 'Recaudo', cliente: 'Camila Torres', monto: 320000, estado: 'Conciliado', badge: 'badge-success' },
    { fecha: '01 Sep 2026', operacion: 'Desembolso', cliente: 'Juan David Pérez', monto: 3500000, estado: 'Completado', badge: 'badge-success' }
  ],

  clientes: [
    { id: 1, nombre: 'Carlos Rodríguez', doc: '1.023.456.789', ciudad: 'Bogotá', creditosActivos: 1, cartera: 2400000, score: 812, estado: 'Activo', ultimoPago: '15 Ago 2026' },
    { id: 2, nombre: 'Laura Martínez', doc: '1.018.992.341', ciudad: 'Medellín', creditosActivos: 1, cartera: 4000000, score: 795, estado: 'Activo', ultimoPago: '02 Sep 2026' },
    { id: 3, nombre: 'Andrés Gómez', doc: '1.032.482.110', ciudad: 'Cali', creditosActivos: 1, cartera: 2800000, score: 680, estado: 'Mora (3d)', ultimoPago: '20 Ago 2026' },
    { id: 4, nombre: 'Camila Torres', doc: '1.015.674.892', ciudad: 'Barranquilla', creditosActivos: 2, cartera: 5100000, score: 840, estado: 'Activo', ultimoPago: '28 Ago 2026' },
    { id: 5, nombre: 'Juan David Pérez', doc: '1.020.891.234', ciudad: 'Bucaramanga', creditosActivos: 1, cartera: 1800000, score: 750, estado: 'Activo', ultimoPago: '01 Sep 2026' },
    { id: 6, nombre: 'Diana Marcela Morales', doc: '1.030.551.420', ciudad: 'Bogotá', creditosActivos: 1, cartera: 1900000, score: 710, estado: 'Mora (48d)', ultimoPago: '15 Jul 2026' },
    { id: 7, nombre: 'Felipe Castro', doc: '1.012.784.512', ciudad: 'Medellín', creditosActivos: 1, cartera: 3500000, score: 620, estado: 'Crítico (84d)', ultimoPago: '10 Jun 2026' }
  ],

  solicitudes: [
    { 
      id: 'FN-10492', cliente: 'Laura Martínez', doc: '1.018.992.341', monto: 4500000, plazo: 9, score: 812, ingresos: 3800000, estado: 'En revisión', fecha: '02 Sep 2026', riesgo: 'Riesgo bajo', recMonto: 4000000, recPlazo: 9,
      canal: 'App Android', canalIcon: 'smartphone', canalCompleto: 'App Móvil FINORA v2.4 (Android 14)',
      ciudad: 'Bogotá D.C.', ubicacion: 'Bogotá — Chapinero (Cra. 7 #72-41)', coords: '4.6533° N, -74.0588° W',
      dispositivo: 'Samsung Galaxy A54 5G', ip: '181.134.209.42', isp: 'Claro Telecomunicaciones Colombia'
    },
    { 
      id: 'FN-10491', cliente: 'Andrés Gómez', doc: '1.032.482.110', monto: 4000000, plazo: 6, score: 740, ingresos: 3200000, estado: 'En revisión', fecha: '01 Sep 2026', riesgo: 'Riesgo moderado', recMonto: 3500000, recPlazo: 6,
      canal: 'Portal Web', canalIcon: 'globe', canalCompleto: 'Portal Web FINORA (Chrome en Windows 11)',
      ciudad: 'Cali', ubicacion: 'Cali — San Fernando (Cl. 5 #38-12)', coords: '3.4372° N, -76.5225° W',
      dispositivo: 'Portátil HP Pavilion (Windows 11)', ip: '190.158.44.12', isp: 'EMCALI Telecomunicaciones'
    },
    { 
      id: 'FN-10490', cliente: 'Sandra Milena Rincón', doc: '1.019.448.291', monto: 2500000, plazo: 4, score: 695, ingresos: 2400000, estado: 'Nuevas', fecha: '02 Sep 2026', riesgo: 'Riesgo moderado', recMonto: 2000000, recPlazo: 4,
      canal: 'App iOS', canalIcon: 'smartphone', canalCompleto: 'App Móvil FINORA v2.4 (iOS 17.5)',
      ciudad: 'Medellín', ubicacion: 'Medellín — El Poblado (Cra. 43A #1-50)', coords: '6.2088° N, -75.5684° W',
      dispositivo: 'iPhone 13 (iOS 17.5.1)', ip: '186.84.102.19', isp: 'Tigo UNE Fibra'
    },
    { 
      id: 'FN-10489', cliente: 'Mateo Restrepo', doc: '1.038.991.023', monto: 6000000, plazo: 12, score: 850, ingresos: 6200000, estado: 'Aprobado', fecha: '31 Ago 2026', riesgo: 'Riesgo bajo', recMonto: 6000000, recPlazo: 12,
      canal: 'App Android', canalIcon: 'smartphone', canalCompleto: 'App Móvil FINORA v2.4 (Android 13)',
      ciudad: 'Barranquilla', ubicacion: 'Barranquilla — Alto Prado (Cl. 76 #54)', coords: '10.9988° N, -74.8081° W',
      dispositivo: 'Xiaomi Redmi Note 12 Pro', ip: '181.143.88.94', isp: 'Movistar Fibra Óptica'
    },
    { 
      id: 'FN-10488', cliente: 'Patricia Echeverri', doc: '1.022.664.190', monto: 1500000, plazo: 3, score: 520, ingresos: 1800000, estado: 'Rechazado', fecha: '30 Ago 2026', riesgo: 'Riesgo alto', recMonto: 0, recPlazo: 0,
      canal: 'Portal Web', canalIcon: 'globe', canalCompleto: 'Portal Web FINORA (Safari en Mac)',
      ciudad: 'Bucaramanga', ubicacion: 'Bucaramanga — Cabecera (Cra. 33 #48)', coords: '7.1193° N, -73.1227° W',
      dispositivo: 'MacBook Air M2 (macOS Sonoma)', ip: '190.25.177.30', isp: 'Claro Telecomunicaciones'
    },
    { 
      id: 'FN-10487', cliente: 'Gabriel Vega', doc: '1.014.229.810', monto: 3000000, plazo: 6, score: 710, ingresos: 2900000, estado: 'Pendiente', fecha: '29 Ago 2026', riesgo: 'Riesgo moderado', recMonto: 2500000, recPlazo: 6,
      canal: 'WhatsApp Bot', canalIcon: 'message-square', canalCompleto: 'Bot de Crédito WhatsApp FINORA',
      ciudad: 'Bogotá D.C.', ubicacion: 'Bogotá — Cedritos (Cl. 140 #11)', coords: '4.7214° N, -74.0322° W',
      dispositivo: 'Motorola Moto G54', ip: '181.129.50.211', isp: 'ETB Fibra Óptica'
    }
  ],

  creditos: [
    { id: '#FN-10482', cliente: 'Carlos Rodríguez', monto: 3000000, saldo: 2400000, cuotas: '8 / 12 pagadas', vencimiento: '15 Sep 2026', estado: 'Al día', badge: 'badge-success' },
    { id: '#FN-10480', cliente: 'Laura Martínez', monto: 4500000, saldo: 4000000, cuotas: '2 / 9 pagadas', vencimiento: '20 Sep 2026', estado: 'Al día', badge: 'badge-success' },
    { id: '#FN-10475', cliente: 'Andrés Gómez', monto: 3500000, saldo: 2800000, cuotas: '4 / 6 pagadas', vencimiento: '05 Sep 2026', estado: 'Próximo a vencer', badge: 'badge-warning' },
    { id: '#FN-10468', cliente: 'Diana Marcela Morales', monto: 3000000, saldo: 1900000, cuotas: '5 / 10 pagadas', vencimiento: '15 Jul 2026', estado: 'Mora 31-60', badge: 'badge-danger' },
    { id: '#FN-10452', cliente: 'Felipe Castro', monto: 4000000, saldo: 3500000, cuotas: '2 / 12 pagadas', vencimiento: '10 Jun 2026', estado: 'Crítico 60+', badge: 'badge-danger' },
    { id: '#FN-10430', cliente: 'Camila Torres', monto: 5500000, saldo: 4100000, cuotas: '6 / 12 pagadas', vencimiento: '18 Sep 2026', estado: 'Al día', badge: 'badge-success' }
  ],

  cartera: [
    { cliente: 'Carlos Rodríguez', credito: '#FN-10482', capital: 2400000, cuota: 285000, dias: 0, estado: 'Vigente', badge: 'badge-success', gestor: 'Andrea Salazar' },
    { cliente: 'Andrés Gómez', credito: '#FN-10475', capital: 2800000, cuota: 520000, dias: 3, estado: 'Próximo vencimiento', badge: 'badge-warning', gestor: 'Carlos Mendoza' },
    { cliente: 'Diana Marcela Morales', credito: '#FN-10468', capital: 1900000, cuota: 380000, dias: 48, estado: 'Mora', badge: 'badge-danger', gestor: 'Carlos Mendoza' },
    { cliente: 'Felipe Castro', credito: '#FN-10452', capital: 3500000, cuota: 410000, dias: 84, estado: 'Crítico', badge: 'badge-danger', gestor: 'Mariana López' },
    { cliente: 'Camila Torres', credito: '#FN-10430', capital: 4100000, cuota: 590000, dias: 0, estado: 'Vigente', badge: 'badge-success', gestor: 'Andrea Salazar' }
  ],

  recaudos: [
    { hora: '10:45 AM', cliente: 'Carlos Rodríguez', credito: '#FN-10482', monto: 285000, metodo: 'PSE', estado: 'Conciliado', badge: 'badge-success' },
    { hora: '10:22 AM', cliente: 'Laura Martínez', credito: '#FN-10480', monto: 480000, metodo: 'Nequi', estado: 'Conciliado', badge: 'badge-success' },
    { hora: '09:50 AM', cliente: 'Juan David Pérez', credito: '#FN-10412', monto: 320000, metodo: 'Transferencia', estado: 'Conciliado', badge: 'badge-success' },
    { hora: '09:15 AM', cliente: 'Gloria Patricia Ruiz', credito: '#FN-10465', monto: 410000, metodo: 'Efectivo', estado: 'Pendiente', badge: 'badge-warning' },
    { hora: '08:30 AM', cliente: 'Andrés Gómez', credito: '#FN-10475', monto: 520000, metodo: 'PSE', estado: 'En proceso', badge: 'badge-info' }
  ],

  conciliacion: [
    { id: 'TX-982341', fecha: '02 Sep 2026', tipo: 'Recaudo', cliente: 'Carlos Rodríguez', ref: 'REF-882193', esperado: 285000, recibido: 285000, diferencia: 0, estado: 'CONCILIADO', badge: 'badge-success' },
    { id: 'TX-982342', fecha: '02 Sep 2026', tipo: 'Recaudo', cliente: 'Laura Martínez', ref: 'REF-991204', esperado: 480000, recibido: 480000, diferencia: 0, estado: 'CONCILIADO', badge: 'badge-success' },
    { id: 'TX-982343', fecha: '02 Sep 2026', tipo: 'Recaudo', cliente: 'Andrés Gómez', ref: 'REF-331290', esperado: 520000, recibido: 510000, diferencia: 10000, estado: 'DIFERENCIA', badge: 'badge-warning' },
    { id: 'TX-982344', fecha: '02 Sep 2026', tipo: 'Recaudo', cliente: 'Carlos Mendoza', ref: 'REF-120938', esperado: 1200000, recibido: 0, diferencia: 1200000, estado: 'PENDIENTE', badge: 'badge-neutral' },
    { id: 'TX-982345', fecha: '01 Sep 2026', tipo: 'Dispersión', cliente: 'Camila Torres', ref: 'ACH-449102', esperado: 5500000, recibido: 5500000, diferencia: 0, estado: 'CONCILIADO', badge: 'badge-success' },
    { id: 'TX-982346', fecha: '01 Sep 2026', tipo: 'Recaudo', cliente: 'Felipe Castro', ref: 'REF-771829', esperado: 410000, recibido: 0, diferencia: 410000, estado: 'RECHAZADO', badge: 'badge-danger' }
  ],

  desembolsos: [
    { cliente: 'Laura Martínez', credito: 'FN-10492', monto: 4000000, banco: 'Bancolombia', cuenta: 'Ahorros ****3821', fecha: '02 Sep 2026', estado: 'Programado', badge: 'badge-warning' },
    { cliente: 'Camila Torres', credito: 'FN-10485', monto: 5000000, banco: 'Davivienda', cuenta: 'Ahorros ****9124', fecha: '02 Sep 2026', estado: 'Desembolsado', badge: 'badge-success' },
    { cliente: 'Mateo Restrepo', credito: 'FN-10489', monto: 6000000, banco: 'Bancolombia', cuenta: 'Corriente ****1092', fecha: '02 Sep 2026', estado: 'Procesando', badge: 'badge-info' },
    { cliente: 'Juan David Pérez', credito: 'FN-10481', monto: 2500000, banco: 'Nequi', cuenta: 'Billetera ****8812', fecha: '02 Sep 2026', estado: 'Desembolsado', badge: 'badge-success' },
    { cliente: 'Sandra Rincón', credito: 'FN-10478', monto: 1800000, banco: 'Nequi', cuenta: 'Billetera ****4491', fecha: '02 Sep 2026', estado: 'Fallido', badge: 'badge-danger' },
    { cliente: 'Andrea Salazar', credito: 'FN-10477', monto: 3500000, banco: 'BBVA', cuenta: 'Ahorros ****6701', fecha: '01 Sep 2026', estado: 'Desembolsado', badge: 'badge-success' }
  ]
};

// ==========================================================================
// UTILITIES: COLOMBIAN FINANCIAL FORMATTING
// ==========================================================================
function formatCOP(amount) {
  if (isNaN(amount) || amount === null) return '$0';
  // Formats as $18.450.000.000
  const formatted = Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `$${formatted}`;
}

function formatPercent(value) {
  return `${value.toFixed(2).replace('.', ',')}%`;
}

// ==========================================================================
// MAIN APPLICATION CONTROLLER
// ==========================================================================
const App = {
  charts: {},

  init() {
    this.bindEvents();
    this.renderAllTables();
    this.initCharts();
    this.updateSimulator();
    if (window.lucide) {
      lucide.createIcons();
    }
  },

  bindEvents() {
    // Navigation links
    document.querySelectorAll('.nav-link[data-view]').forEach(button => {
      button.addEventListener('click', (e) => {
        const view = button.getAttribute('data-view');
        this.navigateTo(view);
      });
    });

    // Sidebar collapse toggle
    const collapseBtn = document.getElementById('btn-collapse-sidebar');
    if (collapseBtn) {
      collapseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleSidebar();
      });
    }

    // Header toggle button (works on desktop and mobile)
    const headerToggleBtn = document.getElementById('header-sidebar-toggle');
    if (headerToggleBtn) {
      headerToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleSidebar();
      });
    }

    // Close mobile sidebar on clicking backdrop/body outside
    document.addEventListener('click', (e) => {
      const sidebar = document.getElementById('app-sidebar');
      const headerToggleBtn = document.getElementById('header-sidebar-toggle');
      if (window.innerWidth <= 900 && sidebar && sidebar.classList.contains('mobile-open')) {
        if (!sidebar.contains(e.target) && (!headerToggleBtn || !headerToggleBtn.contains(e.target))) {
          sidebar.classList.remove('mobile-open');
        }
      }
    });

    // Global escape key to close drawers and modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllDrawers();
        this.closeModals();
        this.closeDropdowns();
      }
    });

    // Auto-resize charts on window resize
    window.addEventListener('resize', () => {
      if (this.charts.mainOverview) this.charts.mainOverview.resize();
      if (this.charts.doughnut) this.charts.doughnut.resize();
      if (this.charts.carteraMora) this.charts.carteraMora.resize();
      if (this.charts.recaudosHourly) this.charts.recaudosHourly.resize();
    });
  },

  // Toggle Sidebar (both desktop collapse and mobile drawer)
  toggleSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    const backdrop = document.getElementById('sidebar-mobile-backdrop');
    if (!sidebar) return;

    if (window.innerWidth <= 900) {
      sidebar.classList.toggle('mobile-open');
      if (backdrop) {
        backdrop.classList.toggle('active', sidebar.classList.contains('mobile-open'));
      }
    } else {
      sidebar.classList.toggle('collapsed');
      if (backdrop) backdrop.classList.remove('active');
    }

    const isCollapsed = sidebar.classList.contains('collapsed');
    const collapseBtn = document.getElementById('btn-collapse-sidebar');
    if (collapseBtn) {
      collapseBtn.setAttribute('title', isCollapsed ? 'Expandir menú lateral' : 'Colapsar menú lateral');
    }

    // Resize charts after transition
    setTimeout(() => {
      if (this.charts.mainOverview) this.charts.mainOverview.resize();
      if (this.charts.doughnut) this.charts.doughnut.resize();
      if (this.charts.carteraMora) this.charts.carteraMora.resize();
      if (this.charts.recaudosHourly) this.charts.recaudosHourly.resize();
    }, 220);
  },

  // Brand click expands if collapsed, else navigates to overview
  handleBrandClick(e) {
    if (e) e.preventDefault();
    const sidebar = document.getElementById('app-sidebar');
    if (sidebar && sidebar.classList.contains('collapsed')) {
      this.toggleSidebar();
      return;
    }
    this.navigateTo('overview');
  },

  // Navigation router
  navigateTo(viewId) {
    if (!viewId) return;

    // Reset simulated client portal state if navigating via sidebar
    if (viewId !== 'client-portal') {
      FinoraState.simulatedClientPortal = false;
      document.getElementById('portal-switch-label').innerText = 'Ver Portal Cliente (Carlos R.)';
    }

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('data-view') === viewId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update views visibility
    document.querySelectorAll('.page-view').forEach(view => {
      view.classList.remove('active');
    });

    const targetView = document.getElementById(`view-${viewId}`);
    if (targetView) {
      targetView.classList.add('active');
    }

    // Update breadcrumb
    const breadcrumbNames = {
      overview: 'Overview',
      clientes: 'Clientes',
      solicitudes: 'Solicitudes de Crédito',
      creditos: 'Créditos',
      cartera: 'Cartera & Cobranza',
      recaudos: 'Recaudos',
      conciliacion: 'Conciliación Bancaria',
      desembolsos: 'Desembolsos',
      reportes: 'Reportes y Analítica',
      configuracion: 'Configuración',
      'client-portal': 'Portal Cliente (Carlos Rodríguez)'
    };
    const breadcrumbEl = document.getElementById('header-breadcrumb');
    if (breadcrumbEl) {
      breadcrumbEl.innerText = breadcrumbNames[viewId] || viewId;
    }

    FinoraState.currentView = viewId;

    // Close mobile menu if open
    const sidebar = document.getElementById('app-sidebar');
    const backdrop = document.getElementById('sidebar-mobile-backdrop');
    if (sidebar) sidebar.classList.remove('mobile-open');
    if (backdrop) backdrop.classList.remove('active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Refresh charts if entering overview, cartera or recaudos
    setTimeout(() => {
      if (viewId === 'overview' && this.charts.mainOverview) {
        this.charts.mainOverview.resize();
        this.charts.doughnut.resize();
      } else if (viewId === 'cartera' && this.charts.carteraMora) {
        this.charts.carteraMora.resize();
      } else if (viewId === 'recaudos' && this.charts.recaudosHourly) {
        this.charts.recaudosHourly.resize();
      }
      if (window.lucide) lucide.createIcons();
    }, 100);
  },

  // Toggle between Admin and Client Portal ("Mi Crédito")
  togglePortalView() {
    if (FinoraState.currentView === 'client-portal') {
      this.navigateTo('overview');
      this.showToast('Regresando al Centro de Control Administrativo', 'info');
    } else {
      this.navigateTo('client-portal');
      document.getElementById('portal-switch-label').innerText = 'Volver al Portal Admin';
      this.showToast('Simulando experiencia móvil/web de Carlos Rodríguez', 'info');
    }
  },

  // Change period filter in dashboard
  changePeriod(period, btn) {
    document.querySelectorAll('.period-selector .period-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    FinoraState.activePeriod = period;

    // Simulate realistic dataset variations based on period
    const kpis = {
      hoy: { cartera: '$18.450.000.000', capital: '$420.000.000', mora: '4,82%', intereses: '$18.400.000' },
      '7d': { cartera: '$18.450.000.000', capital: '$3.450.000.000', mora: '4,80%', intereses: '$142.500.000' },
      '30d': { cartera: '$18.450.000.000', capital: '$27.830.000.000', mora: '4,82%', intereses: '$2.184.500.000' },
      year: { cartera: '$18.450.000.000', capital: '$98.240.000.000', mora: '4,75%', intereses: '$12.450.000.000' }
    };

    const sel = kpis[period] || kpis['30d'];
    document.getElementById('kpi-cartera-activa').innerText = sel.cartera;
    document.getElementById('kpi-capital-colocado').innerText = sel.capital;
    document.getElementById('kpi-mora').innerText = sel.mora;
    document.getElementById('kpi-intereses').innerText = sel.intereses;

    this.showToast(`Métricas actualizadas para el periodo: ${btn.innerText}`, 'info');
  },

  // Render Table Data
  renderAllTables() {
    this.renderRecentActivityTable();
    this.renderClientesTable();
    this.renderSolicitudesTable();
    this.renderCreditosTable();
    this.renderCarteraTable();
    this.renderRecaudosTable();
    this.renderConciliacionTable();
    this.renderDesembolsosTable();
  },

  renderRecentActivityTable() {
    const tbody = document.getElementById('overview-recent-activity-tbody');
    if (!tbody) return;

    tbody.innerHTML = FinoraState.recentActivity.map(row => `
      <tr>
        <td style="color:var(--text-muted); font-size:0.78rem;">${row.fecha}</td>
        <td><strong>${row.operacion}</strong></td>
        <td>
          <div class="table-user-cell">
            <div class="table-user-avatar">${row.cliente.charAt(0)}</div>
            <span>${row.cliente}</span>
          </div>
        </td>
        <td style="font-weight:700; font-family:var(--font-mono);">${formatCOP(row.monto)}</td>
        <td><span class="badge ${row.badge}"><span class="badge-dot-indicator"></span>${row.estado}</span></td>
        <td>
          <button class="btn btn-sm btn-outline" onclick="App.inspectFromActivity('${row.cliente}')">Detalle</button>
        </td>
      </tr>
    `).join('');
  },

  inspectFromActivity(clienteName) {
    const client = FinoraState.clientes.find(c => c.nombre.toLowerCase().includes(clienteName.toLowerCase()));
    if (client) {
      this.openClientDrawer(client);
    } else {
      this.showToast(`Auditoría de registro para ${clienteName}`, 'info');
    }
  },

  renderClientesTable(filteredList = null) {
    const tbody = document.getElementById('clients-table-tbody');
    if (!tbody) return;

    const list = filteredList || FinoraState.clientes;

    tbody.innerHTML = list.map(c => `
      <tr>
        <td>
          <div class="table-user-cell">
            <div class="table-user-avatar">${c.nombre.charAt(0)}</div>
            <div>
              <div class="table-user-name">${c.nombre}</div>
              <div class="table-user-meta">Cliente verificado</div>
            </div>
          </div>
        </td>
        <td style="font-family:var(--font-mono); font-size:0.8rem;">${c.doc}</td>
        <td>${c.ciudad}</td>
        <td style="text-align:center;"><strong>${c.creditosActivos}</strong></td>
        <td style="font-weight:700;">${formatCOP(c.cartera)}</td>
        <td>
          <span class="badge ${c.score >= 750 ? 'badge-success' : c.score >= 650 ? 'badge-warning' : 'badge-danger'}">
            ${c.score} pts
          </span>
        </td>
        <td>
          <span class="badge ${c.estado.includes('Activo') ? 'badge-success' : c.estado.includes('Mora') ? 'badge-warning' : 'badge-danger'}">
            ${c.estado}
          </span>
        </td>
        <td style="font-size:0.76rem; color:var(--text-muted);">${c.ultimoPago}</td>
        <td>
          <button class="btn btn-sm btn-outline" onclick="App.openClientDrawerById(${c.id})">
            <i data-lucide="eye" style="width:13px;height:13px;"></i>
            <span>Ver 360°</span>
          </button>
        </td>
      </tr>
    `).join('');
    if (window.lucide) lucide.createIcons();
  },

  filterClientsByCity(city, btn) {
    document.querySelectorAll('#view-clientes .filter-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (city === 'Todas') {
      this.renderClientesTable();
    } else {
      const filtered = FinoraState.clientes.filter(c => c.ciudad === city);
      this.renderClientesTable(filtered);
    }
  },

  searchClients(query) {
    const q = query.toLowerCase().trim();
    const filtered = FinoraState.clientes.filter(c => 
      c.nombre.toLowerCase().includes(q) || c.doc.includes(q)
    );
    this.renderClientesTable(filtered);
  },

  renderSolicitudesTable(filteredList = null) {
    const tbody = document.getElementById('solicitudes-table-tbody');
    if (!tbody) return;

    const list = filteredList || FinoraState.solicitudes;

    tbody.innerHTML = list.map(s => {
      let badgeClass = 'badge-neutral';
      if (s.estado === 'Aprobado') badgeClass = 'badge-success';
      else if (s.estado === 'En revisión') badgeClass = 'badge-warning';
      else if (s.estado === 'Rechazado') badgeClass = 'badge-danger';
      else if (s.estado === 'Nuevas') badgeClass = 'badge-info';

      return `
        <tr>
          <td style="font-family:var(--font-mono); font-weight:700; color:var(--secondary);">${s.id}</td>
          <td>
            <div class="table-user-cell">
              <div class="table-user-avatar">${s.cliente.charAt(0)}</div>
              <div>
                <div class="table-user-name">${s.cliente}</div>
                <div class="table-user-meta">CC ${s.doc}</div>
              </div>
            </div>
          </td>
          <td>
            <div style="display:flex; flex-direction:column; gap:2px;">
              <span class="badge badge-neutral" style="display:inline-flex; align-items:center; gap:4px; font-weight:700; font-size:0.72rem; width:fit-content;">
                <i data-lucide="${s.canalIcon || 'smartphone'}" style="width:12px;height:12px; color:var(--secondary);"></i>
                <span>${s.canal || 'App Android'}</span>
              </span>
              <span style="font-size:0.7rem; color:var(--text-muted); display:flex; align-items:center; gap:3px;">
                <i data-lucide="map-pin" style="width:10px;height:10px;"></i>
                <span>${s.ciudad || 'Bogotá D.C.'}</span>
              </span>
            </div>
          </td>
          <td style="font-weight:800; font-size:0.9rem;">${formatCOP(s.monto)}</td>
          <td>${s.plazo} meses</td>
          <td>
            <span class="badge ${s.score >= 750 ? 'badge-success' : s.score >= 650 ? 'badge-warning' : 'badge-danger'}">
              ${s.score} / 1000
            </span>
          </td>
          <td style="color:var(--text-muted); font-size:0.8rem;">${formatCOP(s.ingresos)}</td>
          <td><span class="badge ${badgeClass}"><span class="badge-dot-indicator"></span>${s.estado}</span></td>
          <td style="font-size:0.76rem; color:var(--text-muted);">${s.fecha}</td>
          <td>
            <button class="btn btn-sm btn-primary" onclick="App.openScoringDrawer('${s.id}')">
              <i data-lucide="gauge" style="width:13px;height:13px;"></i>
              <span>Evaluar</span>
            </button>
          </td>
        </tr>
      `;
    }).join('');
    if (window.lucide) lucide.createIcons();
  },

  filterSolicitudesByStatus(status, btn) {
    document.querySelectorAll('#view-solicitudes .filter-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (status === 'Todas') {
      this.renderSolicitudesTable();
    } else {
      const filtered = FinoraState.solicitudes.filter(s => s.estado === status);
      this.renderSolicitudesTable(filtered);
    }
  },

  searchSolicitudes(query) {
    const q = query.toLowerCase().trim();
    const filtered = FinoraState.solicitudes.filter(s => 
      s.cliente.toLowerCase().includes(q) || s.doc.includes(q) || s.id.toLowerCase().includes(q)
    );
    this.renderSolicitudesTable(filtered);
  },

  renderCreditosTable() {
    const tbody = document.getElementById('creditos-table-tbody');
    if (!tbody) return;

    tbody.innerHTML = FinoraState.creditos.map(cr => `
      <tr>
        <td style="font-family:var(--font-mono); font-weight:700;">${cr.id}</td>
        <td>
          <div class="table-user-cell">
            <div class="table-user-avatar">${cr.cliente.charAt(0)}</div>
            <span>${cr.cliente}</span>
          </div>
        </td>
        <td style="font-weight:700;">${formatCOP(cr.monto)}</td>
        <td style="font-weight:800; color:var(--primary);">${formatCOP(cr.saldo)}</td>
        <td>${cr.cuotas}</td>
        <td style="font-size:0.78rem; color:var(--text-muted);">${cr.vencimiento}</td>
        <td><span class="badge ${cr.badge}"><span class="badge-dot-indicator"></span>${cr.estado}</span></td>
        <td>
          <button class="btn btn-sm btn-outline" onclick="App.showAmortizationTable('${cr.id}')">Plan de Pagos</button>
        </td>
      </tr>
    `).join('');
    if (window.lucide) lucide.createIcons();
  },

  showAmortizationTable(creditId) {
    this.showToast(`Cargando tabla de amortización con metodología francesa para ${creditId}`, 'info');
  },

  renderCarteraTable() {
    const tbody = document.getElementById('cartera-table-tbody');
    if (!tbody) return;

    tbody.innerHTML = FinoraState.cartera.map(c => `
      <tr>
        <td>
          <div class="table-user-cell">
            <div class="table-user-avatar">${c.cliente.charAt(0)}</div>
            <span>${c.cliente}</span>
          </div>
        </td>
        <td style="font-family:var(--font-mono); font-size:0.8rem;">${c.credito}</td>
        <td style="font-weight:800;">${formatCOP(c.capital)}</td>
        <td style="color:var(--text-muted);">${formatCOP(c.cuota)}</td>
        <td style="font-weight:700; color:${c.dias > 30 ? 'var(--danger)' : c.dias > 0 ? 'var(--warning-text)' : 'var(--success)'};">
          ${c.dias === 0 ? 'Al día (0d)' : `${c.dias} días`}
        </td>
        <td><span class="badge ${c.badge}"><span class="badge-dot-indicator"></span>${c.estado}</span></td>
        <td style="font-size:0.8rem; color:var(--text-muted);">${c.gestor}</td>
        <td>
          <button class="btn btn-sm btn-outline" onclick="App.contactClient('${c.cliente}', '${c.gestor}')">
            <i data-lucide="phone-call" style="width:13px;height:13px;"></i>
            <span>Gestionar</span>
          </button>
        </td>
      </tr>
    `).join('');
    if (window.lucide) lucide.createIcons();
  },

  contactClient(cliente, gestor) {
    this.showToast(`Iniciando contacto de cobranza preventiva para ${cliente} (Gestor: ${gestor})`, 'info');
  },

  renderRecaudosTable() {
    const tbody = document.getElementById('recaudos-table-tbody');
    if (!tbody) return;

    tbody.innerHTML = FinoraState.recaudos.map(r => `
      <tr>
        <td style="font-family:var(--font-mono); font-size:0.8rem; color:var(--text-muted);">${r.hora}</td>
        <td>
          <div class="table-user-cell">
            <div class="table-user-avatar">${r.cliente.charAt(0)}</div>
            <span>${r.cliente}</span>
          </div>
        </td>
        <td style="font-family:var(--font-mono); font-size:0.8rem;">${r.credito}</td>
        <td style="font-weight:800; color:var(--success-text);">${formatCOP(r.monto)}</td>
        <td>
          <span class="badge badge-neutral" style="font-weight:700;">
            ${r.metodo}
          </span>
        </td>
        <td><span class="badge ${r.badge}"><span class="badge-dot-indicator"></span>${r.estado}</span></td>
        <td>
          <button class="btn btn-sm btn-outline" onclick="App.showToast('Comprobante digital #REC-${Math.floor(Math.random()*900000+100000)} generado', 'info');">
            Recibo
          </button>
        </td>
      </tr>
    `).join('');
    if (window.lucide) lucide.createIcons();
  },

  renderConciliacionTable(filteredList = null) {
    const tbody = document.getElementById('conciliacion-table-tbody');
    if (!tbody) return;

    const list = filteredList || FinoraState.conciliacion;

    tbody.innerHTML = list.map(tx => `
      <tr>
        <td style="font-family:var(--font-mono); font-weight:700; color:var(--secondary);">${tx.id}</td>
        <td style="font-size:0.78rem; color:var(--text-muted);">${tx.fecha}</td>
        <td><strong>${tx.tipo}</strong></td>
        <td>${tx.cliente}</td>
        <td style="font-family:var(--font-mono); font-size:0.78rem; color:var(--text-muted);">${tx.ref}</td>
        <td style="font-weight:700;">${formatCOP(tx.esperado)}</td>
        <td style="font-weight:700;">${formatCOP(tx.recibido)}</td>
        <td style="font-weight:800; color:${tx.diferencia === 0 ? 'var(--success)' : 'var(--danger)'};">
          ${tx.diferencia === 0 ? '$0' : formatCOP(tx.diferencia)}
        </td>
        <td><span class="badge ${tx.badge}"><span class="badge-dot-indicator"></span>${tx.estado}</span></td>
        <td>
          <button class="btn btn-sm btn-outline" onclick="App.openConciliacionDrawer('${tx.id}')">
            <i data-lucide="search" style="width:13px;height:13px;"></i>
            <span>Auditar</span>
          </button>
        </td>
      </tr>
    `).join('');
    if (window.lucide) lucide.createIcons();
  },

  filterReconciliationByStatus(status, btn) {
    document.querySelectorAll('#view-conciliacion .filter-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (status === 'Todos') {
      this.renderConciliacionTable();
    } else {
      const filtered = FinoraState.conciliacion.filter(tx => tx.estado === status);
      this.renderConciliacionTable(filtered);
    }
  },

  searchReconciliation(query) {
    const q = query.toLowerCase().trim();
    const filtered = FinoraState.conciliacion.filter(tx => 
      tx.id.toLowerCase().includes(q) || tx.ref.toLowerCase().includes(q) || tx.cliente.toLowerCase().includes(q)
    );
    this.renderConciliacionTable(filtered);
  },

  renderDesembolsosTable() {
    const tbody = document.getElementById('desembolsos-table-tbody');
    if (!tbody) return;

    tbody.innerHTML = FinoraState.desembolsos.map((d, index) => `
      <tr>
        <td>
          <div class="table-user-cell">
            <div class="table-user-avatar">${d.cliente.charAt(0)}</div>
            <span>${d.cliente}</span>
          </div>
        </td>
        <td style="font-family:var(--font-mono); font-size:0.8rem;">${d.credito}</td>
        <td style="font-weight:800; color:var(--primary); font-size:0.9rem;">${formatCOP(d.monto)}</td>
        <td>
          <span class="badge badge-neutral" style="font-weight:700;">${d.banco}</span>
        </td>
        <td style="font-family:var(--font-mono); font-size:0.78rem;">${d.cuenta}</td>
        <td style="font-size:0.78rem; color:var(--text-muted);">${d.fecha}</td>
        <td><span class="badge ${d.badge}"><span class="badge-dot-indicator"></span>${d.estado}</span></td>
        <td>
          ${d.estado === 'Programado' ? `
            <button class="btn btn-sm btn-primary" onclick="App.disperseIndividual(${index})">
              <i data-lucide="send" style="width:12px;height:12px;"></i>
              <span>Dispersar</span>
            </button>
          ` : d.estado === 'Fallido' ? `
            <button class="btn btn-sm btn-outline" style="color:var(--danger);" onclick="App.retryDisbursement(${index})">
              <i data-lucide="refresh-cw" style="width:12px;height:12px;"></i>
              <span>Reintentar</span>
            </button>
          ` : `
            <span style="font-size:0.75rem; color:var(--success); font-weight:700;">✓ Acreditado</span>
          `}
        </td>
      </tr>
    `).join('');
    if (window.lucide) lucide.createIcons();
  },

  disperseIndividual(index) {
    const d = FinoraState.desembolsos[index];
    d.estado = 'Desembolsado';
    d.badge = 'badge-success';
    this.renderDesembolsosTable();
    this.showToast(`Fondos de ${formatCOP(d.monto)} dispersados con éxito a ${d.banco} (${d.cliente})`, 'success');
  },

  retryDisbursement(index) {
    const d = FinoraState.desembolsos[index];
    d.estado = 'Procesando';
    d.badge = 'badge-info';
    this.renderDesembolsosTable();
    setTimeout(() => {
      d.estado = 'Desembolsado';
      d.badge = 'badge-success';
      this.renderDesembolsosTable();
      this.showToast(`Reintento exitoso: Dispersado a ${d.cliente}`, 'success');
    }, 1200);
  },

  // ==========================================================================
  // SCORING DRAWER & CREDIT APPROVAL
  // ==========================================================================
  openScoringDrawer(solicitudId) {
    const s = FinoraState.solicitudes.find(item => item.id === solicitudId);
    if (!s) return;

    FinoraState.selectedSolicitud = s;

    document.getElementById('drawer-scoring-client-name').innerText = `Evaluación: ${s.cliente}`;
    document.getElementById('drawer-scoring-sub').innerText = `Solicitud ${s.id} — CC ${s.doc}`;
    document.getElementById('drawer-score-number').innerText = s.score;
    document.getElementById('drawer-score-category').innerText = s.riesgo;
    document.getElementById('rec-monto').innerText = formatCOP(s.recMonto || s.monto);
    document.getElementById('rec-plazo').innerText = `${s.recPlazo || s.plazo} meses`;
    document.getElementById('drawer-info-ingresos').innerText = formatCOP(s.ingresos);
    const cityEl = document.getElementById('drawer-info-ciudad');
    if (cityEl) cityEl.innerText = s.ciudad || 'Bogotá D.C.';

    // Populate Geolocation & Origin metadata
    const geoCanal = document.getElementById('drawer-geo-canal');
    if (geoCanal) {
      geoCanal.innerHTML = `
        <i data-lucide="${s.canalIcon || 'smartphone'}" style="width:14px;height:14px; color:var(--secondary);"></i>
        <span>${s.canalCompleto || s.canal}</span>
      `;
    }
    const geoUbicacion = document.getElementById('drawer-geo-ubicacion');
    if (geoUbicacion) geoUbicacion.innerText = s.ubicacion || `${s.ciudad} (Colombia)`;
    
    const geoCoords = document.getElementById('drawer-geo-coords');
    if (geoCoords) geoCoords.innerText = `GPS: ${s.coords || '4.6533, -74.0588'} (±6m)`;

    const geoDisp = document.getElementById('drawer-geo-dispositivo');
    if (geoDisp) geoDisp.innerText = s.dispositivo || 'Smartphone Verificado';

    const geoIp = document.getElementById('drawer-geo-ip');
    if (geoIp) geoIp.innerText = s.ip || '181.134.209.42';

    const geoIsp = document.getElementById('drawer-geo-isp');
    if (geoIsp) geoIsp.innerText = s.isp || 'Claro Telecomunicaciones Colombia';

    // Dynamic Gauge SVG circle offset calculation (circumference = 2 * PI * 42 ~= 263.89)
    const gauge = document.getElementById('scoring-gauge-circle');
    const circumference = 2 * Math.PI * 42;
    const progress = (s.score / 1000);
    const offset = circumference * (1 - progress);
    gauge.style.strokeDasharray = `${circumference}`;
    gauge.style.strokeDashoffset = `${offset}`;
    if (s.score >= 750) gauge.style.stroke = '#10B981';
    else if (s.score >= 650) gauge.style.stroke = '#F59E0B';
    else gauge.style.stroke = '#DC2626';

    this.openDrawer('drawer-scoring');
  },

  openApprovalModal() {
    if (!FinoraState.selectedSolicitud) return;
    const s = FinoraState.selectedSolicitud;
    document.getElementById('modal-app-client').innerText = `${s.cliente} (CC ${s.doc})`;
    document.getElementById('modal-app-monto').innerText = formatCOP(s.recMonto || s.monto);

    document.getElementById('modal-confirm-approval').classList.add('active');
  },

  confirmApprovalAction() {
    if (!FinoraState.selectedSolicitud) return;
    const s = FinoraState.selectedSolicitud;

    // Update solicitud status in state
    s.estado = 'Aprobado';
    FinoraState.recentActivity.unshift({
      fecha: 'Hoy (Ahora)',
      operacion: 'Aprobación',
      cliente: s.cliente,
      monto: s.recMonto || s.monto,
      estado: 'Completado',
      badge: 'badge-success'
    });

    // Update pending badge
    const badge = document.getElementById('sidebar-solicitudes-badge');
    if (badge) {
      const cur = parseInt(badge.innerText) || 23;
      badge.innerText = Math.max(0, cur - 1);
    }

    this.renderSolicitudesTable();
    this.renderRecentActivityTable();
    this.closeModals();
    this.closeAllDrawers();

    this.showToast(`Solicitud ${s.id} aprobada con éxito para ${s.cliente}`, 'success');
  },

  rejectSolicitudCurrent() {
    if (!FinoraState.selectedSolicitud) return;
    FinoraState.selectedSolicitud.estado = 'Rechazado';
    this.renderSolicitudesTable();
    this.closeAllDrawers();
    this.showToast(`Solicitud ${FinoraState.selectedSolicitud.id} rechazada según políticas de riesgo`, 'danger');
  },

  openReviewRequest() {
    this.showToast('Se ha solicitado ampliación de documentación al analista de crédito', 'info');
    this.closeAllDrawers();
  },

  // ==========================================================================
  // CONCILIATION DRAWER & ACTIONS
  // ==========================================================================
  openConciliacionDrawer(txId) {
    const tx = FinoraState.conciliacion.find(item => item.id === txId);
    if (!tx) return;

    FinoraState.selectedTransaction = tx;

    document.getElementById('drawer-concil-id').innerText = `${tx.id} — ${tx.tipo}`;
    document.getElementById('drawer-concil-cliente').innerText = tx.cliente;
    document.getElementById('drawer-concil-fecha').innerText = `${tx.fecha} - 10:14 AM`;
    document.getElementById('drawer-concil-ref').innerText = tx.ref;
    document.getElementById('drawer-concil-esperado').innerText = formatCOP(tx.esperado);
    document.getElementById('drawer-concil-recibido').innerText = formatCOP(tx.recibido);
    document.getElementById('drawer-concil-dif').innerText = tx.diferencia === 0 ? '$0' : formatCOP(tx.diferencia);
    
    const badgeEl = document.getElementById('drawer-concil-badge');
    badgeEl.className = `badge ${tx.badge}`;
    badgeEl.innerText = tx.estado;

    const btnManual = document.getElementById('btn-manual-concil');
    if (tx.estado === 'CONCILIADO') {
      btnManual.style.display = 'none';
    } else {
      btnManual.style.display = 'inline-flex';
    }

    this.openDrawer('drawer-conciliacion');
  },

  conciliarManualmente() {
    if (!FinoraState.selectedTransaction) return;
    const tx = FinoraState.selectedTransaction;

    tx.recibido = tx.esperado;
    tx.diferencia = 0;
    tx.estado = 'CONCILIADO';
    tx.badge = 'badge-success';

    // Update pending badge
    const badge = document.getElementById('sidebar-conciliacion-badge');
    if (badge) {
      const cur = parseInt(badge.innerText) || 8;
      badge.innerText = Math.max(0, cur - 1);
    }

    this.renderConciliacionTable();
    this.closeAllDrawers();
    this.showToast(`Transacción ${tx.id} conciliada manualmente y asiento contable cuadrado`, 'success');
  },

  markAsDifference() {
    if (!FinoraState.selectedTransaction) return;
    const tx = FinoraState.selectedTransaction;
    tx.estado = 'DIFERENCIA';
    tx.badge = 'badge-warning';
    this.renderConciliacionTable();
    this.closeAllDrawers();
    this.showToast(`Transacción ${tx.id} clasificada como discrepancia para auditoría`, 'info');
  },

  runAutoReconciliation() {
    this.showToast('Conectando con API de extractos Bancolombia...', 'info');
    setTimeout(() => {
      FinoraState.conciliacion.forEach(tx => {
        if (tx.estado === 'PENDIENTE') {
          tx.recibido = tx.esperado;
          tx.diferencia = 0;
          tx.estado = 'CONCILIADO';
          tx.badge = 'badge-success';
        }
      });
      this.renderConciliacionTable();
      this.showToast('Auto-conciliación completada: 1 transacción cuadró automáticamente', 'success');
    }, 1000);
  },

  // ==========================================================================
  // CLIENT DRAWER & PROFILE 360
  // ==========================================================================
  openClientDrawerById(clientId) {
    const c = FinoraState.clientes.find(item => item.id === clientId);
    if (c) this.openClientDrawer(c);
  },

  openClientDrawer(client) {
    FinoraState.selectedClient = client;
    document.getElementById('drawer-cli-name').innerText = client.nombre;
    document.getElementById('drawer-cli-doc').innerText = `CC ${client.doc} — ${client.ciudad}`;
    this.openDrawer('drawer-cliente');
  },

  // ==========================================================================
  // SIMULATOR REAL-TIME CALCULATIONS (PORTAL CLIENTE)
  // ==========================================================================
  updateSimulator() {
    const slider = document.getElementById('sim-slider-input');
    if (!slider) return;

    const monto = parseInt(slider.value, 10);
    FinoraState.simulator.monto = monto;

    const meses = FinoraState.simulator.meses;
    const tasa = FinoraState.simulator.tasaMensual;

    // Amortización sistema francés
    // PMT = P * [ r * (1 + r)^n ] / [ (1 + r)^n - 1 ]
    const pmt = (monto * (tasa * Math.pow(1 + tasa, meses))) / (Math.pow(1 + tasa, meses) - 1);
    const totalPagar = pmt * meses;
    const intereses = totalPagar - monto;

    document.getElementById('sim-display-monto').innerText = formatCOP(monto);
    document.getElementById('sim-breakdown-monto').innerText = formatCOP(monto);
    document.getElementById('sim-breakdown-intereses').innerText = formatCOP(intereses);
    document.getElementById('sim-breakdown-cuota').innerText = formatCOP(pmt);
    document.getElementById('sim-breakdown-total').innerText = formatCOP(totalPagar);
  },

  selectSimulatorTerm(months, btn) {
    document.querySelectorAll('.term-buttons-group .term-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    FinoraState.simulator.meses = months;
    this.updateSimulator();
  },

  requestCreditFromSimulator() {
    const monto = FinoraState.simulator.monto;
    const meses = FinoraState.simulator.meses;
    this.showToast(`Solicitud de microcrédito por ${formatCOP(monto)} a ${meses} meses iniciada con validación biométrica`, 'success');
  },

  // Payment flow in Client Portal
  showPaymentModal() {
    document.getElementById('modal-client-payment').classList.add('active');
  },

  selectPaymentMethod(method, card) {
    document.querySelectorAll('.payment-method-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  },

  processClientPayment() {
    this.closeModals();
    this.showToast('Procesando pago seguro en pasarela bancaria...', 'info');
    setTimeout(() => {
      this.showToast('¡Pago de cuota por $285.000 acreditado exitosamente! Comprobante enviado a tu email.', 'success');
    }, 1200);
  },

  // Manual Recaudo Modal
  showManualRecaudoModal() {
    document.getElementById('modal-manual-recaudo').classList.add('active');
  },

  saveManualRecaudo() {
    const cliente = document.getElementById('man-rec-cliente').value || 'Cliente General';
    const montoStr = document.getElementById('man-rec-monto').value || '$350.000';
    const monto = parseInt(montoStr.replace(/[^0-9]/g, '')) || 350000;
    const metodo = document.getElementById('man-rec-metodo').value;

    FinoraState.recaudos.unshift({
      hora: '11:15 AM',
      cliente: cliente,
      credito: '#FN-MANUAL',
      monto: monto,
      metodo: metodo,
      estado: 'Conciliado',
      badge: 'badge-success'
    });

    this.renderRecaudosTable();
    this.closeModals();
    this.showToast(`Recaudo manual por ${formatCOP(monto)} registrado y conciliado`, 'success');
  },

  // Disperse All Modal
  showDisperseAllModal() {
    document.getElementById('modal-disperse-all').classList.add('active');
  },

  confirmDisperseAll() {
    FinoraState.desembolsos.forEach(d => {
      if (d.estado === 'Programado' || d.estado === 'Procesando') {
        d.estado = 'Desembolsado';
        d.badge = 'badge-success';
      }
    });
    this.renderDesembolsosTable();
    this.closeModals();
    this.showToast('Lote de 14 créditos ($52.800.000 COP) dispersado exitosamente a la red ACH', 'success');
  },

  // Simulate new incoming application
  simulateNewApplication() {
    const newId = `FN-${Math.floor(Math.random() * 800) + 10500}`;
    const names = ['Mariana Restrepo', 'Julián Ospina', 'Valentina Díaz', 'Camilo Sampedro'];
    const randomName = names[Math.floor(Math.random() * names.length)];

    FinoraState.solicitudes.unshift({
      id: newId,
      cliente: randomName,
      doc: '1.028.910.442',
      monto: 3500000,
      plazo: 6,
      score: 790,
      ingresos: 4100000,
      estado: 'Nuevas',
      fecha: 'Hoy (Ahora)',
      riesgo: 'Riesgo bajo',
      recMonto: 3500000,
      recPlazo: 6,
      canal: 'App Android',
      canalIcon: 'smartphone',
      canalCompleto: 'App Móvil FINORA v2.4 (Android 14)',
      ciudad: 'Bogotá D.C.',
      ubicacion: 'Bogotá D.C. — Salitre (Av. Esperanza)',
      coords: '4.6530° N, -74.1080° W',
      dispositivo: 'Motorola Edge 40 Neo',
      ip: '190.144.112.55',
      isp: 'Claro Colombia Fibra'
    });

    const badge = document.getElementById('sidebar-solicitudes-badge');
    if (badge) {
      const cur = parseInt(badge.innerText) || 23;
      badge.innerText = cur + 1;
    }

    this.renderSolicitudesTable();
    this.showToast(`Nueva solicitud entrante: ${newId} (${randomName})`, 'info');
  },

  // ==========================================================================
  // EXPORT & REPORT DOWNLOADS
  // ==========================================================================
  exportReportCSV(moduleName) {
    const content = "ID,FECHA,CLIENTE,DOCUMENTO,VALOR_COP,ESTADO\n" +
      `FN-10492,2026-09-02,Laura Martinez,1018992341,4500000,EN_REVISION\n` +
      `FN-10482,2026-09-02,Carlos Rodriguez,1023456789,3000000,AL_DIA\n` +
      `TX-982341,2026-09-02,Carlos Rodriguez,1023456789,285000,CONCILIADO\n`;

    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `FINORA_${moduleName.toUpperCase()}_20260902.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    this.showToast(`Archivo CSV exportado: FINORA_${moduleName.toUpperCase()}.csv`, 'success');
  },

  generateReportFile(reportTitle) {
    this.showToast(`Generando ${reportTitle} con filtros regulatorios...`, 'info');
    setTimeout(() => {
      this.exportReportCSV(reportTitle);
    }, 800);
  },

  // ==========================================================================
  // GLOBAL SEARCH HANDLER
  // ==========================================================================
  handleGlobalSearch(value) {
    const q = value.toLowerCase().trim();
    if (!q) return;

    // If typing an ID or client, navigate to respective view
    if (q.startsWith('fn-') || q.startsWith('tx-')) {
      if (q.startsWith('tx-') && FinoraState.currentView !== 'conciliacion') {
        this.navigateTo('conciliacion');
        const input = document.getElementById('search-reconciliation-input');
        if (input) { input.value = q; this.searchReconciliation(q); }
      } else if (q.startsWith('fn-') && FinoraState.currentView !== 'solicitudes') {
        this.navigateTo('solicitudes');
        const input = document.getElementById('search-solicitudes-input');
        if (input) { input.value = q; this.searchSolicitudes(q); }
      }
    }
  },

  // ==========================================================================
  // DRAWER & MODAL SYSTEM
  // ==========================================================================
  openDrawer(drawerId) {
    const drawer = document.getElementById(drawerId);
    const backdrop = document.getElementById('app-drawer-backdrop');
    if (drawer && backdrop) {
      backdrop.classList.add('active');
      drawer.classList.add('active');
    }
    if (window.lucide) lucide.createIcons();
  },

  closeAllDrawers() {
    document.querySelectorAll('.drawer').forEach(d => d.classList.remove('active'));
    const backdrop = document.getElementById('app-drawer-backdrop');
    if (backdrop) backdrop.classList.remove('active');
  },

  closeModals() {
    document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
  },

  toggleUserMenu() {
    const menu = document.getElementById('user-dropdown');
    if (menu) menu.classList.toggle('active');
  },

  toggleNotificationsPopover() {
    this.showToast('Tienes 4 alertas de riesgo y conciliación pendientes de revisión', 'info');
  },

  closeDropdowns() {
    document.querySelectorAll('.dropdown-menu').forEach(d => d.classList.remove('active'));
  },

  showHelpModal() {
    this.showToast('Mesa de soporte FINORA: soporte@finora.co | PBX: (601) 745-9000 Bogotá', 'info');
  },

  // ==========================================================================
  // TOAST SYSTEM
  // ==========================================================================
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let iconName = 'info';
    let title = 'Notificación del Sistema';
    if (type === 'success') { iconName = 'check-circle-2'; title = 'Operación Exitosa'; }
    else if (type === 'danger') { iconName = 'alert-octagon'; title = 'Atención Requerida'; }
    else if (type === 'warning') { iconName = 'alert-triangle'; title = 'Alerta Operativa'; }

    toast.innerHTML = `
      <i data-lucide="${iconName}" class="toast-icon"></i>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-msg">${message}</div>
      </div>
    `;

    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  },

  // ==========================================================================
  // CHARTS (CHART.JS CONFIGURATION)
  // ==========================================================================
  initCharts() {
    // 1. Sparklines for KPIs
    this.renderSparkline('sparkline-cartera', [16.2, 16.5, 17.0, 17.4, 17.8, 18.1, 18.45], '#173F5F');
    this.renderSparkline('sparkline-capital', [22.0, 23.1, 24.5, 25.2, 26.1, 27.0, 27.83], '#2563EB');
    this.renderSparkline('sparkline-mora', [5.8, 5.6, 5.4, 5.2, 5.1, 4.95, 4.82], '#16A34A');
    this.renderSparkline('sparkline-intereses', [1.6, 1.72, 1.85, 1.94, 2.05, 2.12, 2.18], '#16A34A');

    // 2. Main Overview Line Chart
    const ctxMain = document.getElementById('chart-main-overview');
    if (ctxMain) {
      this.charts.mainOverview = new Chart(ctxMain, {
        type: 'line',
        data: {
          labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'],
          datasets: [
            {
              label: 'Cartera activa (Miles de Millones COP)',
              data: [14.2, 14.9, 15.5, 16.1, 16.8, 17.3, 17.9, 18.45],
              borderColor: '#173F5F',
              backgroundColor: 'rgba(23, 63, 95, 0.05)',
              fill: true,
              tension: 0.35,
              borderWidth: 2.5,
              pointRadius: 3,
              pointHoverRadius: 6
            },
            {
              label: 'Capital colocado (Miles de Millones COP)',
              data: [20.1, 21.3, 22.4, 23.8, 24.9, 25.8, 26.7, 27.83],
              borderColor: '#2563EB',
              backgroundColor: 'transparent',
              borderDash: [4, 4],
              tension: 0.35,
              borderWidth: 2,
              pointRadius: 3
            },
            {
              label: 'Recaudo mensual (Miles de Millones COP)',
              data: [8.5, 8.9, 9.4, 9.8, 10.4, 10.9, 11.4, 12.1],
              borderColor: '#16A34A',
              backgroundColor: 'transparent',
              tension: 0.35,
              borderWidth: 2,
              pointRadius: 3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                boxWidth: 12,
                font: { family: "'Plus Jakarta Sans', sans-serif", size: 11, weight: 600 },
                color: '#667085'
              }
            },
            tooltip: {
              backgroundColor: '#172033',
              titleFont: { family: "'Plus Jakarta Sans', sans-serif", size: 12, weight: 700 },
              bodyFont: { family: "'Plus Jakarta Sans', sans-serif", size: 12 },
              padding: 10,
              cornerRadius: 8,
              callbacks: {
                label: function(context) {
                  return ` ${context.dataset.label.split('(')[0]}: $${context.raw}B COP`;
                }
              }
            }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: '#94A3B8', font: { family: "'Plus Jakarta Sans', sans-serif", size: 11 } }
            },
            y: {
              grid: { color: '#F1F5F9' },
              ticks: {
                color: '#94A3B8',
                font: { family: "'Plus Jakarta Sans', sans-serif", size: 11 },
                callback: function(val) { return `$${val}B`; }
              }
            }
          }
        }
      });
    }

    // 3. Doughnut Estado de Cartera
    const ctxDoughnut = document.getElementById('chart-doughnut-cartera');
    if (ctxDoughnut) {
      this.charts.doughnut = new Chart(ctxDoughnut, {
        type: 'doughnut',
        data: {
          labels: ['Vigente', 'Mora 1–30 días', 'Mora 31–60 días', 'Mora 60+ días'],
          datasets: [{
            data: [82, 9, 5, 4],
            backgroundColor: ['#16A34A', '#F59E0B', '#F97316', '#DC2626'],
            borderWidth: 2.5,
            borderColor: '#FFFFFF',
            cutout: '72%'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: function(ctx) { return ` ${ctx.label}: ${ctx.raw}%`; }
              }
            }
          }
        }
      });
    }

    // 4. Cartera Mora Bars Chart
    const ctxMoraBars = document.getElementById('chart-cartera-mora-bars');
    if (ctxMoraBars) {
      this.charts.carteraMora = new Chart(ctxMoraBars, {
        type: 'bar',
        data: {
          labels: ['0 días (Al día)', '1–30 días', '31–60 días', '61–90 días', '90+ días (Castigo)'],
          datasets: [{
            label: 'Saldo en Cartera (Millones COP)',
            data: [15129, 1660, 922, 450, 289],
            backgroundColor: ['#16A34A', '#F59E0B', '#F97316', '#DC2626', '#991B1B'],
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: function(ctx) { return ` Saldo: $${ctx.raw}M COP`; }
              }
            }
          },
          scales: {
            x: { grid: { display: false } },
            y: {
              grid: { color: '#F1F5F9' },
              ticks: { callback: function(val) { return `$${val}M`; } }
            }
          }
        }
      });
    }

    // 5. Recaudos Hourly Chart
    const ctxRecaudos = document.getElementById('chart-recaudos-hourly');
    if (ctxRecaudos) {
      this.charts.recaudosHourly = new Chart(ctxRecaudos, {
        type: 'line',
        data: {
          labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
          datasets: [
            {
              label: 'Recaudo acumulado hoy ($M)',
              data: [35, 98, 210, 315, 360, 390, 428.5, null, null, null],
              borderColor: '#16A34A',
              backgroundColor: 'rgba(22, 163, 74, 0.08)',
              fill: true,
              tension: 0.35,
              borderWidth: 2.5
            },
            {
              label: 'Meta proyectada ($M)',
              data: [50, 100, 160, 230, 300, 350, 400, 440, 480, 500],
              borderColor: '#94A3B8',
              borderDash: [5, 5],
              fill: false,
              tension: 0.2,
              borderWidth: 1.5
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'top' },
            tooltip: {
              callbacks: {
                label: function(ctx) { return ` ${ctx.dataset.label}: $${ctx.raw}M COP`; }
              }
            }
          },
          scales: {
            x: { grid: { display: false } },
            y: {
              grid: { color: '#F1F5F9' },
              ticks: { callback: function(val) { return `$${val}M`; } }
            }
          }
        }
      });
    }
  },

  renderSparkline(canvasId, data, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: data.map((_, i) => i),
        datasets: [{
          data: data,
          borderColor: color,
          borderWidth: 1.8,
          fill: false,
          tension: 0.4,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: {
          x: { display: false },
          y: { display: false }
        }
      }
    });
  },

  filterMainChart(metric, btn) {
    document.querySelectorAll('#overview-chart-chips .chart-chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');

    if (!this.charts.mainOverview) return;

    const chart = this.charts.mainOverview;
    if (metric === 'all') {
      chart.data.datasets.forEach(ds => ds.hidden = false);
    } else if (metric === 'cartera') {
      chart.data.datasets[0].hidden = false;
      chart.data.datasets[1].hidden = true;
      chart.data.datasets[2].hidden = true;
    } else if (metric === 'capital') {
      chart.data.datasets[0].hidden = true;
      chart.data.datasets[1].hidden = false;
      chart.data.datasets[2].hidden = true;
    } else if (metric === 'recaudo') {
      chart.data.datasets[0].hidden = true;
      chart.data.datasets[1].hidden = true;
      chart.data.datasets[2].hidden = false;
    }
    chart.update();
  }
};

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
