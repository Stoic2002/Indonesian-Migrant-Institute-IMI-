import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart, Building, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Building className="text-white" size={28} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-white">Indonesian Migrant Institute</h3>
                <p className="text-secondary-300 font-medium">Institut Migran Indonesia</p>
              </div>
            </div>
            <p className="text-secondary-200 leading-relaxed text-lg max-w-md">
              Melindungi, memberdayakan, dan memperjuangkan hak-hak pekerja migran Indonesia 
              di seluruh dunia sejak 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-3 rounded-2xl hover:bg-blue-700 hover:scale-110 transition-all duration-300 group">
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="bg-sky-500 p-3 rounded-2xl hover:bg-sky-600 hover:scale-110 transition-all duration-300 group">
                <Twitter size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="bg-pink-600 p-3 rounded-2xl hover:bg-pink-700 hover:scale-110 transition-all duration-300 group">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="bg-blue-800 p-3 rounded-2xl hover:bg-blue-900 hover:scale-110 transition-all duration-300 group">
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-xl mb-8 text-white">Tautan Cepat</h4>
            <div className="space-y-4">
              <a href="#home" className="flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-colors group">
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Beranda</span>
              </a>
              <a href="#about" className="flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-colors group">
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Tentang Kami</span>
              </a>
              <a href="#services" className="flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-colors group">
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Layanan</span>
              </a>
              <a href="#programs" className="flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-colors group">
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Program</span>
              </a>
              <a href="#documentation" className="flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-colors group">
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Dokumentasi</span>
              </a>
              <a href="#news" className="flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-colors group">
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Berita</span>
              </a>
              <a href="#contact" className="flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-colors group">
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Kontak</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-xl mb-8 text-white">Informasi Kontak</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-600/20 p-2 rounded-xl">
                  <MapPin className="text-primary-400" size={18} />
                </div>
                <div>
                  <p className="text-secondary-200 leading-relaxed">
                    Jl. Kemanggisan Raya No. 15<br />
                    Jakarta Barat 11480<br />
                    Indonesia
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-primary-600/20 p-2 rounded-xl">
                  <Phone className="text-primary-400" size={18} />
                </div>
                <div>
                  <a href="tel:+622155551234" className="text-secondary-200 hover:text-primary-400 transition-colors font-medium">
                    +62 21 5555-1234
                  </a>
                  <p className="text-sm text-secondary-400">Hotline 24/7</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-primary-600/20 p-2 rounded-xl">
                  <Mail className="text-primary-400" size={18} />
                </div>
                <div>
                  <a href="mailto:info@indonesianmigrant.org" className="text-secondary-200 hover:text-primary-400 transition-colors font-medium">
                    info@indonesianmigrant.org
                  </a>
                  <p className="text-sm text-secondary-400">Respons 1x24 jam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-primary-600 relative">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-white/10 p-2 rounded-xl">
                <Phone className="text-white" size={20} />
              </div>
              <span className="text-white font-semibold text-lg">Hotline Darurat 24/7:</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a href="tel:+622155551234" className="bg-white/10 backdrop-blur-sm text-white font-bold px-4 py-2 rounded-xl hover:bg-white/20 transition-all duration-300">
                +62 21 5555-1234
              </a>
              <a href="tel:+628115555678" className="bg-white/10 backdrop-blur-sm text-white font-bold px-4 py-2 rounded-xl hover:bg-white/20 transition-all duration-300">
                +62 811-5555-678
              </a>
              <span className="text-primary-100 text-sm">
                📱 WhatsApp tersedia
              </span>
            </div>
          </div>
        </div>
        
        {/* Geometric decorations */}
        <div className="absolute top-2 right-8 w-6 h-6 bg-white/10 rounded-lg"></div>
        <div className="absolute bottom-2 left-8 w-4 h-4 bg-white/10 rounded-full"></div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-secondary-800 py-8 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-secondary-300">© 2025 Indonesian Migrant Institute.</span>
              <span className="text-secondary-300">Dibuat dengan</span>
              <Heart className="text-red-500 fill-current animate-pulse" size={16} />
              <span className="text-secondary-300">untuk migran Indonesia.</span>
            </div>
            <div className="flex space-x-8 text-sm">
              <a href="#" className="text-secondary-300 hover:text-white transition-colors hover:underline">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors hover:underline">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors hover:underline">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background geometric elements */}
      <div className="absolute top-20 right-16 w-32 h-32 bg-primary-600/10 rounded-4xl opacity-50"></div>
      <div className="absolute bottom-20 left-16 w-24 h-24 bg-accent-600/10 rounded-full opacity-50"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-secondary-700 rounded-2xl opacity-50"></div>
    </footer>
  );
};

export default Footer;