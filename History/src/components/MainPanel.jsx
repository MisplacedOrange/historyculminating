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
                issue="JUNE" /* TODO: Issue label */
                title="Main Panel" /* TODO: Main title */
                date="1 January 2026" /* TODO: Date */
                category="CATEGORY" /* TODO: Category label */
              />
              
              <PullQuote 
                quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." /* TODO: Pull quote text */
                align="center"
              />

              <SectionDivider variant="line" />

              <ArticleSection
                headline="Article Title 1" /* TODO: Article 1 headline */
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." /* TODO: Article 1 body text */
              />

              <SectionDivider variant="line" />

              <ArticleSection
                headline="Article Title 2" /* TODO: Article 2 headline */
                body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." /* TODO: Article 2 body text */
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
              MAIN PANEL {/* TODO: Collapsed panel label */}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
