import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      institution: 'Government Polytechnic, Rajkot',
      degree: 'Diploma in Information Technology',
      duration: '2024 - 2026',
      location: 'Rajkot, Gujarat',
      status: 'Current',
      description: 'Pursuing advanced studies in Information Technology with focus on software development, database management, and modern web technologies.',
      grade: 'Ongoing'
    },
    {
      institution: 'Jivan Jyot Vidhyalaya',
      degree: 'Secondary School Certificate (SSC)',
      duration: '2022',
      location: 'Gujarat',
      status: 'Completed',
      description: 'Completed secondary education with strong foundation in mathematics, science, and computer applications.',
      grade: 'First Class'
    }
  ];

  const certifications = [
    {
      title: 'Woyce Technology Internship',
      issuer: 'Woyce Technology',
      date: '2024',
      type: 'Internship Certificate'
    },
    {
      title: 'Ally Soft Solution Internship',
      issuer: 'Ally Soft Solution',
      date: '2023-2024',
      type: 'Internship Certificate'
    },
    {
      title: 'Sports Certificate',
      issuer: 'Rajkot District',
      date: '2024',
      type: 'Achievement'
    },
    {
      title: 'Art Competition Award',
      issuer: 'State Level',
      date: '2019',
      type: 'Award'
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-600 dark:text-blue-400" size={28} />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mb-2">
                      <GraduationCap size={16} />
                      <span>{edu.institution}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    edu.status === 'Current' 
                      ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400' 
                      : 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-white'
                  }`}>
                    {edu.status}
                  </span>
                </div>
                
                <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={14} />
                    <span>{edu.grade}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications & Awards */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Award className="text-blue-600 dark:text-blue-400" size={28} />
              Certifications & Awards
            </h3>
            
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {cert.title}
                    </h4>
                    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-white rounded-full">
                      {cert.type}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <span className="font-medium">{cert.issuer}</span>
                  </div>
                  <div className="text-sm text-blue-600 dark:text-blue-400">
                    {cert.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;