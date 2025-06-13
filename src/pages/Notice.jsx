import React from 'react';
import { Download, FileText, Calendar, Bell, AlertCircle, Info } from 'lucide-react';

/**
 * Notice page component for tournament announcements and PDF downloads
 * Features:
 * - Tournament notices and announcements with cricket theme
 * - PDF download links for official documents
 * - Important dates and deadlines
 * - Responsive card layout for different notice types
 */
const Notice = () => {
  // Notice items with download links (replace with actual PDF URLs)
  const notices = [
    {
      id: 1,
      title: 'Tournament Schedule & Fixtures',
      description: 'Complete tournament schedule with match timings, venues, and team fixtures for all participating teams.',
      date: '2024-01-15',
      type: 'schedule',
      downloadUrl: '/docs/tournament-schedule.pdf',
      important: true
    },
    {
      id: 2,
      title: 'Registration Guidelines',
      description: 'Detailed guidelines for team registration, player eligibility, and required documentation.',
      date: '2024-01-10',
      type: 'guidelines',
      downloadUrl: '/docs/registration-guidelines.pdf',
      important: true
    },
    {
      id: 3,
      title: 'Tournament Rules & Regulations',
      description: 'Official rules and regulations governing the tournament, including playing conditions and disciplinary measures.',
      date: '2024-01-08',
      type: 'rules',
      downloadUrl: '/docs/tournament-rules.pdf',
      important: false
    },
    {
      id: 4,
      title: 'Prize Distribution Details',
      description: 'Information about prize money, awards, and the prize distribution ceremony schedule.',
      date: '2024-01-05',
      type: 'prizes',
      downloadUrl: '/docs/prize-distribution.pdf',
      important: false
    },
    {
      id: 5,
      title: 'Ground Rules & Safety Guidelines',
      description: 'Stadium-specific rules, safety protocols, and guidelines for players and spectators.',
      date: '2024-01-03',
      type: 'safety',
      downloadUrl: '/docs/ground-safety-rules.pdf',
      important: false
    },
    {
      id: 6,
      title: 'Team Captain Meeting Minutes',
      description: 'Minutes from the team captains meeting including important decisions and clarifications.',
      date: '2024-01-01',
      type: 'meeting',
      downloadUrl: '/docs/captain-meeting-minutes.pdf',
      important: false
    }
  ];

  // Important announcements
  const announcements = [
    {
      title: 'Registration Deadline Extended',
      content: 'Team registration deadline has been extended to January 20th, 2024. Don\'t miss this opportunity!',
      type: 'deadline',
      urgent: true
    },
    {
      title: 'Practice Sessions Available',
      content: 'Practice sessions are available at the stadium from 6 AM to 8 AM daily. Contact organizers to book.',
      type: 'info',
      urgent: false
    },
    {
      title: 'Weather Updates',
      content: 'Stay updated with weather conditions. All matches will proceed as scheduled unless severe weather conditions.',
      type: 'weather',
      urgent: false
    }
  ];

  const handleDownload = (url, filename) => {
    // In a real application, this would trigger the actual download
    // For now, we'll show an alert
    alert(`Download would start: ${filename}\nURL: ${url}`);
  };

  const getNoticeIcon = (type) => {
    switch (type) {
      case 'schedule':
        return Calendar;
      case 'guidelines':
        return Info;
      case 'rules':
        return FileText;
      case 'prizes':
        return Download;
      case 'safety':
        return AlertCircle;
      case 'meeting':
        return Bell;
      default:
        return FileText;
    }
  };

  const getNoticeColor = (type, important) => {
    if (important) {
      return 'from-red-500 to-pink-600';
    }
    
    switch (type) {
      case 'schedule':
        return 'from-blue-500 to-blue-600';
      case 'guidelines':
        return 'from-green-500 to-green-600';
      case 'rules':
        return 'from-yellow-500 to-orange-600';
      case 'prizes':
        return 'from-purple-500 to-purple-600';
      case 'safety':
        return 'from-orange-500 to-red-600';
      case 'meeting':
        return 'from-gray-500 to-gray-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
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
            <Bell className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tournament Notices</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Download official tournament documents, schedules, and important announcements
          </p>
        </div>
      </section>

      {/* Important Announcements */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-red-500 to-pink-600 p-3 rounded-full shadow-2xl w-fit mx-auto mb-4">
              <AlertCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Important Announcements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  announcement.urgent 
                    ? 'bg-gradient-to-br from-red-50 to-pink-50 border-red-300 hover:border-red-400' 
                    : 'bg-gradient-to-br from-blue-50 to-green-50 border-blue-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-start space-x-3">
                  {announcement.urgent && (
                    <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{announcement.title}</h3>
                    <p className="text-gray-700 text-sm">{announcement.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Documents Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full shadow-2xl w-fit mx-auto mb-4">
              <FileText className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
              Official Tournament Documents
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download all official tournament documents, schedules, and guidelines in PDF format
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notices.map((notice) => {
              const IconComponent = getNoticeIcon(notice.type);
              const gradientColor = getNoticeColor(notice.type, notice.important);
              return (
                <div
                  key={notice.id}
                  className="bg-white border-2 border-gray-200 hover:border-blue-300 p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-gradient-to-r ${gradientColor} p-3 rounded-full shadow-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    {notice.important && (
                      <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        IMPORTANT
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {notice.title}
                  </h3>
                  
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {notice.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(notice.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    
                    <button
                      onClick={() => handleDownload(notice.downloadUrl, notice.title)}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold text-sm rounded-full transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help with Documents?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            If you're having trouble downloading any document or need additional information, 
            contact our organizing committee for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:+919120186401"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-200 hover:shadow-lg transform hover:scale-105"
            >
              <Bell className="h-5 w-5 mr-2" />
              Call: 9120186401
            </a>
            <a
              href="tel:+916307326892"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold rounded-full transition-all duration-200 hover:shadow-lg transform hover:scale-105"
            >
              <Bell className="h-5 w-5 mr-2" />
              Call: 6307326892
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notice;