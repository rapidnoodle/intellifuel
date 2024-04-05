import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import PostPreview from "../components/postPreview";

export default function Blog() {
  return (
    <>
      <Header />
      <Banner title="Blog: Project Updates" />
      <PostPreview
        title="About Oil"
        message="Keep up with the latest oil updates"
        date="2/2/24"
        image="bg-hero"
      />
      <PostPreview
        title="About Oil"
        message="Keep up with the latest oil updates"
        date="2/2/24"
        image="bg-hero"
        flipped
      />
      <PostPreview
        title="About Oil"
        message="Keep up with the latest oil updates"
        date="2/2/24"
        image="bg-hero"
      />
      <Footer />
    </>
  );
}