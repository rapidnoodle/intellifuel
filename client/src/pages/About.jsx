import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import TitleText from "../components/titleText";
import CustomForm from "../components/customForm";

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
        <div className="flex justify-between items-start gap-5 font-thin [&>ul]:list-inside [&>ul]:leading-loose [&>ul]:flex-1 [&>ul]:list-disc">
          <ul>
            <li><strong>Innovative Technology Development:</strong> Successfully designed and developed a proprietary technology for predicting oil futures prices using advanced algorithms and data analytics.</li>
            <li><strong>Positive Feedback from Experts:</strong> Garnered positive feedback and endorsements from industry experts and professionals, validating the credibility and effectiveness of our predictive model.</li>
            <li><strong>Expansion and Growth:</strong> Experienced rapid growth and expansion, scaling our operations to meet a possible increase in demand for our predictive analytics services in the oil futures market.</li>
          </ul>
          <ul>
            <li><strong>Accuracy and Reliability:</strong> Achieved high levels of accuracy and reliability in forecasting oil futures prices, validated through extensive backtesting and real-time market data analysis.</li>
            <li><strong>Partnerships and Collaborations:</strong> Formed strategic partnerships and collaborations with CME Group to further enhance the capabilities and reach of our technology.</li>
            <li><strong>Educational Outreach:</strong> Engaged in educational outreach activities to inspire other aspiring young entrepreneurs and technologists, sharing our journey and insights into developing innovative solutions in the technology and finance sectors.</li>
          </ul>
        </div>
      </div>
      <TitleText title="Meet the Team" />
      <div class="max-w-screen-lg w-11/12 mx-auto mb-16 [&>div]:gap-10 [&>div]:lg:gap-20">
        <div class="flex justify-center items-center mx-auto flex-col sm:flex-row mb-10 sm:mb-0 [&>div]:max-w-64 [&>div]:sm:max-w-40 [&>div]:lg:max-w-60">
          <div class="w-full aspect-square bg-[url('/src/assets/michael.png')] bg-cover bg-no-repeat bg-center rounded-full" />
          <div class="w-full aspect-square bg-[url('/src/assets/lillie.jpg')] bg-cover bg-no-repeat bg-center rounded-full" />
        </div>
        <div class="flex justify-center items-center mx-auto flex-col sm:flex-row mb-10 sm:mb-0 [&>div]:max-w-64 [&>div]:sm:max-w-40 [&>div]:lg:max-w-60">
          <div class="w-full aspect-square bg-[url('/src/assets/joaquin.jpg')] bg-cover bg-no-repeat bg-center rounded-full" />
          <div class="w-full aspect-square bg-[url('/src/assets/ari.jpg')] bg-cover bg-no-repeat bg-left rounded-full" />
          <div class="w-full aspect-square bg-[url('/src/assets/nicole.png')] bg-cover bg-no-repeat bg-center rounded-full" />
        </div>
        <div class="flex justify-center items-center mx-auto flex-col sm:flex-row mb-10 sm:mb-0 [&>div]:max-w-64 [&>div]:sm:max-w-40 [&>div]:lg:max-w-60">
          <div class="w-full aspect-square bg-[url('/src/assets/mascis.png')] bg-cover bg-no-repeat bg-center rounded-full" />
          <div class="w-full aspect-square bg-[url('/src/assets/abril.jpg')] bg-cover bg-no-repeat bg-center rounded-full" />
        </div>
      </div>
      <TitleText title="Our Partnerships" message="Our partners are extremely important and help us accomplish our goals" />
      <div className="max-w-screen-md w-11/12 mx-auto mb-16 flex justify-between items-center gap-5 flex-col sm:gap-10 sm:flex-row">
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