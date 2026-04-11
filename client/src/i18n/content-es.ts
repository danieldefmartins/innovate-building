// Spanish translations for data-driven content (services, FAQ, reviews, pages)

export const servicesES: Record<string, { title: string; shortTitle: string; description: string; heroTitle: string; heroSubtitle: string; features: string[]; benefits: string[]; process: { step: string; description: string }[]; faqs: { q: string; a: string }[] }> = {
  "home-remodeling": {
    title: "Remodelación de Hogar",
    shortTitle: "Remodelación",
    description: "Renovaciones completas del hogar por equipos propios con experiencia. Cocinas, baños, sótanos y remodelaciones de toda la casa en el Gran Boston.",
    heroTitle: "EXPERTOS EN REMODELACIÓN DE HOGAR",
    heroSubtitle: "Su hogar merece una renovación hecha por profesionales que se preocupan. Nuestros equipos propios manejan cada detalle — desde la demolición hasta los toques finales.",
    features: ["Remodelaciones de concepto abierto", "Instalación de pisos", "Trabajo de molduras y acabados", "Actualizaciones eléctricas y de plomería", "Actualizaciones estructurales", "Pintura interior y exterior"],
    benefits: ["Renovación completa del hogar bajo un mismo techo", "Equipos propios para cada oficio", "25+ años de experiencia en remodelación", "Precios transparentes — sin sorpresas", "Gestión de permisos incluida", "Limpieza diaria del sitio de trabajo"],
    process: [{ step: "Consulta", description: "Visitamos su hogar y discutimos sus objetivos" }, { step: "Diseño y Planificación", description: "Creamos un plan detallado con presupuesto" }, { step: "Construcción", description: "Nuestros equipos ejecutan el trabajo con supervisión diaria" }, { step: "Inspección Final", description: "Recorrido final juntos — no terminamos hasta que usted esté satisfecho" }],
    faqs: [{ q: "¿Cuánto tiempo toma una remodelación completa?", a: "Depende del alcance. Una remodelación de una habitación toma 2-4 semanas. Una remodelación de toda la casa puede tomar 3-6 meses." }, { q: "¿Necesito mudarme durante la remodelación?", a: "Para la mayoría de los proyectos, no. Trabajamos en fases para minimizar la interrupción. Para remodelaciones completas, puede ser más cómodo mudarse temporalmente." }, { q: "¿Manejan los permisos?", a: "Sí. Nos encargamos de todos los permisos de construcción requeridos para su proyecto." }],
  },
  "kitchen-remodeling": {
    title: "Remodelación de Cocina",
    shortTitle: "Cocinas",
    description: "Renovaciones de cocina personalizadas que combinan funcionalidad y estilo. Gabinetes, encimeras, azulejos y remodelaciones completas por equipos propios.",
    heroTitle: "EXPERTOS EN REMODELACIÓN DE COCINA",
    heroSubtitle: "Su cocina es la habitación más usada de su hogar — merece un contratista que la haga bien. Diseño personalizado, materiales premium y equipos propios de principio a fin.",
    features: ["Gabinetes personalizados y semi-personalizados", "Instalación de encimeras (granito, cuarzo, mármol)", "Diseño y construcción de islas", "Trabajo de azulejos y salpicadero", "Actualizaciones de plomería y electricidad", "Instalación de pisos"],
    benefits: ["Renovación completa de cocina bajo un mismo techo", "Equipos propios para cada oficio", "Visualización de diseño 3D de cocina", "Selección de materiales premium", "25+ años de experiencia en cocinas", "Precios transparentes — sin sorpresas de órdenes de cambio"],
    process: [{ step: "Consulta de Cocina", description: "Medimos su espacio y discutimos su visión" }, { step: "Diseño y Selección", description: "Elija gabinetes, encimeras, azulejos y electrodomésticos" }, { step: "Construcción e Instalación", description: "Demolición profesional, construcción e instalación" }, { step: "Inspección de Calidad", description: "Recorrido final para asegurar cada detalle perfecto" }],
    faqs: [{ q: "¿Cuánto tiempo toma una remodelación de cocina?", a: "Una remodelación típica toma 4-8 semanas. Un retoque cosmético puede tomar 2-3 semanas, mientras que una renovación completa toma 8-12 semanas." }, { q: "¿Pueden trabajar con mi diseño existente?", a: "Absolutamente. Podemos refrescar su cocina manteniendo el diseño actual o rediseñar completamente el espacio." }, { q: "¿Ustedes proveen los materiales?", a: "Nos encargamos de la selección de materiales con nuestros proveedores de confianza, pero también trabajamos con materiales que usted elija." }],
  },
  "bathroom-remodeling": {
    title: "Remodelación de Baño",
    shortTitle: "Baños",
    description: "Transforme su baño con renovación experta. Duchas tipo walk-in, azulejos personalizados, tocadores modernos. Contratista licenciado, 25+ años de experiencia.",
    heroTitle: "EXPERTOS EN REMODELACIÓN DE BAÑO",
    heroSubtitle: "Desde medio baños hasta suites de lujo — nuestros equipos propios transforman baños con azulejos de calidad, duchas modernas y atención al detalle.",
    features: ["Duchas walk-in y sin borde", "Instalación de azulejos personalizados", "Instalación de tocadores y gabinetes", "Pisos con calefacción radiante", "Sistemas de impermeabilización", "Actualizaciones de plomería"],
    benefits: ["Renovación completa de baño bajo un mismo techo", "Equipos especializados en azulejos propios", "Experiencia en diseño de baños spa", "Impermeabilización en cada proyecto", "25+ años de experiencia en baños", "Limpieza diaria — respetamos su hogar"],
    process: [{ step: "Consulta de Baño", description: "Evaluamos su espacio y discutimos sus ideas" }, { step: "Diseño y Materiales", description: "Seleccionamos azulejos, tocador, accesorios y acabados" }, { step: "Demolición y Construcción", description: "Impermeabilización, plomería, azulejos e instalación profesional" }, { step: "Recorrido Final", description: "Inspeccionamos cada detalle juntos" }],
    faqs: [{ q: "¿Cuánto tiempo toma una renovación de baño?", a: "La mayoría toma 2-4 semanas. Un medio baño puede estar listo en 7-10 días, mientras que un baño principal completo toma 3-5 semanas." }, { q: "¿Pueden agregar una ducha walk-in?", a: "Sí. Diseñamos e instalamos duchas walk-in con vidrio sin marco, asientos empotrados y azulejos personalizados." }, { q: "¿Qué pasa si encuentran daño por agua?", a: "Lo reparamos correctamente antes de continuar. Es mejor descubrirlo ahora que después de que el azulejo nuevo esté instalado." }],
  },
  "roofing": {
    title: "Techos",
    shortTitle: "Techos",
    description: "Reemplazo completo de techo y reparaciones por equipos propios con experiencia. Tejas asfálticas, arquitectónicas y de diseño. Especialistas en daños por tormentas.",
    heroTitle: "SERVICIOS DE TECHOS",
    heroSubtitle: "Su techo protege todo lo que está debajo. Nuestro equipo propio de techos maneja reemplazos completos, reparaciones y daños por tormentas con calidad y velocidad.",
    features: ["Reemplazo completo de techo", "Reparación de tormentas y emergencias", "Tejas arquitectónicas y de diseño", "Prevención de represas de hielo", "Instalación de canaletas", "Ventilación de ático"],
    benefits: ["Equipo propio de techos — sin subcontratistas", "Todos los sistemas principales de techos", "Experiencia en daños por tormentas", "Garantías del fabricante", "Limpieza completa del sitio", "Asistencia con reclamos de seguro"],
    process: [{ step: "Inspección de Techo", description: "Evaluación completa del techo y estimado detallado" }, { step: "Selección de Materiales", description: "Elija tejas, color y sistema de garantía" }, { step: "Instalación", description: "Remoción profesional e instalación del nuevo techo" }, { step: "Inspección Final", description: "Verificación de calidad y limpieza completa" }],
    faqs: [{ q: "¿Cuánto tiempo toma un reemplazo de techo?", a: "La mayoría de los reemplazos residenciales se completan en 1-3 días, dependiendo del tamaño y la complejidad." }, { q: "¿Ayudan con reclamos de seguro?", a: "Sí. Documentamos el daño, proporcionamos estimados detallados y trabajamos directamente con su compañía de seguros." }, { q: "¿Qué garantía ofrecen?", a: "Ofrecemos garantía en mano de obra más la garantía del fabricante en materiales (20-50 años dependiendo del producto)." }],
  },
};

