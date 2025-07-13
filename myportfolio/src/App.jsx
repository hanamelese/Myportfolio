import Header from "./Header";
import Home from "./Home";
import Certificate from "./Certificate";
import Work from "./Work";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="certificate">
        <Certificate />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
