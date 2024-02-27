import Image from "next/image";
import { getHomePage } from "../../../sanity/lib/apis";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import LoadingSpinner from "./loading";

const Home = async () => {
  const homePage: any = await getHomePage();
  if (!homePage) return <>Loading</>;
  return (
    <main className="w-full">
      <HeroSection images={homePage.images} />
      {/* <div>
        <div>Populate me with Sanity Content</div>
        <div>{JSON.stringify(homePage)}</div>
      </div> */}
    </main>
  );
};

export default Home;
