import { client } from "./lib/client";
import { groq } from "next-sanity";

export async function getArtwork() {
    return client.fetch(
        groq`*[_type == "artwork"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            "image": image.asset,
            category,
            description
        }`
    )
}