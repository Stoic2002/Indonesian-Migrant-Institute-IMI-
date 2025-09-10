import { Scale, Heart, BookOpen, Phone, Home, Briefcase, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Bantuan Hukum",
      description: "Konsultasi dan pendampingan hukum untuk kasus-kasus yang dihadapi migran Indonesia",
      bgColor: "bg-primary-50",
      borderColor: "border-primary-200",
      iconBg: "bg-primary-600"
    },
    {
      icon: Heart,
      title: "Layanan Kesehatan",
      description: "Akses kesehatan dan dukungan psikologis untuk migran dan keluarga",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconBg: "bg-green-600"
    },
    {
      icon: BookOpen,
      title: "Pelatihan & Edukasi",
      description: "Program pelatihan keterampilan dan edukasi untuk meningkatkan kapasitas migran",
      bgColor: "bg-accent-50",
      borderColor: "border-accent-200",
      iconBg: "bg-accent-600"
    },
    {
      icon: Phone,
      title: "Hotline 24/7",
      description: "Layanan darurat 24 jam untuk situasi krisis yang membutuhkan penanganan segera",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      iconBg: "bg-red-600"
    },
    {
      icon: Home,
      title: "Reintegrasi",
      description: "Program pemulangan dan reintegrasi sosial ekonomi bagi migran yang kembali",
      bgColor: "bg-secondary-50",
      borderColor: "border-secondary-200",
      iconBg: "bg-secondary-600"
    },
    {
      icon: Briefcase,
      title: "Advokasi Kebijakan",
      description: "Mendorong kebijakan yang melindungi dan menguntungkan pekerja migran Indonesia",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap size={16} />
            <span>Layanan Kami</span>
          </div>
          <h2 className="text-5xl font-display font-bold text-secondary-900 mb-6">
            Solusi Komprehensif untuk
            <span className="block text-primary-600">Migran Indonesia</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Kami menyediakan berbagai layanan komprehensif untuk memenuhi kebutuhan dan mengatasi 
            tantangan yang dihadapi pekerja migran Indonesia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className={`web3-card ${service.bgColor} ${service.borderColor} hover-lift`}>
                <div className={`${service.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">{service.title}</h3>
                <p className="text-secondary-600 leading-relaxed mb-6">{service.description}</p>
                <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200">
                  Pelajari Lebih Lanjut →
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="web3-card bg-primary-600 text-white p-12 text-center relative">
          <div className="relative z-10">
            <h3 className="text-4xl font-display font-bold mb-6">Butuh Bantuan Segera?</h3>
            <p className="text-xl mb-10 text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Tim kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami kapan saja.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 hover:scale-105 transition-all duration-300">
                Hubungi Hotline: +62 21 5555-1234
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 hover:scale-105 transition-all duration-300">
                Chat WhatsApp
              </button>
            </div>
          </div>
          
          {/* Geometric decorations */}
          <div className="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-2xl"></div>
          <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-8 w-8 h-8 bg-white/10 rounded-lg"></div>
        </div>
      </div>

      {/* Background geometric elements */}
      <div className="absolute top-20 left-16 w-32 h-32 bg-primary-200 rounded-4xl opacity-10"></div>
      <div className="absolute bottom-20 right-16 w-24 h-24 bg-accent-200 rounded-full opacity-10"></div>
    </section>
  );
};

export default Services;