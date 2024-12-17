import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const containerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        padding: "40px 100px",
        marginTop: "20px",
      }}
      component={motion.footer}
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      {/* Footer Content */}
      <Grid container spacing={4} justifyContent="center">
        {/* About Section */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            sx={{ marginBottom: "15px", fontWeight: "bold" }}
          >
            About Us
          </Typography>
          <Typography
            variant="body2"
            component={motion.div}
            whileHover={{ x: 5 }}
            sx={{ lineHeight: 1.8 }}
          >
            We are dedicated to providing the best plants for your garden. From
            indoor beauties to outdoor marvels, we have everything to make your
            space green and serene.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            sx={{ marginBottom: "15px", fontWeight: "bold" }}
          >
            Quick Links
          </Typography>
          <Box
            component="div"
            sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Link
              href="/shop"
              color="inherit"
              underline="hover"
              component={motion.a}
              whileHover={{ x: 5 }}
            >
              Shop
            </Link>
            <Link
              href="/about"
              color="inherit"
              underline="hover"
              component={motion.a}
              whileHover={{ x: 5 }}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              color="inherit"
              underline="hover"
              component={motion.a}
              whileHover={{ x: 5 }}
            >
              Contact Us
            </Link>
            <Link
              href="/faq"
              color="inherit"
              underline="hover"
              component={motion.a}
              whileHover={{ x: 5 }}
            >
              FAQs
            </Link>
          </Box>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            sx={{ marginBottom: "15px", fontWeight: "bold" }}
          >
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", gap: "15px" }}>
            <IconButton
              component={motion.a}
              whileHover={{ scale: 1.2 }}
              href="https://facebook.com"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              component={motion.a}
              whileHover={{ scale: 1.2 }}
              href="https://twitter.com"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              component={motion.a}
              whileHover={{ scale: 1.2 }}
              href="https://instagram.com"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              component={motion.a}
              whileHover={{ scale: 1.2 }}
              href="https://youtube.com"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Box
        sx={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "14px",
          color: "#aaa",
        }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        © {new Date().getFullYear()} GreenSpace. All Rights Reserved.
      </Box>
    </Box>
  );
};

export default Footer;
