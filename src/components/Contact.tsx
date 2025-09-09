import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Facebook, Twitter, ExternalLink, Download } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'makwanaavi73@email.com',
      href: 'mailto:makwanaavi73@email.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 91041 00955',
      href: 'tel:+919101400955'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Rajkot, Gujarat, India',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/makwanaavi', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/avi-makwana-47562b315/', label: 'LinkedIn' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: ExternalLink, url: '#', label: 'Portfolio' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's collaborate and create something amazing together!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          {/* Contact Information */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Talk
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects,
                or simply have a conversation about web development and technology. Feel free to reach out!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-white">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{info.label}</div>
                    <div className="text-gray-900 dark:text-white font-medium">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect With Me</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    target='_blank'
                    key={index}
                    href={social.url}
                    className="p-3 bg-white dark:bg-gray-900 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                <Mail size={18} />
                Hire Me
              </button>

              <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                <Download size={18} />
                Download Resume
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="aspect-square w-50 sm:w-56 md:w-64 lg:w-80">
              <img
                src="/bg.png"
                alt="profile"
                className="w-full h-full object-cover rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;