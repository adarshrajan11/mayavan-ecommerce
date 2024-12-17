import React, { useState } from "react";
import { Box, Typography, Card, CardMedia, CardContent, Button, Grid } from "@mui/material";
import category1 from "../assets/indoor.jpg";
import category2 from "../assets/Outdoor.jpg";
import category3 from "../assets/flowering.jpg";
import category4 from "../assets/herbs.jpg";
import featured1 from '../assets/featured1.jpeg';
import featured2 from '../assets/featured2.jpeg';
import featured3 from '../assets/featured3.jpeg';
import featured4 from '../assets/featured4.jpeg';
import featured5 from '../assets/featured5.jpeg';


// Dummy data for categories and items
const categories = [
  {
    id: 1,
    name: "Indoor Plants",
    image: category1,
    items: [
      { id: 1, name: "Snake Plant", price: "$25.00", image: category1 },
      { id: 2, name: "Peace Lily", price: "$30.00", image: category1 },
      { id: 3, name: "Peace Lily", price: "$30.00", image: featured1 },
      { id: 4, name: "Peace Lily", price: "$30.00", image: featured2 },
    ],
  },
  {
    id: 2,
    name: "Outdoor Plants",
    image: category2,
    items: [
      { id: 1, name: "Rose Bush", price: "$40.00", image: category2 },
      { id: 2, name: "Bougainvillea", price: "$35.00", image: category2 },
    ],
  },
  {
    id: 3,
    name: "Flowering Plants",
    image: category3,
    items: [
      { id: 1, name: "Jasmine", price: "$20.00", image: category3 },
      { id: 2, name: "Marigold", price: "$15.00", image: category3 },
    ],
  },
  {
    id: 4,
    name: "Herbs",
    image: category4,
    items: [
      { id: 1, name: "Basil", price: "$10.00", image: category4 },
      { id: 2, name: "Mint", price: "$12.00", image: category4 },
    ],
  },
];

const GardenCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const handleCategoryClick = (category) => {
      console.log("category:",category)
    setSelectedCategory(category);
  };

  return (
    <Box sx={{ width: "100%", padding: "20px",backgroundColor:"#C9EDDC" }} >
      {/* Category Section */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Explore Categories
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {categories.map((category) => (
          <Grid
            item
            xs={6}
                sm={3}
                
            key={category.id}
            sx={{ textAlign: "center", cursor: "pointer" }}
            onClick={() => handleCategoryClick(category)}
          >
            <Box
              sx={{
                width: "120px",
                height: "120px",
                margin: "auto",
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={category.image}
                alt={category.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Typography variant="body1" sx={{ marginTop: "10px", fontWeight: "bold" }}>
              {category.name}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Items Section */}
      {selectedCategory && (
        <Box sx={{ marginTop: "40px" }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            {selectedCategory.name}
          </Typography>
          <Grid container spacing={4}>
            {selectedCategory.items.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <Card sx={{ maxWidth: 345, margin: "auto" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "green", marginBottom: "15px" }}>
                      {item.price}
                    </Typography>
                    <Button variant="contained" color="primary">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default GardenCategories;
