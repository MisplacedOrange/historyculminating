export const railData = [
  {
    id: 0,
    title: "Canadian Theatre",
    description: "Canadian military operations and contributions during World War II, including major battles and strategic victories that shaped the war's outcome.",
    newspaper: {
      issue: "JUNE",
      category: "WAR NEWS",
      date: "6 June 1944",
      pullQuote: "Canadian forces storm Juno Beach, marking a pivotal moment in the liberation of Europe",
      sections: [
        {
          headline: "D-Day: Juno Beach Assault",
          byline: "War Correspondent",
          body: "Canadian forces landed on Juno Beach as part of Operation Overlord, facing fierce German resistance. Despite heavy casualties in the initial waves, Canadian troops pushed inland farther than any other Allied force on D-Day.\n\nThe 3rd Canadian Infantry Division, supported by the 2nd Canadian Armoured Brigade, overcame fortified positions and established a crucial beachhead. Their success on Juno Beach contributed significantly to the eventual liberation of France and Western Europe.",
          image: {
            caption: "Canadian troops advance from Juno Beach, June 6, 1944"
          }
        },
        {
          headline: "Vimy Ridge Legacy",
          byline: "Military Historian",
          body: "The Battle of Vimy Ridge in World War I established Canada's military reputation and national identity. This strategic victory demonstrated Canadian military capability and innovation in warfare tactics.\n\nThe coordinated assault using creeping barrage and extensive planning became a model for future operations. Vimy Ridge remains a symbol of Canadian sacrifice and achievement in military history.",
          image: {
            caption: "Vimy Ridge Memorial stands as testament to Canadian sacrifice"
          }
        }
      ]
    }
  },
  {
    id: 1,
    title: "Pacific Theatre",
    description: "Critical battles and operations in the Pacific theater, including major turning points that determined the course of the war against Japan.",
    newspaper: {
      issue: "DECEMBER",
      category: "PACIFIC WAR",
      date: "7 December 1941",
      pullQuote: "A date which will live in infamy - the attack that drew America into global conflict",
      sections: [
        {
          headline: "Pearl Harbor Under Attack",
          byline: "Pacific Correspondent",
          body: "Japanese forces launched a surprise military strike against the United States naval base at Pearl Harbor, Hawaii. The attack came in two waves, targeting battleships and aircraft.\n\nEight battleships were damaged or destroyed, and over 2,400 Americans lost their lives. The attack prompted the United States' entry into World War II, fundamentally changing the course of the conflict.",
          image: {
            caption: "USS Arizona burns during the Pearl Harbor attack"
          }
        },
        {
          headline: "Battle of Hong Kong",
          byline: "Asian Theatre Reporter",
          body: "Canadian forces defended Hong Kong against overwhelming Japanese invasion forces. Despite valiant resistance, the garrison was forced to surrender on Christmas Day 1941.\n\nThe battle demonstrated the beginning of Japan's Pacific expansion and the challenges Allied forces would face in the region. Canadian prisoners of war endured harsh treatment during years of captivity.",
          image: {
            caption: "Canadian soldiers defend Hong Kong positions"
          }
        }
      ]
    }
  },
  {
    id: 2,
    title: "European Theatre",
    description: "The European theater of World War II, encompassing the Holocaust, liberation campaigns, and post-war justice proceedings.",
    newspaper: {
      issue: "JANUARY",
      category: "EUROPEAN WAR",
      date: "27 January 1945",
      pullQuote: "Liberation of Auschwitz reveals the full horror of the Holocaust to the world",
      sections: [
        {
          headline: "Auschwitz-Birkenau Liberated",
          byline: "Eastern Front Correspondent",
          body: "Soviet forces entered the Auschwitz concentration camp complex, discovering the remnants of Nazi Germany's systematic genocide. The liberation revealed the unprecedented scale of atrocities committed against Jewish people and other victims.\n\nSurvivors' testimonies and physical evidence documented the industrialized murder of over one million people at this single camp. The liberation marked a crucial moment in documenting crimes against humanity.",
          image: {
            caption: "Soviet forces arrive at Auschwitz gates, January 1945"
          }
        },
        {
          headline: "Nuremberg Trials Begin",
          byline: "International Justice Reporter",
          body: "Allied powers established the International Military Tribunal to prosecute major war criminals. The trials set precedents for international law and accountability for crimes against humanity.\n\nTwenty-four Nazi leaders faced charges including conspiracy to wage war, war crimes, and crimes against humanity. The proceedings established legal frameworks still relevant to international justice today.",
          image: {
            caption: "Defendants sit in the dock at Nuremberg"
          }
        }
      ]
    },
    events: [
      {
        id: 6,
        title: "Holocaust - Auschwitz-Birkenau",
        description: `
Location & Purpose Auschwitz-Birkenau (Auschwitz II) was constructed in 1941 near the village of Brzezinka, approximately 3.2 km from Auschwitz I. Built following Nazi Germany’s annexation of Poland, it was designed to dramatically expand the camp system and became the primary extermination site within the Auschwitz complex.

Scale of the Holocaust

Between 1940 and 1945, an estimated 1.1 million people were murdered at Auschwitz I–III. The majority—approximately 960,000—were Jews killed as part of the Nazi “Final Solution,” the state-organized genocide of European Jewry. Tens of thousands of Poles, Roma, Soviet prisoners of war, and individuals from other nationalities were also murdered, making Auschwitz-Birkenau the deadliest killing center of the Holocaust.

Industrialized Mass Murder

Auschwitz-Birkenau exemplified the industrialization of genocide. In 1942, the SS shifted gassing operations to Birkenau, first using converted farmhouses and later four large crematoria equipped with gas chambers and ovens. Zyklon B was used to murder men, women, and children immediately upon arrival after a rapid selection process, with gas chambers disguised as showers to deceive victims.

Camp Structure & Control

The camp was divided into ten fenced sectors, including separate areas for men, women, Roma prisoners, and Jewish families from the Theresienstadt ghetto. Guarded by SS soldiers and dogs, the camp’s rigid organization reflected the bureaucratic efficiency with which the Nazi regime carried out mass murder and forced labor.

Resistance & Liberation

Despite extreme conditions, prisoners resisted. On October 7, 1944, inmates destroyed Crematorium IV during an uprising using smuggled explosives. As Soviet forces advanced, the SS attempted to destroy evidence of the killings. On January 27, 1945, Soviet troops liberated approximately 7,000 survivors, revealing the full scale of Nazi atrocities to the world.

Lasting Legacy

Auschwitz-Birkenau stands as the most powerful symbol of the Holocaust, representing the consequences of state-sponsored hatred, dehumanization, and unchecked power. Its history serves as a permanent warning and a global reminder of the need to confront genocide, antisemitism, and human rights violations wherever they occur.`,
        image: "https://via.placeholder.com/400x250/4a4335/ffffff?text=Holocaust"
      },
      {
        id: 8,
        title: "Nuremberg Trials",
        description: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`,
        image: "https://via.placeholder.com/400x250/3c3629/ffffff?text=Nuremberg"
      }
    ]
  },
  {
    id: 3,
    title: "Home Front",
    description: "Domestic impacts of World War II, including economic challenges, social transformations, and civil rights developments on the home front.",
    newspaper: {
      issue: "MARCH",
      category: "DOMESTIC NEWS",
      date: "15 March 1933",
      pullQuote: "Economic hardship transforms society as nations struggle through unprecedented depression",
      sections: [
        {
          headline: "Great Depression Grips Canada",
          byline: "Economic Affairs Reporter",
          body: "The Great Depression devastated Canadian economy and society throughout the 1930s. Unemployment reached unprecedented levels, with nearly one-third of the workforce without jobs at the depression's peak.\n\nPrairie provinces faced additional hardship from severe drought and dust storms. The economic crisis prompted significant government intervention and social welfare reforms that would shape Canadian policy for decades.",
          image: {
            caption: "Unemployed workers line up for relief assistance"
          }
        },
        {
          headline: "Bill of Rights Strengthens Democracy",
          byline: "Constitutional Correspondent",
          body: "Post-war period saw nations strengthening constitutional protections for individual rights and freedoms. The recognition of fundamental rights emerged from wartime experiences and atrocities.\n\nThese legal frameworks established protections for speech, religion, assembly, and due process. The codification of rights represented a commitment to preventing totalitarian abuses witnessed during the war.",
          image: {
            caption: "Citizens celebrate new constitutional protections"
          }
        }
      ]
    }
  },
  {
    id: 4,
    title: "Post-War Era",
    description: "The aftermath of World War II, including the emergence of the Cold War and the beginning of the Space Age that defined the second half of the 20th century.",
    newspaper: {
      issue: "OCTOBER",
      category: "POST-WAR",
      date: "4 October 1957",
      pullQuote: "From world war to cold war, from earth to space - humanity enters a new era",
      sections: [
        {
          headline: "Cold War Tensions Rise",
          byline: "International Relations Editor",
          body: "The alliance between Western democracies and Soviet Union fractured rapidly after World War II. Ideological differences and geopolitical competition created global tensions that would define the next four decades.\n\nThe Iron Curtain descended across Europe, dividing the continent into opposing spheres of influence. Nuclear weapons created a precarious balance of power through mutual assured destruction, while proxy wars erupted across Asia, Africa, and Latin America.",
          image: {
            caption: "Berlin Wall symbolizes Cold War division"
          }
        },
        {
          headline: "Space Race Begins",
          byline: "Science & Technology Reporter",
          body: "Soviet launch of Sputnik in 1957 shocked the world and accelerated the Space Race. The competition to achieve spaceflight milestones became a proxy for technological and ideological superiority.\n\nThe United States responded with increased investment in science education and space technology. The race culminated with the Apollo 11 moon landing in 1969, demonstrating human capacity for extraordinary achievement even amid geopolitical conflict.",
          image: {
            caption: "Rocket launch marks new chapter in human exploration"
          }
        }
      ]
    }
  }
];
