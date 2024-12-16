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

// Dummy featured items
const featuredItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: featured1,
    price: "$99.99",
  },
  {
    id: 2,
    name: "Smart Watch",
    image: featured3,
    price: "$199.99",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    image: featured2,
    price: "$49.99",
  },
  {
    id: 4,
    name: "Smartphone",
    image: featured3,
    price: "$599.99",
  },
];

const FeaturedCarousel = () => {
  return (
    <Box sx={{ width: "100%", padding: "20px", backgroundColor: "#f9f9f9" }}>
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
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
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
