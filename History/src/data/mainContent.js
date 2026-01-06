/**
 * Main panel content data
 * Contains welcome message and navigation instructions in newspaper format
 * 
 * @typedef {Object} MainContent
 * @property {Object} newspaper - Newspaper format content
 * @property {string} newspaper.issue - Issue identifier
 * @property {string} newspaper.title - Main publication title
 * @property {string} newspaper.category - Content category
 * @property {string} newspaper.date - Publication date
 * @property {string} newspaper.pullQuote - Featured pull quote
 * @property {Array<{headline: string, body: string}>} newspaper.sections - Content sections
 */
export const mainContent = {
  newspaper: {
    issue: "January 5th, 2026",
    title: "HISTORY CULMINATING",
    category: "EDITORIAL",
    date: "History Top Ten",
    pullQuote: "An Interactive Timeline of World War II and its Lasting Impact",
    sections: [
      {
        headline: "Welcome to History Culminating",
        body: "This interactive timeline explores the pivotal events of World War II and the post-war era that shaped the modern world. Through a newspaper-style editorial format, we examine the military campaigns, human tragedies, and transformative moments that defined the 20th century.\n\nSelect any theatre from the panels to your right to explore detailed coverage of specific campaigns and events. Each section provides historical context, eyewitness perspectives, and analysis of these crucial moments in history."
      },
      {
        headline: "How to Navigate",
        body: "Click on any of the five theatre panels to expand and read detailed newspaper-style coverage of major events. Each theatre contains multiple articles with historical information, context, and significance.\n\nThe interface is designed to evoke the experience of reading wartime newspapers, with traditional typography and layout reflecting the editorial style of the era. Collapse any panel by clicking it again, or select a different theatre to switch focus."
      }
    ]
  }
};
