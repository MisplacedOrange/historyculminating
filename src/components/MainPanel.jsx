import { motion, AnimatePresence } from 'framer-motion';
import { PANEL_ANIMATION, calculateMainWidth, CONTENT_ANIMATION, COLLAPSED_TEXT_ANIMATION } from '../utils/panelConfig';
import Masthead from './Masthead';
import PullQuote from './PullQuote';
import ArticleSection from './ArticleSection';
import SectionDivider from './SectionDivider';
import '../css/MainPanel.css';
import '../css/shared.css';

/** Main panel component - left side of horizontal accordion */
export default function MainPanel({ isExpanded, onClick }) {
  const width = calculateMainWidth(isExpanded ? null : 0);

  return (
    <motion.div
      animate={{ width }}
      transition={PANEL_ANIMATION.transition}
      onClick={!isExpanded ? onClick : undefined}
      className={`main-panel ${isExpanded ? 'main-panel-expanded' : 'main-panel-collapsed'}`}
    >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="main-content"
            {...CONTENT_ANIMATION}
            className="main-panel-content"
            style={{ '--panel-gradient-color': 'var(--color-panel-main)' }}
          >
            <div className="main-panel-newspaper-grid">
              <Masthead
                issue="HISTORY CULMINATING"
                title="HISTORY TOP TEN"
                date="Culminating Delivery Task"
                category="January, 2026"
              />
              
              <PullQuote 
                quote="Study the Past if You Would Define the Future - Confucius" 
                align="center"
              />

              <SectionDivider variant="line" />

              <ArticleSection
                headline="Purpose of this Website"
                body="This website was created for part my History Culminating. Its purpose is to present a carefully selected Top Ten list of the most important events that have shaped human history. These selections highlight events that caused long-term political, social, economic, and cultural change." 
              />

              <SectionDivider variant="line" />

              <ArticleSection
                headline="How to Navigate This Website" 
                body="This website is organized into six panels. The first panel serves as the table of contents, while the remaining five representing different Theatres. Click a Theatre’s title to open its panel. Each Theatre includes two articles on significant historical events related to that theme. To return to the table of contents, click the expanded Theatre panel again." 
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="main-collapsed"
            {...COLLAPSED_TEXT_ANIMATION}
            className="rotated-text"
          >
            <span className="rotated-text-label">
              TABLE OF CONTENTS
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
