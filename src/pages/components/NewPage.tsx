import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@mui/material";
import Slider from "react-slick"; // Keep only this import
import Cookies from "universal-cookie";

const NewPage: React.FC = () => {
  const router = useRouter(); // Use useRouter() from Next.js
  const cookies = new Cookies();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: true,
    swipe: true,
  };

  const CustomSlide = ({ className, children, photoName }) => (
    <div className={`${className} flex justify-center items-center`}>
      {/* Tambahkan elemen berisi nama foto atau informasi lainnya */}
      <span>{photoName}</span>
      {children}
    </div>
  );

  // ...

  const slideData = [
    {
      image: `the_great_wall.jpg`,
      link: `the_great_wall`,
      logo: `thegreatwawll_logo`,
      title: "The Great Wall",
      info: "2023 | 13+ | 2h 10m | Comedies",
      desc: "The Great Wall (Chinese: 長城) is a 2016 monster film directed by Zhang Yimou, with a screenplay by Carlo Bernard, Doug Miro and Tony Gilroy, from a story by Max Brooks, Edward Zwick and Marshall Herskovitz. An American and Chinese co-production starring Matt Damon, Jing Tian, Pedro Pascal, Willem Dafoe, and Andy Lau, the plot.",
      staring:
        "Matt Damon, Jinf Tian, Willem Dafoe, Pedro Pascal, Andy Lau, Hanyu Zhang, Ryan Zheng, Lu Han",
    },
    {
      image: "mortalkombat.jpg",
      link: "mortalkombat",
      logo: "mortalkombat_logo",
      title: "Mortal Kombat",
      info: "2019 | 17+ | 2h 5m | Comedies",
      desc: "MMA fighter Cole Young, accustomed to taking hits for money, is unaware of his heritage-or why the Emperor of Outworld Shang Tsung has sent his best warrior, Sub-Zero.",
      staring: "Jessica, Hiroyuki Sanada, Lewis Tan, Joe Taslim, Ludi Lin",
    },
    {
      image: "fantasicFour.jpg",
      link: "fantasicFour",
      logo: "fantasicFour_logo",
    },
    {
      image: "move4.jpg",
      link: 3,
      id: 3,
    },
    {
      image: "move4.jpg",
      link: 3,
      id: 3,
    },
  ];

  const data = slideData[0];
  const data2 = slideData[1];
  const data3 = slideData[2];

  useEffect(() => {
    const cookiesDell = cookies.getAll();

    Object.keys(cookiesDell).forEach((name) => {
      cookies.remove(name);
    });
  });

  const pacarSaya = ['putri','angel','putri']

  pacarSaya.forEach((pacar ,e) => {
    console.log("pacar ke saya " ,e +1 , "adalah" , pacar)
  });

  const handleImageClick = (link:any, logo:any, title:any, info:any, desc:any, staring:any) => {
    // Simpan data ke localStorage sebelum melakukan navigasi ke halaman baru
    cookies.set("selectedLink", link);
    cookies.set("selectedLogo", logo);
    cookies.set("selectedTitle", title);
    cookies.set("selectedInfo", info);
    cookies.set("selectedDesc", desc);
    cookies.set("selectedStaring", staring);

    // Mendapatkan URL sesuai dengan link yang diklik
    const url = `/bioskop/${link}`;
    // Navigasi ke halaman baru dengan URL yang sesuai
    router.push({
      pathname: url,
    });
  };
  return (
    <div className="  h-full bg-black w-full  " style={{ marginBottom: "" }}>
      <Typography
        variant="h5"
        component="h5"
        color="white"
        className="font-sans font-medium text-2xl mx-3"
        style={{ marginBottom: "" }} // Menambahkan margin atas sebesar 50px
      >
        Tranding Now
      </Typography>{" "}
      <Slider {...settings} arrows={false}>
        <CustomSlide className="w-6/10 h-96 top-0 py-6 mx-3 transition-all duration-500 ease-in-out">
          <div
            onClick={() =>
              handleImageClick(
                data.link,
                data.logo,
                data.title,
                data.info,
                data.desc,
                data.staring
              )
            }
            className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]"
          >
            <img
              src={slideData[0].image}
              className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl cursor-pointer"
            />
          </div>
          <div
            onClick={() =>
              handleImageClick(
                data2.link,
                data2.logo,
                data2.title,
                data2.info,
                data2.desc,
                data2.staring
              )
            }
            className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]"
          >
            <img
              src={slideData[1].image}
              className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl cursor-pointer"
            />
          </div>{" "}
          <div
            onClick={() =>
              handleImageClick(
                data3.link,
                data3.logo,
                data3.title,
                data3.info,
                data3.desc,
                data3.staring
              )
            }
            className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]"
          >
            <img
              src={slideData[2].image}
              className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl cursor-pointer"
            />
          </div>
        </CustomSlide>

        <CustomSlide className="w-full h-96 top-0  py-6 mx-3 transition-all duration-500 ease-in-out">
          <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
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
        </CustomSlide>
      </Slider>
      <Typography
        variant="h5"
        component="h5"
        color="white"
        className="font-sans font-medium text-2xl mx-3"
      >
        Top Rated
      </Typography>
      <Slider {...settings} arrows={false}>
        <CustomSlide className="w-full h-auto top-0  py-6 mx-3 transition-all duration-500 ease-in-out">
          <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
            <img
              src="jhon_wick2.jpg"
              alt="kungfu_panda4"
              className=" w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
            />
          </div>
          <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
            <img
              src="jhon_wick4.jpg"
              alt=""
              className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
            />
          </div>
          <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
            <img
              src="justine.jpg"
              alt="move 3"
              className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
            />
          </div>
          <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
            <img
              src="kungfu_panda4.jpg"
              alt="move 3"
              className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
            />
          </div>
          <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
            <img
              src="mission_imposible.jpg"
              alt="move 3"
              className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
            />
          </div>
        </CustomSlide>
        <CustomSlide className="w-full h-auto top-0 bg-black py-6 mx-3 transition-all duration-500 ease-in-out">
          <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
            <img
              src="ruby.jpg"
              alt="move 1"
              className=" w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
            />
          </div>
          <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
            <img
              src="spider.jpg"
              alt="move 2"
              className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
            />
          </div>
          <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
            <img
              src="the_nun2.jpg"
              alt="move 3"
              className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
            />
          </div>
          <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
            <img
              src="theflash.jpg"
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
        </CustomSlide>
      </Slider>
      <Typography
        variant="h5"
        text="10px"
        component="h5"
        color="white"
        className="font-sans font-medium text-2xl mx-3"
      >
        Action
      </Typography>
      <Slider {...settings} arrows={false}>
        <CustomSlide className="w-full h-auto top-0 bg-black py-6 mx-3 transition-all duration-500 ease-in-out">
          <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
            <img
              src="the great wall.jpg"
              alt="kungfu_panda4"
              className=" w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
            />
          </div>
          <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
            <img
              src="black_widow.jpg"
              alt=""
              className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
            />
          </div>
          <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
            <img
              src="move1.jpg"
              alt="move 3"
              className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
            />
          </div>
          <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
            <img
              src="DAW3.jpg"
              alt="move 3"
              className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
            />
          </div>
          <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
            <img
              src="indian_jones.jpg"
              alt="move 3"
              className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
            />
          </div>
        </CustomSlide>
        <CustomSlide className="w-full h-auto top-0 bg-black py-6 mx-3 transition-all duration-500 ease-in-out">
          <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
            <img
              src="ruby.jpg"
              alt="move 1"
              className=" w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
            />
          </div>
          <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
            <img
              src="move2.jpg"
              alt="move 2"
              className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
            />
          </div>
          <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
            <img
              src="the great wall.jpg"
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
          <div className="w-5/12 flex justify-start w-5/12 flex justify-start overflow-visible transform translate-x-[-50%]">
            <img
              src="move3.jpg"
              alt="move 3"
              className="w-10/12 scale-100 hover:scale-125 ease-in duration-500 rounded-3xl"
            />
          </div>
        </CustomSlide>
      </Slider>
      <style jsx>{`
        .slick-arrow {
          display: none;
        }

        .slick-slide:hover .slick-arrow {
          display: block;
        }
      `}</style>
      <div className="bg-blur absolute inset-0 z-0"></div>
    </div>
  );
};

export default NewPage;
