import { motion, AnimatePresence } from 'framer-motion';
import EventCard from './EventCard';
import { PANEL_ANIMATION, calculateEventWidth, CONTENT_ANIMATION, COLLAPSED_TEXT_ANIMATION } from '../utils/panelConfig';
import '../css/EventPanel.css';
import '../css/shared.css';

export default function EventPanel({ rail, index, isExpanded, onClick }) {
  const width = calculateEventWidth(index, isExpanded ? index : null, 5);

  return (
    <motion.div
      animate={{ width }}
      transition={PANEL_ANIMATION.transition}
      onClick={onClick}
      className={`event-panel ${isExpanded ? 'event-panel--expanded' : 'event-panel--collapsed'}`}
    >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key={`event-${rail.id}-content`}
            {...CONTENT_ANIMATION}
          >
            <h2 className="event-panel__title">
              {rail.title}
            </h2>
            <p className="event-panel__description">
              {rail.description}
            </p>
            {rail.events.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key={`event-${rail.id}-collapsed`}
            {...COLLAPSED_TEXT_ANIMATION}
            className="rotated-text"
          >
            <span className="rotated-text__label">
              {rail.title.toUpperCase()}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
