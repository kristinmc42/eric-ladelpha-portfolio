"use client" 

import { getArtByCollection, getArtwork } from "@/sanity/sanity-utils";
import { TabGroup, TabList, TabPanel, TabPanels, Tab } from "../components/Tabs";
import classNames from "classnames";
import Gallery from "../components/Gallery";

//types
import { ArtType } from "@/sanity/sanity-utils";


const tabs = [
  {
    key: "all",
    display: "All",
  },
  {
    key: "portraits",
    display: "Portraits",
  },
  {
    key: "landscapeViews",
    display: "Landscape Views",
  },
  {
    key: "urbanViews",
    display: "Urban Views",
  },
  {
    key: "variousCompositions",
    display: "Various Compositions",
  },
  {
    key: "drawings",
    display: "Drawings",
  },
];



export default async function Collections() {
    const artwork:ArtType[] = await getArtwork();

    const portraits:ArtType[] = await getArtByCollection("portraits");
  
    const landscapeViews:ArtType[] = await getArtByCollection("landscapeViews");
  
    const urbanViews:ArtType[] = await getArtByCollection("landscapeViews");
  
    const variousCompositions:ArtType[] = await getArtByCollection("variousCompositions");
  
    const drawings:ArtType[] = await getArtByCollection("drawings");
  return (
    <TabGroup defaultIndex={0}>
      <TabList className="flex items-center gap-12">
        {tabs.map((tab: { key: string; display: string }) => {
          return (
            <Tab
              key={tab.key}
              className={({ selected }) =>
                classNames(
                  "w-full p-2.5 text-base",
                  selected
                    ? "border-none outline-neutral-100 bg-neutral-300 font-bold text-slate-950"
                    : "text-neutral-600 outline-neutral-300 hover:outline-neutral-100 font-medium hover:text-neutral-50"
                )
              }
            >
              {tab.display}
            </Tab>
          );
        })}
      </TabList>
      <TabPanels className="h-full h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
        <TabPanel className="overflow-auto">
          <Gallery artwork={artwork} />
        </TabPanel>
        <TabPanel>
          <Gallery artwork={portraits} />
        </TabPanel>
        <TabPanel>
          <Gallery artwork={landscapeViews} />
        </TabPanel>
        <TabPanel>
          <Gallery artwork={urbanViews} />
        </TabPanel>
        <TabPanel>
          <Gallery artwork={variousCompositions} />
        </TabPanel>
        <TabPanel>
          <Gallery artwork={drawings} />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}

// import { getArtwork } from "@/sanity/sanity-utils";
// import CollectionTabs from "../components/CollectionTabs";
// import Image from "next/image";

// export default async function Collection() {
//   const artwork = await getArtwork();

//   return (
//     <div className="flex flex-col items-center h-full">
//       {/* <CollectionTabs /> */}
//       {artwork.map((art: any, index: number) => {
//         // console.log(art);
//           return(
//           <div className="border">
//               <p key={index+art.title}>{art.title}</p>
//               <p key={index+art.category}>{art.category}</p>
//               <p key={index}>{art.description}</p>
//               <img src={art.image} alt={art.title} key={index+"img"}/>
//         </div>)
//       })}
//     </div>
//   );
// }
