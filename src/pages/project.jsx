import Footer from "./components/footer";
import Navbar from "./components/navbar";
import HeroParallax from "./components/ui/heroParallax";

const Projects = () => {
  const products = [
    {
      title: "Confused cat",
      thumbnail: "/images/kucing1.jpg",
    },
    {
      title: "Cat selfie",
      thumbnail: "/images/kucing2.jpg",
    },
    {
      title: "Cat melet",
      thumbnail: "/images/kucing3.jpg",
    },
    {
      title: "Blinking cat",
      thumbnail: "/images/kucing4.jpg",
    },
    {
      title: "Starboy cat",
      thumbnail: "/images/kucing5.jpg",
    },
    {
      title: "Smoking cat",
      thumbnail: "/images/kucing6.jpg",
    },
    {
      title: "Sulking cat",
      thumbnail: "/images/kucing7.jpg",
    },
    {
      title: "Cat gojo satoru",
      thumbnail: "/images/kucing8.jpg",
    },
    {
      title: "Strange cat",
      thumbnail: "/images/kucing9.jpg",
    },
    {
      title: "Disobedient cat",
      thumbnail: "/images/kucing10.jpg",
    },
    {
      title: "Funny cat",
      thumbnail: "/images/kucing11.jpg",
    },
    {
      title: "Confused cat",
      thumbnail: "/images/kucing1.jpg",
    },
    {
      title: "Cat selfie",
      thumbnail: "/images/kucing2.jpg",
    },
    {
      title: "Cat melet",
      thumbnail: "/images/kucing3.jpg",
    },
    {
      title: "Blinking cat",
      thumbnail: "/images/kucing4.jpg",
    },
  ];
  return (
    <>
      <Navbar />
      <HeroParallax products={products} />
      <Footer />
    </>
  );
};

export default Projects;
