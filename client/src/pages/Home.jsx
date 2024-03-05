import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner title="Enterprise Oil Futures" hasButton />
      <p>home page</p>
      <Footer />
    </>
  )
}