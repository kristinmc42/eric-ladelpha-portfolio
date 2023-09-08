import { getArtByCollection } from "@/sanity/sanity-utils";

type Props = {
    params: {category: string}
}

export default async function Collection({ params }: Props) {
    const slug = params.category
    const artwork = await getArtByCollection(slug);

    return <div>
        <h1>{slug}</h1>
        { 
            artwork.map((art: any) => {
                console.log(art)
                return (
                    <p>{art.title}</p>
                )
            })
        }
    </div>
}