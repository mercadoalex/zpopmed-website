import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Award, Globe, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-secondary-800 to-primary-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Nosotros</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Conozca a ZpopMed S.A. de C.V., su socio confiable en instrumental médico quirúrgico de alta calidad.
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Compromiso con la excelencia quirúrgica
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ZpopMed S.A. de C.V. es una empresa mexicana dedicada a la distribución de 
                instrumental médico quirúrgico de alta calidad. Trabajamos con las mejores marcas 
                internacionales para ofrecer soluciones completas a hospitales, clínicas y 
                profesionales de la salud en México.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nuestro equipo cuenta con amplia experiencia en el ámbito quirúrgico, lo que nos 
                permite brindar asesoría técnica especializada y acompañamiento en quirófano para 
                garantizar el uso óptimo de cada instrumento.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nos especializamos en sistemas de retracción quirúrgica, instrumental para 
                laparoscopia, dispositivos de energía, sistemas de grapeo, mallas, drenajes y 
                accesorios para endoscopia, cubriendo las necesidades de cirugía general y 
                especialidades quirúrgicas.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/products/thompson-cases.jpg"
                alt="Instrumental quirúrgico ZpopMed"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-6 rounded-xl shadow-lg hidden md:block">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm text-primary-100">Compromiso con la calidad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="p-3 bg-primary-100 rounded-lg w-fit mb-4">
                <Target size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Proveer instrumental médico quirúrgico de la más alta calidad, contribuyendo al 
                éxito de los procedimientos quirúrgicos y al bienestar de los pacientes, a través 
                de productos confiables y soporte técnico especializado.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="p-3 bg-secondary-100 rounded-lg w-fit mb-4">
                <Eye size={24} className="text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser el distribuidor líder de instrumental quirúrgico en México, reconocidos por 
                nuestra excelencia en servicio, la calidad de nuestros productos y nuestro 
                compromiso con la innovación en el ámbito quirúrgico.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="p-3 bg-accent-100 rounded-lg w-fit mb-4">
                <Heart size={24} className="text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Integridad, calidad, compromiso con el paciente, innovación continua y servicio 
                excepcional. Cada producto que ofrecemos refleja nuestro estándar de excelencia y 
                nuestra responsabilidad con la comunidad médica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestra propuesta de valor se basa en la combinación de productos premium, 
              servicio personalizado y experiencia en quirófano.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Marcas Premium',
                description: 'Distribuimos exclusivamente marcas reconocidas internacionalmente por su calidad y durabilidad.',
              },
              {
                icon: Users,
                title: 'Asesoría en Quirófano',
                description: 'Nuestro equipo técnico brinda soporte directamente en el quirófano durante los procedimientos.',
              },
              {
                icon: Globe,
                title: 'Cobertura Nacional',
                description: 'Atendemos hospitales y clínicas en toda la República Mexicana con tiempos de respuesta competitivos.',
              },
              {
                icon: Heart,
                title: 'Servicio Postventa',
                description: 'Garantía, mantenimiento y seguimiento continuo para asegurar la satisfacción total de nuestros clientes.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="p-3 bg-primary-50 rounded-full w-fit mx-auto mb-4">
                  <item.icon size={28} className="text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Work With */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Marcas que Representamos
            </h2>
            <p className="text-gray-600">
              Trabajamos con fabricantes de clase mundial en instrumental quirúrgico
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Thompson Surgical Instruments',
              'Omni-Tract (Minnesota Scientific)',
              'Purple Surgical',
              'Healnoc',
            ].map((brand) => (
              <div
                key={brand}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center justify-center text-center"
              >
                <span className="font-medium text-gray-700 text-sm">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trabajemos juntos
          </h2>
          <p className="text-gray-600 mb-8">
            Estamos listos para ser su socio en instrumental quirúrgico. 
            Contáctenos para conocer cómo podemos apoyar a su institución.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3.5 rounded-lg font-medium transition-colors"
          >
            Contáctenos
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
