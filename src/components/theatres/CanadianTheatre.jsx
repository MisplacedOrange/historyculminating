import Masthead from '../Masthead';
import PullQuote from '../PullQuote';
import ArticleSection from '../ArticleSection';
import SectionDivider from '../SectionDivider';
import image1 from '../../assets/image1.webp';
import image2 from '../../assets/image2.webp';
import image3 from '../../assets/image3.webp';
import image4 from '../../assets/image4.webp';

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
        quote="I am a Canadian, a free Canadian, free to speak without fear, free to worship God in my own way, free to stand for what I think right, free to oppose what I believe wrong, free to choose those who shall govern my country. - John Diefenbaker" 
        align="center"
      />

      <SectionDivider variant="double" />

      <div className="event-panel-newspaper-grid">
        <ArticleSection
          headline="Canadian Bill of Rights" 
          dateline="August 10, 1960"
          body="The Canadian Bill of Rights was introduced in 1960 by Prime Minister John Diefenbaker as Canada's first federal law protecting human rights and freedoms. It's goal was to guarantee fundamental freedoms such as life, liberty, personal security, equality before the law."
          image={{
            caption: "1960 Canadian Bill of Rights. Sourced from https://historyofrights.ca/encyclopaedia/main-events/1960-canadian-bill-rights/", 
            src: image1
          }}
          body2="Although groundbreaking, the Bill of Rights applied only to federal law and not provincial statutes which limited its effectiveness. Between 1960 and 1982, it was cited in only 35 cases, with just one successfully changing a law. The bill was influenced by past rights violations, including Japanese Canadian internment, expanded sedition laws, and suspended civil liberties during events such as the Gouzenko Affair."
          image2={{
            caption: "John Diefenbaker and a delegate to the Progressive Conservative General Meeting. Sourced from https://diefenbaker.usask.ca/exhibits/online-exhibits-content/the-canadian-bill-of-rights.php", 
            src: image2
          }}
          body3="The Bill of Rights was historically significant because it laid the foundation for a stronger, more inclusive constitution. It enabled Indigenous voting rights and reflected growing awareness of civil liberties. Although eventually replaced by the Canadian Charter of Rights and Freedoms, the Bill of Rights was a critical step towards modern Canada today."
        />

        <ArticleSection
          headline="The Great Depression in Canada"
          dateline="October 29, 1929"
          body="The Great Depression was a worldwide economic crisis during the 1930s that had devastating effects on Canada. Millions of Canadians experienced unemployment, hunger, homelessness, and extreme poverty. The decade became known as the Dirty Thirties due to widespread drought, dust storms, and economic collapse, particularly in the Prairie provinces."
          image={{
            caption: "People Lining up for food during the Dirty 30s. Sourced from https://www.newmarkettoday.ca/remember-this/history-reminds-us-and-gives-us-hope-newmarket-we-will-get-through-this-2225047",
            src: image3 
          }}
          body2="Canada's economy suffered heavily because it relied on exports for one-third of its national income. Between 1929 and 1933, Canada's Gross National Expenditure dropped by 42%, and unemployment reached 30%, leaving one in five Canadians dependent on government relief. Saskatchewan's income fell by 90% in just two years, and more than 66% of its population relied on relief. Immigration collapsed, birthrates declined, and relief camps paid workers only 20 cents per day, leading to protests such as the On-to-Ottawa Trek and the Regina Riot."
          image2={{
            caption: "Man standing over his field during the Dust Bowl. Sourced from https://www.canadashistory.ca/education/lesson-plans/dust-and-depression", 
            src: image4 
          }}
          body3="Historically, the Great Depression reshaped Canada's political, social, and economic systems. It led to the rise of national welfare programs, new political movements such as the CCF and Social Credit, and the creation of the Canadian Wheat Board in 1935. The crisis exposed weaknesses in Canada's economy and directly influenced long-term government responsibility for economic stability and social welfare."
        />
      </div>
    </>
  );
}
