import Header from "./components/header/header";              /*xoa bo bot 1 tep*/
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Navbar from "./components/nav/nav";
import Members from "./components/members/members";
import Footer from "./components/footer/footer";

function WebContent() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
export default WebContent;
