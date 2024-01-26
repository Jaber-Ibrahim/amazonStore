import Slider from "react-slick";
import { bannerImgOne, bannerImgTwo ,bannerImgThree , bannerImgFour , bannerImgFive } from "../../assets/index";
import { useState } from "react";

const HomeSlider = () => {
  const [activeDot , setActiveDot ] = useState(0)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        arrows : false ,
        beforeChange : (prev,next) => {
          setActiveDot(next)
        },
        appendDots: dots => (
          <div
            style={{
              position : "absolute",
              top : "70%",
              left : "50%",
              transform : "translate(-50%,-50%)",
              width : "200px",
            }}
          >
            <ul style={{
              width : "100%",
              display : "flex",
              alignItems : "center",
              justifyContent : "space-between",
            }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={
              i === activeDot 
              ? {
                width: "30px",
                height: "30px",
                color: "blue",
                borderRadius: "50%",
                display: "flex",
                alignItems : "center",
                justifyContent : "center",
                color : "white",
                background : "#131921",
                padding : "8px",
                cursor : "pointer" , 
                border : "1px solid #f3a847"
              }
              : 
              {
                width: "30px",
                height: "30px",
                color: "blue",
                borderRadius: "50%",
                display: "flex",
                alignItems : "center",
                justifyContent : "center",
                color : "white",
                background : "#232f3e",
                padding : "8px",
                cursor : "pointer" , 
                border : "1px solid #f3a847"
              }
            }
          >
            {i + 1}
          </div>
        )
      };

  return (
    <div className="w-full">
          <div className="w-full h-full relative">
        <Slider {...settings}>
          <div>
            <img src={bannerImgOne} alt="" />
          </div>
          <div>
            <img src={bannerImgTwo} alt="" />
          </div>
          <div>
            <img src={bannerImgThree} alt="" />
          </div>
          <div>
            <img src={bannerImgFour} alt="" />
          </div>
          <div>
            <img src={bannerImgFive} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default HomeSlider
