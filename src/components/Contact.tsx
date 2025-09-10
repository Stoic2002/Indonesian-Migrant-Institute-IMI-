import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin, MessageCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Pesan Anda telah terkirim! Tim kami akan segera menghubungi Anda.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-secondary-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle size={16} />
            <span>Hubungi Kami</span>
          </div>
          <h2 className="text-5xl font-display font-bold text-secondary-900 mb-6">
            Mari Berkomunikasi
            <span className="block text-primary-600">dengan Kami</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Tim kami siap membantu Anda. Jangan ragu untuk menghubungi kami melalui 
            berbagai saluran komunikasi yang tersedia.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Emergency Hotline */}
            <div className="web3-card bg-red-600 text-white relative">
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertCircle className="text-white" size={24} />
                  <h3 className="text-xl font-bold">Hotline Darurat 24/7</h3>
                </div>
                <div className="space-y-3">
                  <a href="tel:+622155551234" className="flex items-center space-x-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
                    <Phone size={18} />
                    <span className="font-semibold">+62 21 5555-1234</span>
                  </a>
                  <a href="tel:+628115555678" className="flex items-center space-x-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
                    <Phone size={18} />
                    <span className="font-semibold">+62 811-5555-678</span>
                  </a>
                </div>
                <p className="text-sm text-red-100 mt-4">
                  Untuk situasi darurat dan bantuan segera
                </p>
              </div>
              
              {/* Geometric decorations */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full"></div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="web3-card bg-primary-50 border-primary-200 group hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900 mb-3 text-lg">Alamat Kantor</h4>
                    <p className="text-secondary-600 leading-relaxed">
                      Jl. Kemanggisan Raya No. 15<br />
                      Jakarta Barat 11480<br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <div className="web3-card bg-green-50 border-green-200 group hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900 mb-3 text-lg">Email</h4>
                    <div className="space-y-1">
                      <a href="mailto:info@indonesianmigrant.org" className="block text-secondary-600 hover:text-green-600 transition-colors">
                        info@indonesianmigrant.org
                      </a>
                      <a href="mailto:help@indonesianmigrant.org" className="block text-secondary-600 hover:text-green-600 transition-colors">
                        help@indonesianmigrant.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="web3-card bg-accent-50 border-accent-200 group hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-600 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900 mb-3 text-lg">Jam Operasional</h4>
                    <p className="text-secondary-600 leading-relaxed">
                      Senin - Jumat: 08:00 - 17:00<br />
                      Sabtu: 08:00 - 12:00<br />
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="web3-card">
              <h4 className="font-bold text-secondary-900 mb-6 text-lg">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 p-3 rounded-2xl text-white hover:bg-blue-700 hover:scale-110 transition-all duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-sky-500 p-3 rounded-2xl text-white hover:bg-sky-600 hover:scale-110 transition-all duration-300">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-pink-600 p-3 rounded-2xl text-white hover:bg-pink-700 hover:scale-110 transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-blue-800 p-3 rounded-2xl text-white hover:bg-blue-900 hover:scale-110 transition-all duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="web3-card">
              <h3 className="text-3xl font-display font-bold text-secondary-900 mb-8">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-secondary-900 mb-3">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white hover:border-primary-300"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-secondary-900 mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white hover:border-primary-300"
                      placeholder="Masukkan email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-secondary-900 mb-3">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white hover:border-primary-300"
                      placeholder="Masukkan nomor telepon"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-secondary-900 mb-3">
                      Subjek *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white hover:border-primary-300"
                    >
                      <option value="">Pilih subjek</option>
                      <option value="bantuan-hukum">Bantuan Hukum</option>
                      <option value="konsultasi">Konsultasi</option>
                      <option value="program">Informasi Program</option>
                      <option value="kerjasama">Kerjasama</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-secondary-900 mb-3">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none bg-white hover:border-primary-300"
                    placeholder="Tuliskan pesan Anda..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 px-6 text-lg flex items-center justify-center space-x-3"
                >
                  <Send size={20} />
                  <span>Kirim Pesan</span>
                </button>
              </form>

              <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-200">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="text-primary-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-secondary-700 leading-relaxed">
                      <span className="font-semibold">Catatan:</span> Untuk kasus darurat, silakan hubungi hotline 24/7 kami. 
                      Tim customer service akan merespons pesan Anda dalam 1x24 jam pada hari kerja.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background geometric elements */}
      <div className="absolute top-32 right-16 w-24 h-24 bg-primary-200 rounded-4xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-32 left-16 w-32 h-32 bg-accent-200 rounded-full opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Contact;