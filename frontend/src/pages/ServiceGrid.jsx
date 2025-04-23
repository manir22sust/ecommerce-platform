import {
  TruckIcon,
  ClockIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

const ServiceGrid = () => {
  const services = [
    {
      icon: TruckIcon,
      title: "Kostenloser Versand",
      text: "Kostenfreie Lieferung innerhalb Deutschlands ab 50€ Bestellwert",
    },
    {
      icon: ClockIcon,
      title: "Schnelle Lieferung",
      text: "Standardlieferung innerhalb von 1-2 Werktagen",
    },
    {
      icon: LifebuoyIcon,
      title: "Kundenservice",
      text: "24/7 Support per Telefon, E-Mail oder Live-Chat",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col items-center text-center"
        >
          <div className="mb-6">
            <service.icon
              className="w-14 h-14 text-blue-600 p-2 bg-blue-50 rounded-lg transition-colors group-hover:bg-blue-100"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
          <p className="text-gray-600 leading-relaxed max-w-xs">
            {service.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
