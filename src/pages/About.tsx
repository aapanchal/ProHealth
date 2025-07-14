import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Users, Heart, Target, Clock, Shield } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Lead Physiotherapist',
      qualifications: 'MSc Sports Physiotherapy, MCSP',
      experience: '15+ years',
      image: 'https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      specialties: ['Sports Injuries', 'Manual Therapy', 'Dry Needling']
    },
    {
      name: 'James Wilson',
      role: 'Senior Physiotherapist',
      qualifications: 'BSc Physiotherapy, HCPC',
      experience: '12+ years',
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      specialties: ['Orthopaedic', 'Post-Surgery Rehab', 'Exercise Therapy']
    },
    {
      name: 'Dr. Emily Chen',
      role: 'Rehabilitation Specialist',
      qualifications: 'PhD Rehabilitation Science',
      experience: '10+ years',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      specialties: ['Neurological', 'Geriatric Care', 'Pain Management']
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'We put our patients at the heart of everything we do, ensuring personalized treatment plans that address individual needs and goals.'
    },
    {
      icon: Award,
      title: 'Excellence in Treatment',
      description: 'Our commitment to continuous learning and using evidence-based practices ensures the highest standard of care.'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'We work closely with patients, families, and healthcare providers to achieve the best possible outcomes.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes and functional improvements that make a real difference in our patients\' lives.'
    }
  ];

  const stats = [
    { number: '2500+', label: 'Patients Treated' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Success Rate' },
    { number: '5★', label: 'Average Rating' }
  ];

  return (
    <>
      <Helmet>
        <title>About ProHealth Physiotherapy - Expert Team & Quality Care</title>
        <meta name="description" content="Learn about ProHealth Physiotherapy's expert team, our mission, values, and commitment to providing exceptional rehabilitation services in London." />
        <meta name="keywords" content="about physiotherapy, expert physiotherapists, rehabilitation team, London physiotherapy clinic" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-blue-dark to-primary-blue-light text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About ProHealth Physiotherapy</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              We are a dedicated team of healthcare professionals committed to helping you achieve optimal health and wellness through expert physiotherapy and rehabilitation services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary-blue-dark">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At ProHealth Physiotherapy, our mission is to provide exceptional, evidence-based physiotherapy care that empowers individuals to overcome physical challenges and achieve their health goals.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe in treating the whole person, not just the symptoms, and work collaboratively with each patient to develop personalized treatment plans that address their unique needs and circumstances.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-blue-dark">Quality Assured</h3>
                  <p className="text-gray-600">Registered with professional bodies</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6111707/pexels-photo-6111707.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="ProHealth Physiotherapy Clinic" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-green to-primary-blue-light rounded-full flex items-center justify-center">
                <Clock className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary-gray">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide our practice and define our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-green to-primary-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-blue-dark">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-green to-primary-blue-light text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-gray-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet Our Expert Team</h2>
            <p className="section-subtitle">
              Our qualified physiotherapists bring years of experience and specialized expertise to your care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary-blue-dark">{member.name}</h3>
                  <p className="text-primary-green font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-3">{member.qualifications}</p>
                  <div className="flex items-center mb-3">
                    <Clock className="w-4 h-4 text-primary-green mr-2" />
                    <span className="text-sm text-gray-600">{member.experience}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-blue-dark mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-primary-green/10 text-primary-green text-sm px-3 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-blue-dark text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Recovery Journey?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Experience the difference that expert, personalized physiotherapy care can make in your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book-appointment" className="btn-primary">
              Book Consultation
            </a>
            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;