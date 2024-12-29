import { motion, useScroll, useTransform } from "framer-motion";
import { Gamepad2, Sparkles } from "lucide-react";
import { Navigation } from "./header/Navigation";
import { GlowingButton } from "./header/GlowingButton";
import { Timer } from "./Timer";

export const Header = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.95]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* Navbar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-purple-500/20"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between" id="Header">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-lg sm:text-xl font-bold text-white pixel-font"
          >
            Vashisht Hackathon 2.0
          </motion.div>
          <Navigation onNavigate={scrollToSection} />
        </div>
      </motion.div>

      {/* Hero Section */}
      <div className="relative container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20 min-h-screen flex flex-col items-center justify-center text-center space-y-8 sm:space-y-10">
        {/* Icons */}
        <motion.div
          style={{ opacity, scale }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="flex justify-center gap-4 mb-4 sm:mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Gamepad2 className="w-8 sm:w-10 h-8 sm:h-10 text-cyan-400" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 sm:w-10 h-8 sm:h-10 text-purple-400" />
            </motion.div>
          </div>

          {/* Title Section */}
          <div className="space-y-4 sm:space-y-6">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 pixel-font leading-tight"
            >
              <div className="block sm:inline">Vashisht</div>{" "}
              <div className="block sm:inline">Hackathon 2.0</div>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-cyan-100 max-w-md sm:max-w-2xl mx-auto leading-relaxed"
            >
              <div>Level up your coding skills in this</div>
              <div>retro-futuristic hackathon experience</div>
            </motion.p>
          </div>

          {/* Timer Section */}
          <div>
            <Timer />
          </div>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlowingButton onClick={() => scrollToSection("registration")}>
              Register Now
            </GlowingButton>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 sm:w-6 h-8 sm:h-10 rounded-full border-2 border-cyan-400 flex items-start justify-center p-1 sm:p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 sm:w-2 sm:h-2 rounded-full bg-cyan-400"
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
};
