import HappyCustomer from "@/components/HomepageComponent/blog";
import LatestProduct from "@/components/HomepageComponent/LatestProduct";
import HomePageAllCategory from "@/components/HomepageComponent/homePageAllCategory";
import Slider from "@/components/HomepageComponent/homeSlider";
import OfficeFurniture from "@/components/HomepageComponent/officeFurniture";
import SpaceCategory from "@/components/HomepageComponent/spaceCategory";
import WhyDreamTuch from "@/components/HomepageComponent/whyDreamTuch";
import Layout from "@/components/Layots/RootLayot";
import Blog from "@/components/HomepageComponent/blog";

export default function HomePage() {
  return (
    <>
      <Slider></Slider>
      <HomePageAllCategory></HomePageAllCategory>
      <LatestProduct></LatestProduct>
      <SpaceCategory></SpaceCategory>
      <OfficeFurniture></OfficeFurniture>
    <Blog></Blog>
      <WhyDreamTuch></WhyDreamTuch>
    </>
  );
}

HomePage.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
