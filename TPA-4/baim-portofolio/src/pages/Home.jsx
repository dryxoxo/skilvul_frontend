import CardBlog from "../components/Cardblog";
import Nav from "../components/Nav";
import Self from "../components/Self";

export default function Home() {
  return (
    <>
      <div className="container">
        <Nav />
        <Self/>
        <CardBlog/>
      </div>
    </>
  );
}
