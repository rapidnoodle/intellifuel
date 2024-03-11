import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import TitleText from "../components/titleText";

export default function Contacts() {
  return (
    <>
      <Header />
      <Banner title="Contact Information" />
      <TitleText title="Contact Us Today" />
      <div className="max-w-screen-md w-11/12 mx-auto my-16 flex justify-between items-center gap-5 flex-col sm:gap-10 sm:flex-row">
        <div className="w-full max-w-md aspect-[4/3] bg-hero bg-cover bg-no-repeat bg-center"></div>
        <div>
          <p className="text-lg font-thin text-center sm:text-left">
            2501 W Addison St<br/>
            Chicago, IL 60618<br/>
            (773) 534-5400<br/>
            <br/>
            Monday – Friday: 8AM – 3PM<br/>
            Saturday-Sunday: Closed
          </p>
        </div>
      </div>
      <div className="max-w-screen-md w-11/12 mx-auto my-16">
        <h3 className="text-xl font-medium mb-8">Email</h3>
        <div className="text-lg font-thin mb-8">
          <h4>General Inquiries</h4>
          <p className="text-gray-400 underline"><a href="mailto:intellifueltech@gmail.com">intellifueltech@gmail.com</a></p>
        </div>
        <div className="text-lg font-thin">
          <h4>Partnerships</h4>
          <p className="text-gray-400 underline"><a href="mailto:GlobalSalesDesk@cmegroup.com">GlobalSalesDesk@cmegroup.com</a></p>
          <p className="text-gray-400 underline"><a href="mailto:admin@lanetech.org">admin@lanetech.org</a></p>
        </div>
      </div>
      <Footer />
    </>
  );
}