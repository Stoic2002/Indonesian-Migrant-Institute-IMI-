import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Siti Nurhaliza",
      role: "Pekerja Domestik di Singapura",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "IMI membantu saya ketika mengalami masalah dengan majikan. Tim mereka sangat profesional dan berhasil menyelesaikan masalah saya dengan baik. Terima kasih IMI!",
      rating: 5
    },
    {
      name: "Ahmad Ridwan",
      role: "Pekerja Konstruksi di Malaysia",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Program pelatihan pra-keberangkatan IMI sangat membantu. Saya jadi lebih siap menghadapi tantangan bekerja di luar negeri. Highly recommended!",
      rating: 5
    },
    {
      name: "Indri Lestari",
      role: "Perawat di Arab Saudi",
      image: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Ketika saya sakit dan tidak mendapat perawatan yang layak, IMI membantu saya mendapatkan akses kesehatan. Mereka benar-benar peduli dengan nasib migran Indonesia.",
      rating: 5
    },
    {
      name: "Budi Santoso",
      role: "Pengusaha Mantan Migran",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Program reintegrasi IMI membantu saya memulai usaha warung makan setelah kembali dari Malaysia. Sekarang usaha saya sudah berkembang pesat!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Testimoni</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengarkan cerita inspiratif dari para migran Indonesia yang telah merasakan 
            manfaat layanan dan program IMI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-red-600 p-3 rounded-full">
                <Quote className="text-white" size={20} />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Story CTA */}
        <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Punya Cerita Inspiratif?</h3>
          <p className="text-xl mb-8 opacity-90">
            Bagikan pengalaman Anda dengan IMI dan jadilah inspirasi bagi migran Indonesia lainnya.
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Bagikan Cerita Anda
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;