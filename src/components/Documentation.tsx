import { useState, useEffect, useCallback } from 'react';
import { Camera, ChevronLeft, ChevronRight, Calendar, Tag, Play, Pause } from 'lucide-react';

interface Photo {
  id: string;
  url: string;
  title: string;
  description: string;
  category: string;
  date: string;
  tags: string[];
}

const Documentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Photo data using actual images from the project
  const [photos] = useState<Photo[]>([
    {
      id: '1',
      url: '/images/DSA01539.jpg',
      title: 'Pelatihan Keterampilan Kerja',
      description: 'Sesi pelatihan intensif untuk meningkatkan kemampuan kerja calon migran sebelum keberangkatan',
      category: 'training',
      date: '2024-12-15',
      tags: ['pelatihan', 'keterampilan', 'keberangkatan']
    },
    {
      id: '2',
      url: '/images/DSA01518.jpg',
      title: 'Konsultasi Hukum Gratis',
      description: 'Layanan konsultasi hukum gratis untuk migran yang menghadapi masalah ketenagakerjaan',
      category: 'consultation',
      date: '2024-12-10',
      tags: ['hukum', 'konsultasi', 'ketenagakerjaan']
    },
    {
      id: '3',
      url: '/images/DSA01465.jpg',
      title: 'Program Jangkauan Masyarakat',
      description: 'Sosialisasi program IMI kepada masyarakat di daerah pengirim migran',
      category: 'outreach',
      date: '2024-12-08',
      tags: ['sosialisasi', 'masyarakat', 'daerah']
    },
    {
      id: '4',
      url: '/images/DSA01401.jpg',
      title: 'Seminar Kesehatan & Keselamatan',
      description: 'Edukasi tentang standar kesehatan dan keselamatan kerja di luar negeri',
      category: 'seminar',
      date: '2024-12-05',
      tags: ['kesehatan', 'keselamatan', 'edukasi']
    },
    {
      id: '5',
      url: '/images/DSA01375.jpg',
      title: 'Pertemuan Advokasi Kebijakan',
      description: 'Diskusi strategis dengan pemerintah tentang kebijakan perlindungan migran',
      category: 'advocacy',
      date: '2024-12-01',
      tags: ['advokasi', 'pemerintah', 'kebijakan']
    },
    {
      id: '6',
      url: '/images/DSA01369.jpg',
      title: 'Workshop Integrasi Budaya',
      description: 'Membantu migran memahami dan beradaptasi dengan budaya negara tujuan',
      category: 'training',
      date: '2024-11-28',
      tags: ['budaya', 'integrasi', 'adaptasi']
    },
    {
      id: '7',
      url: '/images/DSA01367.jpg',
      title: 'Pendampingan Reintegrasi',
      description: 'Program pendampingan untuk migran yang kembali ke Indonesia',
      category: 'outreach',
      date: '2024-11-25',
      tags: ['reintegrasi', 'pendampingan', 'pulang']
    },
    {
      id: '8',
      url: '/images/DSA01335.jpg',
      title: 'Pelatihan Digital dan Teknologi',
      description: 'Workshop penggunaan teknologi digital untuk migran modern',
      category: 'training',
      date: '2024-11-20',
      tags: ['digital', 'teknologi', 'modern']
    },
    {
      id: '9',
      url: '/images/DSA01326.jpg',
      title: 'Rapat Koordinasi Program',
      description: 'Koordinasi internal untuk evaluasi dan perencanaan program IMI',
      category: 'advocacy',
      date: '2024-11-18',
      tags: ['koordinasi', 'evaluasi', 'perencanaan']
    },
    {
      id: '10',
      url: '/images/DSA01317.jpg',
      title: 'Seminar Hak-hak Pekerja',
      description: 'Edukasi tentang hak-hak fundamental pekerja migran Indonesia',
      category: 'seminar',
      date: '2024-11-15',
      tags: ['hak', 'pekerja', 'fundamental']
    },
    {
      id: '11',
      url: '/images/DSA01248.jpg',
      title: 'Konsultasi Keluarga Migran',
      description: 'Layanan konseling untuk keluarga yang ditinggalkan migran',
      category: 'consultation',
      date: '2024-11-10',
      tags: ['keluarga', 'konseling', 'support']
    },
    {
      id: '12',
      url: '/images/DSA01227.jpg',
      title: 'Forum Diskusi Kebijakan',
      description: 'Forum terbuka membahas isu-isu terkini tentang migrasi tenaga kerja',
      category: 'advocacy',
      date: '2024-11-08',
      tags: ['forum', 'diskusi', 'isu terkini']
    }
  ]);

  const categories = [
    { id: 'all', name: 'All Activities', count: photos.length },
    { id: 'training', name: 'Training & Workshops', count: photos.filter(p => p.category === 'training').length },
    { id: 'consultation', name: 'Legal Consultation', count: photos.filter(p => p.category === 'consultation').length },
    { id: 'outreach', name: 'Community Outreach', count: photos.filter(p => p.category === 'outreach').length },
    { id: 'seminar', name: 'Seminars & Events', count: photos.filter(p => p.category === 'seminar').length },
    { id: 'advocacy', name: 'Advocacy & Policy', count: photos.filter(p => p.category === 'advocacy').length }
  ];

  const filteredPhotos = photos.filter(photo => {
    const matchesCategory = selectedCategory === 'all' || photo.category === selectedCategory;
    return matchesCategory;
  });

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && filteredPhotos.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % filteredPhotos.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying, filteredPhotos.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % filteredPhotos.length);
  }, [filteredPhotos.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  }, [filteredPhotos.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Function to check if image should be loaded (current, prev, next)
  const shouldLoadImage = useCallback((index: number) => {
    const prevIndex = (currentSlide - 1 + filteredPhotos.length) % filteredPhotos.length;
    const nextIndex = (currentSlide + 1) % filteredPhotos.length;
    return index === currentSlide || index === prevIndex || index === nextIndex;
  }, [currentSlide, filteredPhotos.length]);

  return (
    <section id="documentation" className="py-24 bg-secondary-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Camera size={16} />
            <span>Documentation</span>
          </div>
          <h2 className="text-5xl font-display font-bold text-secondary-900 mb-6">
            Gallery Aktivitas
            <span className="block text-primary-600">Kami</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Jelajahi dokumentasi visual pekerjaan kami dalam mendukung pekerja migran Indonesia di seluruh dunia.
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-center mb-12">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentSlide(0);
                }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-secondary-700 hover:bg-primary-50 hover:text-primary-600 border border-secondary-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Photo Slider */}
        {filteredPhotos.length > 0 && (
          <div className="relative">
            {/* Main Slider */}
            <div className="relative overflow-hidden rounded-4xl bg-white shadow-2xl">
              <div 
                className="flex transition-transform duration-300 ease-out will-change-transform"
                style={{ 
                  transform: `translate3d(-${currentSlide * 100}%, 0, 0)`,
                  backfaceVisibility: 'hidden'
                }}
              >
                {filteredPhotos.map((photo, index) => (
                  <div key={photo.id} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 gap-0 h-[600px]">
                      {/* Image */}
                      <div className="relative overflow-hidden bg-secondary-100">
                        {shouldLoadImage(index) ? (
                          <img
                            src={photo.url}
                            alt={photo.title}
                            className="w-full h-full object-cover transition-opacity duration-300"
                            loading="lazy"
                            style={{
                              willChange: 'transform',
                              backfaceVisibility: 'hidden'
                            }}
                            onLoad={(e) => {
                              e.currentTarget.style.opacity = '1';
                            }}
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="w-full h-full bg-secondary-200 flex items-center justify-center">
                            <Camera className="text-secondary-400" size={48} />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/20"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-12 flex flex-col justify-center bg-white">
                        <div className="space-y-6">
                          <div className="flex items-center text-secondary-500 text-sm">
                            <Calendar size={16} className="mr-2" />
                            {new Date(photo.date).toLocaleDateString('id-ID', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                          
                          <h3 className="text-4xl font-display font-bold text-secondary-900 leading-tight">
                            {photo.title}
                          </h3>
                          
                          <p className="text-lg text-secondary-600 leading-relaxed">
                            {photo.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {photo.tags.map(tag => (
                              <span key={tag} className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium">
                                <Tag size={12} className="mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-secondary-900 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-secondary-900 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            {/* Autoplay Control */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-6 right-6 bg-white/90 hover:bg-white text-secondary-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>
        )}

        {/* Slide Indicators */}
        {filteredPhotos.length > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {filteredPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary-600 w-8'
                    : 'bg-secondary-300 hover:bg-secondary-400'
                }`}
              />
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-20">
            <Camera className="mx-auto text-secondary-400 mb-6" size={64} />
            <h3 className="text-2xl font-semibold text-secondary-900 mb-4">Tidak ada foto ditemukan</h3>
            <p className="text-secondary-600 text-lg">Coba ubah kategori yang lain</p>
          </div>
        )}
      </div>

      {/* Background geometric elements */}
      <div className="absolute top-32 right-16 w-24 h-24 bg-primary-200 rounded-4xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-32 left-16 w-32 h-32 bg-accent-200 rounded-full opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Documentation;
