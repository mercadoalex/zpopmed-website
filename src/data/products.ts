export interface ProductCategory {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  brands?: string[];
  features?: string[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'retractores',
    name: 'Retractores Quirúrgicos',
    shortDescription: 'Sistemas de retracción Thompson y Omni-Tract para cirugía abierta',
    description:
      'Sistemas de retracción quirúrgica de alta precisión para procedimientos de cirugía abierta. Incluimos los sistemas Thompson Surgical Instruments y Omni-Tract, reconocidos mundialmente por su versatilidad, durabilidad y facilidad de uso en quirófano. Amplia gama de valvas, brazos articulados y accesorios.',
    image: 'images/products/retractors-set.jpg',
    icon: '🔧',
    brands: ['Thompson Surgical Instruments', 'Omni-Tract'],
    features: [
      'Sistemas modulares y versátiles',
      'Acero inoxidable de grado quirúrgico',
      'Valvas intercambiables de múltiples tamaños',
      'Brazos articulados de alta precisión',
      'Estuches de esterilización incluidos',
    ],
  },
  {
    id: 'laparoscopia',
    name: 'Laparoscopia',
    shortDescription: 'Instrumental completo para cirugía laparoscópica de mínima invasión',
    description:
      'Línea completa de instrumental para cirugía laparoscópica incluyendo pinzas, tijeras, disectores, aplicadores de clips y más. Diseñados para ofrecer máxima ergonomía y precisión en procedimientos de mínima invasión.',
    image: 'images/products/surgical-instruments-display.jpg',
    icon: '🔬',
    brands: ['Purple Surgical'],
    features: [
      'Instrumental de 5mm y 10mm',
      'Diseño ergonómico',
      'Aislamiento completo',
      'Rotación 360°',
      'Opciones reutilizables y desechables',
    ],
  },
  {
    id: 'trocares',
    name: 'Trocares',
    shortDescription: 'Trocares de acceso para cirugía laparoscópica',
    description:
      'Trocares de última generación para acceso abdominal en cirugía laparoscópica. Disponibles en múltiples diámetros con sistemas de sellado avanzados que minimizan la fuga de gas y proporcionan acceso seguro y estable.',
    image: 'images/products/surgical-instruments-table.jpg',
    icon: '🎯',
    brands: ['Purple Surgical'],
    features: [
      'Diámetros de 5mm, 10mm, 12mm y 15mm',
      'Sistema de sellado sin válvula',
      'Punta de seguridad con protección',
      'Cánulas roscadas para estabilidad',
      'Opciones ópticas disponibles',
    ],
  },
  {
    id: 'energia',
    name: 'Energía / Bipolar Avanzado',
    shortDescription: 'Dispositivos de energía bipolar para sellado y corte de tejidos',
    description:
      'Dispositivos avanzados de energía bipolar para sellado y corte simultáneo de vasos y tejidos. Tecnología de última generación que permite procedimientos más rápidos y seguros con mínimo daño térmico lateral.',
    image: 'images/products/thompson-cases.jpg',
    icon: '⚡',
    brands: ['Healnoc'],
    features: [
      'Sellado de vasos hasta 7mm',
      'Corte y sellado simultáneo',
      'Mínima dispersión térmica',
      'Compatible con generadores estándar',
      'Disponible en versiones abierta y laparoscópica',
    ],
  },
  {
    id: 'grapeo',
    name: 'Grapeo Quirúrgico',
    shortDescription: 'Grapadoras lineales y circulares para anastomosis',
    description:
      'Sistemas de grapeo quirúrgico para corte y anastomosis. Grapadoras lineales, circulares y endoscópicas con tecnología de triple hilera de grapas para mayor seguridad hemostática.',
    image: 'images/products/surgical-instruments-display.jpg',
    icon: '📎',
    brands: ['Purple Surgical'],
    features: [
      'Grapadoras lineales cortantes',
      'Grapadoras circulares para anastomosis',
      'Cargas con triple hilera de grapas',
      'Alturas de grapa variables',
      'Articulación endoscópica',
    ],
  },
  {
    id: 'mallas',
    name: 'Mallas Quirúrgicas',
    shortDescription: 'Mallas para reparación de hernias y defectos de pared',
    description:
      'Mallas quirúrgicas de alta calidad para reparación de hernias inguinales, ventrales e incisionales. Materiales biocompatibles diseñados para una óptima integración tisular y mínima respuesta inflamatoria.',
    image: 'images/products/thompson-cases.jpg',
    icon: '🛡️',
    features: [
      'Polipropileno de baja densidad',
      'Mallas compuestas con barrera antiadherente',
      'Múltiples tamaños y formas',
      'Diseños anatómicos preformados',
      'Opciones parcialmente absorbibles',
    ],
  },
  {
    id: 'drenajes',
    name: 'Drenajes',
    shortDescription: 'Sistemas de drenaje quirúrgico para manejo postoperatorio',
    description:
      'Sistemas de drenaje quirúrgico para el manejo eficiente de fluidos postoperatorios. Incluye drenajes cerrados con succión, drenajes pasivos y accesorios para fijación y medición.',
    image: 'images/products/retractor-arm.jpg',
    icon: '💧',
    features: [
      'Drenajes con succión cerrada tipo Jackson-Pratt',
      'Drenajes tipo Blake',
      'Reservorios de baja y alta succión',
      'Materiales radiopacos',
      'Múltiples calibres disponibles',
    ],
  },
  {
    id: 'endoscopia',
    name: 'Endoscopia',
    shortDescription: 'Instrumental y accesorios para procedimientos endoscópicos',
    description:
      'Línea completa de instrumental y accesorios para endoscopia diagnóstica y terapéutica. Pinzas de biopsia, asas de polipectomía, guías, catéteres y más.',
    image: 'images/products/surgical-instruments-table.jpg',
    icon: '🔍',
    features: [
      'Pinzas de biopsia estándar y jumbo',
      'Asas de polipectomía',
      'Esfinterótomos',
      'Guías hidrofílicas',
      'Catéteres de dilatación',
    ],
  },
];
