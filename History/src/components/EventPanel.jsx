import { motion, AnimatePresence } from 'framer-motion';
import { PANEL_ANIMATION, calculateEventWidth, CONTENT_ANIMATION, COLLAPSED_TEXT_ANIMATION } from '../utils/panelConfig';
import Masthead from './Masthead';
import PullQuote from './PullQuote';
import ArticleSection from './ArticleSection';
import SectionDivider from './SectionDivider';
import '../css/EventPanel.css';
import '../css/shared.css';

/**
 * Event panel component - theatre-specific content panels
 * One of five horizontal panels displaying historical theatre information
 * Expands to 66.67% width when active, collapses to 6.67% otherwise
 * 
 * @param {Object} props - Component props
 * @param {Object} props.rail - Theatre data object containing newspaper content
 * @param {number} props.index - Panel index (0-4) for width calculations
 * @param {boolean} props.isExpanded - Whether this specific panel is expanded
 * @param {Function} props.onClick - Handler for panel click (expands this panel)
 * @returns {JSX.Element} Rendered event panel with newspaper layout
 */
export default function EventPanel({ rail, index, isExpanded, onClick }) {
  const width = calculateEventWidth(index, isExpanded ? index : null, 5);
  const { newspaper } = rail;

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
            <Masthead
              issue={newspaper.issue}
              title={rail.title}
              date={newspaper.date}
              category={newspaper.category}
            />

            <PullQuote 
              quote={newspaper.pullQuote}
              align="center"
            />

            <SectionDivider variant="double" />

            <div className="event-panel-newspaper-grid">
              {newspaper.sections.map((section, idx) => (
                <ArticleSection
                  key={idx}
                  headline={section.headline}
                  byline={section.byline}
                  body={section.body}
                  image={section.image}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={`event-${rail.id}-collapsed`}
            {...COLLAPSED_TEXT_ANIMATION}
            className="rotated-text"
          >
            <span className="rotated-text-label">
              {rail.title.toUpperCase()}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
