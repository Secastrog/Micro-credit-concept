# CAPITALCOP — Plataforma Inteligente de Crédito y Cartera

> **Proyecto Propio & Conceptual de Negocio Fintech**  
> **Autor & Creador:** Sergio Esteban Castro Giraldo  
> **Área:** Tecnología Financiera (Fintech) / Microfinanzas & Gestión de Cartera  
> **Ubicación / Mercado Objetivo:** Colombia (con escalabilidad para Latinoamérica)

---

## 📌 1. Visión General del Proyecto

**CAPITALCOP** es una propuesta y desarrollo conceptual integral para una empresa tecnológica de gestión, originación, colocación y recaudo de **microcréditos**. Diseñada bajo un enfoque nativo *Fintech*, la plataforma resuelve los principales cuellos de botella del microcrédito tradicional en mercados emergentes: altos costos operativos, lentitud en la aprobación, asimetría de información y alta fricción en la dispersión y cobranza.

Este proyecto ha sido concebido y construido como un **proyecto propio y propietario de Sergio Esteban Castro Giraldo**, abarcando tanto el modelo operativo del negocio como la solución tecnológica interactiva que orquesta todo el ciclo crediticio de punta a punta (*end-to-end*).

```
   ┌───────────────────────────────────────────────────────────────────────────┐
   │                                CAPITALCOP                                 │
   │           Plataforma Omnicanal de Microcréditos & Gestión de Cartera      │
   └───────────────────────────────────────────────────────────────────────────┘
                                         │
        ┌────────────────────────────────┴────────────────────────────────┐
        ▼                                                                 ▼
 ┌──────────────────────────────┐                         ┌──────────────────────────────┐
 │    Centro Administrativo     │                         │   Portal Cliente ("Mi Crédito")
 │  - Originación & Scoring     │                         │  - Simulador Cuota Francesa  │
 │  - Aprobación & Pagaré       │                         │  - Solicitud Biométrica      │
 │  - Dispersión ACH Bancaria   │                         │  - Pasarela de Pago de Cuota │
 │  - Conciliación Automática   │                         │  - Timeline de Desembolso    │
 │  - Cobranza por Edades Mora  │                         │  - Descarga Paz y Salvo      │
 └──────────────────────────────┘                         └──────────────────────────────┘
```

---

## 💡 2. Oportunidad de Negocio & Propuesta de Valor

En Colombia y América Latina, una parte sustancial de la economía depende de comerciantes, microempresarios, repartidores y trabajadores independientes que enfrentan barreras de entrada ante la banca tradicional. Esta brecha empuja a los solicitantes a créditos informales con tasas usureras y prácticas coercitivas.

**CAPITALCOP** introduce una alternativa formal, regulada, ágil y digital que ofrece:

1. **Inclusión Financiera Real y Sostenible:** Microcréditos de $500.000 a $10.000.000 COP con plazos accesibles de 3 a 12 meses, respetando los límites de tasa de usura de la Superintendencia Financiera.
2. **Scoring Alternativo y Prevención de Fraude:** Evaluación basada no solo en burós tradicionales (Datacrédito / TransUnion), sino en metadatos de geolocalización, huella digital del dispositivo (Device Fingerprinting), IP confiable y capacidad real de flujo de caja.
3. **Desembolso y Recaudo Inmediato:** Integración directa con rieles de pago digitales como la red ACH Colombia, PSE y billeteras de alta penetración como Nequi y Daviplata.
4. **Conciliación Automatizada:** Cuadre contable y bancario automático en tiempo real contra extractos, mitigando riesgos de descuadre y reduciendo el costo operativo (*Cost to Serve*).

---

## 🔄 3. Ciclo Integral del Crédito (Workflow End-to-End)

La plataforma modela de forma exhaustiva las 9 fases críticas que componen el ciclo de vida de un microcrédito:

| Fase | Denominación | Descripción Operativa en CAPITALCOP |
| :---: | :--- | :--- |
| **01** | **Originación Omnicanal** | Captación de solicitudes a través de la App Móvil (Android/iOS), Portal Web corporativo o Bots automatizados de mensajería (WhatsApp). |
| **02** | **Scoring & Heurística** | Ponderación multicriterio automática (0 a 1000 pts) con verificación de dispositivo, georreferenciación y consistencia residencial. |
| **03** | **Aprobación Formal** | Aprobación por parte del analista de crédito, generación del pagaré desmaterializado y notificación para firma electrónica por SMS/Email. |
| **04** | **Desembolso & Dispersión** | Ejecución de transferencias directas a cuentas de ahorro o billeteras digitales mediante dispersión individual o lotes masivos ACH. |
| **05** | **Recaudo Multicanal** | Captura de pagos de cuotas mediante pasarelas (PSE, botón Nequi, transferencias bancarias o corresponsales en efectivo). |
| **06** | **Conciliación Bancaria** | Cotejo automático entre lo esperado y lo acreditado en banco con auditoría inmediata de discrepancias y conciliación asistida. |
| **07** | **Gestión de Cartera** | Monitoreo en tiempo real del saldo de capital, saldo vencido e intereses acumulados clasificados por cliente y ciudad. |
| **08** | **Cobranza Preventiva** | Segmentación por edades de mora (0d, 1-30d, 31-60d, 60d+ y castigo) con asignación de gestores y acciones de contacto. |
| **09** | **Analítica & Cumplimiento** | Visualización de cosechas (*vintage analysis*), cálculo de rentabilidad y reportes de riesgo crediticio para organismos reguladores. |

