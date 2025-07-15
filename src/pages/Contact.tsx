import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  User,
  MessageSquare
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+44 20 1234 5678',
      description: 'Mon - Fri: 8AM - 7PM',
      action: 'tel:+442012345678'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@prohealth.co.uk',
      description: 'We respond within 24 hours',
      action: 'mailto:info@prohealth.co.uk'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '+44 20 1234 5678',
      description: 'Quick messaging available',
      action: 'https://wa.me/442012345678'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Health Street',
      description: 'London, UK SW1A 1AA',
      action: 'https://maps.google.com'
    }
  ];

  const openingHours = [
    { day: 'Monday', hours: '8:00 AM - 7:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 7:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 7:00 PM' },
    { day: 'Thursday', hours: '8:00 AM - 7:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <>
      <Helmet>
        <title>Contact ProHealth Physiotherapy - Book Appointment | London Clinic</title>
        <meta name="description" content="Contact ProHealth Physiotherapy clinic in London. Book appointments, get directions, and reach our expert physiotherapy team. Call +44 20 1234 5678." />
        <meta name="keywords" content="contact physiotherapy, book appointment, London physiotherapy clinic, physiotherapy consultation" />
      </Helmet>



      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-blue-dark " style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
          }}>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-800 leading-relaxed">
              Ready to start your recovery journey? Contact our expert team today to schedule your consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-slate-800 from-primary-green to-primary-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-blue-dark">{info.title}</h3>
                <p className="text-lg font-medium text-gray-800 mb-1">{info.details}</p>
                <p className="text-sm text-gray-600 mb-4">{info.description}</p>
                <a 
                  href={info.action}
                  className="btn-primary text-sm px-6 py-2"
                  target={info.action.startsWith('http') ? '_blank' : undefined}
                  rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {info.title === 'Address' ? 'Get Directions' : `Contact via ${info.title}`}
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-blue-dark">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="sports-injury">Sports Injury Treatment</option>
                      <option value="back-pain">Back Pain Treatment</option>
                      <option value="post-surgery">Post-Surgery Rehabilitation</option>
                      <option value="manual-therapy">Manual Therapy</option>
                      <option value="exercise-therapy">Exercise Therapy</option>
                      <option value="dry-needling">Dry Needling</option>
                      <option value="general">General Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your condition or how we can help you..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2"
                >
       
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Opening Hours */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary-blue-dark flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-primary-green" />
                  Opening Hours
                </h3>
                <div className="bg-secondary-gray rounded-lg p-6">
                  <div className="space-y-3">
                    {openingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium text-primary-blue-dark">{schedule.day}</span>
                        <span className={`${schedule.hours === 'Closed' ? 'text-red-500' : 'text-gray-600'}`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary-blue-dark">Emergency Contact</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <p className="text-red-800 mb-3">
                    For urgent medical emergencies, please call 999 or visit your nearest A&E department.
                  </p>
                  <p className="text-gray-700">
                    For non-urgent after-hours inquiries, please use our contact form and we'll respond within 24 hours.
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary-blue-dark">Quick Actions</h3>
                <div className="space-y-4">
                  <a 
                    href="#book-appointment"
                    className="block w-full btn-primary text-center flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book Online Appointment</span>
                  </a>
                  <a 
                    href="https://wa.me/442012345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full btn-secondary text-center flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-secondary-gray">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="section-title">Find Our Clinic</h2>
            <p className="section-subtitle">
              Conveniently located in central London with excellent transport links.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-600 mb-2">Interactive Map</p>
                  <p className="text-sm text-gray-500">Google Maps integration</p>
                  <p className="text-xs text-gray-400 mt-2">Requires API key setup</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary-blue-dark">Getting Here</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">🚇</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-blue-dark">By Tube</h4>
                      <p className="text-gray-600">Westminster Station (2 min walk)</p>
                      <p className="text-sm text-gray-500">Circle, District & Jubilee lines</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">🚌</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-blue-dark">By Bus</h4>
                      <p className="text-gray-600">Multiple bus routes nearby</p>
                      <p className="text-sm text-gray-500">Routes 11, 24, 88, 148, 211</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">🚗</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-blue-dark">By Car</h4>
                      <p className="text-gray-600">Free parking available</p>
                      <p className="text-sm text-gray-500">Spaces reserved for patients</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-primary-blue-dark">Accessibility</h3>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 mb-2">♿ Wheelchair accessible</p>
                  <p className="text-green-800 mb-2">🚗 Disabled parking available</p>
                  <p className="text-green-800">🚇 Step-free access from station</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;