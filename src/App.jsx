import React from "react";
import Confetti from "react-confetti";
import { Cat, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  const barbieLooks = [
    "🌸 Pink Princess",
    "🎀 Queen",
    "🩰 Heels?",
    "🌟 Explorer",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-8 text-center font-[Comic_Sans_MS] space-y-20">
      <Confetti />

      {/* Top Fortune */}
      <motion.h2
        className="text-xl italic text-purple-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        “Your smile could light up a city.”
      </motion.h2>

      {/* Title */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-2"
      >
        <Cat size={64} className="mx-auto text-pink-500 animate-bounce" />
        <h1 className="text-5xl font-bold text-pink-600 drop-shadow-md">
          🐾 Happy Purrfect Day, Rifah! 🐾
        </h1>
        <p className="text-lg text-gray-700">
          Hope your day is full of sparkles and cat cuddles!
        </p>
      </motion.section>

      {/* Cat Hop (Static) */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="space-y-2"
      >
        <h2 className="text-3xl font-bold">🐱 Cat Hop</h2>
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-6xl"
        >
          🐈
        </motion.div>
        <p className="text-pink-700">This kitty is jumping just for you!</p>
      </motion.section>

      {/* Barbie Dress-Up (All Looks Shown) */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-bold">💄 Barbie Dress-Up</h2>
        <p className="text-6xl">👗</p>
        <div className="space-y-1">
          {barbieLooks.map((look, i) => (
            <motion.p
              key={i}
              className="text-xl text-pink-600 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 + i * 0.2 }}
            >
              {look}
            </motion.p>
          ))}
        </div>
      </motion.section>

      {/* Bottom Fortune */}
      <motion.h2
        className="text-xl italic text-purple-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        “blackcat! you'll get there. when you do, look around for your biggest fan.”
      </motion.h2>

      <Sparkles className="mx-auto text-rose-400 animate-pulse" size={36} />
    </main>
  );
}
