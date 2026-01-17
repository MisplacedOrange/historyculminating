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
        category="HISTORY"
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
            caption: "Bird's eye view of Pearl Harbor a few months before the Japanese Attack on December 7, 1941. Sourced from https://www.history.navy.mil/content/history/museums/nmusn/explore/photography/wwii/wwii-pacific/us-entry-into-wwii-japanese-offensive/1941-december-7-japanese-attack-on-pearl-harbor/before-the-attack.html",
            src: image5 
          }}
          body2="The attack destroyed roughly eight battleships, over 300 aircraft, and killed around 2,400 American soldiers. Further damage was done to carriers like the USS Arizona, which was struck by a 1,800-pound bomb and killed over 1,000 men. Additionally, another notable carrier is USS Oklahoma, which sank, trapping hundreds of sailors underwater. However, Japan failed to destroy key infrastructure such as oil depots and shipyards and allowed the U.S. Navy to rapidly recover from this disaster."
          image2={{
            caption: "Pearl Harbor army base being bombed. December 7, 1941. Sourced from https://www.foxla.com/news/pearl-harbor-timeline-events-that-led-up-to-1941-attack-on-us",
            src: image6 
          }}
          body3="I believe that Pearl Harbour was a historically significant event because it directly led to the United States declaring war on Japan. This declaration marked the United State’s entry into the second world war and shifted the global balance of power between the allies and axis power. This transformed the war into a truly global conflict between Western Democracy and Eastern Dictatorship."
        />

        <ArticleSection
          headline="Battle of Hong Kong"
          dateline="December 8, 1941 - December 25, 1941" 
          body="The Battle of Hong Kong lasted from December 8 to December 25, 1941, and marked the first land battle in which Canadians fought in World War II. Approximately 2,000 Canadian soldiers combined, from both the Winnipeg Grenadiers and the Royal Rifles of Canada were sent to defend Hong Kong."
          image={{
            caption: "Canadian troops firing artillery during the Battle of Hong Kong. sourced from https://www.scmp.com/magazines/post-magazine/long-reads/article/2054842/battle-hong-kong-through-eyes-people-who-lived", 
            src: image7 
          }}
          body2="Canadian forces were untrained and faced overwhelming Japanese numbers which ultimately ended with them surrendering on Christmas Day. During this onslaught, 290 Canadians were killed in action and 264 more  later died in POW camps due to brutal conditions. A notable Canadian was Sergeant-Major John Osborn, who earned the Victoria Cross for his valiant efforts and sacrificing himself to save his men.
"
          image2={{
            caption: "Japanese troops advancing during the Battle of Hong Kong. Sourced from https://www.ccmms.ca/hong-kong/", 
            src: image8 
          }}
          body3="Historically, the Battle of Hong Kong highlighted the human cost in the Pacific Theatre and Canada’s unpreparedness early in the conflict. The suffering of Canadian POWs and acts of bravery became a symbol of sacrifice and are recognized annually for their military service and efforts.
"
        />
      </div>
    </>
  );
}
