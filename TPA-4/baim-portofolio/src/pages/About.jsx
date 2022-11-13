import AboutComponent from "../components/AboutComponent";
import CardBlog from "../components/CardBlog";
import Nav from "../components/Nav";
export default function About() {
  return (
    <>
      <div className="container">
        <Nav />
        <div className="mt-5">
        <AboutComponent/>
        </div>
      </div>
    </>
  );
}
