// Static content constants for ProHealth Physiotherapy website

export const SITE_INFO = {
  name: 'ProHealth',
  tagline: 'Physiotherapy',
  fullName: 'ProHealth Physiotherapy Clinic Ltd.',
  description: 'Leading physiotherapy clinic providing expert rehabilitation and wellness services to help you recover and thrive.',
  phone: '07792684629',
  fax: '08715282858',
  email: 'info@prohealthphysio.co.uk',
  address: '394 Uxbridge Road, Pinner, Middlesex, HA5 4HP',
  whatsapp: 'https://wa.me/447792684629',
  hours: {
    weekdays: 'Mon - Fri: 8AM - 7PM',
    saturday: 'Sat: 9AM - 4PM',
    sunday: 'Closed'
  }
};

export const NAVIGATION = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Patient Info', path: '/patient-info' },
  { name: 'Contact', path: '/contact' },
];

export const HOME_CONTENT = {
  hero: {
    title: 'Your Path to',
    subtitle: 'Complete Recovery',
    description: 'Expert physiotherapy and rehabilitation services to help you recover, strengthen, and thrive.',
    images: [
      'https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      'https://prohealthphysio.co.uk/images/1.jpg',
      'https://prohealthphysio.co.uk/images/2.jpg',
      'https://prohealthphysio.co.uk/images/3.jpg',
      'https://prohealthphysio.co.uk/images/4.jpg',
      'https://prohealthphysio.co.uk/images/5.jpg',
    ],
    cta: {
      primaryCta: 'Book Appointment',
      secondaryCta: 'Learn More'
    }
  },
  services: {
    title: 'Our Services',
    subtitle: 'Comprehensive physiotherapy services tailored to your specific needs and recovery goals.',
    items: [
      {
        title: 'Sports Injury',
        description: 'Expert treatment for sports-related injuries to get you back in the game safely.',
        link: '/services#sports-injury'
      },
      {
        title: 'Back Pain Treatment',
        description: 'Comprehensive back pain management using advanced techniques and personalized care.',
        link: '/services#back-pain'
      },
      {
        title: 'Post-Surgery Rehab',
        description: 'Specialized rehabilitation programs to optimize your recovery after surgery.',
        link: '/services#post-surgery'
      },
      {
        title: 'Manual Therapy',
        description: 'Hands-on treatment techniques to improve mobility and reduce pain.',
        link: '/services#manual-therapy'
      }
    ]
  },
  whyChooseUs: {
    title: 'Why Choose ProHealth?',
    subtitle: 'We\'re committed to providing exceptional care and helping you achieve your health goals.',
    items: [
      {
        title: 'Qualified Therapists',
        description: 'Our team consists of highly qualified and experienced physiotherapists.'
      },
      {
        title: 'Flexible Scheduling',
        description: 'We offer flexible appointment times to fit your busy schedule.'
      },
      {
        title: 'Personalized Care',
        description: 'Every treatment plan is tailored to your specific needs and goals.'
      },
      {
        title: 'Modern Equipment',
        description: 'We use the latest technology and equipment for optimal results.'
      }
    ]
  },
  testimonials: {
    title: 'What Our Patients Say',
    subtitle: 'Real stories from real people who have experienced our care.',
    items: [
      {
        name: 'Sarah Johnson',
        role: 'Marathon Runner',
        content: 'ProHealth helped me recover from a severe knee injury. Their personalized approach got me back to running stronger than ever.',
        rating: 5,
        image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      },
      {
        name: 'Michael Chen',
        role: 'Office Worker',
        content: 'Years of back pain are finally gone thanks to their expert treatment. The team is professional and caring.',
        rating: 5,
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      },
      {
        name: 'Emma Williams',
        role: 'Post-Surgery Patient',
        content: 'The rehabilitation program was exactly what I needed. They made my recovery journey smooth and successful.',
        rating: 5,
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ]
  },
  location: {
    title: 'Visit Our Clinic',
    subtitle: 'Conveniently located in the heart of London with easy access to public transportation.',
    findUs: 'Find Us',
    directions: [
      {
        step: 1,
        title: 'Address',
        description: '123 Health Street, London, UK SW1A 1AA'
      },
      {
        step: 2,
        title: 'Transport',
        description: '2 minutes walk from Westminster Station'
      },
      {
        step: 3,
        title: 'Parking',
        description: 'Free parking available for patients'
      }
    ]
  },
  contact: {
    title: 'Ready to Start Your Recovery?',
    subtitle: 'Get in touch with our team to schedule your consultation today.',
    methods: [
      {
        title: 'Call Us',
        description: 'Speak directly with our team',
        action: 'tel:+442012345678',
        label: '+44 20 1234 5678'
      },
      {
        title: 'WhatsApp',
        description: 'Quick and easy messaging',
        action: 'https://wa.me/442012345678',
        label: 'Message Us'
      },
      {
        title: 'Online Booking',
        description: 'Book your appointment online',
        action: '#book-appointment',
        label: 'Book Now'
      }
    ]
  }
};

export const ABOUT_CONTENT = {
  hero: {
    title: 'About ProHealth Physiotherapy',
    description: 'We are a dedicated team of healthcare professionals committed to helping you achieve optimal health and wellness through expert physiotherapy and rehabilitation services.'
  },
  mission: {
    title: 'Our Mission',
    paragraphs: [
      'At ProHealth Physiotherapy, our mission is to provide exceptional, evidence-based physiotherapy care that empowers individuals to overcome physical challenges and achieve their health goals.',
      'We believe in treating the whole person, not just the symptoms, and work collaboratively with each patient to develop personalized treatment plans that address their unique needs and circumstances.'
    ],
    qualityAssurance: {
      title: 'Quality Assured',
      description: 'Registered with professional bodies'
    }
  },
  values: {
    title: 'Our Values',
    subtitle: 'The principles that guide our practice and define our commitment to excellence.',
    items: [
      {
        title: 'Patient-Centered Care',
        description: 'We put our patients at the heart of everything we do, ensuring personalized treatment plans that address individual needs and goals.'
      },
      {
        title: 'Excellence in Treatment',
        description: 'Our commitment to continuous learning and using evidence-based practices ensures the highest standard of care.'
      },
      {
        title: 'Collaborative Approach',
        description: 'We work closely with patients, families, and healthcare providers to achieve the best possible outcomes.'
      },
      {
        title: 'Results-Driven',
        description: 'We focus on measurable outcomes and functional improvements that make a real difference in our patients\' lives.'
      }
    ]
  },
  stats: [
    { number: '2500+', label: 'Patients Treated' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Success Rate' },
    { number: '5★', label: 'Average Rating' }
  ],
  team: {
    title: 'Meet Our Expert Team',
    subtitle: 'Our qualified physiotherapists bring years of experience and specialized expertise to your care.',
    members: [
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
    ]
  },
  cta: {
    title: 'Ready to Start Your Recovery Journey?',
    description: 'Experience the difference that expert, personalized physiotherapy care can make in your life.',
    primaryCta: 'Book Consultation',
    secondaryCta: 'Contact Us'
  }
};

export const SERVICES_CONTENT = {
  hero: {
    title: 'Our Services',
    description: 'Comprehensive physiotherapy and rehabilitation services tailored to your specific needs and recovery goals.'
  },
  services: [
    {
      id: 'sports-injury',
      title: 'Sports Injury Treatment',
      description: 'Comprehensive treatment for sports-related injuries including sprains, strains, and overuse injuries.',
      duration: '45-60 minutes',
      price: '£80-120',
      features: [
        'Detailed injury assessment',
        'Sports-specific rehabilitation',
        'Return-to-sport planning',
        'Performance optimization',
        'Injury prevention strategies'
      ],
      conditions: ['Muscle strains', 'Ligament sprains', 'Tendinitis', 'Fractures', 'Dislocations']
    },
    {
      id: 'back-pain',
      title: 'Back Pain Treatment',
      description: 'Specialized treatment for acute and chronic back pain using evidence-based approaches.',
      duration: '45-60 minutes',
      price: '£75-110',
      features: [
        'Spinal assessment',
        'Manual therapy techniques',
        'Core strengthening',
        'Posture correction',
        'Pain management strategies'
      ],
      conditions: ['Lower back pain', 'Sciatica', 'Disc problems', 'Muscle spasms', 'Postural issues']
    },
    {
      id: 'post-surgery',
      title: 'Post-Surgery Rehabilitation',
      description: 'Tailored rehabilitation programs to optimize recovery following surgical procedures.',
      duration: '60-90 minutes',
      price: '£90-140',
      features: [
        'Post-operative assessment',
        'Scar tissue management',
        'Range of motion restoration',
        'Strength rebuilding',
        'Functional training'
      ],
      conditions: ['Joint replacements', 'ACL reconstruction', 'Rotator cuff repair', 'Spinal surgery', 'Fracture repair']
    },
    {
      id: 'manual-therapy',
      title: 'Manual Therapy',
      description: 'Hands-on treatment techniques to improve joint mobility and reduce pain.',
      duration: '45 minutes',
      price: '£70-100',
      features: [
        'Joint mobilization',
        'Soft tissue massage',
        'Myofascial release',
        'Trigger point therapy',
        'Spinal manipulation'
      ],
      conditions: ['Joint stiffness', 'Muscle tension', 'Myofascial pain', 'Headaches', 'Neck pain']
    },
    {
      id: 'exercise-therapy',
      title: 'Exercise Therapy',
      description: 'Customized exercise programs to improve strength, flexibility, and functional movement.',
      duration: '60 minutes',
      price: '£65-95',
      features: [
        'Movement analysis',
        'Personalized exercise plans',
        'Progressive training',
        'Equipment instruction',
        'Home exercise programs'
      ],
      conditions: ['Weakness', 'Poor posture', 'Movement disorders', 'Chronic pain', 'Disability']
    },
    {
      id: 'dry-needling',
      title: 'Dry Needling',
      description: 'Advanced technique using thin needles to treat muscle trigger points and pain.',
      duration: '30-45 minutes',
      price: '£60-90',
      features: [
        'Trigger point assessment',
        'Precise needle placement',
        'Pain relief techniques',
        'Muscle activation',
        'Integration with other treatments'
      ],
      conditions: ['Trigger points', 'Muscle spasms', 'Chronic pain', 'Tension headaches', 'Myofascial pain']
    }
  ],
  treatmentProcess: {
    title: 'Our Treatment Process',
    subtitle: 'A structured approach to ensure you receive the most effective care for your condition.',
    steps: [
      {
        step: 1,
        title: 'Initial Assessment',
        description: 'Comprehensive evaluation of your condition, medical history, and goals.',
        duration: '60 minutes'
      },
      {
        step: 2,
        title: 'Treatment Plan',
        description: 'Personalized treatment plan developed based on your specific needs.',
        duration: '15 minutes'
      },
      {
        step: 3,
        title: 'Active Treatment',
        description: 'Hands-on therapy sessions using the most appropriate techniques.',
        duration: '45-60 minutes'
      },
      {
        step: 4,
        title: 'Progress Review',
        description: 'Regular assessment and adjustment of treatment plan as needed.',
        duration: '30 minutes'
      }
    ]
  },
  whyChoose: {
    title: 'Why Choose Our Services?',
    benefits: [
      {
        title: 'Evidence-Based Treatment',
        description: 'All our treatments are based on the latest research and clinical evidence.'
      },
      {
        title: 'Personalized Care',
        description: 'Every treatment plan is tailored to your specific condition and goals.'
      },
      {
        title: 'Qualified Professionals',
        description: 'Our team consists of highly qualified and experienced physiotherapists.'
      },
      {
        title: 'Modern Equipment',
        description: 'We use the latest technology and equipment for optimal results.'
      }
    ]
  },
  cta: {
    title: 'Ready to Book Your Treatment?',
    description: 'Take the first step towards recovery and book your consultation with our expert physiotherapists.',
    primaryCta: 'Book Appointment',
    secondaryCta: 'Ask a Question'
  }
};

export const PATIENT_INFO_CONTENT = {
  hero: {
    title: 'Patient Information',
    description: 'Everything you need to know about your visit to ProHealth Physiotherapy Clinic.'
  },
  acupuncture: {
    title: 'What is Acupuncture?',
    content: [
      'Acupuncture is one of the many skills employed within physiotherapy as part of an integrated approach to the management of pain and inflammation. Acupuncture forms part of traditional Chinese medicine (TCM). This ancient system of medicine dates back as far as 1000 years BC and is based on a holistic concept of treatment which regards ill health as a manifestation of imbalance in the body\'s energy. Re-establishing a correct balance is the aim of TCM.',
      'Energy is referred to as Qi, (pronounced chi) and is described in terms of Yin energy – quiet and calm and Yang energy –vigorous and exciting. They are complementary opposites and in health exist in a dynamic but balanced state in the body. Practitioners of TCM believe that stimulating certain Acupuncture points on the body can help to restore the balance between Yin and Yang that becomes disturbed in illness.',
      'We combine TCM principles with scientific evidence as a means of reducing pain and promoting healing, always with the aim of enhancing physiotherapy treatments such as exercise and rehabilitation techniques to promote recovery and improve quality of life.',
      'Acupuncture is safe when practised by a member of the Acupuncture Association of Chartered Physiotherapists (AACP) because of the strict hygiene guidelines that must be adhered to, and the training courses and educational updates that are required in order to stay on the membership register.'
    ]
  },
  whatToExpect: {
    title: 'What to expect at ProHealth Physiotherapy Clinic?',
    content: [
      'Once you arrive at the Clinic, you will be seen by our friendly reception team. If this is your first visit then you will be requested to fill out a patient details form which will include your details and your consent for assessment and treatment of your problem. You will then see your physiotherapist who will take you to the treatment area.',
      'It will be helpful if you can get your GP details and any other relevant medical information like investigation reports, previous clinic letters and medical reports.',
      'Our chartered physiotherapists will discuss your condition with you. This will include taking a full history of your problem and careful physical examination of the area involved. From there we can decide whether physiotherapy is appropriate and then formulate a treatment plan tailored to your needs.',
      'Please note that you may be required to undress as appropriate for your physiotherapist to properly assess the area. It is often necessary to assess areas surrounding the primary area of complaint. Please wear or bring along suitable clothing to assist in this matter. You may also bring someone with you for your appointment as a chaperone.',
      'We can also refer for private investigations like MRI scan, Ultrasound scan or X-rays.',
      'Payment is taken at the end of each treatment session and can be made either by cash, debit or credit card or cheque.',
      'Off street parking is available around the clinic.'
    ]
  },
  medicalInsurance: {
    title: 'Medical Insurance',
    content: [
      'We are recognised by all major medical insurers. Please contact us for a full list. If we are not recognised by your insurer, we may be able to apply for recognition so please ask.',
      'We are able to bill some insurance companies directly. But, we will need details like – the name of the policy holder, your membership or policy number and authorisation code. We also need to know details of excess and treatment limitations prior to starting your course of treatment.',
      'Please note that many private medical policies require that you are referred by your doctor in order to gain authorisation. It is advised that you contact your insurer for authorisation before your first appointment.',
      'Please contact us if you need any further information.'
    ]
  }
};

export const CONTACT_CONTENT = {
  hero: {
    title: 'Get In Touch',
    description: 'Ready to start your recovery journey? Contact our expert team today to schedule your consultation.'
  },
  contactInfo: [
    {
      title: 'Phone',
      details: '+44 20 1234 5678',
      description: 'Mon - Fri: 8AM - 7PM',
      action: 'tel:+442012345678'
    },
    {
      title: 'Email',
      details: 'info@prohealth.co.uk',
      description: 'We respond within 24 hours',
      action: 'mailto:info@prohealth.co.uk'
    },
    {
      title: 'WhatsApp',
      details: '+44 20 1234 5678',
      description: 'Quick messaging available',
      action: 'https://wa.me/442012345678'
    },
    {
      title: 'Address',
      details: '123 Health Street',
      description: 'London, UK SW1A 1AA',
      action: 'https://maps.google.com'
    }
  ],
  form: {
    title: 'Send us a Message',
    fields: {
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      service: 'Service of Interest',
      message: 'Message'
    },
    serviceOptions: [
      { value: '', label: 'Select a service' },
      { value: 'sports-injury', label: 'Sports Injury Treatment' },
      { value: 'back-pain', label: 'Back Pain Treatment' },
      { value: 'post-surgery', label: 'Post-Surgery Rehabilitation' },
      { value: 'manual-therapy', label: 'Manual Therapy' },
      { value: 'exercise-therapy', label: 'Exercise Therapy' },
      { value: 'dry-needling', label: 'Dry Needling' },
      { value: 'general', label: 'General Consultation' }
    ],
    placeholders: {
      name: 'Enter your full name',
      email: 'Enter your email',
      phone: 'Enter your phone number',
      message: 'Tell us about your condition or how we can help you...'
    },
    submitButton: 'Send Message',
    successMessage: 'Thank you for your message! We will get back to you soon.'
  },
  openingHours: {
    title: 'Opening Hours',
    schedule: [
      { day: 'Monday', hours: '8:00 AM - 7:00 PM' },
      { day: 'Tuesday', hours: '8:00 AM - 7:00 PM' },
      { day: 'Wednesday', hours: '8:00 AM - 7:00 PM' },
      { day: 'Thursday', hours: '8:00 AM - 7:00 PM' },
      { day: 'Friday', hours: '8:00 AM - 7:00 PM' },
      { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },
  emergency: {
    title: 'Emergency Contact',
    message: 'For urgent medical emergencies, please call 999 or visit your nearest A&E department.',
    afterHours: 'For non-urgent after-hours inquiries, please use our contact form and we\'ll respond within 24 hours.'
  },
  quickActions: {
    title: 'Quick Actions',
    bookOnline: 'Book Online Appointment',
    whatsappChat: 'WhatsApp Chat'
  },
  location: {
    title: 'Find Our Clinic',
    subtitle: 'Conveniently located in central London with excellent transport links.',
    gettingHere: 'Getting Here',
    transport: [
      {
        icon: '🚇',
        title: 'By Tube',
        description: 'Westminster Station (2 min walk)',
        details: 'Circle, District & Jubilee lines'
      },
      {
        icon: '🚌',
        title: 'By Bus',
        description: 'Multiple bus routes nearby',
        details: 'Routes 11, 24, 88, 148, 211'
      },
      {
        icon: '🚗',
        title: 'By Car',
        description: 'Free parking available',
        details: 'Spaces reserved for patients'
      }
    ],
    accessibility: {
      title: 'Accessibility',
      features: [
        '♿ Wheelchair accessible',
        '🚗 Disabled parking available',
        '🚇 Step-free access from station'
      ]
    }
  }
};

export const FOOTER_CONTENT = {
  company: {
    description: 'Leading physiotherapy clinic providing expert rehabilitation and wellness services to help you recover and thrive.'
  },
  quickLinks: {
    title: 'Quick Links',
    links: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' }
    ]
  },
  services: {
    title: 'Services',
    list: [
      'Sports Injury',
      'Back Pain Treatment',
      'Post-Surgery Rehab',
      'Manual Therapy',
      'Exercise Therapy'
    ]
  },
  contactInfo: {
    title: 'Contact Info'
  },
  bottomBar: {
    copyright: '© 2024 ProHealth Physiotherapy. All rights reserved.',
    links: 'Privacy Policy | Terms of Service'
  }
};

export const SEO_CONTENT = {
  home: {
    title: 'ProHealth Physiotherapy - Expert Rehabilitation & Wellness Services',
    description: 'Leading physiotherapy clinic in London providing expert rehabilitation, sports injury treatment, and wellness services. Book your appointment today.',
    keywords: 'physiotherapy, rehabilitation, sports injury, back pain, post-surgery rehab, London'
  },
  about: {
    title: 'About ProHealth Physiotherapy - Expert Team & Quality Care',
    description: 'Learn about ProHealth Physiotherapy\'s expert team, our mission, values, and commitment to providing exceptional rehabilitation services in London.',
    keywords: 'about physiotherapy, expert physiotherapists, rehabilitation team, London physiotherapy clinic'
  },
  services: {
    title: 'Physiotherapy Services - ProHealth London | Expert Treatment & Rehabilitation',
    description: 'Comprehensive physiotherapy services in London including sports injury treatment, back pain relief, post-surgery rehabilitation, and manual therapy. Book today.',
    keywords: 'physiotherapy services, sports injury treatment, back pain relief, post-surgery rehabilitation, manual therapy, London'
  },
  contact: {
    title: 'Contact ProHealth Physiotherapy - Book Appointment | London Clinic',
    description: 'Contact ProHealth Physiotherapy clinic in London. Book appointments, get directions, and reach our expert physiotherapy team. Call +44 20 1234 5678.',
    keywords: 'contact physiotherapy, book appointment, London physiotherapy clinic, physiotherapy consultation'
  }
};