export const faqDataES = [
  { category: "General", question: "¿Cuánto tiempo llevan en el negocio?", answer: "Innovate Building Inc ha estado sirviendo a propietarios del Gran Boston y New Hampshire desde 2001 — más de 20 años de experiencia con más de 1,000 proyectos completados. Somos licenciados en Massachusetts (CS-119608) y New Hampshire." },
  { category: "General", question: "¿Están licenciados y asegurados?", answer: "Sí. Somos un contratista general completamente licenciado en Massachusetts (Licencia #CS-119608) y New Hampshire. Contamos con seguro de responsabilidad general completo y compensación laboral." },
  { category: "General", question: "¿Usan subcontratistas?", answer: "No — y esto es lo que nos diferencia. Usamos 100% equipos propios para cada proyecto. Nuestros carpinteros, instaladores de azulejos, techadores y trabajadores son todos parte del equipo de Innovate Building." },
  { category: "General", question: "¿Qué áreas sirven?", answer: "Servimos toda el área del Gran Boston incluyendo Boston, Cambridge, Somerville, Newton, Brookline, Quincy y todas las ciudades circundantes. También servimos el sur de New Hampshire incluyendo Manchester, Nashua, Salem y pueblos cercanos." },
  { category: "General", question: "¿Ofrecen estimados gratis?", answer: "Sí. Proporcionamos consultas y estimados gratuitos en el lugar para todos los proyectos. Sin obligación y sin presión. Visitamos su hogar, discutimos su visión, tomamos medidas y proporcionamos un estimado escrito detallado." },
  { category: "Proceso", question: "¿Cómo es su proceso de principio a fin?", answer: "Nuestro proceso tiene cuatro fases: (1) Consulta Gratuita — visitamos su hogar y discutimos sus objetivos. (2) Diseño y Estimado — proporcionamos una propuesta escrita detallada. (3) Construcción — nuestro equipo propio completa el trabajo con supervisión diaria. (4) Recorrido Final — hacemos una inspección juntos." },
  { category: "Proceso", question: "¿Manejan los permisos?", answer: "Sí. Nos encargamos de todos los permisos de construcción requeridos para su proyecto. Conocemos los requisitos de permisos para cada ciudad y pueblo en nuestra área de servicio." },
  { category: "Proceso", question: "¿Estarán en el sitio durante la construcción?", answer: "Sí. Nuestro propietario, Daniel, está en el sitio regularmente supervisando cada proyecto activo. También tendrá un líder de proyecto dedicado en su sitio de trabajo todos los días." },
  { category: "Costos", question: "¿Cuánto cuesta una remodelación de cocina?", answer: "Las remodelaciones de cocina en el Gran Boston típicamente van desde $25,000 para un retoque básico hasta $120,000+ para una renovación completa de alta gama. El costo exacto depende del tamaño, materiales y cambios de diseño." },
  { category: "Costos", question: "¿Cuál es su calendario de pagos?", answer: "Típicamente estructuramos los pagos en hitos: un depósito para asegurar su proyecto, luego pagos de progreso en hitos clave de construcción, con un pago final al completar y su satisfacción." },
  { category: "Garantía", question: "¿Ofrecen garantía en su trabajo?", answer: "Sí. Respaldamos nuestra mano de obra con garantía en todo el trabajo. Si algo que construimos no está bien, regresamos y lo arreglamos — punto." },
  { category: "Garantía", question: "¿Limpian al final de cada día?", answer: "Sí. Respetamos su hogar. Nuestros equipos limpian al final de cada día de trabajo — herramientas organizadas, escombros removidos, área de trabajo barrida. También usamos barreras de polvo y protección de pisos." },
];

