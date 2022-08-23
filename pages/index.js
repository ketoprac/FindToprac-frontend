import Content from "../components/Content/Content";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Navbar from "../components/Navbar/Navbar";

export default function Home(){
  return(
    <div className="w-100 h-100 d-flex">
      <Navbar />
      <Jumbotron />
      <Content />
    </div>
  )
}