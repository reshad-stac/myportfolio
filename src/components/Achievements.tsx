import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy } from 'lucide-react';

const achievements = [
  {
    title: 'First Place',
    description: 'University Tech Fest Hackathon',
    icon: <Trophy size={40} className="text-yellow-500" />,
  },
  {
    title: 'Best Innovation',
    description: 'Annual Software Exhibition',
    icon: <Star size={40} className="text-blue-500" />,
  },
  {
    title: 'Outstanding Project',
    description: 'Department Showcase',
    icon: <Award size={40} className="text-green-500" />,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-white">{achievement.title}</h3>
              <p className="text-gray-400 text-center">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;