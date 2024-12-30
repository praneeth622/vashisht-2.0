import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SponsorTier } from './sponsor/SponsorTier';
import { SponsorUs } from './sponsor/SponsorUs';

const sponsors: { gold: { name: string; logo: string }[]; silver: { name: string; logo: string }[]; bronze: { name: string; logo: string }[] } = {
  gold: [
    {
      name: 'Google Cloud',
      logo: 'https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png'
    },
    {
      name: 'Microsoft',
      logo: 'https://img.icons8.com/color/480/microsoft.png'
    }
  ],
  silver: [
    {
      name: 'GitHub',
      logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
    },
    {
      name: 'MongoDB',
      logo: 'https://static1.howtogeekimages.com/wordpress/wp-content/uploads/csit/2021/07/f5932bc2.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5'
    }
  ],
  bronze: [
    {
      name: 'Digital Ocean',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg'
    }
  ]
};

export const Sponsors = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <section className="py-20 relative overflow-hidden" id="sponsors">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900" />
      <motion.div 
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-6 pixel-font">
            Our Amazing Sponsors
          </h2>
          <p className="text-cyan-100 text-lg max-w-2xl mx-auto">
            Partnering with industry leaders to empower the next generation of innovators
          </p>
        </motion.div>

        <SponsorTier tier="gold" sponsors={sponsors.gold} />
        <SponsorTier tier="silver" sponsors={sponsors.silver} />
        <SponsorTier tier="bronze" sponsors={sponsors.bronze} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block mb-8 px-6 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full backdrop-blur-sm"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
              Join Our Community of Sponsors
            </span>
          </motion.div>
          
          <h3 className="text-2xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h3>
          <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
            Partner with Vashisht 2.0 to connect with exceptional talent and support the future of technology.
          </p>
          
          <SponsorUs formLink="https://forms.gle/your-sponsor-form-link" />
        </motion.div>
      </div>
    </section>
  );
};