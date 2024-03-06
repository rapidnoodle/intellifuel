import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import TitleText from "../components/titleText";

export default function Partners() {
  return (
    <>
      <Header />
      <Banner title="Partnerships" />
      <TitleText title="Our partners are extremely important and help us accomplish our goals" />
      <div className="max-w-screen-md w-11/12 mx-auto my-16 flex justify-between items-center gap-5 flex-col sm:gap-10 sm:flex-row">
        <div className="w-full max-w-xs aspect-[4/3] bg-cme bg-contain bg-no-repeat bg-center"></div>
        <div className="w-full max-w-xs aspect-[4/3] bg-lane bg-contain bg-no-repeat bg-center"></div>
      </div>
      <div class="max-w-screen-md w-11/12 mx-auto my-16 font-thin">
        <h2 class="text-xl font-medium mb-4">Become a Partner</h2>
        <p>If you would like to partner with us, fill out the form below and one of our staff members will get back to you. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <form action="" class="mx-auto py-5 sm:py-10">
          <div class="flex justify-between gap-5 mb-3 flex-col sm:flex-row">
            <div class="flex-1">
              <label class="block mb-1" for="fname">First Name <span class="text-gray-400">(required)</span></label>
              <input class="w-full p-2 rounded-md border border-black" type="text" id="fname" name="fname" />
            </div>
            <div class="flex-1">
              <label class="block mb-1" for="lname">Last Name</label>
              <input class="w-full p-2 rounded-md border border-black" type="text" id="lname" name="lname" />
            </div>
          </div>
          <label class="block mb-1" for="email">Email <span class="text-gray-400">(required)</span></label>
          <input class="w-full p-2 mb-3 rounded-md border border-black" type="email" id="email" name="email" required />
          <label class="block mb-1" for="message">Message <span class="text-gray-400">(required)</span></label>
          <textarea class="w-full p-2 mb-3 rounded-md border border-black" name="message" id="message" required cols="30" rows="3"></textarea>
          <input class="block px-10 py-4 font-medium text-white text-lg bg-primary rounded-lg cursor-pointer transition-colors hover:bg-dark-primary" type="submit" value="Submit" />
        </form>
      </div>
      <Footer />
    </>
  );
}