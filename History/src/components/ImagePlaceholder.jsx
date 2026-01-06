import pfp from '../assets/pfp.jpg';
import '../css/ImagePlaceholder.css';

/**
 * Image placeholder component with configurable dimensions
 * Displays user profile picture with caption in newspaper-style format
 * 
 * @param {Object} props - Component props
 * @param {string} [props.width='100%'] - Image width (CSS value)
 * @param {string} [props.height='250px'] - Image height (CSS value, ignored if aspectRatio set)
 * @param {string} [props.caption] - Image caption text
 * @param {string} [props.aspectRatio] - CSS aspect-ratio value (e.g., '16/9')
 * @returns {JSX.Element} Rendered image placeholder
 */
export default function ImagePlaceholder({ width = '100%', height = '250px', caption, aspectRatio }) {
  const style = {
    width,
    height: aspectRatio ? 'auto' : height,
    aspectRatio: aspectRatio || 'auto'
  };

  return (
    <div className="image-placeholder">
      <div className="image-placeholder__box" style={style}>
        <img src={pfp} alt={caption || "Historical photograph"} className="image-placeholder__img" />
      </div>
      {caption && <p className="image-placeholder__caption">{caption}</p>}
    </div>
  );
}
