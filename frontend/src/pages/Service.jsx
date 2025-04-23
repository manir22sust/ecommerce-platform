import {
  CheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import ContactForm from "../components/ContactForm";
import ServiceGrid from "./ServiceGrid";

const Service = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            Unsere Services
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Entdecken Sie unsere umfassenden Serviceleistungen für ein
            erstklassiges Einkaufserlebnis
          </p>
        </div>
      </div>

      {/* Service Categories */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Service Grid */}
        <ServiceGrid />

        {/* Detailed Services */}
        <div className="bg-white rounded-xl shadow-md p-10 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Unsere Serviceleistungen
          </h2>

          <div className="space-y-8 ">
            {[
              {
                title: "Rückgabe & Umtausch",
                text: "30 Tage Rückgaberecht - einfache Retourenabwicklung über unser Portal",
              },
              {
                title: "Zahlungsmethoden",
                text: "Sichere Zahlung per Kreditkarte, PayPal, Rechnung oder Sofortüberweisung",
              },
              {
                title: "Montageservice",
                text: "Professionelle Montage durch zertifizierte Fachkräfte",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-0 pb-8 last:pb-0 "
              >
                <div className="flex">
                  <CheckIcon className="w-7 h-7 text-green-500 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 flex items-start">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-10">
          <div className="flex items-center mb-8">
            <PhoneIcon className="w-10 h-10 text-blue-600 mr-4 p-2 bg-white rounded-lg" />
            <h2 className="text-3xl font-semibold text-gray-800">
              Kontaktieren Sie uns
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                Unser erfahrenes Serviceteam steht Ihnen gerne für Fragen und
                Unterstützung zur Verfügung.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <CalendarIcon className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Mo-Fr 8:00 - 20:00 Uhr</span>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="w-6 h-6 text-blue-600 mr-3" />
                  <a
                    href="tel:0800123456789"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    0800 123 456 789
                  </a>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="w-6 h-6 text-blue-600 mr-3" />
                  <a
                    href="mailto:service@beispielshop.de"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    service@beispielshop.de
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
