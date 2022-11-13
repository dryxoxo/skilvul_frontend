import { Outlet } from "react-router";
import CardBlog from "../components/CardBlog";
import Nav from "../components/Nav";
export default function Blog() {
  return (
    <>
      <div className="container">
        <Nav />
        <div className="mt-5">
        <CardBlog/>
        </div>
      </div>
      <Outlet/>
    </>
  );
}
