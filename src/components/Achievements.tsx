import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import achievements from '../data/achievements';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-glow-gradient opacity-15 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="section-heading inline-block mx-auto">
            Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Recognitions and certifications that I've earned throughout my career.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="bg-card-gradient backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 flex flex-col md:flex-row card-hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {achievement.image && (
                <div className="md:w-2/5 relative">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title} 
                    className="w-full h-40 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-transparent md:bg-gradient-to-tr"></div>
                </div>
              )}
              
              <div className={`p-6 ${achievement.image ? 'md:w-3/5' : 'w-full'}`}>
                <div className="flex items-center mb-3">
                  <Award className="w-5 h-5 text-primary-500 mr-2" />
                  <p className="text-secondary-400 text-sm">
                    {achievement.organization} • {achievement.date}
                  </p>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-400">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;