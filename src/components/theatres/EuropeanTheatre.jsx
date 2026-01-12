import Masthead from '../Masthead';
import PullQuote from '../PullQuote';
import ArticleSection from '../ArticleSection';
import SectionDivider from '../SectionDivider';
import image9 from '../../assets/image9.webp';
import image10 from '../../assets/image10.webp';
import image11 from '../../assets/image11.webp';
import image12 from '../../assets/image12.webp';

export default function EuropeanTheatre() {
  return (
    <>
      <Masthead
        issue="JANUARY"
        title="EUROPEAN THEATRE"
        date="January 11th, 2026"
        category="HISTORY CULMINATING"
      />

      <PullQuote 
        quote="It may be that this, these very lines I am writing, will be the only witnesses to what was my life. But I will be happy if my writings reach you, free citizen of the world. Perhaps a spark of my inner fire will ignite in you, and you will fulfill at least a part of our life’s desire: you shall avenge, avenge our deaths! - Załmen Gradowski" 
        align="center"
      />

      <SectionDivider variant="double" />

      <div className="event-panel-newspaper-grid">
        <ArticleSection
          headline="D-Day – Juno Beach" 
          dateline="June 6, 1944"
          body="Juno Beach was a 10-kilometre stretch of coastline in Normandy, France, assaulted by Canadian forces on June 6, 1944, during D-Day. This operation was part of Operation Overlord, the Allied invasion to free France from Nazi occupation. The assault was led by the 3rd Canadian Infantry Division and the 2nd Canadian Armoured Brigade."
          image={{
            caption: "Landing Craft, Infantry bring Royal Marines ashore near St Aubin-sur-Mer. Sourced from https://www.junobeach.org/canada-in-wwii/articles/british-forces-at-juno-beach-on-d-day/", 
            src: image9
          }}
          body2="More than 14,000 Canadian soldiers landed on Juno Beach, supported by 110 naval warships, roughly 10,000 sailors, and 15 Royal Canadian Air Force fighter and fighter-bomber squadrons. Canadian forces arrived three hours after optimal sea conditions, and submerged German obstacles caused heavy damage, destroying or damaging around 30% of landing craft. Many amphibious Duplex Drive tanks sank or arrived too late, leaving infantry exposed. Nearly half of the first assault waves were killed or wounded."
          image2={{
            caption: "Landing craft containing Canadian soldiers with their bicycles. Sourced from https://www.dday-overlord.com/en/d-day/beaches/juno-beach",
            src: image10 
          }}
          body3="Despite severe casualties totaling 1,074, including 359 Canadian troops achieved their objectives, pushing inland, cutting off the Caen–Bayeux road, and advancing farther than any other Allied force on D-Day. The success at Juno Beach demonstrated Canada’s major military contribution to the liberation of Europe and cemented its reputation as a capable and determined Allied power." 
        />

        <ArticleSection
          headline="Holocaust – Auschwitz-Birkenau"
          dateline="October 1, 1941 - January 27, 1945" 
          body="Auschwitz-Birkenau was the largest Nazi concentration and extermination camp, located near the Polish village of Brzezinka, approximately 3.2 kilometres from Auschwitz I. Construction began in 1941 following the annexation of Poland. The camp complex operated from 1940 to 1945 and became a central site of the Holocaust."
          image={{
            caption: "Convoy of Hungarin Jewish women after selection process at Auschwitz. Sourced from https://www.theholocaustexplained.org/the-camps/case-study-auschwitz-birkenau/conditions-inside-auschwitz-birkenau-from-1942/", 
            src: image11
          }}
          body2="Auschwitz-Birkenau was divided into ten sectors, separated by electrified fencing, and included sections for men, women, Roma, and Jewish families. The SS tested Zyklon B gas in 1941, leading to mass gassing operations as part of the “Final Solution,” the Nazi plan to exterminate Jewish people. Over 960,000 Jews were murdered, along with tens of thousands of Poles, Roma, Soviet POWs, and others. Victims were deceived with gas chambers disguised as showers, and their belongings were sorted at the “Kanada” warehouse."
          image2={{
            caption: "Barracks in the Auschwitz-Birkenau camp after liberation. Sourced from https://encyclopedia.ushmm.org/content/en/timeline-event/holocaust/1942-1945/auschwitz-birkenau-camp-established",
            src: image12
          }}
          body3="Historically, Auschwitz-Birkenau symbolizes the extreme brutality and scale of genocide during World War II. Acts of resistance, such as the 1944 revolt that destroyed Crematorium IV, showed prisoner defiance despite overwhelming odds. The camp was liberated by Soviet forces on January 27, 1945, revealing the horrors of the Holocaust to the world and permanently shaping global discussions on human rights, genocide, and justice."
        />
      </div>
    </>
  );
}
