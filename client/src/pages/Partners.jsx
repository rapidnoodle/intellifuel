import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import TitleText from "../components/titleText";
import CustomForm from "../components/customForm";

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
      <div className="max-w-screen-md w-11/12 mx-auto my-16 font-thin">
        <h2 className="text-xl font-medium mb-4">Become a Partner</h2>
        <p className="mb-10">If you would like to partner with us, fill out the form below and one of our staff members will get back to you.</p>
        <CustomForm />
      </div>
      <Footer />
    </>
  );
}