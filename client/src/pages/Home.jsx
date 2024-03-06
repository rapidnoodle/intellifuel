import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import TitleText from "../components/titleText";
import TextImageSplit from "../components/textImageSplit";

export default function Home() {
  return (
    <>
      <Header />
      <Banner title="Enterprise Oil Futures" hasButton />
      <TitleText
        title="Our Mission"
        message="Provide a chatbot to help traders make decisions regarding the sale or purchase of oil
          by taking into account external real-world factors that affect the price of oil"
      />
      <TextImageSplit
        title="About Oil"
        message="Keep up with the latest oil updates"
        buttonContent="Learn More"
      />
      <TextImageSplit
        title="Our Team"
        message="Read about the members behind the screen, and learn what drew us to this project."
        buttonContent="Read Now"
        flipped
      />
      <TitleText
        title="Contact Us"
        message="If you have any questions, comments, or concerns please contact us here. Thank you!"
      />
      <form action="" className="max-w-xl mx-auto bg-light-primary rounded-lg p-5 mb-16 sm:p-10">
        <div className="flex justify-between gap-5 mb-3 flex-col sm:flex-row">
          <div className="flex-1">
            <label className="block mb-1" for="fname">First Name <span className="text-gray-400">(required)</span></label>
            <input className="w-full p-2 rounded-md border border-black" type="text" id="fname" name="fname" required />
          </div>
          <div className="flex-1">
            <label className="block mb-1" for="lname">Last Name</label>
            <input className="w-full p-2 rounded-md border border-black" type="text" id="lname" name="lname" />
          </div>
        </div>
        <label className="block mb-1" for="email">Email <span className="text-gray-400">(required)</span></label>
        <input className="w-full p-2 mb-3 rounded-md border border-black" type="email" id="email" name="email" required />
        <label className="block mb-1" for="message">Message <span className="text-gray-400">(required)</span></label>
        <textarea className="w-full p-2 mb-3 rounded-md border border-black" name="message" id="message" required cols="30" rows="3"></textarea>
        <input className="block mx-auto px-10 py-4 font-medium text-white text-lg bg-primary rounded-lg cursor-pointer transition-colors hover:bg-dark-primary" type="submit" value="Send" />
      </form>
      <Footer />
    </>
  );
}