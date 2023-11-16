import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/index.module.css";
import Cookies from "universal-cookie";

const LinkPage = () => {
  const router = useRouter();
  const { link, logo } = router.query; // Access the "link" parameter from the URL
  const [backgroundImage, setBackgroundImage] = useState("");
  const [images, setImages] = useState("");
  const [title ,setTitle] = useState("")
  const [desc , setDesc] =useState("")
  const [info ,setInfo] =useState("")
  const [straring, setSetarling] =useState("")
   const cookies = new Cookies();

  useEffect(() => {
    if (link) {
      // Use the 'link' parameter to construct the background image URL
      const imageUrl = `/${link}.jpg`; // Replace with the correct path to your background images
      setBackgroundImage(`url(${imageUrl})`);
    }
  }, [link]);

  useEffect(() => {
    // Mendapatkan nilai cookie 'selectedLink', 'selectedLogo', 'selectedTitle', dan 'selectedDesc'
    const selectedLogo = cookies.get("selectedLogo");
    if (selectedLogo) {
      const logos = `/${selectedLogo}.png`;
      setImages(`${logos}`);
    }

    const selectedTitle = cookies.get("selectedTitle");
    setTitle(selectedTitle)

    const selecteInfo = cookies.get("selectedInfo")
    setInfo(selecteInfo)
    const selectedDesc = cookies.get("selectedDesc");
    setDesc(selectedDesc)
    const selectedStaring = cookies.get("selectedStaring");
    setSetarling(selectedStaring)

  }, []);


  return (
    <div className="h-screen">
      <div className="w-full h-16 bg-black flex justify-between">
        {" "}
        <img
          src="/netflix_logo.png" // Replace with the path to your Netflix logo image
          alt="Netflix Logo"
          className="w-32 mx-6"
        />
        <span className="text-white py-5 me-16 ">
          UNLIMITED TV SHOWS & MOVIES
        </span>
      </div>
      <div
        className="h-full w-full relative"
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `linear-gradient(to right, rgba(23, 22, 22, 0.977), #171717ec , #17171784, #1e1e1f00, rgba(21, 22, 22, 0)), ${backgroundImage}`,
          backgroundSize: "cover",
        }}
      >
        <div >
          <div className="mx-20 py-28">
          <img src={`${images}`} className="w-3/12 " />
          <div className="py-16 text-white w-5/12">
       <span className=" text-2xl font-semibold subpixel-antialiased">{`${title}`}</span>
          <p className="text-2sm py-2 opacity-50">{`${info}`}</p>
          <p className="antialiased not-italic tracking-normal text-2sm">{`${desc}`}</p>
          <div className="py-5 text-2sm tracking-normal ">

          <span className=" "><span className="opacity-60">Starring :</span>  {`${straring}`}</span>

          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkPage;
