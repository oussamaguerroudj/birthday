import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function ConfettiEffect() {
  const [confetti, setConfetti] = useState<Array<{
    id: number;
    x: number;
    color: string;
    delay: number;
    duration: number;
    rotation: number;
  }>>([]);

  useEffect(() => {
    const colors = [
      "bg-pink-500",
      "bg-purple-500",
      "bg-yellow-400",
      "bg-blue-500",
      "bg-red-500",
      "bg-green-500",
      "bg-orange-500",
    ];

    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      rotation: Math.random() * 360,
    }));

    setConfetti(newConfetti);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className={`absolute w-3 h-3 ${piece.color}`}
          style={{
            left: `${piece.x}%`,
            top: "-10%",
          }}
          initial={{ y: 0, rotate: 0, opacity: 1 }}
          animate={{
            y: "120vh",
            rotate: piece.rotation * 4,
            opacity: [1, 1, 0.8, 0],
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