---

## 🚀 4. Módulos y Funcionalidades del Sistema

### 🏢 A. Panel de Control Administrativo (Backoffice)
* **Overview & Dashboard Ejecutivo:** Métricas de Cartera Activa ($18.450M COP), Capital Colocado ($27.830M COP), Índice de Mora (4,82%) e Ingresos por Intereses ($2.184M COP). Incluye sparklines interactivos y evolución temporal con filtros de periodo (Hoy, 7 días, 30 días, Año).
* **Directorio de Clientes 360°:** Visualización integral de prestatarios con filtros por ciudad (Bogotá, Medellín, Cali, Barranquilla, Bucaramanga), historial de créditos liquidados y drawer de perfil profundo.
* **Bandeja de Solicitudes & Scoring Drawer:** Visualización de solicitudes entrantes con indicador visual tipo *Gauge SVG* animado del score crediticio, desglose de factores (capacidad de pago, endeudamiento, estabilidad) y tarjeta antifraude con metadatos GPS e IP.
* **Portafolio de Créditos & Tabla de Amortización:** Detalle de créditos activos, saldo remanente y cálculo de planes de pago bajo el **Sistema Francés** (cuota fija mensual con interés sobre saldos).
* **Gestión de Cobranza & Distribución de Mora:** Control por franjas de vencimiento con barras de distribución de capital en riesgo y asignación a gestores de cobranza.
* **Monitor de Recaudos en Tiempo Real:** Gráfico por horas del recaudo intradía versus la meta proyectada y módulo de recaudo manual.
* **Motor de Conciliación Bancaria:** Auditoría de discrepancias contables, búsqueda rápida por referencia bancaria (ej. `TX-982341`) y proceso de auto-conciliación simulada.
* **Módulo de Desembolsos:** Control de transferencias programadas, procesamiento de dispersión masiva de lotes ACH con token criptográfico y protocolo de reintento ante rechazos de cuenta.
* **Reportes & Exportación:** Generación y descarga directa en formato CSV estructurado para carteras de crédito, recaudos y conciliación.
* **Configuración del Negocio:** Parámetros de tasas de interés mensuales vencidas (M.V.), políticas de riesgo y umbrales mínimos de scoring.

---

### 📱 B. Portal Cliente Interactivo ("Mi Crédito")
Una vista simulada que replica la experiencia del prestatario final (como Carlos Rodríguez) en dispositivos móviles o web:
* **Estado de Crédito Actual:** Tarjeta visual de próxima cuota, días de gracia restantes y barra de progreso de pago (ej. 8 de 12 cuotas pagadas - 66%).
* **Simulador de Microcréditos en Vivo:** Selector deslizante interactivo de montos ($500.000 a $10.000.000 COP) y botones de plazo (3, 6, 9 y 12 meses).
  $$\text{Cuota (PMT)} = P \times \frac{r \cdot (1 + r)^n}{(1 + r)^n - 1}$$
  Donde:
  * $P$ = Monto del microcrédito.
  * $r$ = Tasa mensual efectiva (ej. 2,15% M.V.).
  * $n$ = Plazo en meses.
* **Timeline de Trazabilidad de Solicitud:** Seguimiento paso a paso desde el envío, validación biométrica facial, scoring, aprobación hasta el desembolso en cuenta.
* **Pasarela de Pago de Cuota:** Modal interactivo con selección de métodos de recaudo digital (PSE, Nequi y Transferencia Bancaria).
* **Historial y Paz y Salvo:** Descarga y consulta de comprobantes de pago y certificados de paz y salvo de créditos finalizados.

---

## 🛠️ 5. Arquitectura Técnica y Tecnologías

El software fue construido priorizando **rendimiento extremo**, **cero dependencias de empaquetado complejas**, y **facilidad de portabilidad y presentación**:

* **Arquitectura:** Single Page Application (SPA) basada en estados en memoria con reactividad dirigida por eventos (Vanilla JS Enterprise Controller).
* **Frontend:**
  * **HTML5 Semántico:** Estructura accesible con modales, *drawers* deslizantes, barras de navegación colapsables y diseño responsive.
  * **CSS3 Moderno:** Design System propio en `styles.css` con variables CSS centralizadas (tokens de color corporativo, tipografías, sombras y radios de borde), diseño adaptable (*Grid* y *Flexbox*).
  * **JavaScript (ES6+):** Motor monolítico modular en `app.js` encargado de la lógica financiera, enrutamiento interno, validaciones y actualización dinámica del DOM.
