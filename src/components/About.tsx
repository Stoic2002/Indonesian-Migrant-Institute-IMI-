import { Target, Eye, Heart, Award, Building, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Building size={16} />
            <span>Tentang Kami</span>
          </div>
          <h2 className="text-5xl font-display font-bold text-secondary-900 mb-6">
            Indonesian Migrant Institute
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Sejak didirikan pada tahun 2005, IMI telah menjadi garda depan dalam perlindungan dan advokasi 
            untuk jutaan pekerja migran Indonesia di seluruh dunia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="glass rounded-4xl p-2 border border-white/30">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="IMI Team Meeting"
                className="rounded-4xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            
            {/* Geometric decorations */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-primary-100 rounded-4xl -z-10 opacity-60"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-100 rounded-4xl -z-10 opacity-60"></div>
            
            {/* Simplified floating elements */}
            <div className="absolute top-8 right-8 w-4 h-4 bg-primary-500 rounded-lg opacity-60"></div>
            <div className="absolute bottom-12 left-8 w-6 h-6 bg-accent-500 rounded-full opacity-60"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-4xl font-display font-bold text-secondary-900">
                Komitmen Kami untuk Migran Indonesia
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Indonesian Migrant Institute (IMI) adalah organisasi non-profit yang bergerak dalam bidang 
                advokasi, perlindungan, dan pemberdayaan pekerja migran Indonesia. Kami percaya bahwa setiap 
                migran Indonesia berhak mendapat perlindungan, penghormatan, dan kesempatan untuk berkembang.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Dengan jejak rekam yang kuat selama hampir dua dekade, IMI telah membantu ribuan migran 
                Indonesia dalam menghadapi berbagai tantangan, mulai dari isu legal, akses kesehatan, 
                hingga reintegrasi sosial ekonomi.
              </p>
            </div>
            
            <div className="web3-card bg-primary-50 border-primary-200">
              <div className="flex items-start space-x-3 mb-4">
                <Sparkles className="text-primary-600 mt-1" size={20} />
                <h4 className="font-semibold text-secondary-900 text-lg">Pencapaian Utama:</h4>
              </div>
              <ul className="text-secondary-700 space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>50,000+ migran terlayani sejak 2005</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Beroperasi di 25+ negara tujuan migrasi</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>95% tingkat keberhasilan penyelesaian kasus</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Partner resmi dengan berbagai organisasi internasional</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="web3-card bg-primary-50 border-primary-200 text-center hover-lift">
            <div className="bg-primary-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h4 className="text-2xl font-bold text-secondary-900 mb-4">Misi</h4>
            <p className="text-secondary-600 leading-relaxed">
              Melindungi, memberdayakan, dan memperjuangkan hak-hak pekerja migran Indonesia di seluruh dunia.
            </p>
          </div>

          <div className="web3-card bg-accent-50 border-accent-200 text-center hover-lift">
            <div className="bg-accent-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Eye className="text-white" size={32} />
            </div>
            <h4 className="text-2xl font-bold text-secondary-900 mb-4">Visi</h4>
            <p className="text-secondary-600 leading-relaxed">
              Menjadi lembaga terdepan dalam advokasi migran Indonesia yang diakui secara global.
            </p>
          </div>

          <div className="web3-card bg-green-50 border-green-200 text-center hover-lift">
            <div className="bg-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="text-white" size={32} />
            </div>
            <h4 className="text-2xl font-bold text-secondary-900 mb-4">Nilai</h4>
            <p className="text-secondary-600 leading-relaxed">
              Integritas, kemanusiaan, dan komitmen dalam setiap langkah yang kami ambil.
            </p>
          </div>

          <div className="web3-card bg-secondary-50 border-secondary-200 text-center hover-lift">
            <div className="bg-secondary-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="text-white" size={32} />
            </div>
            <h4 className="text-2xl font-bold text-secondary-900 mb-4">Komitmen</h4>
            <p className="text-secondary-600 leading-relaxed">
              Memberikan layanan terbaik dan solusi berkelanjutan untuk setiap migran Indonesia.
            </p>
          </div>
        </div>
      </div>

      {/* Background geometric elements */}
      <div className="absolute top-32 right-16 w-24 h-24 bg-primary-200 rounded-4xl opacity-10"></div>
      <div className="absolute bottom-32 left-16 w-32 h-32 bg-accent-200 rounded-full opacity-10"></div>
    </section>
  );
};

export default About;