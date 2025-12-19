import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function BirthdayMessage() {
  return (
    <div className="relative py-20 px-4 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 overflow-hidden">
      {/* Animated hearts background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              opacity: 0.3,
            }}
            animate={{
              y: -100,
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Heart className="w-8 h-8 text-white fill-white" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-6xl mb-6"
          >
            💖
          </motion.div>

          <motion.h3
            className="mb-6 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            A Special Message for You
          </motion.h3>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Dear Sahika,
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-white/90 mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            On this special day, I want you to know how grateful I am to have you in my life.
            Your friendship brings so much joy, laughter, and warmth to every moment we share.
            May this year bring you endless happiness, amazing adventures, and all the success
            you deserve. Here's to making more incredible memories together!
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-white mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            Wishing you the happiest of birthdays! 🎉✨
          </motion.p>

          <motion.div
            className="flex justify-center gap-2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="text-3xl"
              >
                {i === 2 ? "🎂" : "🎈"}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
