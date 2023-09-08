import Image from "next/image";
import Link from "next/link";

// This is the Main page

export default function Home() {
  const categories = [
    "portraits",
    "landscapeViews",
    "urbanViews",
    "variousCompositions",
    "drawings",
  ];

  return (
    <>
      <h2>Collections</h2>
      <ul>
        {categories.map((category: string, index: number) => {
          return (
            <li key={index}>
              <Link href={`/collections/${category}`}>{category}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
