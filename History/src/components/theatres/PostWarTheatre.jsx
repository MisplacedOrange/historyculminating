import Masthead from '../Masthead';
import PullQuote from '../PullQuote';
import ArticleSection from '../ArticleSection';
import SectionDivider from '../SectionDivider';
import image17 from '../../assets/image17.webp';
import image18 from '../../assets/image18.webp';
import image19 from '../../assets/image19.webp';
import image20 from '../../assets/image20.webp';

export default function PostWarTheatre() {
  return (
    <>
      <Masthead
        issue="JANUARY"
        title="POST-WAR THEATRE"
        date="January 11th, 2026"
        category="HISTORY"
      />

      <PullQuote 
        quote="That's one small step for man, one giant leap for mankind - Neil Armstrong" 
        align="center"
      />

      <SectionDivider variant="double" />

      <div className="event-panel-newspaper-grid">
        <ArticleSection
          headline="Cold War"
          dateline="March 12, 1947 - December 26, 1991"
          body="The Cold War was a political and ideological rivalry between the United States and the Soviet Union following World War II. It was characterized by economic, political, and propaganda conflicts rather than direct warfare."
          image={{
            caption: "People gathering near a part of the Berlin Wall that has been opened after the German Democratic Republic’s decision to open borders between East and West Berlin. Sourced from https://www.pewresearch.org/short-reads/2014/11/03/berlin-walls-fall-marked-the-end-of-the-cold-war-for-the-american-public/", 
            src: image17
          }}
          body2="Key events included the formation of NATO, the Berlin Wall, the Korean War, and the Cuban Missile Crisis. Both sides sought to contain the influence of the other, dividing Europe and influencing global politics through alliances and proxy wars."
          image2={{
            caption: "Korean soldiers walking on the 38th parallel. Sourced from https://www.history.com/articles/korean-war", 
            src: image18
          }}
          body3="The Cold War was historically significant because it shaped international relations for decades and influenced military alliances. Without the Cold War, the global powers today wouldn’t be as defined and structured. Furthermore, the constant threat of nuclear war negatively affected diplomacy, economics, and daily life worldwide as it constantly created an atmosphere of fear and violence.

"
        />

        <ArticleSection
          headline="Space Race"
          dateline="October 4, 1957 -  July 17, 1975" 
          body="The Space Race was a technological competition between the United States and the Soviet Union during the Cold War. It began in 1957 with the launch of Sputnik 1 and continued as major breakthroughs began to develop in space exploration.
"
          image={{
            caption: "First man-made space satellite, Sputnik 1. Sourced from https://www.upi.com/Top_News/2017/10/04/On-This-Day-Soviet-Union-launches-Sputnik-1/4021507091970/",
            src: image19
          }}
          body2="Key achievements included the first human in space, the first spacewalk, lunar orbit missions, and the Apollo 11 Moon landing in 1969. Due to this competition, both nations invested heavily in science, engineering, and astronaut programs to demonstrate their technological superiority to another.

"
          image2={{
            caption: "Edwin Buzz Aldrin looking at the American flag as he becomes the first man to walk on the moon. Sourced from https://www.adirondackdailyenterprise.com/news/local-news/2019/07/how-the-moon-landed-on-page-1/",
            src: image20
          }}
          body3="The Space Race symbolized the technological competition and innovation between powers and signified that competition is essential for scientific discoveries and innovations. The U.S. Moon landing marked the technological dominance and inspired advances in science, communication, and global cooperation." 
        />
      </div>
    </>
  );
}
