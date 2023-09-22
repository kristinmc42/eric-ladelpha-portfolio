import Link from "next/link";

type CategoryType = {
  key: string,
  display: string
}

const categories:CategoryType[] = [
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

export default function Collections() {
  

  return (
    <>
      <h2>Collections</h2>
      <ul>
        {categories.map((category: CategoryType, index: number) => {
          return (
            <li key={index}>
               <Link key={`${category.key}-${index}`} href={`/collections/${category.key}`} className="hover:underline">{category.display}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// import {
//   TabGroup,
//   TabList,
//   TabPanel,
//   TabPanels,
//   Tab,
// } from "../components/Tabs";
// import classNames from "../components/Classnames";
// import Link from "next/link";

// const tabs = [
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

// export default async function Collections() {
//   return (
//     <TabGroup defaultIndex={0}>
//       <TabList className="flex items-center gap-12">
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
//       </TabList>
//       <TabPanels className="h-full h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
//         {tabs.map((tab: { key: string; display: string }, index: number) => {
         
//           return (
//             <TabPanel className="overflow-auto" key={`tab${index}`}>
//               <Link href={`/collections/${tab.key}`} key={index} className="flex place-content-center">{tab.display}</Link>
//             </TabPanel>
//           );
//         })}
//       </TabPanels>
//     </TabGroup>
//   );
// }
