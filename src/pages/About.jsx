import React from 'react';
import { Trophy, Heart, Target, Users } from 'lucide-react';

/**
 * About page component with tournament information and organizers
 * Features:
 * - Tournament introduction and objectives
 * - Organizers and committee members with photos
 * - Venue information and tribute section
 * - Cricket-themed design with responsive grid layouts
 */
const About = () => {
  // Main organizers data with placeholder photos
  const mainOrganizers = [
    { name: 'Yogendra Prasad Verma', photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Jaishankar Prasad Bhagat Ji', photo: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Rakesh Gond', photo: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Vivek Yadav', photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Mandhata Ojha', photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Ritesh Yadav', photo: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Sumit Verma', photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Vindhyachal Gupta', photo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Laxman Sharma Ji', photo: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ];

  // Committee members data with placeholder photos
  const committeeMembers = [
    { position: 'President', name: 'Sudhir Gond', photo: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { position: 'Vice President', name: 'Arun Yadav', photo: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { position: 'Vice President', name: 'Appu Yadav', photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { position: 'Treasurer', name: 'Shakti Singh Yadav', photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { position: 'Treasurer', name: 'Ranjan Verma', photo: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { position: 'Secretary', name: 'Yashvendra Pratap Singh', photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { position: 'General Secretary', name: 'Golu Gond (Bagha)', photo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ];

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
            <Trophy className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Learn about the Maa Shayar Jagdamba Champions Trophy and our mission to promote rural sports talent
          </p>
        </div>
      </section>

      {/* Tournament Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-8">
              Maa Shayar Jagdamba Champions Trophy
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                The "Maa Shayar Jagdamba Champions Trophy" is a prestigious cricket tournament organized with the 
                objective of providing a strong platform to rural sports talents. This tournament is being conducted 
                by the Maa Shayar Jagdamba Seva Sansthan (Service Organization).
              </p>
              <p className="text-lg mb-6">
                This tournament is dedicated to the sacred memory of <strong>Mukhdev Bhagat Ji</strong>, whose lifelong 
                dedication to social service, cultural values, and selfless devotion has always been a source of inspiration. 
                His life stands as an ideal for the younger generation, and this tournament aims to carry forward that spirit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tribute Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-full shadow-2xl w-fit mx-auto mb-4">
              <Heart className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
              In Sacred Memory
            </h2>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-red-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mukhdev Bhagat Ji</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                This tournament stands as a tribute to Mukhdev Bhagat Ji, whose unwavering commitment to social service, 
                preservation of cultural values, and selfless devotion to the community continues to inspire generations. 
                His legacy lives on through this championship, embodying the values of dedication, service, and community spirit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Organizers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full shadow-2xl w-fit mx-auto mb-4">
              <Users className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
              Main Organizers of the Event
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The visionary leaders whose tireless efforts and commitment have made this tournament possible
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {mainOrganizers.map((organizer, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <img
                    src={organizer.photo}
                    alt={organizer.name}
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full mx-auto object-cover border-4 border-blue-200 group-hover:border-green-500 transition-all duration-300 group-hover:shadow-xl transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base group-hover:text-blue-600 transition-colors duration-200 px-2">
                  {organizer.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizing Committee Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full shadow-2xl w-fit mx-auto mb-4">
              <Trophy className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Organizing Committee Members
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The dedicated committee members ensuring smooth execution of the tournament
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {committeeMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-blue-200 hover:scale-105">
                <div className="text-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-200 group-hover:border-orange-400 transition-colors duration-300"
                  />
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block">
                    {member.position}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-200">
                    {member.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">🏟 Venue</h2>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Koyla Veer Baba Stadium</h3>
              <p className="text-xl mb-6 text-blue-100">Durjanpur (Nai Basti), Ballia, Uttar Pradesh</p>
              <p className="text-lg leading-relaxed text-blue-100">
                This venue is not only a hub for local sports enthusiasts but also symbolizes a confluence 
                of sports, culture, and traditional values. The stadium provides the perfect setting for 
                our prestigious tournament.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-full shadow-2xl w-fit mx-auto mb-4">
              <Target className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              🎯 Our Objectives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Discover Rural Talent</h3>
              <p className="text-blue-100">
                To bring forth hidden talents from rural areas and provide them with a platform to showcase their skills.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Build Character</h3>
              <p className="text-green-100">
                To develop leadership, discipline, and self-confidence among young players through sports.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Promote Unity</h3>
              <p className="text-orange-100">
                To spread social harmony and positive energy through sports and community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;