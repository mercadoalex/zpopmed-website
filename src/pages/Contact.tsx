import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { productCategories } from '../data/products';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  productInterest: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    productInterest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-secondary-800 to-primary-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Estamos listos para ayudarle. Solicite una cotización o contáctenos para
            asesoría personalizada sobre nuestro instrumental quirúrgico.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Información de Contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary-100 rounded-lg shrink-0">
                    <MapPin size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Dirección</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Ciudad de México, México
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary-100 rounded-lg shrink-0">
                    <Phone size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Teléfono</h3>
                    <a
                      href="tel:+525500000000"
                      className="text-gray-600 text-sm mt-1 hover:text-primary-600 transition-colors block"
                    >
                      +52 55 0000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary-100 rounded-lg shrink-0">
                    <Mail size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Email</h3>
                    <a
                      href="mailto:contacto@zpopmed.com"
                      className="text-gray-600 text-sm mt-1 hover:text-primary-600 transition-colors block"
                    >
                      contacto@zpopmed.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary-100 rounded-lg shrink-0">
                    <Clock size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Horario</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Lunes a Viernes: 9:00 - 18:00
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">
                      Soporte en quirófano disponible según programación
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick info card */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">¿Necesita soporte urgente?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Para soporte técnico urgente en quirófano, comuníquese directamente por teléfono.
                </p>
                <a
                  href="tel:+525500000000"
                  className="inline-flex items-center gap-2 text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors"
                >
                  <Phone size={14} />
                  Llamar ahora
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-accent-50 border border-accent-200 rounded-xl p-8 text-center">
                  <CheckCircle size={48} className="text-accent-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    ¡Mensaje enviado!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Gracias por contactarnos. Nuestro equipo se pondrá en contacto con usted
                    en las próximas 24 horas hábiles.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        productInterest: '',
                        message: '',
                      });
                    }}
                    className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Solicitar Cotización / Información
                  </h2>
                  <p className="text-sm text-gray-500 mb-6">
                    Complete el formulario y nos pondremos en contacto a la brevedad.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                          placeholder="Dr. Juan Pérez"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Correo electrónico *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                          placeholder="doctor@hospital.com"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                          placeholder="+52 55 1234 5678"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Hospital / Clínica
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                          placeholder="Hospital General"
                        />
                      </div>
                    </div>

                    {/* Product Interest */}
                    <div>
                      <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Producto de interés
                      </label>
                      <select
                        id="productInterest"
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow bg-white"
                      >
                        <option value="">Seleccione una categoría</option>
                        {productCategories.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow resize-y"
                        placeholder="Describa los productos que necesita, cantidades, o cualquier pregunta que tenga..."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto justify-center"
                    >
                      <Send size={16} />
                      Enviar Mensaje
                    </button>

                    <p className="text-xs text-gray-400">
                      * Campos obligatorios. Su información será tratada de manera confidencial.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
