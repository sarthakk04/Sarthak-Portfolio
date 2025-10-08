import React, { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaServer,
  FaMicrochip,
  FaGamepad,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const icons = [
  <FaReact size={30} className="text-cyan-400" />,
  <FaNodeJs size={30} className="text-green-500" />,
  <FaPython size={30} className="text-yellow-400" />,
  <FaHtml5 size={30} className="text-orange-500" />,
  <FaCss3Alt size={30} className="text-blue-500" />,
  <FaJsSquare size={30} className="text-yellow-300" />,
];

const techIcons = [
  <FaMicrochip className="text-purple-400" />,
  <FaServer className="text-blue-400" />,
  <FaGamepad className="text-green-400" />,
];

type FallingObject = {
  id: number;
  x: number;
  y: number;
  icon: JSX.Element;
  caught?: boolean;
};

const CatchGame: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [objects, setObjects] = useState<FallingObject[]>([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [basketX, setBasketX] = useState(0);
  const [showTutorial, setShowTutorial] = useState(true);
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; color: string }[]
  >([]);
  const [combo, setCombo] = useState(0);
  const [comboVisible, setComboVisible] = useState(false);
  const gameRef = useRef<HTMLDivElement>(null);
  const particleId = useRef(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  // Initialize audio context
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioContextRef.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
    }

    // Get high score from localStorage
    const savedHighScore = localStorage.getItem("catchGameHighScore");
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore, 10));
    }

    return () => {
      // Clean up audio
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      oscillatorsRef.current.forEach((osc) => osc.stop());
    };
  }, []);

  // Play sound using Web Audio API
  const playSound = (type: "catch" | "miss" | "gameOver" | "combo") => {
    if (!audioContextRef.current) return;

    const now = audioContextRef.current.currentTime;
    const oscillator = audioContextRef.current.createOscillator();
    const gainNode = audioContextRef.current.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContextRef.current.destination);

    // Stop any existing oscillators to prevent overlapping sounds
    oscillatorsRef.current.forEach((osc) => osc.stop());
    oscillatorsRef.current = [];

    switch (type) {
      case "catch":
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(523.25, now); // C5
        oscillator.frequency.exponentialRampToValueAtTime(659.25, now + 0.2); // E5
        gainNode.gain.setValueAtTime(0.3, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        oscillator.start(now);
        oscillator.stop(now + 0.3);
        break;
      case "miss":
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(392, now); // G4
        oscillator.frequency.exponentialRampToValueAtTime(329.63, now + 0.3); // E4
        gainNode.gain.setValueAtTime(0.3, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        oscillator.start(now);
        oscillator.stop(now + 0.4);
        break;
      case "gameOver":
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(261.63, now); // C4
        oscillator.frequency.exponentialRampToValueAtTime(174.61, now + 0.5); // F3
        gainNode.gain.setValueAtTime(0.3, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
        oscillator.start(now);
        oscillator.stop(now + 0.6);
        break;
      case "combo":
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(659.25, now); // E5
        oscillator.frequency.exponentialRampToValueAtTime(783.99, now + 0.1); // G5
        oscillator.frequency.exponentialRampToValueAtTime(987.77, now + 0.2); // B5
        gainNode.gain.setValueAtTime(0.3, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        oscillator.start(now);
        oscillator.stop(now + 0.3);
        break;
    }

    oscillatorsRef.current.push(oscillator);
  };

  // Create particle effects
  const createParticles = (x: number, y: number, type: "catch" | "miss") => {
    const newParticles = [];
    const count = type === "catch" ? 15 : 8;
    const colors =
      type === "catch"
        ? ["text-cyan-400", "text-purple-400", "text-blue-400"]
        : ["text-red-400", "text-orange-400"];

    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: particleId.current++,
        x,
        y,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setParticles((prev) => [...prev, ...newParticles]);

    // Remove particles after animation
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.includes(p)));
    }, 1000);
  };

  // Handle object generation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    let id = 0;
    if (isPlaying) {
      interval = setInterval(() => {
        setObjects((prev) => [
          ...prev,
          {
            id: id++,
            x: Math.random() * (window.innerWidth - 60),
            y: 0,
            icon: icons[Math.floor(Math.random() * icons.length)],
          },
        ]);
      }, 800 - Math.min(score * 10, 600));
    }
    return () => clearInterval(interval);
  }, [isPlaying, score]);

  // Handle game animation
  useEffect(() => {
    const moveObjects = () => {
      setObjects((prev) => {
        return prev
          .map((obj) => ({ ...obj, y: obj.y + 5 }))
          .filter((obj) => {
            // Check if object is below the top of the basket
            if (obj.y > window.innerHeight - 150) {
              // Check if object is within basket bounds
              if (Math.abs(obj.x - basketX) < 60) {
                // Catch successful
                playSound("catch");
                createParticles(obj.x, obj.y, "catch");
                setScore((s) => {
                  const newScore = s + 1;
                  if (newScore % 5 === 0) {
                    setCombo((c) => c + 1);
                    setComboVisible(true);
                    playSound("combo");
                    setTimeout(() => setComboVisible(false), 1000);
                  }
                  return newScore;
                });
                return false;
              } else if (obj.y > window.innerHeight - 50) {
                // Object missed
                playSound("miss");
                createParticles(obj.x, obj.y, "miss");
                setLives((l) => {
                  const newLives = l - 1;
                  if (newLives <= 0) {
                    playSound("gameOver");
                    setIsPlaying(false);
                  }
                  return newLives;
                });
                return false;
              }
            }
            return true;
          });
      });
    };

    let anim: number;
    if (isPlaying) {
      const frame = () => {
        moveObjects();
        anim = requestAnimationFrame(frame);
      };
      anim = requestAnimationFrame(frame);
    }
    return () => cancelAnimationFrame(anim);
  }, [isPlaying, basketX]);

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPlaying) {
      setBasketX(e.clientX);
    }
  };

  // Handle touch movement
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isPlaying && e.touches.length > 0) {
      setBasketX(e.touches[0].clientX);
    }
  };

  const handleStart = () => {
    setScore(0);
    setLives(3);
    setIsPlaying(true);
    setObjects([]);
    setParticles([]);
    setCombo(0);
    setShowTutorial(true);
    setTimeout(() => setShowTutorial(false), 4000);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setObjects([]);
  };

  // Update high score
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("catchGameHighScore", score.toString());
    }
  }, [score, highScore]);

  return (
    <div
      ref={gameRef}
      className="relative w-full h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] overflow-hidden text-white select-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {techIcons[Math.floor(Math.random() * techIcons.length)]}
          </div>
        ))}
      </div>

      {/* Start screen */}
      {!isPlaying && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Tech Catch Challenge
            </h1>
            <p className="mb-6 text-lg text-gray-300 max-w-md mx-auto">
              Catch falling tech icons to score points. Don't miss more than 3!
            </p>
          </motion.div>

          <motion.button
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/30 hover:shadow-purple-500/40 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStart}
          >
            Start Game
          </motion.button>

          {highScore > 0 && (
            <motion.div
              className="mt-6 flex items-center gap-2 text-yellow-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-xl">🏆</span> High Score: {highScore}
            </motion.div>
          )}
        </div>
      )}

      {/* Tutorial overlay */}
      {showTutorial && isPlaying && (
        <motion.div
          className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-6 py-3 rounded-full z-30 flex items-center gap-2 shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
        >
          <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse"></div>
          Move your mouse to catch the icons!
        </motion.div>
      )}

      {/* Game UI */}
      {isPlaying && (
        <>
          <div className="absolute top-4 left-4 z-20 flex items-center gap-4">
            <div className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="font-bold">Score: {score}</span>
            </div>

            <div className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <span>Lives: {lives}</span>
            </div>
          </div>

          {/* Combo indicator */}
          {combo > 0 && comboVisible && (
            <motion.div
              className="absolute top-20 left-1/2 transform -translate-x-1/2 z-30 text-yellow-300 font-bold text-xl flex items-center gap-2"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <span className="text-2xl">⚡</span> COMBO x{combo}!
            </motion.div>
          )}

          {/* Falling objects */}
          <AnimatePresence>
            {objects.map((obj) => (
              <motion.div
                key={obj.id}
                className="absolute z-10"
                style={{ left: obj.x, top: obj.y }}
                initial={{ y: -50, opacity: 0, scale: 0.5 }}
                animate={{ y: obj.y, opacity: 1, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0,
                  transition: { duration: 0.2 },
                }}
              >
                {obj.icon}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Particle effects */}
          <AnimatePresence>
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className={`absolute text-xl ${particle.color}`}
                style={{
                  left: particle.x,
                  top: particle.y,
                }}
                initial={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                }}
                animate={{
                  opacity: 0,
                  scale: 0,
                  x: Math.random() * 100 - 50,
                  y: Math.random() * -100 - 50,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                •
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Tech-themed basket */}
          <motion.div
            className="absolute bottom-4 z-20"
            style={{ left: basketX - 60 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <div className="relative">
              <div className="w-32 h-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-t-lg flex items-center justify-center border-b-4 border-cyan-500 shadow-lg shadow-cyan-500/20">
                <div className="w-24 h-8 bg-gray-700 rounded-sm flex items-center justify-center">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-cyan-400"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-36 h-2 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full"></div>
            </div>
          </motion.div>
        </>
      )}

      {/* Game Over Screen */}
      {lives <= 0 && (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center z-30 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-center"
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-2 text-red-400">Game Over!</h2>
            <p className="text-2xl mb-2">
              Your Score:{" "}
              <span className="font-bold text-cyan-400">{score}</span>
            </p>

            {score > highScore ? (
              <div className="flex items-center justify-center gap-2 text-yellow-300 text-xl mb-6">
                <span className="text-2xl">🏆</span> New High Score!
              </div>
            ) : (
              <p className="text-gray-300 mb-6">High Score: {highScore}</p>
            )}

            <div className="flex gap-4">
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold py-3 px-6 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStart}
              >
                Play Again
              </motion.button>

              <motion.button
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReset}
              >
                Main Menu
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CatchGame;