import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award, Truck, HeartPulse } from 'lucide-react';
import { productCategories } from '../data/products';
import { BASE_URL } from '../config';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-800 via-secondary-700 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${BASE_URL}images/products/surgery-retractors.jpg)` }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <HeartPulse size={16} className="text-primary-300" />
              <span className="text-sm text-primary-100">Instrumental Médico Quirúrgico</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Soluciones de alta calidad para el{' '}
              <span className="text-primary-300">quirófano moderno</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Distribuimos instrumental médico quirúrgico de las mejores marcas internacionales. 
              Retractores, laparoscopia, energía bipolar, grapeo y más para cirujanos que exigen excelencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/productos"
                className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-400 text-white px-7 py-3.5 rounded-lg font-medium transition-colors"
              >
                Ver Productos
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/25 px-7 py-3.5 rounded-lg font-medium transition-colors"
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: 'Calidad Certificada', desc: 'Productos con estándares internacionales' },
              { icon: Award, title: 'Marcas Premium', desc: 'Thompson, Omni-Tract, Purple Surgical' },
              { icon: Truck, title: 'Entrega Nacional', desc: 'Cobertura en toda la República' },
              { icon: HeartPulse, title: 'Soporte Técnico', desc: 'Asesoría especializada en quirófano' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="p-2 bg-primary-100 rounded-lg shrink-0">
                  <item.icon size={22} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestras Líneas de Producto
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales en instrumental quirúrgico, 
              cubriendo las necesidades de los principales procedimientos en cirugía general y especializada.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category) => (
              <Link
                key={category.id}
                to={`/productos#${category.id}`}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:border-primary-200 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={`${BASE_URL}${category.image}`}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {category.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured: Thompson Retractors */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 font-medium text-sm uppercase tracking-wide">
                Producto Destacado
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                Sistemas de Retracción Thompson
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Los sistemas de retracción Thompson Surgical Instruments son el estándar de oro en 
                cirugía abierta. Su diseño modular permite configuraciones personalizadas para cada 
                procedimiento, ofreciendo exposición óptima del campo quirúrgico con mínima asistencia.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Sistema modular con más de 100 componentes intercambiables',
                  'Valvas de acero inoxidable en múltiples perfiles y tamaños',
                  'Brazos articulados con bloqueo seguro',
                  'Estuches de esterilización de aluminio anodizado',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ShieldCheck size={18} className="text-accent-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/productos#retractores"
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Ver catálogo completo
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={`${BASE_URL}images/products/retractors-set.jpg`}
                alt="Set de retractores Thompson"
                className="rounded-xl shadow-md w-full h-48 object-cover"
              />
              <img
                src={`${BASE_URL}images/products/retractor-arm.jpg`}
                alt="Brazo retractor"
                className="rounded-xl shadow-md w-full h-48 object-cover"
              />
              <img
                src={`${BASE_URL}images/products/omni-tract.jpg`}
                alt="Sistema Omni-Tract"
                className="rounded-xl shadow-md w-full h-48 object-cover col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Necesita instrumental quirúrgico?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Contáctenos para recibir asesoría personalizada y una cotización adaptada a las necesidades 
            de su hospital o clínica.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg"
          >
            Solicitar Cotización
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
