"use client"

import { Tab } from "@headlessui/react";
import classNames from "classnames";

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


export default function CollectionTabs() {
    return (
        <Tab.Group defaultIndex={0}>
        <Tab.List className="flex items-center gap-12">
          {tabs.map((tab: { key: string; display: string }) => {
            return (
                <Tab key={tab.key}
                    className={({ selected }) => 
                        classNames("w-full p-2.5 text-base",
                            selected ? "border-none outline-neutral-100 bg-neutral-300 font-bold text-slate-950" : "text-neutral-600 outline-neutral-300 hover:outline-neutral-100 font-medium hover:text-neutral-50")}
                >
                    {tab.display}
              </Tab>
            );
          })}
        </Tab.List>
            <Tab.Panels className="h-full h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
            {tabs.map((tab: { key: string; display: string }) => {
            return (
              <Tab.Panel key={tab.key} className="overflow-auto">
                    <p>{tab.display}</p>
              </Tab.Panel>
            );
          })}
          <Tab.Panel className="overflow-auto"></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    )
}