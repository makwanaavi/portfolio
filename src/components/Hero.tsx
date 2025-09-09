import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Twitter, ExternalLink, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: Github, url: 'https://github.com/makwanaavi', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/avi-makwana-47562b315/', label: 'LinkedIn' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: ExternalLink, url: '#', label: 'Portfolio' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm{' '}
              <span className="text-blue-600 dark:text-blue-400">
                Avi Makwana
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
              Frontend Developer
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I build fast, responsive, and user-friendly websites using modern technologies
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                target='_blank'
                key={index}
                href={social.url}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-white transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
              Hire Me
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2">
              <Download size={18} />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;