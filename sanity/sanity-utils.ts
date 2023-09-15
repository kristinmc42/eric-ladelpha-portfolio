import { client } from "./lib/client";
import { groq } from "next-sanity";

export type ArtType = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  category: string;
  image: string;
  description: string;
};

export async function getArtwork():Promise<ArtType[]> {
  return client.fetch(
    groq`*[_type == "artwork"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            "image": image.asset->url,
            category,
            description
        }`
  );
}

export async function getArtByCollection(selctedCategory: string):Promise<ArtType[]>  {
  switch (selctedCategory) {
    case "portraits":
      return client.fetch(
        groq`*[category == "portraits"]{
                    _id,
                    _createdAt,
                    title,
                    "slug": slug.current,
                    "image": image.asset->url,
                    category,
                    description
                }`
      );
    case "landscapeViews":
      return client.fetch(
        groq`*[category == "landscapeViews"]{
                    _id,
                    _createdAt,
                    title,
                    "slug": slug.current,
                    "image": image.asset->url,
                    category,
                    description
                }`
      );
    case "urbanViews":
      return client.fetch(
        groq`*[category == "urbanViews"]{
                        _id,
                        _createdAt,
                        title,
                        "slug": slug.current,
                        "image": image.asset->url,
                        category,
                        description
                    }`
      );
    case "variousCompositions":
      return client.fetch(
        groq`*[category == "variousCompositions"]{
                            _id,
                            _createdAt,
                            title,
                            "slug": slug.current,
                            "image": image.asset->url,
                            category,
                            description
                        }`
      );
    case "drawings":
      return client.fetch(
        groq`*[category == "drawings"]{
                                _id,
                                _createdAt,
                                title,
                                "slug": slug.current,
                                "image": image.asset->url,
                                category,
                                description
                            }`
      );
      default:
        return client.fetch(
            groq`*[_type == "artwork"]{
                    _id,
                    _createdAt,
                    title,
                    "slug": slug.current,
                    "image": image.asset->url,
                    category,
                    description
                }`
          );
  }
}
