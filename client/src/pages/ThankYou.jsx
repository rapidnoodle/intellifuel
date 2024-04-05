import Header from "../components/header";
import Banner from "../components/banner";
import TitleText from "../components/titleText";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <>
      <Header />
      <Banner title="Thank You!" />
      <TitleText
        title="We deeply appreciate your interest in IntelliFuel, and we will get back to you as soon as possible!"
        message={<Link to="/">Go Back to Home Page</Link>}
      />
      <Footer />
    </>
  );
}