* **Librerías de Soporte (CDN):**
  * **[Chart.js](https://www.chartjs.org/):** Renderizado de gráficos de línea, curvas acumuladas por hora, gráficos de dona para mora y sparklines para KPIs.
  * **[Lucide Icons](https://lucide.dev/):** Set integral de iconos vectoriales para interfaces financieras.
  * **Google Fonts:** Tipografía corporativa *Plus Jakarta Sans* y tipografía técnica *JetBrains Mono* para montos e identificadores numéricos.

---

## 📂 6. Estructura del Repositorio

```
Micro-credit-concept/
│
├── index.html        # Estructura completa de la SPA (Vistas, Modales, Drawers)
├── styles.css        # Sistema de diseño, tokens, componentes y media queries
├── app.js            # Lógica financiera, estado global, simulador y controladores
└── README.md         # Documentación formal y ejecutiva del proyecto
```

---

## ⚡ 7. Cómo Ejecutar el Proyecto Localmente

El proyecto es completamente autocontenido y no requiere instalación de gestores de paquetes como `npm` o herramientas complejas de compilación:

### Opción 1: Apertura Directa en el Navegador
1. Clona o descarga este repositorio en tu equipo:
   ```bash
   git clone https://github.com/Secastrog/Micro-credit-concept.git
   ```
2. Haz doble clic en el archivo `index.html` o ábrelo directamente en tu navegador preferido (Google Chrome, Edge, Brave, Firefox, Safari).

### Opción 2: Con un Servidor Local Ligero (Recomendado)
Para una experiencia óptima con gráficos y fuentes CDN:

* **Con VS Code:**
  Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.

* **Con Node.js:**
  ```bash
  npx serve .
  ```

* **Con Python 3:**
  ```bash
  python -m http.server 8080
  ```
  Luego abre en tu navegador: `http://localhost:8080`

---

## 🧭 8. Guía Rápida de Navegación del Prototipo

1. **Colapsar Menú:** Puedes colapsar la barra lateral izquierda haciendo clic en el icono de flecha superior para maximizar el área de trabajo.
2. **Evaluación de Solicitudes:** Ve al módulo **"Solicitudes"**, haz clic en el botón **"Evaluar"** en cualquiera de las solicitudes (ej. Laura Martínez) para abrir el Drawer de Scoring con el medidor circular interactivo, la geolocalización y los botones de aprobación.
3. **Conciliación de Pagos:** Ingresa a **"Conciliación"**, audita transacciones con diferencia y ejecuta la auto-conciliación simulada.
4. **Dispersión Masiva:** Ve a **"Desembolsos"** y haz clic en **"Dispersar Lote ACH"** para autorizar los pagos pendientes.
5. **Alternar al Portal Cliente:** Haz clic en el botón morado de la barra lateral inferior **"Ver Portal Cliente (Carlos R.)"** para interactuar con el simulador de cuotas en tiempo real y probar la pasarela de pago.

---

## 📈 9. Hoja de Ruta (Roadmap de Escalabilidad)

Hacia una fase de despliegue productivo y captación de inversión semilla, la arquitectura está planificada para evolucionar de la siguiente manera:

- [x] **Fase 1 (Completada):** Concepción de negocio, diseño de experiencia de usuario (UX/UI Fintech), modelo matemático de cuotas y prototipo interactivo funcional.
- [ ] **Fase 2 (Backend & Base de Datos):** Implementación de API RESTful con microservicios en **Node.js (NestJS)** o **Python (FastAPI)**, respaldados por una base de datos relacional **PostgreSQL** para trazabilidad contable y auditoría ACID.
- [ ] **Fase 3 (Integraciones Bancarias Reales):**
  - Conexión con burós de crédito en Colombia (Datacrédito Experian / TransUnion vía API).
  - Pasarela de pagos con Wompi, Bold o PayU para recaudo PSE / tarjetas.
  - API directa para dispersión masiva con Bancolombia / Davivienda / ACH Colombia.
  - Validación de identidad con biometría facial y cotejo de cédula ante la Registraduría Nacional del Estado Civil.
- [ ] **Fase 4 (Machine Learning para Scoring):** Modelo predictivo de riesgo de impago (*Default Prediction Model*) basado en árboles de decisión potenciados (XGBoost/LightGBM) que analice variables socioeconómicas y comportamentales.

---

## ⚖️ 10. Autoría y Propiedad Intelectual

Este proyecto, incluyendo su concepción de negocio, lógica financiera, arquitectura de software, diseño de interfaz y código fuente, es un **proyecto original y propio de**:

* **Autor & Desarrollador Principal:** Sergio Esteban Castro Giraldo  
* **Perfil GitHub:** [@Secastrog](https://github.com/Secastrog)  
* **Año de Concepción y Creación:** 2026  
* **Derechos:** Todos los derechos intelectuales y comerciales sobre la idea de negocio y diseño conceptual reservados.

---

*CAPITALCOP — Impulsando la inclusión financiera a través de tecnología inteligente de microcréditos.*
