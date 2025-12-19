import { BirthdayHero } from "./components/BirthdayHero";
import { FloatingBalloons } from "./components/FloatingBalloons";
import { ConfettiEffect } from "./components/ConfettiEffect";
import { PhotoGallery } from "./components/PhotoGallery";
import { BirthdayMessage } from "./components/BirthdayMessage";
import { WishesSection } from "./components/WishesSection";
import { motion } from "motion/react";

export default function App() {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1651399973942-1721a0de0851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNlbGVicmF0aW9uJTIwY29uZmV0dGl8ZW58MXx8fHwxNzY2MTM5NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Celebration Time! 🎉",
    },
    {
      url: "https://images.unsplash.com/photo-1659670191953-fc44631224ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGJhbGxvb25zJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY2MDgxMzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Colorful Wishes 🎈",
    },
    {
      url: "https://images.unsplash.com/photo-1616964524979-c08f6d87c7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2UlMjBjYW5kbGVzfGVufDF8fHx8MTc2NjE1MDA4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Make a Wish! 🎂",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background animations */}
      <FloatingBalloons />
      <ConfettiEffect />

      {/* Main content */}
      <BirthdayHero />
      
      <PhotoGallery images={galleryImages} />
      
      <BirthdayMessage />
      
      <WishesSection />

      {/* Footer */}
      <motion.footer
        className="py-12 text-center bg-gradient-to-r from-purple-900 to-pink-900 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-xl mb-4"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          🎊 Have an Amazing Birthday, Sahika! 🎊
        </motion.p>
        <p className="text-sm text-white/70">
          Made with ❤️ to celebrate your special day
        </p>
      </motion.footer>
    </div>
  );
}
