import '../css/ColumnText.css';

/**
 * Multi-column text layout component
 * Renders content in newspaper-style columns using CSS column properties
 * Automatically collapses to single column on mobile devices
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to display in columns
 * @param {number} [props.columns=2] - Number of columns (2 or 3)
 * @param {string} [props.gap='2rem'] - Gap between columns (CSS value)
 * @returns {JSX.Element} Rendered columnar text layout
 */
export default function ColumnText({ children, columns = 2, gap = '2rem' }) {
  const className = `column-text column-text--${columns}col`;
  const style = {
    columnGap: gap
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
