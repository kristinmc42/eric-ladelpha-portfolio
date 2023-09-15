// import { getArtwork } from "@/sanity/sanity-utils";
// import { Tab } from "@headlessui/react";
// import classNames from "classnames";
// import { GetStaticProps } from "next";
// import Gallery from "./Gallery";

// //types
// import { ArtType } from "@/sanity/schemas/artwork";

// type CollectionProps = {
//   artwork: ArtType[];
//   portraits: ArtType[];
//   landscapeViews: ArtType[];
//   urbanViews: ArtType[];
//   variousCompositions: ArtType[];
//   drawings: ArtType[];
// };

// const tabs = [
//   {
//     key: "all",
//     display: "All",
//   },
//   {
//     key: "portraits",
//     display: "Portraits",
//   },
//   {
//     key: "landscapeViews",
//     display: "Landscape Views",
//   },
//   {
//     key: "urbanViews",
//     display: "Urban Views",
//   },
//   {
//     key: "variousCompositions",
//     display: "Various Compositions",
//   },
//   {
//     key: "drawings",
//     display: "Drawings",
//   },
// ];

// export const getStaticProps: GetStaticProps<CollectionProps> = async () => {
//   const artwork = await getArtwork();

//   const portraits = artwork.filter(
//     (art: ArtType) => art.category === "portraits"
//   );
//   const landscapeViews = artwork.filter(
//     (art: ArtType) => art.category === "landscapeViews"
//   );
//   const urbanViews = artwork.filter(
//     (art: ArtType) => art.category === "urbanViews"
//   );
//   const variousCompositions = artwork.filter(
//     (art: ArtType) => art.category === "variousCompositions"
//   );
//   const drawings = artwork.filter(
//     (art: ArtType) => art.category === "drawings"
//   );

//   return {
//     props: {
//       artwork,
//       portraits,
//       landscapeViews,
//       urbanViews,
//       variousCompositions,
//       drawings,
//     },
//   };
// }

// export default function CollectionTabs({
//   artwork,
//   portraits,
//   landscapeViews,
//   urbanViews,
//   variousCompositions,
//   drawings,
// }: CollectionProps) {
//   return (
//     <Tab.Group defaultIndex={0}>
//       <Tab.List className="flex items-center gap-12">
//         {tabs.map((tab: { key: string; display: string }) => {
//           return (
//             <Tab
//               key={tab.key}
//               className={({ selected }) =>
//                 classNames(
//                   "w-full p-2.5 text-base",
//                   selected
//                     ? "border-none outline-neutral-100 bg-neutral-300 font-bold text-slate-950"
//                     : "text-neutral-600 outline-neutral-300 hover:outline-neutral-100 font-medium hover:text-neutral-50"
//                 )
//               }
//             >
//               {tab.display}
//             </Tab>
//           );
//         })}
//       </Tab.List>
//       <Tab.Panels className="h-full h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
//         <Tab.Panel className="overflow-auto">
//           <Gallery artwork={artwork} />
//         </Tab.Panel>
//         <Tab.Panel>
//           <Gallery artwork={portraits} />
//         </Tab.Panel>
//         <Tab.Panel>
//           <Gallery artwork={landscapeViews} />
//         </Tab.Panel>
//         <Tab.Panel>
//           <Gallery artwork={urbanViews} />
//         </Tab.Panel>
//         <Tab.Panel>
//           <Gallery artwork={variousCompositions} />
//         </Tab.Panel>
//         <Tab.Panel>
//           <Gallery artwork={drawings} />
//         </Tab.Panel>
//       </Tab.Panels>
//     </Tab.Group>
//   );
// }
