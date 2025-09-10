import { Star, Quote, MessageSquare, Heart } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Siti Nurhaliza",
      role: "Pekerja Domestik di Singapura",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "IMI membantu saya ketika mengalami masalah dengan majikan. Tim mereka sangat profesional dan berhasil menyelesaikan masalah saya dengan baik. Terima kasih IMI!",
      rating: 5,
      location: "Singapura"
    },
    {
      name: "Ahmad Ridwan",
      role: "Pekerja Konstruksi di Malaysia",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Program pelatihan pra-keberangkatan IMI sangat membantu. Saya jadi lebih siap menghadapi tantangan bekerja di luar negeri. Highly recommended!",
      rating: 5,
      location: "Malaysia"
    },
    {
      name: "Indri Lestari",
      role: "Perawat di Arab Saudi",
      image: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Ketika saya sakit dan tidak mendapat perawatan yang layak, IMI membantu saya mendapatkan akses kesehatan. Mereka benar-benar peduli dengan nasib migran Indonesia.",
      rating: 5,
      location: "Arab Saudi"
    },
    {
      name: "Budi Santoso",
      role: "Pengusaha Mantan Migran",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Program reintegrasi IMI membantu saya memulai usaha warung makan setelah kembali dari Malaysia. Sekarang usaha saya sudah berkembang pesat!",
      rating: 5,
      location: "Indonesia"
    }
  ];

  return (
    <section className="py-24 bg-secondary-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageSquare size={16} />
            <span>Testimoni</span>
          </div>
          <h2 className="text-5xl font-display font-bold text-secondary-900 mb-6">
            Cerita Inspiratif
            <span className="block text-primary-600">Migran Indonesia</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Dengarkan cerita inspiratif dari para migran Indonesia yang telah merasakan 
            manfaat layanan dan program IMI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="web3-card group cursor-pointer relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 bg-primary-600 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Quote className="text-white" size={20} />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="text-accent-500 fill-current group-hover:scale-110 transition-transform duration-300" size={20} style={{ transitionDelay: `${starIndex * 100}ms` }} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-secondary-600 leading-relaxed mb-8 text-lg italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-2xl object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                    <Heart className="text-white" size={12} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900 text-lg group-hover:text-primary-600 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-secondary-600 font-medium">{testimonial.role}</p>
                  <div className="inline-block bg-accent-100 text-accent-700 px-2 py-1 rounded-full text-xs font-medium mt-1">
                    📍 {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Story CTA */}
        <div className="web3-card bg-primary-600 text-white p-16 text-center relative">
          <div className="relative z-10">
            <h3 className="text-4xl font-display font-bold mb-6">Punya Cerita Inspiratif?</h3>
            <p className="text-xl mb-10 text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Bagikan pengalaman Anda dengan IMI dan jadilah inspirasi bagi migran Indonesia lainnya.
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 hover:scale-105 transition-all duration-300 text-lg">
              Bagikan Cerita Anda
            </button>
          </div>
          
          {/* Geometric decorations */}
          <div className="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-2xl"></div>
          <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-8 w-8 h-8 bg-white/10 rounded-lg"></div>
          <div className="absolute top-8 left-1/4 w-6 h-6 bg-white/10 rounded-lg"></div>
        </div>
      </div>

      {/* Background geometric elements */}
      <div className="absolute top-32 right-16 w-24 h-24 bg-primary-200 rounded-4xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-32 left-16 w-32 h-32 bg-accent-200 rounded-full opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Testimonials;