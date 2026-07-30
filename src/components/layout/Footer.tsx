import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/images/brand/logo.jpg"
              alt="ZpopMed S.A. de C.V."
              className="h-14 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Distribuidor de instrumental médico quirúrgico de alta calidad. 
              Soluciones especializadas para cirugía laparoscópica, 
              retractores y más.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-sm hover:text-primary-400 transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-sm hover:text-primary-400 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm hover:text-primary-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Product categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Productos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/productos#retractores" className="text-sm hover:text-primary-400 transition-colors">
                  Retractores Quirúrgicos
                </Link>
              </li>
              <li>
                <Link to="/productos#laparoscopia" className="text-sm hover:text-primary-400 transition-colors">
                  Laparoscopia
                </Link>
              </li>
              <li>
                <Link to="/productos#energia" className="text-sm hover:text-primary-400 transition-colors">
                  Energía / Bipolar
                </Link>
              </li>
              <li>
                <Link to="/productos#grapeo" className="text-sm hover:text-primary-400 transition-colors">
                  Grapeo Quirúrgico
                </Link>
              </li>
              <li>
                <Link to="/productos#endoscopia" className="text-sm hover:text-primary-400 transition-colors">
                  Endoscopia
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary-400 mt-0.5 shrink-0" />
                <span className="text-sm">Ciudad de México, México</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary-400 shrink-0" />
                <a href="tel:+525500000000" className="text-sm hover:text-primary-400 transition-colors">
                  +52 55 0000 0000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary-400 shrink-0" />
                <a href="mailto:contacto@zpopmed.com" className="text-sm hover:text-primary-400 transition-colors">
                  contacto@zpopmed.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ZpopMed S.A. de C.V. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-600">
            Instrumental Médico Quirúrgico
          </p>
        </div>
      </div>
    </footer>
  );
}
