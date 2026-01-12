import Masthead from '../Masthead';
import PullQuote from '../PullQuote';
import ArticleSection from '../ArticleSection';
import SectionDivider from '../SectionDivider';

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
          dateline="HONOLULU, Dec. 7 —" /* TODO: Article 1 dateline */
          body="Pearl Harbour was a U.S. naval base near Honolulu, Hawaii, attacked by Japan on December 7, 1941. The surprise attack began at 8:00 a.m. and involved hundreds of Japanese aircraft targeting American naval and air forces."
          image={{
            caption: "Image caption 1", /* TODO: Image 1 caption */
            src: undefined /* TODO: Add image source */
          }}
          body2="The attack destroyed or damaged eight battleships, over 300 aircraft, and killed approximately 2,400 American soldiers. The USS Arizona was struck by a 1,800-pound bomb, killing over 1,000 men, while the USS Oklahoma sank, trapping hundreds of sailors. Japan failed to destroy key infrastructure such as oil depots and shipyards, allowing the U.S. Navy to recover."
          image2={{
            caption: "Image caption 2", /* TODO: Image 2 caption */
            src: undefined /* TODO: Add image source */
          }}
          body3="Historically, Pearl Harbour was significant because it directly led to the United States declaring war on Japan, fully entering World War II. The attack shifted the global balance of power and transformed the war into a truly global conflict."
        />

        <ArticleSection
          headline="Battle of Hong Kong"
          dateline="HONG KONG, Dec. 25 —" /* TODO: Article 2 dateline */
          body="The Battle of Hong Kong occurred from December 8 to December 25, 1941, and marked the first land battle Canadians fought in World War II. Approximately 2,000 Canadian soldiers from the Winnipeg Grenadiers and the Royal Rifles of Canada were sent to defend the colony."
          image={{
            caption: "Image caption 3", /* TODO: Image 3 caption */
            src: undefined /* TODO: Add image source */
          }}
          body2="Canadian forces were undertrained and faced overwhelming Japanese numbers. The defenders surrendered on Christmas Day, with 290 Canadians killed in action and 264 more dying later in POW camps due to brutal conditions. Sergeant-Major John Osborn earned the Victoria Cross for sacrificing himself to save his men."
          image2={{
            caption: "Image caption 4", /* TODO: Image 4 caption */
            src: undefined /* TODO: Add image source */
          }}
          body3="Historically, the Battle of Hong Kong highlighted the human cost of the Pacific War and Canada’s early involvement in the conflict. The suffering of Canadian POWs and acts of bravery became an enduring symbol of sacrifice and military service."
        />
      </div>
    </>
  );
}
