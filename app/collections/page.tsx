import { getArtwork } from "@/sanity/sanity-utils";



export default async function Collection() {
   
    const artwork = await getArtwork();

    return <div>
        <h1>Collections</h1>
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