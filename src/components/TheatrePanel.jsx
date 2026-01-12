import { motion, AnimatePresence } from 'framer-motion';
import { PANEL_ANIMATION, calculateEventWidth, CONTENT_ANIMATION, COLLAPSED_TEXT_ANIMATION } from '../utils/panelConfig';
import '../css/EventPanel.css';
import '../css/shared.css';

/** Base theatre panel component - reusable wrapper for all theatre content */
export default function TheatrePanel({ index, isExpanded, onClick, title, bgColor, children }) {
  const width = calculateEventWidth(index, isExpanded ? index : null, 5);

  return (
    <motion.div
      animate={{ width }}
      transition={PANEL_ANIMATION.transition}
      onClick={onClick}
      className={`event-panel ${isExpanded ? 'event-panel--expanded' : 'event-panel--collapsed'}`}
      style={bgColor ? { backgroundColor: bgColor, '--panel-gradient-color': bgColor } : undefined}
    >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key={`theatre-${index}-content`}
            {...CONTENT_ANIMATION}
          >
            {children}
          </motion.div>
        ) : (
          <motion.div
            key={`theatre-${index}-collapsed`}
            {...COLLAPSED_TEXT_ANIMATION}
            className="rotated-text"
          >
            <span className="rotated-text-label">
              {title}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
