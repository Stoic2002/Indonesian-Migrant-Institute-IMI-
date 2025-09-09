import React from 'react';
import { GraduationCap, Users, Globe, Handshake } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Program Pra-Keberangkatan",
      description: "Pelatihan dan orientasi untuk calon migran sebelum berangkat ke luar negeri",
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Pelatihan Bahasa", "Orientasi Budaya", "Persiapan Dokumen", "Edukasi Hak-Hak Pekerja"]
    },
    {
      title: "Program Pendampingan",
      description: "Dukungan berkelanjutan selama migran bekerja di luar negeri",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Konseling Online", "Bantuan Hukum", "Mediasi Konflik", "Layanan Kesehatan"]
    },
    {
      title: "Program Reintegrasi",
      description: "Membantu migran yang kembali untuk beradaptasi dan memulai usaha baru",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Pelatihan Keterampilan", "Modal Usaha", "Konseling Psikologis", "Jaringan Alumni"]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Program Unggulan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Program-program komprehensif kami dirancang untuk mendampingi migran Indonesia 
            dari persiapan keberangkatan hingga kembali ke tanah air.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="space-y-16">
          {programs.map((program, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl group-hover:from-black/40 transition-all"></div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    {index === 0 && <GraduationCap className="text-red-600" size={24} />}
                    {index === 1 && <Users className="text-red-600" size={24} />}
                    {index === 2 && <Handshake className="text-red-600" size={24} />}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">{program.title}</h3>
                </div>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-800">Fitur Program:</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold">
                  Daftar Program
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Dampak Program Kami</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <GraduationCap className="text-red-600" size={32} />
              </div>
              <h4 className="text-3xl font-bold text-gray-800">15K+</h4>
              <p className="text-gray-600">Peserta Pelatihan</p>
            </div>
            <div>
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="text-blue-600" size={32} />
              </div>
              <h4 className="text-3xl font-bold text-gray-800">8K+</h4>
              <p className="text-gray-600">Migran Didampingi</p>
            </div>
            <div>
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="text-green-600" size={32} />
              </div>
              <h4 className="text-3xl font-bold text-gray-800">25+</h4>
              <p className="text-gray-600">Negara Tujuan</p>
            </div>
            <div>
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Handshake className="text-purple-600" size={32} />
              </div>
              <h4 className="text-3xl font-bold text-gray-800">3K+</h4>
              <p className="text-gray-600">Reintegrasi Berhasil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;