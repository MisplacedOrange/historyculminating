import Masthead from '../Masthead';
import PullQuote from '../PullQuote';
import ArticleSection from '../ArticleSection';
import SectionDivider from '../SectionDivider';
import image1 from '../../assets/image1.webp';
import image2 from '../../assets/image2.webp';

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
          headline="Canadian Bill of Rights" 
          dateline="OTTAWA, Jan. 11 —"
          body="The Canadian Bill of Rights was introduced in 1960 by Prime Minister John Diefenbaker as Canada's first federal law protecting human rights and freedoms. It aimed to guarantee fundamental freedoms such as life, liberty, personal security, equality before the law, and freedoms of religion, speech, and assembly."
          image={{
            caption: "Figure 1: 1960 Canadian Bill of Rights. Sourced from https://historyofrights.ca/encyclopaedia/main-events/1960-canadian-bill-rights/", 
            src: image1
          }}
          body2="Although groundbreaking, the Bill of Rights applied only to federal law and not provincial statutes, limiting its effectiveness. Between 1960 and 1982, it was cited in only 35 cases, with just one successfully changing a law. The bill was influenced by past rights violations, including Japanese Canadian internment, expanded sedition laws, and suspended civil liberties during events such as the Gouzenko Affair."
          image2={{
            caption: "Image caption 2", /* TODO: Image 2 caption */
            src: image2
          }}
          body3="Historically, the Bill of Rights was significant because it laid the groundwork for stronger constitutional protections. It advanced Indigenous voting rights and reflected growing awareness of civil liberties. Although eventually replaced by the Canadian Charter of Rights and Freedoms, the Bill of Rights marked a critical step toward modern Canadian democracy and rights protection."
        />

        <ArticleSection
          headline="The Great Depression in Canada"
          dateline="REGINA, Jan. 11" /* TODO: Article 2 dateline */
          body="The Great Depression was a worldwide economic crisis during the 1930s that had devastating effects on Canada. Millions of Canadians experienced unemployment, hunger, homelessness, and extreme poverty. The decade became known as the Dirty Thirties due to widespread drought, dust storms, and economic collapse, particularly in the Prairie provinces." /* TODO: Article 2 body text */
          image={{
            caption: "Image caption 3", /* TODO: Image 3 caption */
            src: undefined /* TODO: Add image source */
          }}
          body2="Canada’s economy suffered heavily because it relied on exports for one-third of its national income. Between 1929 and 1933, Canada’s Gross National Expenditure dropped by 42%, and unemployment reached 30%, leaving one in five Canadians dependent on government relief. Saskatchewan’s income fell by 90% in just two years, and more than 66% of its population relied on relief. Immigration collapsed, birthrates declined, and relief camps paid workers only 20 cents per day, leading to protests such as the On-to-Ottawa Trek and the Regina Riot." /* TODO: Article 2 body2 text */
          image2={{
            caption: "Image caption 4", /* TODO: Image 4 caption */
            src: undefined /* TODO: Add image source */
          }}
          body3="Historically, the Great Depression reshaped Canada’s political, social, and economic systems. It led to the rise of national welfare programs, new political movements such as the CCF and Social Credit, and the creation of the Canadian Wheat Board in 1935. The crisis exposed weaknesses in Canada’s economy and directly influenced long-term government responsibility for economic stability and social welfare." /* TODO: Article 2 body3 text */
        />
      </div>
    </>
  );
}
