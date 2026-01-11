import Masthead from '../Masthead';
import PullQuote from '../PullQuote';
import ArticleSection from '../ArticleSection';
import SectionDivider from '../SectionDivider';

/** Panel 2 component - contains panel content */
export default function PacificTheatre() {
  return (
    <>
      <Masthead
        issue="JANUARY"
        title="PACIFIC THEATRE"
        date="January 11th, 2026"
        category="HISTORY CULMINATING"
      />

      <PullQuote 
        quote="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque." /* TODO: Pull quote text */
        align="center"
      />

      <SectionDivider variant="double" />

      <div className="event-panel-newspaper-grid">
        <ArticleSection
          headline="Pearl Harbour"
          byline="By Author Name" /* TODO: Article 1 byline */
          body="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.\n\nCupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga." /* TODO: Article 1 body text */
          image={{
            caption: "Image caption 1" /* TODO: Image 1 caption */
          }}
          body2="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat." /* TODO: Article 1 body2 text */
          image2={{
            caption: "Image caption 2" /* TODO: Image 2 caption */
          }}
          body3="Facere possimus omnis voluptas assumenda est omnis dolor repellendus temporibus autem quibusdam et aut officiis." /* TODO: Article 1 body3 text */
        />

        <ArticleSection
          headline="Article Title 2" /* TODO: Article 2 headline */
          byline="By Author Name" /* TODO: Article 2 byline */
          body="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.\n\nOmnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet." /* TODO: Article 2 body text */
          image={{
            caption: "Image caption 3" /* TODO: Image 3 caption */
          }}
          body2="Ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente." /* TODO: Article 2 body2 text */
          image2={{
            caption: "Image caption 4" /* TODO: Image 4 caption */
          }}
          body3="Delectus ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." /* TODO: Article 2 body3 text */
        />
      </div>
    </>
  );
}
