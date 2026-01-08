import Masthead from '../Masthead';
import PullQuote from '../PullQuote';
import ArticleSection from '../ArticleSection';
import SectionDivider from '../SectionDivider';

/** Panel 3 component - contains panel content */
export default function EuropeanTheatre() {
  return (
    <>
      <Masthead
        issue="MARCH" /* TODO: Issue label */
        title="Panel 3" /* TODO: Panel title */
        date="1 March 2026" /* TODO: Date */
        category="CATEGORY" /* TODO: Category label */
      />

      <PullQuote 
        quote="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." /* TODO: Pull quote text */
        align="center"
      />

      <SectionDivider variant="double" />

      <div className="event-panel-newspaper-grid">
        <ArticleSection
          headline="Article Title 1" /* TODO: Article 1 headline */
          byline="By Author Name" /* TODO: Article 1 byline */
          body="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.\n\nQuam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur." /* TODO: Article 1 body text */
          image={{
            caption: "Image caption 1" /* TODO: Image 1 caption */
          }}
          body2="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti." /* TODO: Article 1 body2 text */
          image2={{
            caption: "Image caption 2" /* TODO: Image 2 caption */
          }}
          body3="Atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique sunt." /* TODO: Article 1 body3 text */
        />

        <ArticleSection
          headline="Article Title 2" /* TODO: Article 2 headline */
          byline="By Author Name" /* TODO: Article 2 byline */
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.\n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." /* TODO: Article 2 body text */
          image={{
            caption: "Image caption 3" /* TODO: Image 3 caption */
          }}
          body2="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem." /* TODO: Article 2 body2 text */
          image2={{
            caption: "Image caption 4" /* TODO: Image 4 caption */
          }}
          body3="Aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." /* TODO: Article 2 body3 text */
        />
      </div>
    </>
  );
}
