import { motion } from 'framer-motion';
import '../css/LoadingScreen.css';

function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="loading-content"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="loading-title">HISTORY</h1>
        <div className="loading-subtitle">Loading historical archives...</div>
      </motion.div>
    </motion.div>
  );
}

export default LoadingScreen;
