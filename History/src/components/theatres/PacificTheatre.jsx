import Masthead from '../Masthead';
import PullQuote from '../PullQuote';
import ArticleSection from '../ArticleSection';
import SectionDivider from '../SectionDivider';
import image5 from '../../assets/image5.webp';
import image6 from '../../assets/image6.webp';
import image7 from '../../assets/image7.webp';
import image8 from '../../assets/image8.webp';

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
        quote="Yesterday, December 7, 1941—a date which will live in infamy - Franklin D. Roosevelt" 
        align="center"
      />

      <SectionDivider variant="double" />

      <div className="event-panel-newspaper-grid">
        <ArticleSection
          headline="Pearl Harbour"
          dateline="December 7, 1941"
          body="Pearl Harbour was a U.S. naval base near Honolulu, Hawaii, attacked by Japan on December 7, 1941. The surprise attack began at 8:00 a.m. and involved hundreds of Japanese aircraft targeting American naval and air forces."
          image={{
            caption: "Bird's eye view of Pearl Harbor a few months before the Japanese Attack on December 7, 1941. Sourced from https://www.history.navy.mil/content/history/museums/nmusn/explore/photography/wwii/wwii-pacific/us-entry-into-wwii-japanese-offensive/1941-december-7-japanese-attack-on-pearl-harbor/before-the-attack.html", /* TODO: Image 1 caption */
            src: image5 
          }}
          body2="The attack destroyed or damaged eight battleships, over 300 aircraft, and killed approximately 2,400 American soldiers. The USS Arizona was struck by a 1,800-pound bomb, killing over 1,000 men, while the USS Oklahoma sank, trapping hundreds of sailors. Japan failed to destroy key infrastructure such as oil depots and shipyards, allowing the U.S. Navy to recover."
          image2={{
            caption: "Pearl Harbor army base being bombed. December 7, 1941. Sourced from https://www.foxla.com/news/pearl-harbor-timeline-events-that-led-up-to-1941-attack-on-us",
            src: image6 
          }}
          body3="Historically, Pearl Harbour was significant because it directly led to the United States declaring war on Japan, fully entering World War II. The attack shifted the global balance of power and transformed the war into a truly global conflict."
        />

        <ArticleSection
          headline="Battle of Hong Kong"
          dateline="December 8, 1941 - December 25, 1941" 
          body="The Battle of Hong Kong occurred from December 8 to December 25, 1941, and marked the first land battle Canadians fought in World War II. Approximately 2,000 Canadian soldiers from the Winnipeg Grenadiers and the Royal Rifles of Canada were sent to defend the colony."
          image={{
            caption: "Canadian troops firing artillery during the Battle of Hong Kong. sourced from https://www.scmp.com/magazines/post-magazine/long-reads/article/2054842/battle-hong-kong-through-eyes-people-who-lived", 
            src: image7 
          }}
          body2="Canadian forces were undertrained and faced overwhelming Japanese numbers. The defenders surrendered on Christmas Day, with 290 Canadians killed in action and 264 more dying later in POW camps due to brutal conditions. Sergeant-Major John Osborn earned the Victoria Cross for sacrificing himself to save his men."
          image2={{
            caption: "Japanese troops advancing during the Battle of Hong Kong. Sourced from https://www.ccmms.ca/hong-kong/", 
            src: image8 
          }}
          body3="Historically, the Battle of Hong Kong highlighted the human cost of the Pacific War and Canada’s early involvement in the conflict. The suffering of Canadian POWs and acts of bravery became an enduring symbol of sacrifice and military service."
        />
      </div>
    </>
  );
}
