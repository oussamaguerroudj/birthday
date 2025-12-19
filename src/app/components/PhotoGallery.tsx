import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PhotoGalleryProps {
  images: { url: string; alt: string }[];
}

export function PhotoGallery({ images }: PhotoGalleryProps) {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100">
      <motion.h2
        className="text-center mb-12 text-purple-800"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Celebrating You! 🎊
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-xl"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3 },
            }}
          >
            <div className="aspect-square relative">
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm">{image.alt}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
