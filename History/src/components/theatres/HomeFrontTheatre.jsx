import Masthead from '../Masthead';
import PullQuote from '../PullQuote';
import ArticleSection from '../ArticleSection';
import SectionDivider from '../SectionDivider';

/** Panel 4 component - contains panel content */
export default function HomeFrontTheatre() {
  return (
    <>
      <Masthead
        issue="JANUARY"
        title="HOMEFRONT THEATRE"
        date="January 11th, 2026"
        category="HISTORY CULMINATING"
      />

      <PullQuote 
        quote="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." /* TODO: Pull quote text */
        align="center"
      />

      <SectionDivider variant="double" />

      <div className="event-panel-newspaper-grid">
        <ArticleSection
          headline="Battle of Vimy Ridge"
          dateline="VIMY, Apr. 12 —" /* TODO: Article 1 dateline */
          body="The Battle of Vimy Ridge was fought during the First World War from April 9 to April 12, 1917, on the Western Front in northern France. It marked the first time all four Canadian Corps fought together in a single coordinated assault. The battle took place near Vimy, Pas-de-Calais, and targeted a heavily fortified German defensive position."
          image={{
            caption: "Image caption 1", /* TODO: Image 1 caption */
            src: undefined /* TODO: Add image source */
          }}
          body2="Canadian forces carefully prepared for the assault and used new military tactics, including the creeping barrage. This tactic allowed infantry to advance closely behind artillery fire, which masked their movement and reduced exposure to enemy fire. The Canadians successfully captured Vimy Ridge, achieving the largest territorial gain of any Entente power at that point in the war. Over 10,600 Canadians became casualties during the battle."
          image2={{
            caption: "Image caption 2", /* TODO: Image 2 caption */
            src: undefined /* TODO: Add image source */
          }}
          body3="The capture of Vimy Ridge was historically significant because it provided a crucial geographic vantage point, allowing visibility over much of the surrounding battlefield. The victory demonstrated Canada’s growing military effectiveness and independence and has often been described as the “birth of a nation.” Today, the Canadian National Vimy Memorial stands on Hill 145, commemorating the 11,285 Canadians killed in France who have no known grave." 
        />

        <ArticleSection
          headline="Nuremberg Trials"
          dateline="NUREMBERG, Oct. 1 —" /* TODO: Article 2 dateline */
          body="The Nuremberg Trials were a series of international military tribunals held after World War II to prosecute Nazi leaders for war crimes. The foundation was established at the Moscow Conference in 1943, and the main trials took place from November 1945 to October 1946 in Nuremberg, Germany."
          image={{
            caption: "Image caption 3", /* TODO: Image 3 caption */
            src: undefined /* TODO: Add image source */
          }}
          body2="A total of 199 defendants were tried, with 161 convicted and 37 sentenced to death. The tribunal presented extensive evidence, including footage of concentration camp liberations, exposing crimes such as the Final Solution and POW murders. Additional trials continued until 1949, targeting physicians, judges, SS officers, and industrialists."
          image2={{
            caption: "Image caption 4", /* TODO: Image 4 caption */
            src: undefined /* TODO: Add image source */
          }}
          body3="Historically, the Nuremberg Trials were significant because they established the principle that individuals, including government leaders, could be held accountable under international law. They set legal precedents for war crimes, crimes against humanity, and genocide, shaping future international justice systems."
        />
      </div>
    </>
  );
}
