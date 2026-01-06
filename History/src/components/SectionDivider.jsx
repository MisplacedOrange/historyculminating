import '../css/SectionDivider.css';

/**
 * Visual divider component for separating content sections
 * Provides three visual styles: simple line, double line, or ornamental
 * 
 * @param {Object} props - Component props
 * @param {'line'|'double'|'ornament'} [props.variant='line'] - Divider visual style
 * @returns {JSX.Element} Rendered section divider
 */
export default function SectionDivider({ variant = 'line' }) {
  return <hr className={`section-divider section-divider--${variant}`} />;
}
