import '../css/PullQuote.css';

/** Pull quote component for featured quotations */
export default function PullQuote({ quote, author, align = 'center' }) {
  return (
    <div className={`pull-quote pull-quote-${align}`}>
      <p className="pull-quote-text">"{quote}"</p>
      {author && <p className="pull-quote-attribution">— {author}</p>}
    </div>
  );
}
