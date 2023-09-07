import { getArtwork } from "@/sanity/sanity-utils";

export default async function Page() {

    const artwork = await getArtwork();

    return <div>
        <h1>Collections</h1>
        {
            artwork.map((art:any) => (
                <div key={art._id}>
                    <p>{art.title}</p>
                    
                </div>
            ))
        }
    </div>
}