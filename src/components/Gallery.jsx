import React from "react";
import { Box, Typography } from "@mui/material";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import gallery1 from '../assets/Gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'
import gallery4 from '../assets/gallery4.jpeg'
import featured2 from '../assets/featured2.jpeg';
import featured3 from '../assets/featured3.jpeg';
import featured4 from '../assets/featured4.jpeg';
import featured5 from '../assets/thetti.jpg';
// Dummy images for the gallery
const plantImages = [
  { id: 1, src:featured5, title: "Indoor Plants" },
  { id: 2, src: gallery2, title: "Succulents" },
  { id: 3, src: gallery3, title: "Flowering Plants" },
  { id: 4, src: gallery4, title: "Ferns" },
  { id: 5, src: featured2, title: "Cactus" },
  { id: 6, src: featured3, title: "Hanging Plants" },
  { id: 7, src: featured4, title: "Hanging Plants" },
];

const Gallery = () => {
  const breakpoints = {
    default: 4, // 3 columns for larger screens
    1024: 2,    // 2 columns for medium screens
    768: 1,     // 1 column for small screens
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05 },
  };

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#C9EDDC" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "20px" }}
      >
        Plant Gallery
      </Typography>

      <Masonry
        breakpointCols={breakpoints}
              className="masonry-grid"  
        columnClassName="masonry-grid_column"
      >
        {plantImages.map((image) => (
          <motion.div
            key={image.id}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.5 }}
            style={{
              overflow: "hidden",
              borderRadius: "10px",
              marginBottom: "15px",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <img
              src={image.src}
              alt={image.title}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "white",
                padding: "5px 10px",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            >
              {image.title}
            </Box>
          </motion.div>
        ))}
      </Masonry>
    </Box>
  );
};

export default Gallery;
