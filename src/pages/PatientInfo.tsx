import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FileText, 
  Stethoscope, 
  Shield, 
  Clock,
  CheckCircle,
  Info,
  Heart,
  Users
} from 'lucide-react';
import { PATIENT_INFO_CONTENT } from '../constants/content';

const PatientInfo: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Patient Information - ProHealth Physiotherapy Clinic</title>
        <meta name="description" content="Important patient information for ProHealth Physiotherapy Clinic including what to expect, acupuncture services, and medical insurance details." />
        <meta name="keywords" content="patient information, physiotherapy clinic, acupuncture, medical insurance, what to expect" />
      </Helmet>



      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-blue-dark " style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
          }}>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{PATIENT_INFO_CONTENT.hero.title}</h1>
            <p className="text-xl text-gray-800 leading-relaxed">
              {PATIENT_INFO_CONTENT.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Acupuncture Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center mr-4">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-primary-blue">{PATIENT_INFO_CONTENT.acupuncture.title}</h2>
              </div>
              
              <div className="space-y-4">
                {PATIENT_INFO_CONTENT.acupuncture.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://prohealthphysio.co.uk/images/2.jpg" 
                alt="Acupuncture treatment" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-green rounded-full flex items-center justify-center">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="section-padding bg-secondary-gray">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
                alt="Physiotherapy clinic reception" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-blue rounded-full flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-primary-green">{PATIENT_INFO_CONTENT.whatToExpect.title}</h2>
              </div>
              
              <div className="space-y-4">
                {PATIENT_INFO_CONTENT.whatToExpect.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Insurance Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-primary-blue mb-4">{PATIENT_INFO_CONTENT.medicalInsurance.title}</h2>
            </div>
            
            <div className="bg-secondary-gray rounded-xl p-8">
              <div className="space-y-6">
                {PATIENT_INFO_CONTENT.medicalInsurance.content.map((paragraph, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-green mt-1 flex-shrink-0" />
                    <p className="text-gray-600 leading-relaxed">{paragraph}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information Cards */}
      <section className="section-padding bg-secondary-gray">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-green">First Visit</h3>
              <p className="text-gray-600">Bring your GP details and any relevant medical reports for your first appointment.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Info className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-blue">What to Wear</h3>
              <p className="text-gray-600">Wear comfortable clothing that allows easy access to the area being treated.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-green">Insurance</h3>
              <p className="text-gray-600">We accept all major medical insurers. Contact us for authorization details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-green text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your First Visit?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your appointment and start your journey to better health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book-appointment" className="btn-primary">
              Book Appointment
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

export default PatientInfo;