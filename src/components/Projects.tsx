import React, { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web App', 'Landing Page', 'Mobile App'];

  const projects = [
    {
      title: 'Hotel Booking Website',
      category: 'Web App',
      description: 'A full-featured hotel booking platform with search, filters, and secure payment integration.',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      title: 'Doctor Appointment App',
      category: 'Mobile App',
      description: 'Healthcare platform for booking doctor appointments with real-time availability.',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React Native', 'Firebase', 'Redux'],
      github: '#',
      live: '#'
    },
    {
      title: 'Social Media App',
      category: 'Web App',
      description: 'Modern social platform with real-time messaging, posts, and user interactions.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      github: '#',
      live: '#'
    },
    {
      title: 'Hospital Management System',
      category: 'Web App',
      description: 'Comprehensive system for managing hospital operations, patient records, and staff.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React', 'TypeScript', 'Material-UI', 'MySQL'],
      github: '#',
      live: '#'
    },
    {
      title: 'Weather App',
      category: 'Web App',
      description: 'Beautiful weather application with location-based forecasts and interactive maps.',
      image: 'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React', 'Weather API', 'Chart.js'],
      github: '#',
      live: '#'
    },
    {
      title: 'Industrial Automation Landing',
      category: 'Landing Page',
      description: 'Professional landing page for industrial automation solutions.',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['Next.js', 'Tailwind', 'Framer Motion'],
      github: '#',
      live: '#'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.github}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                    aria-label="View GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.live}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                    aria-label="View Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;