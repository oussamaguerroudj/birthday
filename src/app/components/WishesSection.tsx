import { motion } from "motion/react";
import { Star } from "lucide-react";

export function WishesSection() {
  const wishes = [
    {
      icon: "🌟",
      title: "Dreams Come True",
      text: "May all your dreams and wishes come true this year!",
    },
    {
      icon: "💫",
      title: "Success & Joy",
      text: "Here's to a year filled with success and endless joy!",
    },
    {
      icon: "🎯",
      title: "Amazing Adventures",
      text: "May you embark on exciting new adventures!",
    },
    {
      icon: "💝",
      title: "Love & Laughter",
      text: "May your days be filled with love and laughter!",
    },
    {
      icon: "🌈",
      title: "Bright Future",
      text: "Wishing you a colorful and bright future ahead!",
    },
    {
      icon: "✨",
      title: "Magic Moments",
      text: "May every moment sparkle with happiness!",
    },
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <motion.h2
        className="text-center mb-16 text-white"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Birthday Wishes for You ⭐
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishes.map((wish, index) => (
          <motion.div
            key={index}
            className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            {/* Star decoration */}
            <motion.div
              className="absolute top-2 right-2"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
            </motion.div>

            <motion.div
              className="text-5xl mb-4"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                delay: index * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {wish.icon}
            </motion.div>

            <h3 className="mb-3 text-white">{wish.title}</h3>
            <p className="text-white/80 text-sm">{wish.text}</p>

            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
