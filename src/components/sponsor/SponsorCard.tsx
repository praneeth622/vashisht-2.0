import React from 'react';
import { motion } from 'framer-motion';

interface SponsorCardProps {
  name: string;
  logo: string;
  tier: 'gold' | 'silver' | 'bronze';
}

const tierStyles = {
  gold: 'from-yellow-400 to-yellow-600',
  silver: 'from-gray-300 to-gray-500',
  bronze: 'from-amber-600 to-amber-800'
};

export const SponsorCard = ({ name, logo, tier }: SponsorCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${tierStyles[tier]} rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50`} />
      <div className="relative bg-gray-900/50 border border-purple-500/20 p-6 rounded-xl backdrop-blur-sm">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={logo}
          alt={name}
          className="w-32 h-32 object-contain mx-auto mb-4 filter brightness-100 hover:brightness-125 transition-all duration-300"
        />
        <h3 className="text-lg font-semibold text-white text-center">{name}</h3>
      </div>
    </motion.div>
  );
};