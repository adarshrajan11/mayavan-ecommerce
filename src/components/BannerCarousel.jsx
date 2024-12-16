import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Dummy data
const slides = [
  {
    image: "https://lustria.g5plus.net/main/wp-content/uploads/2019/05/slider-50.jpg",
    text: "Welcome to Our Garden",
  },
  {
    image:'https://lustria.g5plus.net/main/wp-content/uploads/2019/05/slider-51.jpg',
    text: "Discover Amazing Features",
  },
  {
    image: "https://lustria.g5plus.net/main/wp-content/uploads/2019/05/slider-52.jpg",
    text: "Enjoy the Seamless Experience",
  },
  {
    image: "https://lustria.g5plus.net/main/wp-content/uploads/2019/05/slider-53.jpg",
    text: "Thank You for Visiting!",
  },
];

const BannerCarousel = () => {


  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "white",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  animation: `${fadeIn} 1.2s ease-in-out`,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "10px 20px",
                  borderRadius: "8px",
                }}
              >
                {slide.text}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>

  );
};

export default BannerCarousel;
