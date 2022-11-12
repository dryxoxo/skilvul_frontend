import Nav from "../components/Nav";
import PortofolioCard from "../components/PortofolioCard";
export default function Portofolio() {
  return (
    <>
      <div className="container">
        <Nav />
        <div className="mt-5">
          <PortofolioCard />
        </div>
      </div>
    </>
  );
}
