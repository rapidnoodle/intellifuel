import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import TitleText from "../components/titleText";
import TextImageSplit from "../components/textImageSplit";
import CustomForm from "../components/customForm";

export default function Home() {
  return (
    <>
      <Header />
      <Banner title="Enterprise Oil Futures" hasButton />
      <TitleText
        title="Our Mission"
        message="Provide a chatbot to help traders make decisions regarding the sale or purchase of oil
          by taking into account external real-world factors that affect the price of oil futures"
      />
      <TextImageSplit
        title="Our Team"
        message="Learn about the members behind the screen and what drew us to this project."
        buttonContent="Learn More"
        buttonLink="/about"
      />
      <TextImageSplit
        title="Why Oil?"
        message="Read this article about the reason why IntelliFuel tracks oil futures rather than other products."
        buttonContent="Read Now"
        flipped
      />
      <TitleText
        title="Contact Us"
        message="If you have any questions, comments, or concerns please contact us here. Thank you!"
      />
      <CustomForm hasBackground />
      <Footer />
    </>
  );
}