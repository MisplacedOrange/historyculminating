import Masthead from '../Masthead';
import PullQuote from '../PullQuote';
import ArticleSection from '../ArticleSection';
import SectionDivider from '../SectionDivider';

/** Panel 4 component - contains panel content */
export default function HomeFrontTheatre() {
  return (
    <>
      <Masthead
        issue="APRIL" /* TODO: Issue label */
        title="Panel 4" /* TODO: Panel title */
        date="1 April 2026" /* TODO: Date */
        category="CATEGORY" /* TODO: Category label */
      />

      <PullQuote 
        quote="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." /* TODO: Pull quote text */
        align="center"
      />

      <SectionDivider variant="double" />

      <div className="event-panel-newspaper-grid">
        <ArticleSection
          headline="Article Title 1" /* TODO: Article 1 headline */
          byline="By Author Name" /* TODO: Article 1 byline */
          body="Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.\n\nSed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." /* TODO: Article 1 body text */
          image={{
            caption: "Image caption 1" /* TODO: Image 1 caption */
          }}
          body2="Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid." /* TODO: Article 1 body2 text */
          image2={{
            caption: "Image caption 2" /* TODO: Image 2 caption */
          }}
          body3="Ex ea commodi consequatur quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil." /* TODO: Article 1 body3 text */
        />

        <ArticleSection
          headline="Article Title 2" /* TODO: Article 2 headline */
          byline="By Author Name" /* TODO: Article 2 byline */
          body="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.\n\nQuam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus." /* TODO: Article 2 body text */
          image={{
            caption: "Image caption 3" /* TODO: Image 3 caption */
          }}
          body2="Qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint." /* TODO: Article 2 body2 text */
          image2={{
            caption: "Image caption 4" /* TODO: Image 4 caption */
          }}
          body3="Occaecati cupiditate non provident similique sunt in culpa qui officia deserunt mollitia animi id est laborum." /* TODO: Article 2 body3 text */
        />
      </div>
    </>
  );
}
