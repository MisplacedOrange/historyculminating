import '../css/Masthead.css';

/** Masthead component for newspaper-style headers */
export default function Masthead({ issue, title, date, category }) {
  return (
    <div className="masthead">
      <div className="masthead-meta">
        <span className="masthead-issue">ISSUE: {issue}</span>
        <span className="masthead-category">{category}</span>
      </div>
      <h1 className="masthead-title">{title}</h1>
      <div className="masthead-date">{date}</div>
    </div>
  );
}
