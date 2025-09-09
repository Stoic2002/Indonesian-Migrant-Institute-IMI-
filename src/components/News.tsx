import React from 'react';
import { Calendar, ArrowRight, Clock, User } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "IMI Luncurkan Program Pelatihan Digital untuk Migran",
      excerpt: "Program pelatihan keterampilan digital ini akan membantu migran Indonesia meningkatkan kompetensi di era teknologi.",
      image: "/images/news1.jpg", 
      date: "15 Januari 2025",
      readTime: "5 min",
      author: "Tim IMI",
      category: "Program"
    },
    {
      id: 2,
      title: "Kerjasama IMI dengan Pemerintah Malaysia",
      excerpt: "Penandatanganan MoU untuk meningkatkan perlindungan pekerja migran Indonesia di Malaysia.",
      image: "/images/news2.jpg", 
      date: "10 Januari 2025",
      readTime: "7 min",
      author: "Direktur IMI",
      category: "Kerjasama"
    },
    {
      id: 3,
      title: "Workshop Kewirausahaan untuk Mantan Migran",
      excerpt: "IMI mengadakan workshop kewirausahaan untuk membantu mantan migran memulai usaha di Indonesia.",
      image: "/images/news3.jpg", 
      date: "8 Januari 2025",
      readTime: "4 min",
      author: "Divisi Program",
      category: "Workshop"
    },
    {
      id: 4,
      title: "IMI Raih Penghargaan Organisasi Terbaik 2024",
      excerpt: "Indonesian Migrant Institute meraih penghargaan sebagai organisasi advokasi migran terbaik di Asia Tenggara.",
      image: "/images/news4.jpg",
      date: "5 Januari 2025",
      readTime: "6 min",
      author: "Humas IMI",
      category: "Penghargaan"
    }
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Berita & Update</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ikuti perkembangan terbaru kegiatan, program, dan pencapaian 
            Indonesian Migrant Institute dalam melayani migran Indonesia.
          </p>
        </div>

        {/* Featured News */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="relative group cursor-pointer">
              <img 
                src={newsItems[0].image}
                alt={newsItems[0].title}
                className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center space-x-4 mb-3 text-sm">
                  <span className="bg-red-600 px-3 py-1 rounded-full">{newsItems[0].category}</span>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{newsItems[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{newsItems[0].readTime}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{newsItems[0].title}</h3>
                <p className="opacity-90 mb-4">{newsItems[0].excerpt}</p>
                <button className="flex items-center space-x-2 text-white hover:text-red-300 transition-colors">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {newsItems.slice(1, 4).map((news) => (
              <div key={news.id} className="flex space-x-4 group cursor-pointer">
                <img 
                  src={news.image}
                  alt={news.title}
                  className="w-24 h-24 object-cover rounded-xl group-hover:scale-105 transition-transform"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2 text-sm text-gray-500">
                    <span className="text-red-600 font-medium">{news.category}</span>
                    <span>•</span>
                    <span>{news.date}</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                    {news.title}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-2">{news.excerpt}</p>
                  <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                    <User size={14} />
                    <span>{news.author}</span>
                    <span>•</span>
                    <Clock size={14} />
                    <span>{news.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Berlangganan Newsletter</h3>
            <p className="text-gray-600 mb-8">
              Dapatkan update terbaru tentang program, berita, dan informasi penting 
              untuk migran Indonesia langsung di email Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold">
                Berlangganan
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Kami menghargai privasi Anda. Tidak ada spam, bisa berhenti berlangganan kapan saja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;