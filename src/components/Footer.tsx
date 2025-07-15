import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { SITE_INFO, FOOTER_CONTENT } from '../constants/content';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-green text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{SITE_INFO.name}</h3>
                <p className="text-sm text-gray-300">{SITE_INFO.tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              {FOOTER_CONTENT.company.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{FOOTER_CONTENT.quickLinks.title}</h4>
            <ul className="space-y-2">
              {FOOTER_CONTENT.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{FOOTER_CONTENT.services.title}</h4>
            <ul className="space-y-2">
              {FOOTER_CONTENT.services.list.map((service, index) => (
                <li key={index}><span className="text-gray-300">{service}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{FOOTER_CONTENT.contactInfo.title}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-blue" />
                <span className="text-gray-300">{SITE_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-blue" />
                <span className="text-gray-300">{SITE_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-blue" />
                <span className="text-gray-300">{SITE_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-blue" />
                <div className="text-gray-300">
                  <div>{SITE_INFO.hours.weekdays}</div>
                  <div>{SITE_INFO.hours.saturday}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            {FOOTER_CONTENT.bottomBar.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;