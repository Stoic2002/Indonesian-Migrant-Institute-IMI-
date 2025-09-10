import { Calendar, ArrowRight, Clock, User, Newspaper, Mail } from 'lucide-react';

const News = () => {
  // Helper function to resolve image paths correctly in Vite
  const getImageUrl = (path: string) => new URL(path, import.meta.url).href;

  const newsItems = [
    {
      id: 1,
      title: "IMI Luncurkan Program Pelatihan Digital untuk Migran",
      excerpt: "Program pelatihan keterampilan digital ini akan membantu migran Indonesia meningkatkan kompetensi di era teknologi.",
      image: getImageUrl("../images/DSA01539.jpg"), 
      date: "15 Januari 2025",
      readTime: "5 min",
      author: "Tim IMI",
      category: "Program"
    },
    {
      id: 2,
      title: "Kerjasama IMI dengan Pemerintah Malaysia",
      excerpt: "Penandatanganan MoU untuk meningkatkan perlindungan pekerja migran Indonesia di Malaysia.",
      image: getImageUrl("../images/DSA01518.jpg"), 
      date: "10 Januari 2025",
      readTime: "7 min",
      author: "Direktur IMI",
      category: "Kerjasama"
    },
    {
      id: 3,
      title: "Workshop Kewirausahaan untuk Mantan Migran",
      excerpt: "IMI mengadakan workshop kewirausahaan untuk membantu mantan migran memulai usaha di Indonesia.",
      image: getImageUrl("../images/DSA01465.jpg"), 
      date: "8 Januari 2025",
      readTime: "4 min",
      author: "Divisi Program",
      category: "Workshop"
    },
    {
      id: 4,
      title: "IMI Raih Penghargaan Organisasi Terbaik 2024",
      excerpt: "Indonesian Migrant Institute meraih penghargaan sebagai organisasi advokasi migran terbaik di Asia Tenggara.",
      image: getImageUrl("../images/DSA01401.jpg"),
      date: "5 Januari 2025",
      readTime: "6 min",
      author: "Humas IMI",
      category: "Penghargaan"
    }
  ];

  return (
    <section id="news" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Newspaper size={16} />
            <span>Berita & Update</span>
          </div>
          <h2 className="text-5xl font-display font-bold text-secondary-900 mb-6">
            Berita & Update
            <span className="block text-primary-600">Terkini</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Ikuti perkembangan terbaru kegiatan, program, dan pencapaian 
            Indonesian Migrant Institute dalam melayani migran Indonesia.
          </p>
        </div>

        {/* News Cards - Single Column */}
        <div className="max-w-4xl mx-auto space-y-6">
          {newsItems.slice(0, 3).map((news) => (
            <div key={news.id} className="web3-card group cursor-pointer">
              <div className="flex space-x-6">
                <div className="relative flex-shrink-0">
                  <img 
                    src={news.image}
                    alt={news.title}
                    className="w-32 h-32 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-500 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3 text-sm">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">{news.category}</span>
                    <span className="text-secondary-400">•</span>
                    <span className="text-secondary-500">{news.date}</span>
                  </div>
                  <h4 className="font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors text-xl leading-tight">
                    {news.title}
                  </h4>
                  <p className="text-secondary-600 text-base line-clamp-2 mb-4">{news.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-secondary-500">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{news.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{news.readTime}</span>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors">
                      <span>Baca Selengkapnya</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background geometric elements */}
      <div className="absolute top-32 right-16 w-24 h-24 bg-primary-200 rounded-4xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-32 left-16 w-32 h-32 bg-accent-200 rounded-full opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default News;