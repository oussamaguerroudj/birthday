import { motion } from "motion/react";
import { Cake, PartyPopper, Gift, Sparkles } from "lucide-react";

export function BirthdayHero() {
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const name = "SAHIKA";

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400">
      <div className="absolute inset-0 bg-black opacity-20" />
      
      <div className="relative z-10 text-center px-4 py-20">
        {/* Animated Icons */}
        <div className="flex justify-center gap-8 mb-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <PartyPopper className="w-16 h-16 text-yellow-300" />
          </motion.div>
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Cake className="w-16 h-16 text-pink-200" />
          </motion.div>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Gift className="w-16 h-16 text-purple-200" />
          </motion.div>
        </div>

        {/* Happy Birthday Text */}
        <motion.h1
          className="text-4xl md:text-6xl mb-4 text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Happy Birthday
        </motion.h1>

        {/* Animated Name */}
        <div className="flex justify-center gap-2 md:gap-4 mb-8">
          {name.split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="text-6xl md:text-8xl text-white drop-shadow-lg inline-block"
              style={{
                textShadow: "3px 3px 6px rgba(0,0,0,0.3)",
              }}
              whileHover={{
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Sparkles */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Sparkles className="w-8 h-8 text-yellow-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="mt-8 text-xl md:text-2xl text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          May your day be filled with joy and laughter! 🎉
        </motion.p>

        {/* Pulsing decoration */}
        <motion.div
          className="mt-12"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="text-6xl">🎂</div>
        </motion.div>
      </div>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}
