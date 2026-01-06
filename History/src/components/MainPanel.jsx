import { motion, AnimatePresence } from 'framer-motion';
import { PANEL_ANIMATION, calculateMainWidth, CONTENT_ANIMATION, COLLAPSED_TEXT_ANIMATION } from '../utils/panelConfig';
import { mainContent } from '../data/mainContent';
import Masthead from './Masthead';
import PullQuote from './PullQuote';
import ArticleSection from './ArticleSection';
import SectionDivider from './SectionDivider';
import '../css/MainPanel.css';
import '../css/shared.css';

/**
 * Main panel component - left side of horizontal accordion
 * Displays welcome content and navigation instructions in newspaper format
 * Expands to 66.67% width when active, collapses to 6.67% when event panel is active
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isExpanded - Whether this panel is currently expanded
 * @param {Function} props.onClick - Handler for panel click (expands main panel)
 * @returns {JSX.Element} Rendered main panel with newspaper layout
 */
export default function MainPanel({ isExpanded, onClick }) {
  const width = calculateMainWidth(isExpanded ? null : 0);
  const { newspaper } = mainContent;

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
            <div className="main-panel__newspaper-grid">
              <Masthead
                issue={newspaper.issue}
                title={newspaper.title}
                date={newspaper.date}
                category={newspaper.category}
              />
              
              <PullQuote 
                quote={newspaper.pullQuote}
                align="center"
              />

              {newspaper.sections.map((section, index) => (
                <div key={index}>
                  {index > 0 && <SectionDivider variant="line" />}
                  <ArticleSection
                    headline={section.headline}
                    body={section.body}
                  />
                </div>
              ))}
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
