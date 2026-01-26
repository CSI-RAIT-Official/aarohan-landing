import { motion } from "framer-motion";

const shapes = [
  { type: "cube", size: 60, x: "10%", y: "20%", delay: 0 },
  { type: "sphere", size: 80, x: "85%", y: "15%", delay: 0.5 },
  { type: "pyramid", size: 50, x: "75%", y: "70%", delay: 1 },
  { type: "torus", size: 70, x: "15%", y: "75%", delay: 1.5 },
  { type: "octahedron", size: 45, x: "50%", y: "10%", delay: 2 },
  { type: "cube", size: 40, x: "90%", y: "50%", delay: 2.5 },
];

const ShapeSVG = ({ type, size }: { type: string; size: number }) => {
  const gradientId = `gradient-${type}-${size}`;
  
  switch (type) {
    case "cube":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-2xl">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(182, 100%, 35%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(168, 100%, 28%)" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <polygon
            points="50,10 90,30 90,70 50,90 10,70 10,30"
            fill={`url(#${gradientId})`}
            stroke="hsl(182, 100%, 45%)"
            strokeWidth="1"
          />
          <polygon
            points="50,10 90,30 50,50 10,30"
            fill="hsla(182, 100%, 40%, 0.6)"
            stroke="hsl(182, 100%, 45%)"
            strokeWidth="0.5"
          />
          <polygon
            points="50,50 90,30 90,70 50,90"
            fill="hsla(182, 100%, 30%, 0.8)"
            stroke="hsl(182, 100%, 45%)"
            strokeWidth="0.5"
          />
        </svg>
      );
    case "sphere":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-2xl">
          <defs>
            <radialGradient id={gradientId} cx="30%" cy="30%">
              <stop offset="0%" stopColor="hsl(182, 100%, 50%)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="hsl(168, 100%, 20%)" stopOpacity="0.3" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="40" fill={`url(#${gradientId})`} />
          <ellipse cx="50" cy="50" rx="35" ry="10" fill="none" stroke="hsla(182, 100%, 45%, 0.4)" strokeWidth="1" />
          <ellipse cx="50" cy="50" rx="10" ry="35" fill="none" stroke="hsla(182, 100%, 45%, 0.4)" strokeWidth="1" transform="rotate(30 50 50)" />
        </svg>
      );
    case "pyramid":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-2xl">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(168, 100%, 25%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(182, 100%, 40%)" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <polygon
            points="50,10 90,85 10,85"
            fill={`url(#${gradientId})`}
            stroke="hsl(182, 100%, 45%)"
            strokeWidth="1"
          />
          <polygon
            points="50,10 50,55 10,85"
            fill="hsla(182, 100%, 35%, 0.7)"
            stroke="hsl(182, 100%, 45%)"
            strokeWidth="0.5"
          />
        </svg>
      );
    case "torus":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-2xl">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(182, 100%, 40%)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="hsl(168, 100%, 30%)" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <ellipse cx="50" cy="50" rx="40" ry="20" fill="none" stroke={`url(#${gradientId})`} strokeWidth="8" />
          <ellipse cx="50" cy="50" rx="40" ry="20" fill="none" stroke="hsla(182, 100%, 50%, 0.3)" strokeWidth="2" />
        </svg>
      );
    case "octahedron":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-2xl">
          <defs>
            <linearGradient id={gradientId} x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="hsl(182, 100%, 45%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(168, 100%, 25%)" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <polygon
            points="50,5 95,50 50,95 5,50"
            fill={`url(#${gradientId})`}
            stroke="hsl(182, 100%, 45%)"
            strokeWidth="1"
          />
          <line x1="50" y1="5" x2="50" y2="95" stroke="hsla(182, 100%, 50%, 0.4)" strokeWidth="0.5" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="hsla(182, 100%, 50%, 0.4)" strokeWidth="0.5" />
        </svg>
      );
    default:
      return null;
  }
};

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: shape.x, top: shape.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: 1,
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <ShapeSVG type={shape.type} size={shape.size} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingShapes;
