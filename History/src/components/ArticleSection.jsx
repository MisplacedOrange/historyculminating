import ImagePlaceholder from './ImagePlaceholder';
import '../css/ArticleSection.css';

/** Complete article section with headline, text, and optional images */
export default function ArticleSection({ headline, byline, body, body2, body3, image, image2, layout = 'vertical' }) {
  const paragraphs = body.split('\n');
  const thirdPoint = Math.ceil(paragraphs.length / 3);
  const twoThirdsPoint = Math.ceil((paragraphs.length * 2) / 3);
  
  const firstThird = paragraphs.slice(0, thirdPoint);
  const secondThird = paragraphs.slice(thirdPoint, twoThirdsPoint);
  const lastThird = paragraphs.slice(twoThirdsPoint);

  return (
    <div className={`article-section article-section-${layout}`}>
      <h2 className="article-section-headline">{headline}</h2>
      {byline && <p className="article-section-byline">By {byline}</p>}
      
      {/* First third of text */}
      <div className="article-section-body">
        {firstThird.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      
      {/* First image */}
      {image && (
        <div className="article-section-image article-section-image-middle">
          <ImagePlaceholder 
            caption={image.caption}
            height={image.height || '200px'}
          />
        </div>
      )}
      
      {/* Second third of text */}
      {secondThird.length > 0 && (
        <div className="article-section-body">
          {secondThird.map((paragraph, index) => (
            <p key={`second-${index}`}>{paragraph}</p>
          ))}
        </div>
      )}
      
      {/* Body2 text between images */}
      {body2 && (
        <div className="article-section-body">
          {body2.split('\n').map((paragraph, index) => (
            <p key={`body2-${index}`}>{paragraph}</p>
          ))}
        </div>
      )}
      
      {/* Second image */}
      {image2 && (
        <div className="article-section-image article-section-image-bottom">
          <ImagePlaceholder 
            caption={image2.caption}
            height={image2.height || '200px'}
          />
        </div>
      )}
      
      {/* Last third of text */}
      {lastThird.length > 0 && (
        <div className="article-section-body">
          {lastThird.map((paragraph, index) => (
            <p key={`third-${index}`}>{paragraph}</p>
          ))}
        </div>
      )}
      
      {/* Body3 text after second image */}
      {body3 && (
        <div className="article-section-body">
          {body3.split('\n').map((paragraph, index) => (
            <p key={`body3-${index}`}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
}
