export const PANEL_ANIMATION = {
  transition: { 
    duration: 1, 
    ease: [0.25, 0.1, 0.25, 1]
  }
};

export const CONTENT_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0, delay: 0 }
};

export const COLLAPSED_TEXT_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0 }
};

export const STAGGER_CONFIG = {
  staggerChildren: 0.05,
  delayChildren: 0.15
};

export const calculateMainWidth = (expandedIndex) => {
  return expandedIndex === null ? '66.67%' : '6.67%';
};

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
