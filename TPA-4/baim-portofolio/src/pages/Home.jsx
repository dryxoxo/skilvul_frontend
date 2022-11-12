import CardBlog from "../components/CardBlog";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import PortofolioCard from "../components/PortofolioCard";
import Self from "../components/Self";

export default function Home() {
  return (
    <>
      <div className="container">
        <Nav />
        <Self/>
        <CardBlog/>
        <PortofolioCard/>
      </div>
      <Footer/>
    </>
  );
}