export const reviewsES = [
  { name: "Maria Santos", location: "Somerville, MA", service: "Remodelación de Cocina", text: "Daniel y Mendes transformaron completamente nuestra cocina. Daniel nos mantuvo informados en cada paso, y Mendes y su equipo hicieron todo internamente — plomería, electricidad, gabinetes, azulejos. La calidad fue excepcional. La mejor decisión que tomamos.", rating: 5, date: "Marzo 2026", source: "Google" },
  { name: "James O'Brien", location: "Cambridge, MA", service: "Ampliación de Casa", text: "Agregamos un segundo piso y parece que siempre fue parte de la casa. Daniel manejó toda la planificación y permisos, y Mendes estaba en el sitio casi todos los días supervisando al equipo. Profesional, limpio y a tiempo.", rating: 5, date: "Febrero 2026", source: "Google" },
  { name: "Patricia Chen", location: "Newton, MA", service: "Renovación de Baño", text: "Nuestro baño principal pasó de los 1990s a tipo spa en 3 semanas. El trabajo de azulejos es hermoso y la atención al detalle es increíble. Incluso arreglaron daño por agua que no sabíamos que existía.", rating: 5, date: "Enero 2026", source: "Google" },
  { name: "Robert Fitzgerald", location: "Quincy, MA", service: "Techos", text: "Después de que la tormenta dañó nuestro techo, Innovate estaba aquí al día siguiente para un estimado. Reemplazo completo del techo en 2 días, limpiaron perfectamente. Incluso ayudaron con el papeleo del seguro.", rating: 5, date: "Diciembre 2025", source: "Google" },
  { name: "Ana Rodriguez", location: "Everett, MA", service: "Terminación de Sótano", text: "Transformaron nuestro sótano húmedo y oscuro en una hermosa sala familiar con medio baño. El equipo abordó los problemas de humedad primero — algo que otros contratistas querían saltarse. Honestos y completos.", rating: 5, date: "Noviembre 2025", source: "Google" },
];
