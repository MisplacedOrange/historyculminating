import ImagePlaceholder from './ImagePlaceholder';
import '../css/ArticleSection.css';

/**
 * Complete article section component
 * Combines headline, byline, body text, and optional image in newspaper format
 * Automatically splits body text into paragraphs using \n\n delimiter
 * 
 * @param {Object} props - Component props
 * @param {string} props.headline - Article headline
 * @param {string} [props.byline] - Author byline (prefixed with "By ")
 * @param {string} props.body - Article body text (use \n\n for paragraph breaks)
 * @param {Object} [props.image] - Image configuration object
 * @param {string} props.image.caption - Image caption
 * @param {string} [props.image.height] - Image height override
 * @param {'vertical'|'horizontal'} [props.layout='vertical'] - Layout orientation
 * @returns {JSX.Element} Rendered article section
 */
export default function ArticleSection({ headline, byline, body, image, layout = 'vertical' }) {
  return (
    <div className={`article-section article-section--${layout}`}>
      <h2 className="article-section__headline">{headline}</h2>
      {byline && <p className="article-section__byline">By {byline}</p>}
      <div className="article-section__body">
        {body.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {image && (
        <div className="article-section__image">
          <ImagePlaceholder 
            caption={image.caption}
            height={image.height || '200px'}
          />
        </div>
      )}
    </div>
  );
}
