import '../css/Masthead.css';

/**
 * Masthead component for newspaper-style headers
 * Displays issue information, title, date, and category in traditional newspaper format
 * 
 * @param {Object} props - Component props
 * @param {string} props.issue - Issue identifier (e.g., "JUNE", "JANUARY 2026")
 * @param {string} props.title - Publication or section title
 * @param {string} props.date - Full date string
 * @param {string} props.category - Content category (e.g., "WAR NEWS", "EDITORIAL")
 * @returns {JSX.Element} Rendered masthead component
 */
export default function Masthead({ issue, title, date, category }) {
  return (
    <div className="masthead">
      <div className="masthead__meta">
        <span className="masthead__issue">ISSUE: {issue}</span>
        <span className="masthead__category">{category}</span>
      </div>
      <h1 className="masthead__title">{title}</h1>
      <div className="masthead__date">{date}</div>
    </div>
  );
}
