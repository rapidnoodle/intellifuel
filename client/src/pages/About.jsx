import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import TitleText from "../components/titleText";

export default function About() {
  return (
    <>
      <Header />
      <Banner title="Our Team" />
      <TitleText
        title="We are a group of Lane Tech High School students presenting our IRIS technology to the world"
      />
      <div className="max-w-screen-md w-11/12 mx-auto my-16">
        <h2 className="text-3xl font-medium text-center mb-5">
          What We've Achieved
        </h2>
        <div className="flex justify-between items-start gap-5 font-thin [&>ul]:list-inside [&>ul]:flex-1 [&>ul]:list-disc">
          <ul>
            <li>Just put stuff that we have achieved</li>
          </ul>
          <ul>
            <li>Make sure we have two columns no matter how many accomplishments we have</li>
          </ul>
        </div>
      </div>
      <TitleText title="Meet the Team" />
      <div class="max-w-screen-lg w-11/12 mx-auto mb-16 [&>div]:gap-10 [&>div]:lg:gap-20">
        <div class="flex justify-center items-center mx-auto flex-col sm:flex-row mb-10 sm:mb-0 [&>div]:max-w-64 [&>div]:sm:max-w-40 [&>div]:lg:max-w-60">
          <div class="w-full aspect-square bg-hero bg-cover bg-no-repeat bg-center rounded-full" />
          <div class="w-full aspect-square bg-hero bg-cover bg-no-repeat bg-center rounded-full" />
        </div>
        <div class="flex justify-center items-center mx-auto flex-col sm:flex-row mb-10 sm:mb-0 [&>div]:max-w-64 [&>div]:sm:max-w-40 [&>div]:lg:max-w-60">
          <div class="w-full aspect-square bg-hero bg-cover bg-no-repeat bg-center rounded-full" />
          <div class="w-full aspect-square bg-hero bg-cover bg-no-repeat bg-center rounded-full" />
          <div class="w-full aspect-square bg-hero bg-cover bg-no-repeat bg-center rounded-full" />
        </div>
        <div class="flex justify-center items-center mx-auto flex-col sm:flex-row [&>div]:max-w-64 [&>div]:sm:max-w-40 [&>div]:lg:max-w-60">
          <div class="w-full aspect-square bg-hero bg-cover bg-no-repeat bg-center rounded-full" />
          <div class="w-full aspect-square bg-hero bg-cover bg-no-repeat bg-center rounded-full" />
        </div>
      </div>
      <Footer />
    </>
  );
}