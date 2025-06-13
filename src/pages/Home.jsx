import React, { useState } from 'react';
import { Trophy, Users, Calendar, MapPin, ChevronLeft, ChevronRight, UserPlus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Home page component with hero section and tournament highlights
 * Features:
 * - Hero section with tournament introduction and register team CTA
 * - Photo gallery with modal view
 * - Tournament statistics and highlights
 * - Cricket-themed colors and responsive design
 */
const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Tournament photos - Using high-quality cricket and sports images
  const tournamentPhotos = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Cricket Ground View',
      caption: 'Koyla Veer Baba Stadium - Main Ground'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Team Group Photo',
      caption: 'Participating Teams 2024'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Tournament Guests',
      caption: 'Special Guests and Dignitaries'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Cricket Action',
      caption: 'Match Highlights'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Award Ceremony',
      caption: 'Prize Distribution Ceremony'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/598300/pexels-photo-598300.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Team Celebration',
      caption: 'Victory Celebrations'
    }
  ];

  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(tournamentPhotos[index]);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % tournamentPhotos.length
      : (currentImageIndex - 1 + tournamentPhotos.length) % tournamentPhotos.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(tournamentPhotos[newIndex]);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Cricket Theme */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white py-20 overflow-hidden">
        {/* Cricket Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-4 border-yellow-400 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 border-4 border-green-400 rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-28 h-28 border-4 border-white rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full shadow-2xl">
              <Trophy className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Maa Shayar Jagdamba
            </span>
            <span className="block text-white mt-2">Champions Trophy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100">
            A prestigious cricket tournament dedicated to promoting rural sports talents 
            and honoring the legacy of Mukhdev Bhagat Ji
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center"
            >
              <UserPlus className="h-6 w-6 mr-3" />
              Register Your Team
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/gallery"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300"
            >
              View Gallery
            </Link>
          </div>

          {/* Tournament Info Cards */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <MapPin className="h-5 w-5 text-yellow-400" />
              <span>Koyla Veer Baba Stadium, Ballia</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Calendar className="h-5 w-5 text-green-400" />
              <span>Tournament Season 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Highlights Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
              Tournament Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the excitement and spirit of cricket through our tournament moments
            </p>
          </div>

          {/* Statistics Cards with Cricket Theme */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 text-white">
              <Users className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">16+</h3>
              <p className="text-blue-100">Participating Teams</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 text-white">
              <Trophy className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">₹50K+</h3>
              <p className="text-orange-100">Prize Money</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 text-white">
              <Calendar className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">7</h3>
              <p className="text-green-100">Days of Cricket</p>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-8 text-center">Tournament Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tournamentPhotos.map((photo, index) => (
                <div 
                  key={photo.id}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-t from-blue-900/20 to-transparent"
                  onClick={() => openImageModal(index)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-lg">{photo.caption}</p>
                      <div className="flex items-center mt-2 text-yellow-400">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                        <span className="text-sm">Click to view</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              View Complete Gallery
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join the Championship?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't miss your chance to be part of this prestigious tournament. Register your team today!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <UserPlus className="h-6 w-6 mr-3" />
            Register Now
            <ArrowRight className="ml-3 h-6 w-6" />
          </Link>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeImageModal}>
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 p-3 bg-red-500/80 backdrop-blur-sm rounded-full text-white hover:bg-red-600/80 transition-colors"
            >
              ✕
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <div className="bg-gradient-to-r from-blue-900/80 to-green-900/80 backdrop-blur-sm rounded-lg px-6 py-4">
                <p className="text-white text-lg font-semibold">
                  {selectedImage.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;