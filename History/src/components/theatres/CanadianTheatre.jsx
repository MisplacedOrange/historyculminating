import Masthead from '../Masthead';
import PullQuote from '../PullQuote';
import ArticleSection from '../ArticleSection';
import SectionDivider from '../SectionDivider';

/** Panel 1 component - contains panel content */
export default function CanadianTheatre() {
  return (
    <>
      <Masthead
        issue="JANUARY" /* TODO: Issue label */
        title="Panel 1" /* TODO: Panel title */
        date="1 January 2026" /* TODO: Date */
        category="CATEGORY" /* TODO: Category label */
      />

      <PullQuote 
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." /* TODO: Pull quote text */
        align="center"
      />

      <SectionDivider variant="double" />

      <div className="event-panel-newspaper-grid">
        <ArticleSection
          headline="Article Title 1" /* TODO: Article 1 headline */
          byline="By Author Name" /* TODO: Article 1 byline */
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." /* TODO: Article 1 body text */
          image={{
            caption: "Image caption 1" /* TODO: Image 1 caption */
          }}
          body2="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." /* TODO: Article 1 body2 text */
          image2={{
            caption: "Image caption 2" /* TODO: Image 2 caption */
          }}
          body3="Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." /* TODO: Article 1 body3 text */
        />

        <ArticleSection
          headline="Article Title 2" /* TODO: Article 2 headline */
          byline="By Author Name" /* TODO: Article 2 byline */
          body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos." /* TODO: Article 2 body text */
          image={{
            caption: "Image caption 3" /* TODO: Image 3 caption */
          }}
          body2="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur." /* TODO: Article 2 body2 text */
          image2={{
            caption: "Image caption 4" /* TODO: Image 4 caption */
          }}
          body3="Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur at vero eos et accusamus." /* TODO: Article 2 body3 text */
        />
      </div>
    </>
  );
}
