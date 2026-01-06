/**
 * Animation and layout configuration for accordion panels
 * Contains animation settings, timing configurations, and width calculation functions
 */

/**
 * Panel width animation configuration
 * Controls the smooth expansion/collapse transitions for all panels
 */
export const PANEL_ANIMATION = {
  transition: { 
    duration: 1, 
    ease: [0.25, 0.1, 0.25, 1]
  }
};

/**
 * Content fade animation for expanded panel content
 * Applied to panel content when transitioning between expanded/collapsed states
 */
export const CONTENT_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0, delay: 0 }
};

/**
 * Animation for collapsed panel text (rotated labels)
 * Applied to vertical text labels visible when panels are collapsed
 */
export const COLLAPSED_TEXT_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0 }
};

/**
 * Stagger animation configuration (currently unused)
 * Reserved for potential future staggered animations of child elements
 */
export const STAGGER_CONFIG = {
  staggerChildren: 0.05,
  delayChildren: 0.15
};

/**
 * Calculate main panel width based on expansion state
 * 
 * @param {number|null} expandedIndex - Index of expanded event panel (null if main is expanded)
 * @returns {string} CSS width percentage for main panel
 */
export const calculateMainWidth = (expandedIndex) => {
  return expandedIndex === null ? '66.67%' : '6.67%';
};

/**
 * Calculate event panel width based on expansion state
 * Distributes available horizontal space across event panels
 * 
 * @param {number} eventIndex - Index of current event panel
 * @param {number|null} expandedIndex - Index of expanded event panel (null if main is expanded)
 * @param {number} totalEvents - Total number of event panels
 * @returns {string} CSS width percentage for event panel
 */
export const calculateEventWidth = (eventIndex, expandedIndex, totalEvents) => {
  if (expandedIndex === null) {
    // All events collapsed, share 33.33%
    return `${33.33 / totalEvents}%`; // 6.67% each
  }
  if (eventIndex === expandedIndex) {
    return '66.67%'; // Expanded event
  }
  // Other collapsed events share remaining space
  const remaining = 33.33 - 6.67; // Main gets 6.67%
  return `${remaining / (totalEvents - 1)}%`; // ~6.67% each
};
