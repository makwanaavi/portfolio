import React from 'react';

const About: React.FC = () => {
  const skills = [
    { name: 'ReactJS', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'JavaScript/TypeScript', level: 92 },
    { name: 'HTML/CSS', level: 98 },
    { name: 'TailwindCSS', level: 95 },
    { name: 'Material UI', level: 85 },
    { name: 'GSAP', level: 80 },
    { name: 'Framer Motion', level: 85 },
    { name: 'Git/GitHub', level: 90 },
    { name: 'Figma', level: 88 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                As a passionate Frontend Developer, I've dedicated my career to crafting exceptional digital experiences. 
                My journey began with a curiosity for web technologies and has evolved into expertise in modern 
                frameworks and libraries.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I specialize in React ecosystem, creating scalable applications with beautiful, intuitive interfaces. 
                My experience spans from pixel-perfect UI implementation to complex state management and performance optimization.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Technical Skills</h3>
            
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;