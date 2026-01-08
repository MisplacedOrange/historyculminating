import '../css/SectionDivider.css';

/** Visual divider component for separating content sections */
export default function SectionDivider({ variant = 'line' }) {
  return <hr className={`section-divider section-divider--${variant}`} />;
}
