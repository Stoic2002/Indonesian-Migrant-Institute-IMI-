import React from 'react';
import { Target, Eye, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Tentang Indonesian Migrant Institute</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sejak didirikan pada tahun 2005, IMI telah menjadi garda depan dalam perlindungan dan advokasi 
            untuk jutaan pekerja migran Indonesia di seluruh dunia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div>
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="IMI Team Meeting"
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Komitmen Kami untuk Migran Indonesia</h3>
            <p className="text-gray-600 leading-relaxed">
              Indonesian Migrant Institute (IMI) adalah organisasi non-profit yang bergerak dalam bidang 
              advokasi, perlindungan, dan pemberdayaan pekerja migran Indonesia. Kami percaya bahwa setiap 
              migran Indonesia berhak mendapat perlindungan, penghormatan, dan kesempatan untuk berkembang.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dengan jejak rekam yang kuat selama hampir dua dekade, IMI telah membantu ribuan migran 
              Indonesia dalam menghadapi berbagai tantangan, mulai dari isu legal, akses kesehatan, 
              hingga reintegrasi sosial ekonomi.
            </p>
            
            <div className="bg-red-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-2">Pencapaian Utama:</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• 50,000+ migran terlayani sejak 2005</li>
                <li>• Beroperasi di 25+ negara tujuan migrasi</li>
                <li>• 95% tingkat keberhasilan penyelesaian kasus</li>
                <li>• Partner resmi dengan berbagai organisasi internasional</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-red-50 p-8 rounded-xl text-center group hover:bg-red-100 transition-colors">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Target className="text-white" size={28} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Misi</h4>
            <p className="text-gray-600 text-sm">
              Melindungi, memberdayakan, dan memperjuangkan hak-hak pekerja migran Indonesia di seluruh dunia.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl text-center group hover:bg-blue-100 transition-colors">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Eye className="text-white" size={28} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Visi</h4>
            <p className="text-gray-600 text-sm">
              Menjadi lembaga terdepan dalam advokasi migran Indonesia yang diakui secara global.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-xl text-center group hover:bg-green-100 transition-colors">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Heart className="text-white" size={28} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Nilai</h4>
            <p className="text-gray-600 text-sm">
              Integritas, kemanusiaan, dan komitmen dalam setiap langkah yang kami ambil.
            </p>
          </div>

          <div className="bg-yellow-50 p-8 rounded-xl text-center group hover:bg-yellow-100 transition-colors">
            <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Award className="text-white" size={28} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Komitmen</h4>
            <p className="text-gray-600 text-sm">
              Memberikan layanan terbaik dan solusi berkelanjutan untuk setiap migran Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;