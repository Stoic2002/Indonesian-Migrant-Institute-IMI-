import React from 'react';
import { Scale, Heart, BookOpen, Phone, Home, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Bantuan Hukum",
      description: "Konsultasi dan pendampingan hukum untuk kasus-kasus yang dihadapi migran Indonesia",
      color: "bg-red-500"
    },
    {
      icon: Heart,
      title: "Layanan Kesehatan",
      description: "Akses kesehatan dan dukungan psikologis untuk migran dan keluarga",
      color: "bg-blue-500"
    },
    {
      icon: BookOpen,
      title: "Pelatihan & Edukasi",
      description: "Program pelatihan keterampilan dan edukasi untuk meningkatkan kapasitas migran",
      color: "bg-green-500"
    },
    {
      icon: Phone,
      title: "Hotline 24/7",
      description: "Layanan darurat 24 jam untuk situasi krisis yang membutuhkan penanganan segera",
      color: "bg-purple-500"
    },
    {
      icon: Home,
      title: "Reintegrasi",
      description: "Program pemulangan dan reintegrasi sosial ekonomi bagi migran yang kembali",
      color: "bg-orange-500"
    },
    {
      icon: Briefcase,
      title: "Advokasi Kebijakan",
      description: "Mendorong kebijakan yang melindungi dan menguntungkan pekerja migran Indonesia",
      color: "bg-teal-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Layanan Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan komprehensif untuk memenuhi kebutuhan dan mengatasi 
            tantangan yang dihadapi pekerja migran Indonesia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-6">
                  <button className="text-red-600 font-semibold hover:text-red-700 transition-colors">
                    Pelajari Lebih Lanjut →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Butuh Bantuan Segera?</h3>
          <p className="text-xl mb-8 opacity-90">
            Tim kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami kapan saja.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Hubungi Hotline: +62 21 5555-1234
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors">
              Chat WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;