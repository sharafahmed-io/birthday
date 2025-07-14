import React from "react";
import Confetti from "react-confetti";
import { Cat, Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  const dressUpOptions = [
    "🌸 Pink Princess",
    "🎀 Queen",
    "🩰 Heels?",
    "🌟 Explorer",
  ];

  const foodOptions = [
    { icon: "🍣", label: "Sushi" },
    { icon: "🍕", label: "Pizza" },
    { icon: "🧇", label: "Waffles" },
    { icon: "🦐", label: "Seafood" },
    { icon: <Heart className="inline text-red-500" size={18} />, label: "Sharaf" },
  ];

  const places = [
    "🎬 Movie Night",
    "🛍️ Mall Day",
    "🌌 Stargazing",
    "🍵 Café Chill",
  ];

  const fortuneTop = "“Your smile could light up a city.”";
  const fortuneBottom = "“blackcat! you'll get there. when you do, look around for your biggest fan.”";

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
        {fortuneTop}
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

      {/* 🐱 Cat Hop Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="space-y-3"
      >
        <h2 className="text-3xl font-bold">🐱 Cat Hop</h2>
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-6xl"
        >
          🐈
        </motion.div>
        <p className="text-pink-700">Jumping just for you!</p>
      </motion.section>

      {/* 👗 Dress-Up Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-bold">👗 Dress-Up Looks</h2>
        <div className="space-y-2">
          {dressUpOptions.map((look, i) => (
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

      {/* 🍽️ Food Menu */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-bold">🍽️ Food Picks</h2>
        <div className="space-y-1">
          {foodOptions.map((item, i) => (
            <p key={i} className="text-xl text-purple-600">
              {item.icon} {item.label}
            </p>
          ))}
        </div>
      </motion.section>

      {/* 📍 Places to Go */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-bold">📍 Places to Go</h2>
        <div className="space-y-1">
          {places.map((place, i) => (
            <p key={i} className="text-xl text-indigo-700">
              {place}
            </p>
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
        {fortuneBottom}
      </motion.h2>

      <Sparkles className="mx-auto text-rose-400 animate-pulse" size={36} />
    </main>
  );
}
