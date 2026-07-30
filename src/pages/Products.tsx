import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { productCategories } from '../data/products';

export default function Products() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-secondary-800 to-primary-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Nuestros Productos</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Líneas completas de instrumental médico quirúrgico de las mejores marcas internacionales, 
            organizadas por especialidad y tipo de procedimiento.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white border-b border-gray-100 sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex overflow-x-auto gap-1 py-2 scrollbar-hide" aria-label="Categorías de productos">
            {productCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="shrink-0 px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors whitespace-nowrap"
              >
                {cat.icon} {cat.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {productCategories.map((category, index) => (
            <article
              key={category.id}
              id={category.id}
              className="scroll-mt-32"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
                      <span className="text-sm font-medium text-gray-800">
                        {category.icon} {category.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {category.name}
                  </h2>

                  {category.brands && category.brands.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.brands.map((brand) => (
                        <span
                          key={brand}
                          className="inline-flex items-center px-3 py-1 bg-secondary-50 text-secondary-700 text-xs font-medium rounded-full"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {category.features && (
                    <ul className="space-y-2 mb-6">
                      {category.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check size={16} className="text-accent-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    to="/contacto"
                    className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  >
                    Solicitar Información
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ¿No encuentra lo que busca?
          </h2>
          <p className="text-gray-600 mb-8">
            Manejamos un catálogo amplio que incluye productos adicionales. 
            Contáctenos y con gusto le ayudamos a encontrar el instrumental que necesita.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3.5 rounded-lg font-medium transition-colors"
          >
            Contactar a un Asesor
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
