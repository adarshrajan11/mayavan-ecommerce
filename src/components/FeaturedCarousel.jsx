import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import featured1 from '../assets/featured1.jpeg';
import featured2 from '../assets/featured2.jpeg';
import featured3 from '../assets/featured3.jpeg';
import featured4 from '../assets/featured4.jpeg';
import featured5 from '../assets/featured5.jpeg';

// Dummy featured items
const featuredItems = [
  {
    id: 1,
    name: "White Lotus",
    image: featured1,
    price: "$99.99",
  },
  {
    id: 2,
    name: "Orange Water lily",
    image: featured3,
    price: "$199.99",
  },
  {
    id: 3,
    name: "Hybrid white lotus",
    image: featured2,
    price: "$49.99",
  },
  {
    id: 4,
    name: "Kerala Lotus",
    image: featured4,
    price: "$599.99",
  },
  {
    id: 5,
    name: "Pink Lotus",
    image: featured5,
    price: "$599.99",
  },
];

const FeaturedCarousel = () => {
  return (
    <Box sx={{ width: "100%", padding: "20px", backgroundColor: "#C9EDDC" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Featured Products
      </Typography>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          375:{slidesPerView: 1},
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        style={{ padding: "20px" }}
      >
        {featuredItems.map((item) => (
          <SwiperSlide key={item.id}>
            <Card sx={{ maxWidth: 345, margin: "auto" }}>
              <CardMedia
                component="img"
                height="300px"
                image={item.image}
                alt={item.name}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginBottom: "10px" }}
                >
                  {item.name}
                </Typography>
                <Typography variant="body1" sx={{ color: "green", marginBottom: "15px" }}>
                  {item.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "none" }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default FeaturedCarousel;
