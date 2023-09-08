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

export async function getArtByCollection(selctedCategory: string) {
    switch (selctedCategory) {
        case "portraits":
            return client.fetch(
                groq`*[category == "portraits"]{
                    _id,
                    _createdAt,
                    title,
                    "slug": slug.current,
                    "image": image.asset,
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
                    "image": image.asset,
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
                        "image": image.asset,
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
                            "image": image.asset,
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
                                "image": image.asset,
                                category,
                                description
                            }`
                        );
    }
    
}