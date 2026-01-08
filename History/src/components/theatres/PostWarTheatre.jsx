import Masthead from '../Masthead';
import PullQuote from '../PullQuote';
import ArticleSection from '../ArticleSection';
import SectionDivider from '../SectionDivider';

/** Panel 5 component - contains panel content */
export default function PostWarTheatre() {
  return (
    <>
      <Masthead
        issue="MAY" /* TODO: Issue label */
        title="Panel 5" /* TODO: Panel title */
        date="1 May 2026" /* TODO: Date */
        category="CATEGORY" /* TODO: Category label */
      />

      <PullQuote 
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." /* TODO: Pull quote text */
        align="center"
      />

      <SectionDivider variant="double" />

      <div className="event-panel-newspaper-grid">
        <ArticleSection
          headline="Article Title 1" /* TODO: Article 1 headline */
          byline="By Author Name" /* TODO: Article 1 byline */
          body="Qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.\n\nEt harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est." /* TODO: Article 1 body text */
          image={{
            caption: "Image caption 1" /* TODO: Image 1 caption */
          }}
          body2="Omnis dolor repellendus temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe." /* TODO: Article 1 body2 text */
          image2={{
            caption: "Image caption 2" /* TODO: Image 2 caption */
          }}
          body3="Eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur." /* TODO: Article 1 body3 text */
        />

        <ArticleSection
          headline="Article Title 2" /* TODO: Article 2 headline */
          byline="By Author Name" /* TODO: Article 2 byline */
          body="Omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.\n\nItaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." /* TODO: Article 2 body text */
          image={{
            caption: "Image caption 3" /* TODO: Image 3 caption */
          }}
          body2="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore." /* TODO: Article 2 body2 text */
          image2={{
            caption: "Image caption 4" /* TODO: Image 4 caption */
          }}
          body3="Magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo." /* TODO: Article 2 body3 text */
        />
      </div>
    </>
  );
}
