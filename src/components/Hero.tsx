import React from 'react';
import { ArrowRight, Shield, Users, Globe } from 'lucide-react';
import heroImage from '../images/hero.jpg'; 
const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-red-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-gray-800 leading-tight mb-6">
                Melindungi dan Memberdayakan
                <span className="text-red-600"> Migran Indonesia</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Indonesian Migrant Institute (IMI) adalah organisasi yang berkomitmen memberikan perlindungan, 
                advokasi, dan pemberdayaan untuk pekerja migran Indonesia di seluruh dunia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span className="font-semibold">Pelajari Lebih Lanjut</span>
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
                <span className="font-semibold">Hubungi Kami</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Users className="text-red-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">50K+</h3>
                <p className="text-gray-600">Migran Terlayani</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Globe className="text-blue-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">25+</h3>
                <p className="text-gray-600">Negara Tujuan</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Shield className="text-green-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">95%</h3>
                <p className="text-gray-600">Kasus Berhasil</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Indonesian Migrant Workers"
                className="rounded-2xl shadow-2xl object-cover bg-white w-full h-[350px] max-h-[400px]"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-red-100 rounded-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-red-200 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
    </section>
  );
};

export default Hero;