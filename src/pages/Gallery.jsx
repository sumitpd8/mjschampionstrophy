import React, { useState } from 'react';
import { Camera, Video, ChevronLeft, ChevronRight, X, Calendar, Play } from 'lucide-react';

/**
 * Gallery page component with photos and videos from tournament matches
 * Features:
 * - Tabbed interface for photos and videos
 * - Lightbox modal for full-screen viewing
 * - Image carousel with navigation
 * - Responsive grid layout optimized for mobile
 * - Cricket-themed design
 */
const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Tournament photos data
  const photos = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Match Action Shot',
      caption: 'Intense bowling action during semi-final match',
      date: '2024-01-20',
      category: 'Match Highlights'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Team Celebration',
      caption: 'Winning team celebrates victory',
      date: '2024-01-19',
      category: 'Celebrations'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Opening Ceremony',
      caption: 'Grand opening ceremony with all teams',
      date: '2024-01-15',
      category: 'Ceremony'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Batting Performance',
      caption: 'Outstanding batting performance by local player',
      date: '2024-01-18',
      category: 'Match Highlights'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Award Ceremony',
      caption: 'Man of the match award presentation',
      date: '2024-01-21',
      category: 'Awards'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/598300/pexels-photo-598300.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Team Group Photo',
      caption: 'Participating teams group photo',
      date: '2024-01-16',
      category: 'Teams'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Crowd Enthusiasm',
      caption: 'Enthusiastic crowd cheering for their teams',
      date: '2024-01-17',
      category: 'Audience'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1040999/pexels-photo-1040999.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Final Match',
      caption: 'Final match decisive moment',
      date: '2024-01-22',
      category: 'Match Highlights'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Organizers Meeting',
      caption: 'Tournament organizers coordination meeting',
      date: '2024-01-14',
      category: 'Behind the Scenes'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Player Interview',
      caption: 'Post-match player interview session',
      date: '2024-01-19',
      category: 'Interviews'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Team Strategy',
      caption: 'Team discussing strategy during timeout',
      date: '2024-01-18',
      category: 'Strategy'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Wicket Celebration',
      caption: 'Bowler celebrating after taking wicket',
      date: '2024-01-20',
      category: 'Match Highlights'
    }
  ];

  // Tournament videos data
  const videos = [
    {
      id: 1,
      thumbnail: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Tournament Highlights Reel',
      description: 'Best moments from all matches compiled in this exciting highlight reel',
      duration: '5:32',
      date: '2024-01-23',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
      id: 2,
      thumbnail: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Final Match Full Recording',
      description: 'Complete recording of the championship final match',
      duration: '45:18',
      date: '2024-01-22',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    },
    {
      id: 3,
      thumbnail: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Opening Ceremony Coverage',
      description: 'Full coverage of the grand opening ceremony and team introductions',
      duration: '12:45',
      date: '2024-01-15',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
      id: 4,
      thumbnail: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Prize Distribution Ceremony',
      description: 'Award ceremony and prize distribution to winners and participants',
      duration: '8:22',
      date: '2024-01-23',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    },
    {
      id: 5,
      thumbnail: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Best Catches Compilation',
      description: 'Amazing catches and fielding moments from the tournament',
      duration: '3:15',
      date: '2024-01-21',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
      id: 6,
      thumbnail: 'https://images.pexels.com/photos/598300/pexels-photo-598300.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Player Interviews',
      description: 'Interviews with star players and team captains',
      duration: '7:40',
      date: '2024-01-20',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    }
  ];

  const openModal = (mediaArray, index) => {
    setCurrentIndex(index);
    setSelectedMedia(mediaArray[index]);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const navigateMedia = (direction) => {
    const mediaArray = activeTab === 'photos' ? photos : videos;
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % mediaArray.length
      : (currentIndex - 1 + mediaArray.length) % mediaArray.length;
    
    setCurrentIndex(newIndex);
    setSelectedMedia(mediaArray[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Cricket Theme */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white py-16 relative overflow-hidden">
        {/* Cricket Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-4 border-yellow-400 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 border-4 border-green-400 rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full shadow-2xl w-fit mx-auto mb-6">
            <Camera className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tournament Gallery</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Relive the exciting moments through our collection of photos and videos from the tournament
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-gray-100 p-1 rounded-full shadow-lg">
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center ${
                  activeTab === 'photos'
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-200'
                }`}
              >
                <Camera className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Photos</span>
                <span className="bg-white/20 text-xs px-2 py-1 rounded-full ml-2">
                  {photos.length}
                </span>
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center ${
                  activeTab === 'videos'
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-200'
                }`}
              >
                <Video className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Videos</span>
                <span className="bg-white/20 text-xs px-2 py-1 rounded-full ml-2">
                  {videos.length}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Gallery */}
      {activeTab === 'photos' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="group relative overflow-hidden rounded-xl cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white"
                  onClick={() => openModal(photos, index)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white font-semibold text-sm mb-1 line-clamp-2">{photo.caption}</p>
                      <div className="flex items-center justify-between text-white/80 text-xs">
                        <span className="bg-gradient-to-r from-blue-500 to-green-500 px-2 py-1 rounded-full text-xs font-medium">
                          {photo.category}
                        </span>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(photo.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Videos Gallery */}
      {activeTab === 'videos' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105"
                >
                  <div
                    className="relative cursor-pointer"
                    onClick={() => openModal(videos, index)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                      <div className="bg-gradient-to-r from-blue-500 to-green-500 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-medium">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {video.description}
                    </p>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(video.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Media Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-6xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-3 bg-red-500/80 backdrop-blur-sm rounded-full text-white hover:bg-red-600/80 transition-colors shadow-lg"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={() => navigateMedia('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={() => navigateMedia('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Media Content */}
            {activeTab === 'photos' ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="w-full h-full object-contain rounded-lg"
              />
            ) : (
              <div className="bg-black rounded-lg overflow-hidden">
                <video
                  controls
                  autoPlay
                  className="w-full h-full"
                  poster={selectedMedia.thumbnail}
                >
                  <source src={selectedMedia.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            
            {/* Media Info */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <div className="bg-gradient-to-r from-blue-900/80 to-green-900/80 backdrop-blur-sm rounded-lg px-6 py-4">
                <p className="text-white text-lg font-semibold mb-2">
                  {activeTab === 'photos' ? selectedMedia.caption : selectedMedia.title}
                </p>
                {activeTab === 'videos' && (
                  <p className="text-white/80 text-sm mb-2">
                    {selectedMedia.description}
                  </p>
                )}
                <div className="flex items-center justify-center text-white/60 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(selectedMedia.date).toLocaleDateString()}
                  {activeTab === 'videos' && (
                    <>
                      <span className="mx-2">•</span>
                      <span>{selectedMedia.duration}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;