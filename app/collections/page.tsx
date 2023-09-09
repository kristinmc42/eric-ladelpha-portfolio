

import { getArtwork } from "@/sanity/sanity-utils";
import CollectionTabs from "../components/CollectionTabs";



export default async function Collection() {
  const artwork = await getArtwork();

  return (
    <div className="flex flex-col items-center h-full">
      <CollectionTabs />
      {artwork.map((art: any, index: number) => {
        console.log(art);
        return <p key={index}>{art.title}</p>;
      })}
    </div>
  );
}
