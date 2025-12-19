import { motion } from "motion/react";

export function FloatingBalloons() {
  const balloons = [
    { color: "bg-pink-400", delay: 0, x: "10%", duration: 4 },
    { color: "bg-purple-400", delay: 0.5, x: "25%", duration: 5 },
    { color: "bg-yellow-400", delay: 1, x: "45%", duration: 4.5 },
    { color: "bg-blue-400", delay: 0.3, x: "65%", duration: 5.5 },
    { color: "bg-red-400", delay: 0.8, x: "80%", duration: 4.8 },
    { color: "bg-green-400", delay: 1.2, x: "15%", duration: 5.2 },
    { color: "bg-indigo-400", delay: 0.6, x: "90%", duration: 4.3 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {balloons.map((balloon, index) => (
        <motion.div
          key={index}
          className={`absolute bottom-0 w-16 h-20 ${balloon.color} rounded-full`}
          style={{
            left: balloon.x,
            boxShadow: "inset -10px -10px 20px rgba(0,0,0,0.1)",
          }}
          initial={{ y: "100vh", rotate: 0 }}
          animate={{
            y: "-120vh",
            x: [0, 30, -20, 10, 0],
            rotate: [0, 10, -10, 5, 0],
          }}
          transition={{
            duration: balloon.duration,
            delay: balloon.delay,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        >
          {/* Balloon string */}
          <div
            className="absolute top-full left-1/2 w-0.5 h-24 bg-gray-300"
            style={{ transformOrigin: "top" }}
          />
          {/* Balloon shine */}
          <div className="absolute top-2 left-3 w-4 h-6 bg-white opacity-40 rounded-full blur-sm" />
        </motion.div>
      ))}
    </div>
  );
}
