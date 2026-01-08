import pfp from '../assets/pfp.jpg';
import '../css/ImagePlaceholder.css';

/** Image placeholder component with configurable dimensions */
export default function ImagePlaceholder({ width = '100%', height = '250px', caption, aspectRatio }) {
  const style = {
    width,
    height: aspectRatio ? 'auto' : height,
    aspectRatio: aspectRatio || 'auto'
  };

  return (
    <div className="image-placeholder">
      <div className="image-placeholder-box" style={style}>
        <img src={pfp} alt={caption || "Historical photograph"} className="image-placeholder-img" />
      </div>
      {caption && <p className="image-placeholder-caption">{caption}</p>}
    </div>
  );
}
