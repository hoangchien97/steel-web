import Image from "next/image";
import { getHomePage } from "../../../sanity/lib/apis";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import LoadingSpinner from "./loading";

const Home = async () => {
  const homePage: any = await getHomePage();
  if (!homePage) return <LoadingSpinner />;
  return (
    <main>
      <HeroSection images={homePage.images} />
    </main>
  );
};

export default Home;
