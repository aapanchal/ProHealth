import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, Mail, MapPin, Clock, Users, Award, Heart, Activity, Shield, Target } from 'lucide-react';
import { SITE_INFO, HOME_CONTENT, ABOUT_CONTENT } from '../constants/content';

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HOME_CONTENT.hero.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {HOME_CONTENT.hero.images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {HOME_CONTENT.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {HOME_CONTENT.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2">
              {HOME_CONTENT.hero.cta.primaryCta}
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              {HOME_CONTENT.hero.cta.secondaryCta}
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid  gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {ABOUT_CONTENT.hero.title}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {ABOUT_CONTENT.hero.description}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {ABOUT_CONTENT.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {HOME_CONTENT.services.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {HOME_CONTENT.services.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {HOME_CONTENT.services.items.map((service, index) => {
              // Map service names to icons
              const iconMap: { [key: string]: any } = {
                'Sports Injury': Activity,
                'Back Pain Treatment': Heart,
                'Post-Surgery Rehab': Shield,
                'Manual Therapy': Users
              };
              const IconComponent = iconMap[service.title] || Activity;
              
              return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {HOME_CONTENT.whyChooseUs.title}
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              {HOME_CONTENT.whyChooseUs.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOME_CONTENT.whyChooseUs.items.map((reason, index) => {
              // Map reason titles to icons
              const iconMap: { [key: string]: any } = {
                'Qualified Therapists': Users,
                'Flexible Scheduling': Clock,
                'Personalized Care': Heart,
                'Modern Equipment': Award
              };
              const IconComponent = iconMap[reason.title] || Users;
              
              return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-blue-100">{reason.description}</p>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {HOME_CONTENT.testimonials.title}
            </h2>
            <p className="text-lg text-gray-600">
              {HOME_CONTENT.testimonials.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {HOME_CONTENT.testimonials.items.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            {HOME_CONTENT.contact.title}
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {HOME_CONTENT.contact.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2">
              <Phone size={20} />
              Call Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2">
              <Mail size={20} />
              Send Message
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>{SITE_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <span>{SITE_INFO.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>{SITE_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>{SITE_INFO.hours.weekdays}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;