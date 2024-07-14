import Image from "next/image";
import { FollowerPointerCard } from "@/ui/following-pointer";
import { useUser } from "@clerk/nextjs";


export function PointerCard(props: {title: string, description: string, redirectURL: string, imageURL: string}) {
  const { isLoaded, user } = useUser();
  return (
    <div className="w-80 mx-auto">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={user?.firstName || ""}
            avatar={user?.imageUrl || ""}
          />
        }
      >
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            {/* <Image
              src={props.imageURL}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200`}
            /> */}
            <img src={props.imageURL} alt="" className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200`}/>
          </div>
          <div className="p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">
              {props.title}
            </h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500">
              {props.description}
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500">{blogContent.date}</span>
              <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                Read More
              </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Manu Arora",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: "/demo/thumbnail.png",
  authorAvatar: "/manu.png",
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
