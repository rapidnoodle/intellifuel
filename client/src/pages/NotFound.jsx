import Header from "../components/header";
import Banner from "../components/banner";
import TitleText from "../components/titleText";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Header />
      <Banner title="Error 404: Not Found" />
      <TitleText
        title="Oops! It looks like you got lost because this page does not exist!"
        message={<Link to="/">Go Back to Home Page</Link>}
      />
      <Footer />
    </>
  );
}