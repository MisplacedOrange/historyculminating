import Masthead from '../Masthead';
import PullQuote from '../PullQuote';
import ArticleSection from '../ArticleSection';
import SectionDivider from '../SectionDivider';

/** Panel 1 component - contains panel content */
export default function CanadianTheatre() {
  return (
    <>
      <Masthead
        issue="JANUARY"
        title="CANADIAN THEATRE"
        date="January 11th, 2026"
        category="HISTORY CULMINATING"
      />

      <PullQuote 
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." /* TODO: Pull quote text */
        align="center"
      />

      <SectionDivider variant="double" />

      <div className="event-panel-newspaper-grid">
        <ArticleSection
          headline="Battle of Vimy Ridge" /* TODO: Article 1 headline */
          byline="" /* TODO: Article 1 byline */
          body="The Battle of Vimy Ridge was fought during the First World War from April 9 to April 12, 1917, on the Western Front in northern France. It marked the first time all four Canadian Corps fought together in a single coordinated assault. The battle took place near Vimy, Pas-de-Calais, and targeted a heavily fortified German defensive position."
          image={{
            caption: "Image caption 1" /* TODO: Image 1 caption */
          }}
          body2="Canadian forces carefully prepared for the assault and used new military tactics, including the creeping barrage. This tactic allowed infantry to advance closely behind artillery fire, which masked their movement and reduced exposure to enemy fire. The Canadians successfully captured Vimy Ridge, achieving the largest territorial gain of any Entente power at that point in the war. Over 10,600 Canadians became casualties during the battle." /* TODO: Article 1 body2 text */
          image2={{
            caption: "Image caption 2" /* TODO: Image 2 caption */
          }}
          body3="The capture of Vimy Ridge was historically significant because it provided a crucial geographic vantage point, allowing visibility over much of the surrounding battlefield. The victory demonstrated Canada’s growing military effectiveness and independence and has often been described as the “birth of a nation.” Today, the Canadian National Vimy Memorial stands on Hill 145, commemorating the 11,285 Canadians killed in France who have no known grave." /* TODO: Article 1 body3 text */
        />

        <ArticleSection
          headline="The Great Depression in Canada" /* TODO: Article 2 headline */
          byline="By Author Name" /* TODO: Article 2 byline */
          body="The Great Depression was a worldwide economic crisis during the 1930s that had devastating effects on Canada. Millions of Canadians experienced unemployment, hunger, homelessness, and extreme poverty. The decade became known as the “Dirty Thirties” due to widespread drought, dust storms, and economic collapse, particularly in the Prairie provinces." /* TODO: Article 2 body text */
          image={{
            caption: "Image caption 3" /* TODO: Image 3 caption */
          }}
          body2="Canada’s economy suffered heavily because it relied on exports for one-third of its national income. Between 1929 and 1933, Canada’s Gross National Expenditure dropped by 42%, and unemployment reached 30%, leaving one in five Canadians dependent on government relief. Saskatchewan’s income fell by 90% in just two years, and more than 66% of its population relied on relief. Immigration collapsed, birthrates declined, and relief camps paid workers only 20 cents per day, leading to protests such as the On-to-Ottawa Trek and the Regina Riot." /* TODO: Article 2 body2 text */
          image2={{
            caption: "Image caption 4" /* TODO: Image 4 caption */
          }}
          body3="Historically, the Great Depression reshaped Canada’s political, social, and economic systems. It led to the rise of national welfare programs, new political movements such as the CCF and Social Credit, and the creation of the Canadian Wheat Board in 1935. The crisis exposed weaknesses in Canada’s economy and directly influenced long-term government responsibility for economic stability and social welfare." /* TODO: Article 2 body3 text */
        />
      </div>
    </>
  );
}
