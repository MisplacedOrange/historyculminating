import { motion, AnimatePresence } from 'framer-motion';
import { PANEL_ANIMATION, calculateMainWidth, CONTENT_ANIMATION, COLLAPSED_TEXT_ANIMATION } from '../utils/panelConfig';
import '../css/MainPanel.css';
import '../css/shared.css';

export default function MainPanel({ isExpanded, onClick }) {
  const width = calculateMainWidth(isExpanded ? null : 0);

  return (
    <motion.div
      animate={{ width }}
      transition={PANEL_ANIMATION.transition}
      onClick={!isExpanded ? onClick : undefined}
      className={`main-panel ${isExpanded ? 'main-panel--expanded' : 'main-panel--collapsed'}`}
    >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="main-content"
            {...CONTENT_ANIMATION}
            className="main-panel__content"
          >
            <h1 className="main-panel__title">
              History Culminating
            </h1>
            <p className="main-panel__subtitle">
              An Interactive Timeline of World War II
            </p>
            <div className="main-panel__description">
              <p className="main-panel__description-text">
                Select a theatre from the panels on the right to explore pivotal events 
                that shaped the course of World War II and its aftermath.
              </p>
              <p>
                Each theatre contains detailed information about significant battles, 
                operations, and historical moments that defined this era.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="main-collapsed"
            {...COLLAPSED_TEXT_ANIMATION}
            className="rotated-text"
          >
            <span className="rotated-text__label">
              HISTORY CULMINATING
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
