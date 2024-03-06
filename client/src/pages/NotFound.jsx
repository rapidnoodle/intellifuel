import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Header />
      <Banner title="Error 404: Not Found" />
      <Link to="/">Go Back to Home Page</Link>
      <Footer />
    </>
  );
}