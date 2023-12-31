// import Image from "next/image";

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
              <p>{category}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
