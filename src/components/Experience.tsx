import React from 'react';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Woyce Technology',
      position: 'Frontend Developer Intern',
      duration: '2024 - Present',
      location: 'Remote',
      description: [
        'Developed responsive web applications using React.js and modern CSS frameworks',
        'Collaborated with design team to implement pixel-perfect UI components',
        'Optimized application performance and implemented best practices',
        'Worked with RESTful APIs and integrated third-party services'
      ],
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Git']
    },
    {
      company: 'Ally Soft Solution',
      position: 'Frontend Developer Intern',
      duration: '2023 - 2024',
      location: 'Ahmedabad, Gujarat',
      description: [
        'Built interactive user interfaces for web applications',
        'Implemented responsive design principles for mobile-first approach',
        'Participated in code reviews and maintained coding standards',
        'Gained experience in version control and team collaboration'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap']
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8 grid grid-flow-row" >
          {experiences.map((exp, index) => (
            <div key={index} className=" max-h-full bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-blue-500/50">
              <div className="flex flex-wrap items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.position}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-2">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;