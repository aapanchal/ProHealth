import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Activity,
  Heart,
  Shield,
  Users,
  Zap,
  Target,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      id: "sports-injury",
      icon: Activity,
      title: "Sports Injury Treatment",
      description:
        "Comprehensive treatment for sports-related injuries including sprains, strains, and overuse injuries.",
      duration: "45-60 minutes",
      price: "£80-120",
      features: [
        "Detailed injury assessment",
        "Sports-specific rehabilitation",
        "Return-to-sport planning",
        "Performance optimization",
        "Injury prevention strategies",
      ],
      conditions: [
        "Muscle strains",
        "Ligament sprains",
        "Tendinitis",
        "Fractures",
        "Dislocations",
      ],
    },
    {
      id: "back-pain",
      icon: Heart,
      title: "Back Pain Treatment",
      description:
        "Specialized treatment for acute and chronic back pain using evidence-based approaches.",
      duration: "45-60 minutes",
      price: "£75-110",
      features: [
        "Spinal assessment",
        "Manual therapy techniques",
        "Core strengthening",
        "Posture correction",
        "Pain management strategies",
      ],
      conditions: [
        "Lower back pain",
        "Sciatica",
        "Disc problems",
        "Muscle spasms",
        "Postural issues",
      ],
    },
    {
      id: "post-surgery",
      icon: Shield,
      title: "Post-Surgery Rehabilitation",
      description:
        "Tailored rehabilitation programs to optimize recovery following surgical procedures.",
      duration: "60-90 minutes",
      price: "£90-140",
      features: [
        "Post-operative assessment",
        "Scar tissue management",
        "Range of motion restoration",
        "Strength rebuilding",
        "Functional training",
      ],
      conditions: [
        "Joint replacements",
        "ACL reconstruction",
        "Rotator cuff repair",
        "Spinal surgery",
        "Fracture repair",
      ],
    },
    {
      id: "manual-therapy",
      icon: Users,
      title: "Manual Therapy",
      description:
        "Hands-on treatment techniques to improve joint mobility and reduce pain.",
      duration: "45 minutes",
      price: "£70-100",
      features: [
        "Joint mobilization",
        "Soft tissue massage",
        "Myofascial release",
        "Trigger point therapy",
        "Spinal manipulation",
      ],
      conditions: [
        "Joint stiffness",
        "Muscle tension",
        "Myofascial pain",
        "Headaches",
        "Neck pain",
      ],
    },
    {
      id: "exercise-therapy",
      icon: Target,
      title: "Exercise Therapy",
      description:
        "Customized exercise programs to improve strength, flexibility, and functional movement.",
      duration: "60 minutes",
      price: "£65-95",
      features: [
        "Movement analysis",
        "Personalized exercise plans",
        "Progressive training",
        "Equipment instruction",
        "Home exercise programs",
      ],
      conditions: [
        "Weakness",
        "Poor posture",
        "Movement disorders",
        "Chronic pain",
        "Disability",
      ],
    },
    {
      id: "dry-needling",
      icon: Zap,
      title: "Dry Needling",
      description:
        "Advanced technique using thin needles to treat muscle trigger points and pain.",
      duration: "30-45 minutes",
      price: "£60-90",
      features: [
        "Trigger point assessment",
        "Precise needle placement",
        "Pain relief techniques",
        "Muscle activation",
        "Integration with other treatments",
      ],
      conditions: [
        "Trigger points",
        "Muscle spasms",
        "Chronic pain",
        "Tension headaches",
        "Myofascial pain",
      ],
    },
  ];

  const treatmentProcess = [
    {
      step: 1,
      title: "Initial Assessment",
      description:
        "Comprehensive evaluation of your condition, medical history, and goals.",
      duration: "60 minutes",
    },
    {
      step: 2,
      title: "Treatment Plan",
      description:
        "Personalized treatment plan developed based on your specific needs.",
      duration: "15 minutes",
    },
    {
      step: 3,
      title: "Active Treatment",
      description:
        "Hands-on therapy sessions using the most appropriate techniques.",
      duration: "45-60 minutes",
    },
    {
      step: 4,
      title: "Progress Review",
      description:
        "Regular assessment and adjustment of treatment plan as needed.",
      duration: "30 minutes",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Physiotherapy Services - ProHealth London | Expert Treatment &
          Rehabilitation
        </title>
        <meta
          name="description"
          content="Comprehensive physiotherapy services in London including sports injury treatment, back pain relief, post-surgery rehabilitation, and manual therapy. Book today."
        />
        <meta
          name="keywords"
          content="physiotherapy services, sports injury treatment, back pain relief, post-surgery rehabilitation, manual therapy, London"
        />
      </Helmet>

      {/* Hero Section */}


      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-blue-dark " style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
          }}>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-black leading-relaxed">
              Comprehensive physiotherapy and rehabilitation services tailored
              to your specific needs and recovery goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-green to-primary-blue-light rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-primary-blue-dark">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    <div className="flex items-center space-x-6 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-primary-green" />
                        <span className="text-sm text-gray-600">
                          {service.duration}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">
                          From {service.price}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-primary-blue-dark mb-2">
                        What's Included:
                      </h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary-green" />
                            <span className="text-sm text-gray-600">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-primary-blue-dark mb-2">
                        Common Conditions:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.conditions.map((condition, idx) => (
                          <span
                            key={idx}
                            className="bg-primary-green/10 text-primary-green text-xs px-3 py-1 rounded-full"
                          >
                            {condition}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a href="#book-appointment" className="btn-primary">
                      Book This Service
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="section-padding bg-secondary-gray">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Treatment Process</h2>
            <p className="section-subtitle">
              A structured approach to ensure you receive the most effective
              care for your condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-green to-primary-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-primary-blue-dark">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4 text-primary-green" />
                    <span className="text-sm text-gray-600">
                      {step.duration}
                    </span>
                  </div>
                </div>

                {index < treatmentProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary-green" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary-blue-dark">
                Why Choose Our Services?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-blue-dark">
                      Evidence-Based Treatment
                    </h3>
                    <p className="text-gray-600">
                      All our treatments are based on the latest research and
                      clinical evidence.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-blue-dark">
                      Personalized Care
                    </h3>
                    <p className="text-gray-600">
                      Every treatment plan is tailored to your specific
                      condition and goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-blue-dark">
                      Qualified Professionals
                    </h3>
                    <p className="text-gray-600">
                      Our team consists of highly qualified and experienced
                      physiotherapists.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-blue-dark">
                      Modern Equipment
                    </h3>
                    <p className="text-gray-600">
                      We use the latest technology and equipment for optimal
                      results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6111739/pexels-photo-6111739.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Modern physiotherapy equipment"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary-green to-primary-blue-light rounded-full flex items-center justify-center">
                <Target className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-green to-primary-blue-light text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Book Your Treatment?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards recovery and book your consultation with
            our expert physiotherapists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book-appointment" className="btn-primary">
              Book Appointment
            </a>
            <a href="/contact" className="btn-secondary">
              Ask a Question
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
