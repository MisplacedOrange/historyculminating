import Masthead from '../Masthead';
import PullQuote from '../PullQuote';
import ArticleSection from '../ArticleSection';
import SectionDivider from '../SectionDivider';
import image13 from '../../assets/image13.webp';
import image14 from '../../assets/image14.webp';
import image15 from '../../assets/image15.webp';
import image16 from '../../assets/image16.webp';


export default function HomeFrontTheatre() {
  return (
    <>
      <Masthead
        issue="JANUARY"
        title="HOMEFRONT THEATRE"
        date="January 11th, 2026"
        category="HISTORY"
      />

      <PullQuote 
        quote="It was the virtue of the Nuremberg trial that it was conceived in hatred of war, and nurtured by those starved of peace. - Rebecca West" 
        align="center"
      />

      <SectionDivider variant="double" />

      <div className="event-panel-newspaper-grid">
        <ArticleSection
          headline="Battle of Vimy Ridge"
          dateline="April 9, 1917 - April 12, 1917"
          body="The Battle of Vimy Ridge was fought during the First World War from April 9 to April 12, 1917. This battle took place on the Western Front in northern France and marked the first time all four Canadian Corps fought together in a single coordinated assault. The battle took place near Vimy, Pas-de-Calais, and targeted a heavily fortified German defensive position."
          image={{
            caption: "Canadian soldiers carrying wounded soldier on a stretcher. Sourced from https://www.veterans.gc.ca/en/remembrance/military-history/first-world-war/battle-vimy-ridge",
            src: image13
          }}
          body2="Canadian forces carefully prepared for the assault and used new military tactics, including the creeping barrage. This tactic allowed infantry to advance closely behind artillery fire, which masked their movement and reduced exposure to enemy fire. The Canadians successfully captured Vimy Ridge, achieving the largest territorial gain of any Entente power at that point in the war. Over 10,600 Canadians became casualties during the battle."
          image2={{
            caption: "Canadian soldiers celebrating after successfully capturing Vimy Ridge. Sourced from https://www.bbc.com/news/uk-39541940", 
            src: image14 
          }}
          body3="The capture of Vimy Ridge was historically significant because it provided a key geographic advantage point which allowed enhanced visibility over the surrounding battlefield. The victory demonstrated Canada’s military effectiveness, independence and has often been described as the “birth of a nation.” Today, the Canadian National Vimy Memorial stands on Hill 145, commemorating the 11,285 Canadians killed in France who have no known grave.
" 
        />

        <ArticleSection
          headline="Nuremberg Trials"
          dateline="November 20, 1945 - October 1, 1946"
          body="The Nuremberg Trials were a series of international military tribunals held after World War II to prosecute Nazi leaders for war crimes. The foundation was established at the Moscow Conference in 1943, and the main trials took place from November 1945 to October 1946 in Nuremberg, Germany."
          image={{
            caption: "Hermann Göring at the Nuremberg trials. Sourced from https://www.britannica.com/event/Nurnberg-trials", 
            src: image15
          }}
          body2="A total of 199 defendants were tried, with 161 convicted and 37 sentenced to death. The tribunal presented irrefutable evidence, including footage of concentration camp liberations, exposing war-crimes such as the Final Solution and POW murders. Additional trials continued until 1949, targeting physicians, judges, SS officers, and industrialists.

"
          image2={{
            caption: "Wilhelm List at the Nuremberg trials. Sourced from https://www.britannica.com/event/Nurnberg-trials",
            src: image16
          }}
          body3="The Nuremberg Trials were significant because they established the principle that all individuals will be accountable under international law. This tribunal set legal precedents for war crimes, crimes against humanity, and genocide, shaping future international justice systems.
"
        />
      </div>
    </>
  );
}
