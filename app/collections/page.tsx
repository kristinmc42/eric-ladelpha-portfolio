import { getArtwork } from "@/sanity/sanity-utils";



export default async function Collection() {
   
    const artwork = await getArtwork();

    return <div>
        <h1>Collections</h1>
        { 
            artwork.map((art: any, index:number) => {
                console.log(art)
                return (
                    <p key={index}>{art.title}</p>
                )
            })
        }
    </div>
}