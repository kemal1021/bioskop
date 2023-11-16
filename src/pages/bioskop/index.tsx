import React, { useState, useEffect } from "react";
import styles from "../../styles/index.module.css";
import NewPage from "../components/NewPage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoModal from "../components/VideoModal";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  autoplay: true,
  autoplaySpeed: 10000,
  draggable: true,
  swipe: true,
};

const CustomSlide = ({ className, children }) => (
  <div className={`${className} flex justify-center items-center`}>
    {children}
  </div>
);

export default function Index() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [youtube, setYoutube] = useState("");
  const [backgroundImage2, setBackgroundImage2] = useState("");
  const [isClint, setClint] = useState(false)
  const isAuth = () => {
    return true; // Replace this with your actual authentication logic.
  };

  useEffect(() => {
    setClint(isAuth())
    const handleScroll = () => {


     
      const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const backgroundImages = [
      {
        url: "move1.jpg",
        title: "Spartacus",
        description:
          "The film stars Kirk Douglas as the rebel slave Spartacus and Laurence Olivier as his enemy, the Roman general and politician Marcus Licinius Crassus. Other cast members include Peter Ustinov (who won an Academy Award in Best Supporting Actor for his role as slave trader Lentulus Batiatus), John Gavin (as Julius Caesar), Jean Simmons, Charles Laughton, John Ireland, Herbert Lom, Woody Strode, Tony Curtis, John Dall and Charles McGraw",
        link: "https://www.youtube.com/watch?v=WSWtCLBrrAk&t=29s",
      },
      {
        url: "fantasicFour.jpg",
        title: "Fantastic Four",
        description:
          "Synopsis Fantastic Four tells the story of four  scientists who go on a mission to outer space after learning that a cosmic energy is approaching Earth. However, the four scientists named Reed Richards (Ioan Gruffudd), Sue Storm (Jessica Alba), Johnny Storm (Chris Evans), and Ben Grimm (Michael Chiklis) are actually hit by this cosmic energy. In fact, Victor Von Doom (Julian McMahon who took part in the expedition, burned his face.",
        link: "https://www.youtube.com/watch?v=_rRoD28-WgU",
      },
      {
        url: "mortalkombat.jpg",
        title: "Mortal Kombat",
        description:
          "Hunted by the fearsome warrior Sub-Zero, MMA fighter Cole Young finds sanctuary at the temple of Lord Raiden. Training with experienced fighters Liu Kang, Kung Lao and the rogue mercenary Kano, Cole prepares to stand with Earth's greatest champions to take on the enemies from Outworld in a high-stakes battle for the universe.",
        link: "https://www.youtube.com/watch?v=-BQPKD7eozY",
      },
      {
        url: "the_great_wall.jpg",
        title: "The Great Wall",
        description:
          "When a mercenary warrior (Matt Damon) is imprisoned within the Great Wall, he discovers the mystery behind one of the greatest wonders of the world. As wave after wave of marauding beasts besiege the massive structure, his quest for fortune turns into a journey toward heroism as he joins a huge army of elite warriors to confront the unimaginable and seemingly unstoppable force.",
        link: "https://www.youtube.com/watch?v=avF6GHyyk5c",
      },
    ];

    const getRandomBackgroundImage = () => {
      const randomIndex = Math.floor(Math.random() * backgroundImages.length);
      return backgroundImages[randomIndex];
    };

    const updateBackgroundImage = () => {
      const randomImage = getRandomBackgroundImage();
      setBackgroundImage(`url(${randomImage.url})`);
      setCurrentTitle(randomImage.title);
      setCurrentDescription(randomImage.description);
      setYoutube(randomImage.link);

      const randomImage2 = getRandomBackgroundImage();
      setBackgroundImage2(`url(bg2.jpg)`);
    };

    updateBackgroundImage();
  }, []);

 
  return (
    <div className="bg-black w-auto mx-auto">
      <div className="relative h-screen">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundImage: backgroundImage,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "brightness(0.3)", // Mengatur tingkat kegelapan
          }}
        ></div>
        <nav className="absolute w-full relative flex mx-7 py-1 top-0 ">
          <div className="relative flex mx-7 py-5">
            <h1 className={`${styles["text-"]}`}>
              <span className="text-red-600 text-4xl font-bold">NETFLIX</span>
            </h1>

            <div className="py-1 mx-5">
              <a href="#" className="text-xs mx-4 font-bold text-white">
                Home
              </a>
              <a href="#" className="text-xs mx-4 opacity-90 text-white">
                TV Shows
              </a>
              <a href="#" className="text-xs mx-4 opacity-90 text-white">
                Movie
              </a>
              <a href="#" className="text-xs mx-4 opacity-90 text-white">
                New Popular
              </a>
              <a href="#" className="text-xs mx-4 opacity-90 text-white">
                My List
              </a>
            </div>
          </div>
        </nav>
        <div className="flex-row relative mx-28 py-56 text-white w-5/12 h-14">
          <h1 className="text-5xl ralative font-bold absolute">
            {currentTitle}
          </h1>
          <p className="py-16 font-lg font-sans capitalize">
            {currentDescription}
            <div className="flex relative py-6">
              <button className="btn mx-4 w-32 bg-white text-black relative">
                play
              </button>
              {isClint && (
                <>
                  <div id="root">
                    <button
                      className="btn relative"
                      onClick={() => setIsModalOpen(true)}
                      style={{ zIndex: 10 }}
                    >
                      More Info
                    </button>
                    <VideoModal
                      videoUrl={youtube}
                      isOpen={isModalOpen}
                      currentImage={currentTitle}
                      currentTitle={currentTitle}
                    />
                  </div>
                </>
              )}
            </div>
          </p>
        </div>
      </div>

      <NewPage currentImage={currentImage} />
      <div className="relative h-screen">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: setBackgroundImage2,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "brightness(0.3)", // Mengatur tingkat kegelapan
          }}
        ></div>

        <div
          className="absolute inset-0 bg-blur"
          style={{
            backgroundImage: backgroundImage2,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "blur(10px)", // Mengatur tingkat blur
          }}
        ></div>
        <span
          variant="h5"
          text="10px"
          component="h5"
          color="white"
          className="font-sans font-medium text-2xl mx-3 relative bg-none"
        >
          Fav
        </span>
        <Slider {...settings} arrows={false}>
          <CustomSlide className="w-full h-auto top-0  py-6 mx-3 transition-all duration-500 ease-in-out">
            <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
              <img
                src="move1.jpg"
                className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 transform transition-transform cursor-pointer rounded-3xl"
              />
            </div>
            <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
              <img
                src="move1.jpg"
                alt="move 2"
                className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
              />
            </div>
            <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
              <img
                src="move2.jpg"
                alt="move 3"
                className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
              />
            </div>
            <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
              <img
                src="move3.jpg"
                alt="move 3"
                className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
              />
            </div>
            <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
              <img
                src="move2.jpg"
                alt="move 3"
                className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
              />
            </div>
          </CustomSlide>
          <CustomSlide className="w-full h-auto top-0  py-6 mx-3 transition-all duration-500 ease-in-out">
            <div className="w-5/12 w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
              <img
                src="black_widow.jpg"
                alt="move 1"
                className=" w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
              />
            </div>
            <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
              <img
                src="DAW3.jpg"
                alt="move 2"
                className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
              />
            </div>
            <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
              <img
                src="fastx.jpg"
                alt="move 3"
                className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
              />
            </div>
            <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
              <img
                src="fisher.jpg"
                alt="move 3"
                className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
              />
            </div>
            <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
              <img
                src="five_night.jpg"
                alt="move 3"
                className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xlß"
              />
            </div>
          </CustomSlide>
        </Slider>
      </div>
    </div>
  );
}
