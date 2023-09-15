// this will be the basis for the individual collection pages
"use client"

// import LightGalleryComponent from "lightgallery/react";
// import { LightGallery } from "lightgallery/lightgallery";
import { useRef } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { getArtwork } from "@/sanity/sanity-utils";

// import styles
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";

// types
import { ArtType } from "@/sanity/sanity-utils";
type GalleryProps = {
    artwork: ArtType[]
}

export default async function Gallery({ artwork }:GalleryProps) {
   
    return (
        <>
             <Masonry breakpointCols={2} className="flex gap-4" columnClassName="">
        {artwork.map((art:ArtType, index:number) => (
          <div className="relative" key={index}>
            <Image
              src={art.image}
              width={400}
              height={400}
              alt={art.title}
              className="relative my-4"
            //   placeholder="blur"
            //   blurDataURL={art.blurDataURL}
            />
            <div
              className="absolute w-full h-full inset-0 bg-transparent hover:bg-stone-900 hover:bg-opacity-10 cursor-pointer"
              onClick={() => {
                // lightboxRef.current?.openGallery(index);
              }}
            ></div>
          </div>
        ))}
      </Masonry>
        </>
    )
}