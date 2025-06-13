import React from 'react';
import { Phone, MapPin, Clock, Mail, ExternalLink, Users, FileText, Trophy, UserPlus } from 'lucide-react';

/**
 * Contact page component with team registration and contact information
 * Features:
 * - Google Forms integration for team registration
 * - Contact information cards with cricket theme
 * - Venue details and contact hours
 * - Responsive design with call-to-action sections
 */
const Contact = () => {
  // Google Form URL - Replace with actual Google Forms URL
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdbdqrx0gVF6sxz8LP-t1rTZK8ZeNKYBGNN8cYGUhJg9i0NMg/viewform?usp=header";

  const contactPersons = [
    {
      name: 'Sudhir Gond',
      position: 'President',
      phone: '9120186401',
      role: 'Tournament Coordination & Team Registration'
    },
    {
      name: 'Shakti Singh Yadav',
      position: 'Treasurer',
      phone: '6307326892',
      role: 'Finance & Prize Distribution'
    }
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
            <Phone className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Get in touch for team registration, tournament information, and any inquiries
          </p>
        </div>
      </section>

      {/* Team Registration Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full shadow-2xl w-fit mx-auto mb-4">
              <Trophy className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
              Team Registration
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Register your team for the Maa Shayar Jagdamba Champions Trophy through our online registration form
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 p-8 md:p-12 rounded-2xl shadow-xl border border-blue-200">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-full shadow-2xl w-fit mx-auto mb-4">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Register Your Cricket Team
                </h3>
                <p className="text-gray-700 text-lg mb-6">
                  Fill out our comprehensive registration form to secure your team's spot in the tournament. 
                  All team details, player information, and contact details are required.
                </p>
                
                <div className="bg-white p-6 rounded-xl border-2 border-blue-200 mb-6 shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Registration Requirements:</h4>
                  <ul className="text-left text-gray-700 space-y-3">
                    <li className="flex items-center"><FileText className="h-5 w-5 text-blue-600 mr-3" />Team Name and Captain Details</li>
                    <li className="flex items-center"><FileText className="h-5 w-5 text-green-600 mr-3" />Complete Player List (Min 11, Max 16 players)</li>
                    <li className="flex items-center"><FileText className="h-5 w-5 text-orange-600 mr-3" />Contact Information</li>
                    <li className="flex items-center"><FileText className="h-5 w-5 text-purple-600 mr-3" />Team Representative Details</li>
                  </ul>
                </div>

                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xl rounded-full transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
                >
                  <UserPlus className="mr-3 h-6 w-6" />
                  Register Team Now
                  <ExternalLink className="ml-3 h-6 w-6" />
                </a>
                
                <p className="text-sm text-gray-500 mt-4">
                  Registration opens in a new window via Google Forms
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Persons Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
              Contact Persons
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reach out to our tournament coordinators for any assistance or information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactPersons.map((person, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:scale-105">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Phone className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{person.name}</h3>
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-3 inline-block">
                    {person.position}
                  </div>
                  <p className="text-gray-600 mb-4">{person.role}</p>
                  <a
                    href={`tel:+91${person.phone}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    {person.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Venue Information */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 text-white">
              <MapPin className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Tournament Venue</h3>
              <div className="text-blue-100 space-y-2">
                <p className="font-semibold text-yellow-300">Koyla Veer Baba Stadium</p>
                <p>Durjanpur (Nai Basti)</p>
                <p>Ballia, Uttar Pradesh</p>
              </div>
            </div>

            {/* Contact Hours */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 text-white">
              <Clock className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Contact Hours</h3>
              <div className="text-green-100">
                <p className="text-2xl font-bold text-yellow-300 mb-2">8:00 AM - 11:00 PM</p>
                <p>Available for inquiries,</p>
                <p>team registrations, and</p>
                <p>tournament information</p>
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 text-white">
              <Mail className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Email Contact</h3>
              <div className="text-orange-100">
                <a
                  href="mailto:msjchampionstrophy@email.com"
                  className="text-yellow-300 hover:text-yellow-200 font-semibold text-lg transition-colors duration-200"
                >
                  msjchampionstrophy@email.com
                </a>
                <p className="mt-2 text-sm">
                  For written inquiries and document submissions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need More Information?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            For any additional information, tournament rules, registration deadlines, or special requirements, 
            don't hesitate to contact our organizing committee. We're here to help make your tournament experience memorable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:+919120186401"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-200 hover:shadow-lg transform hover:scale-105"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: 9120186401
            </a>
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold rounded-full transition-all duration-200 hover:shadow-lg transform hover:scale-105"
            >
              <UserPlus className="h-5 w-5 mr-2" />
              Register Team
              <ExternalLink className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;