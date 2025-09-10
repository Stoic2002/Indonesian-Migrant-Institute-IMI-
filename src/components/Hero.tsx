import { ArrowRight, Shield, Users, Globe, Sparkles, CheckCircle } from 'lucide-react';
import heroImage from '../images/hero.jpg'; 

const Hero = () => {
  return (
    <section id="home" className="relative bg-secondary-50 py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles size={16} />
                <span>Melindungi Migran Indonesia</span>
              </div>
              
              <h1 className="text-6xl font-display font-bold text-secondary-900 leading-tight">
                Melindungi dan 
                <span className="block text-primary-600">Memberdayakan</span>
                <span className="text-accent-500">Migran Indonesia</span>
              </h1>
              
              <p className="text-xl text-secondary-600 leading-relaxed max-w-lg">
                Indonesian Migrant Institute (IMI) adalah organisasi yang berkomitmen memberikan perlindungan, 
                advokasi, dan pemberdayaan untuk pekerja migran Indonesia di seluruh dunia.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary-600 flex-shrink-0" size={20} />
                <span className="text-secondary-700 font-medium">Perlindungan hukum dan advokasi 24/7</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary-600 flex-shrink-0" size={20} />
                <span className="text-secondary-700 font-medium">Jaringan global di 25+ negara</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary-600 flex-shrink-0" size={20} />
                <span className="text-secondary-700 font-medium">Program pemberdayaan berkelanjutan</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4">
                <span className="font-semibold">Pelajari Lebih Lanjut</span>
                <ArrowRight size={20} />
              </button>
              <button className="btn-outline text-lg px-8 py-4">
                <span className="font-semibold">Hubungi Kami</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center group">
                <div className="bg-white rounded-2xl w-18 h-18 flex items-center justify-center mx-auto mb-4 shadow-lg border border-secondary-200 group-hover:shadow-xl transition-shadow duration-300">
                  <Users className="text-primary-600" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-secondary-900">50K+</h3>
                <p className="text-secondary-600 font-medium">Migran Terlayani</p>
              </div>
              <div className="text-center group">
                <div className="bg-white rounded-2xl w-18 h-18 flex items-center justify-center mx-auto mb-4 shadow-lg border border-secondary-200 group-hover:shadow-xl transition-shadow duration-300">
                  <Globe className="text-accent-600" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-secondary-900">25+</h3>
                <p className="text-secondary-600 font-medium">Negara Tujuan</p>
              </div>
              <div className="text-center group">
                <div className="bg-white rounded-2xl w-18 h-18 flex items-center justify-center mx-auto mb-4 shadow-lg border border-secondary-200 group-hover:shadow-xl transition-shadow duration-300">
                  <Shield className="text-green-600" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-secondary-900">95%</h3>
                <p className="text-secondary-600 font-medium">Kasus Berhasil</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white/20 rounded-4xl p-2 border border-white/30">
                <img
                  src={heroImage}
                  alt="Indonesian Migrant Workers"
                  className="rounded-4xl shadow-2xl object-cover w-full h-[500px]"
                />
              </div>
            </div>
            
            {/* Simplified geometric decorations */}
            <div className="absolute -bottom-8 -right-8 w-full h-full bg-primary-100 rounded-4xl -z-10 opacity-40"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-accent-100 rounded-4xl -z-10 opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Simplified background elements */}
      <div className="absolute top-24 left-16 w-32 h-32 bg-primary-200 rounded-4xl opacity-10"></div>
      <div className="absolute bottom-24 right-16 w-24 h-24 bg-accent-200 rounded-full opacity-10"></div>
    </section>
  );
};

export default Hero;