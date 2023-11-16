const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/image1.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="/image2.jpg" alt="Image 2" />
      </div>
      <div>
        <img src="/image3.jpg" alt="Image 3" />
      </div>
    </Slider>
  );
};
