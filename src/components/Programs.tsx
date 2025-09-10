import { GraduationCap, Users, Globe, Handshake, Target, CheckCircle } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Program Pra-Keberangkatan",
      description: "Pelatihan dan orientasi untuk calon migran sebelum berangkat ke luar negeri",
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Pelatihan Bahasa", "Orientasi Budaya", "Persiapan Dokumen", "Edukasi Hak-Hak Pekerja"],
      icon: GraduationCap,
      bgColor: "bg-primary-50",
      borderColor: "border-primary-200",
      iconBg: "bg-primary-600"
    },
    {
      title: "Program Pendampingan",
      description: "Dukungan berkelanjutan selama migran bekerja di luar negeri",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Konseling Online", "Bantuan Hukum", "Mediasi Konflik", "Layanan Kesehatan"],
      icon: Users,
      bgColor: "bg-accent-50",
      borderColor: "border-accent-200",
      iconBg: "bg-accent-600"
    },
    {
      title: "Program Reintegrasi",
      description: "Membantu migran yang kembali untuk beradaptasi dan memulai usaha baru",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Pelatihan Keterampilan", "Modal Usaha", "Konseling Psikologis", "Jaringan Alumni"],
      icon: Handshake,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconBg: "bg-green-600"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target size={16} />
            <span>Program Unggulan</span>
          </div>
          <h2 className="text-5xl font-display font-bold text-secondary-900 mb-6">
            Program Komprehensif
            <span className="block text-primary-600">untuk Migran Indonesia</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Program-program komprehensif kami dirancang untuk mendampingi migran Indonesia 
            dari persiapan keberangkatan hingga kembali ke tanah air.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="space-y-24">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative`}>
                  <div className="glass rounded-4xl p-2 border border-white/30">
                    <img 
                      src={program.image}
                      alt={program.title}
                      className="rounded-4xl shadow-2xl w-full h-[400px] object-cover"
                    />
                  </div>
                  
                  {/* Geometric decorations */}
                  <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary-100 rounded-4xl -z-10 opacity-60"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-100 rounded-4xl -z-10 opacity-60"></div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-8 right-8 w-4 h-4 bg-primary-500 rounded-lg animate-float"></div>
                  <div className="absolute bottom-12 left-8 w-6 h-6 bg-accent-500 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="flex items-center space-x-6">
                    <div className={`${program.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h3 className="text-4xl font-display font-bold text-secondary-900">
                      {program.title}
                    </h3>
                  </div>
                  
                  <p className="text-xl text-secondary-600 leading-relaxed">
                    {program.description}
                  </p>

                  <div className={`web3-card ${program.bgColor} ${program.borderColor}`}>
                    <h4 className="text-lg font-semibold text-secondary-900 mb-4">Fitur Program:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="text-primary-600 flex-shrink-0" size={18} />
                          <span className="text-secondary-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="btn-primary text-lg px-8 py-4">
                    Daftar Program
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-32 web3-card bg-primary-600 text-white p-16 relative">
          <div className="relative z-10">
            <h3 className="text-4xl font-display font-bold text-center mb-16">Dampak Program Kami</h3>
            <div className="grid md:grid-cols-4 gap-12 text-center">
              <div className="group">
                <div className="bg-white/10 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                  <GraduationCap className="text-white" size={40} />
                </div>
                <h4 className="text-4xl font-bold text-white mb-2">15K+</h4>
                <p className="text-primary-100 text-lg font-medium">Peserta Pelatihan</p>
              </div>
              <div className="group">
                <div className="bg-white/10 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                  <Users className="text-white" size={40} />
                </div>
                <h4 className="text-4xl font-bold text-white mb-2">8K+</h4>
                <p className="text-primary-100 text-lg font-medium">Migran Didampingi</p>
              </div>
              <div className="group">
                <div className="bg-white/10 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                  <Globe className="text-white" size={40} />
                </div>
                <h4 className="text-4xl font-bold text-white mb-2">25+</h4>
                <p className="text-primary-100 text-lg font-medium">Negara Tujuan</p>
              </div>
              <div className="group">
                <div className="bg-white/10 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                  <Handshake className="text-white" size={40} />
                </div>
                <h4 className="text-4xl font-bold text-white mb-2">3K+</h4>
                <p className="text-primary-100 text-lg font-medium">Reintegrasi Berhasil</p>
              </div>
            </div>
          </div>
          
          {/* Geometric decorations */}
          <div className="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-2xl"></div>
          <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-8 w-8 h-8 bg-white/10 rounded-lg"></div>
        </div>
      </div>

      {/* Background geometric elements */}
      <div className="absolute top-32 right-16 w-24 h-24 bg-primary-200 rounded-4xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-32 left-16 w-32 h-32 bg-accent-200 rounded-full opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Programs;