import { getArtByCollection } from "@/sanity/sanity-utils";
import Image from "next/image";
import Masonry from "../../components/Masonry";

// types
import { ArtType } from "@/sanity/sanity-utils";
type CollectionProps = {
  params: { category: string };
};

export default async function Collection({ params }: CollectionProps) {
  const category = params.category;

  const artwork = await getArtByCollection(category);

  let header = "";

  switch (category) {
    case "portraits":
      header = "Portraits";
      break
    case "landscapeViews":
      header = "Landscape Views";
      break
    case "urbanViews":
      header = "Urban Views";
      break
    case "variousCompositions":
      header = "Various Compositions";
      break
    case "drawings":
      header = "Drawings";
      break
  }

  return (
    <>
      <h1 className="text-center font-bold text-3xl uppercase text-neutral-500 py-5">{header}</h1>
      <Masonry breakpointCols={2} className="flex gap-4" columnClassName="">
        {artwork.map((art: ArtType, index: number) => (
          <div className="relative" key={index}>
            {art.image && (
              <Image
                src={art.image}
                width={400}
                height={400}
                alt={art.title}
                className="relative object-cover my-4"
                //   placeholder="blur"
                //   blurDataURL={art.blurDataURL}
              />
            )}
            {/* <div
              className="absolute w-full h-full inset-0 bg-transparent hover:bg-stone-900 hover:bg-opacity-10 cursor-pointer"
              onClick={() => {
                // lightboxRef.current?.openGallery(index);
              }}
            ></div> */}
          </div>
        ))}
      </Masonry>
    </>
  );
}
