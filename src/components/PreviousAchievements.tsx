import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Code, Trophy } from 'lucide-react';

const stats = [
  { icon: <Users />, value: "1,100+", label: "Participants" },
  { icon: <Clock />, value: "48hrs", label: "Duration" },
  { icon: <Code />, value: "250+", label: "Projects" },
  { icon: <Trophy />, value: "₹1L+", label: "Prize Pool" }
];

export const PreviousAchievements = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6 pixel-font">Previous Edition</h2>
          <p className="text-cyan-100 text-lg">
            Our largest event to date, bringing together over 1,100 participants to create innovative tech solutions. 
            This hackathon showcased the incredible talent and creativity within our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              
              <div className="relative bg-gray-900/50 border border-purple-500/20 p-6 rounded-xl backdrop-blur-sm">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 mx-auto mb-4 text-cyan-400"
                >
                  {stat.icon}
                </motion.div>
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl font-bold text-white mb-2 text-center"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-cyan-100/80 text-center">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};