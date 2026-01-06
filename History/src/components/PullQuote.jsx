import '../css/PullQuote.css';

/**
 * Pull quote component for featured quotations
 * Renders italicized, prominent quotes with optional author attribution
 * 
 * @param {Object} props - Component props
 * @param {string} props.quote - Quote text content
 * @param {string} [props.author] - Optional author attribution
 * @param {'left'|'center'|'right'} [props.align='center'] - Text alignment
 * @returns {JSX.Element} Rendered pull quote component
 */
export default function PullQuote({ quote, author, align = 'center' }) {
  return (
    <div className={`pull-quote pull-quote--${align}`}>
      <p className="pull-quote__text">"{quote}"</p>
      {author && <p className="pull-quote__attribution">— {author}</p>}
    </div>
  );
}
