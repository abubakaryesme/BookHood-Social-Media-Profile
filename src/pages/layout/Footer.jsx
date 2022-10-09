import React from "react";
import "./Footer.css";
import Img from "./footer-img.png";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <Grid container spacing={0}>
        <Grid item lg={6} md={12} xs={12} sm={12}>
          <img src={Img} alt="Footer" className="ft-img"></img>
          <div className="footer-content">
            <span className="highlight">BookHood </span>
            <span id="site-info">
              is a lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
              consequatur hic cumque rem corrupti assumenda amet illum sint
              !&nbsp;
            </span>
            <Link to="/about" className="highlight">
              Read more.....
            </Link>
          </div>
        </Grid>
        <Grid
          item
          lg={2}
          md={4}
          xs={6}
          sm={4}
          sx={{ paddingLeft: { xs: "5%", sm: "5%", md: "10%", lg: "0%" } }}
        >
          <div className="heading">
            <span>
              Quick Links
              <svg viewBox="0 0 455.555 48">
                <path d="M0 2c37.962 0 37.962 44 75.924 44s37.962-44 75.924-44 37.962 44 75.923 44c37.962 0 37.962-44 75.925-44 37.965 0 37.965 44 75.929 44s37.965-44 75.93-44" />
                <path d="M0 2c37.962 0 37.962 44 75.924 44s37.962-44 75.924-44 37.962 44 75.923 44c37.962 0 37.962-44 75.925-44 37.965 0 37.965 44 75.929 44s37.965-44 75.93-44" />
              </svg>
            </span>
          </div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/libraries">Libraries</Link>
            </li>
            <li>
              <Link to="/hoods">Hoods</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </Grid>
        <Grid
          item
          lg={2}
          md={4}
          xs={6}
          sm={4}
          sx={{ paddingLeft: { xs: "5%", sm: "5%", md: "10%", lg: "0%" } }}
        >
          <div className="heading">
            <span>
              About Us
              <svg viewBox="0 0 455.555 48">
                <path d="M0 2c37.962 0 37.962 44 75.924 44s37.962-44 75.924-44 37.962 44 75.923 44c37.962 0 37.962-44 75.925-44 37.965 0 37.965 44 75.929 44s37.965-44 75.93-44" />
                <path d="M0 2c37.962 0 37.962 44 75.924 44s37.962-44 75.924-44 37.962 44 75.923 44c37.962 0 37.962-44 75.925-44 37.965 0 37.965 44 75.929 44s37.965-44 75.93-44" />
              </svg>
            </span>
          </div>
          <ul>
            <li>
              <Link to="/">Our Story</Link>
            </li>
            <li>
              <Link to="/">Our Purpose</Link>
            </li>
            <li>
              <Link to="/">Our Services</Link>
            </li>
            <li>
              <Link to="/">Terms</Link>
            </li>
            <li>
              <Link to="/">Our Team</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </Grid>
        <Grid
          item
          lg={2}
          md={4}
          xs={6}
          sm={4}
          sx={{ marginLeft: { xs: "24%", sm: "0%" } }}
        >
          <div className="heading contact-heading">
            <span>
              <div>Contact Us</div>
              <svg viewBox="0 0 455.555 48">
                <path d="M0 2c37.962 0 37.962 44 75.924 44s37.962-44 75.924-44 37.962 44 75.923 44c37.962 0 37.962-44 75.925-44 37.965 0 37.965 44 75.929 44s37.965-44 75.93-44" />
                <path d="M0 2c37.962 0 37.962 44 75.924 44s37.962-44 75.924-44 37.962 44 75.923 44c37.962 0 37.962-44 75.925-44 37.965 0 37.965 44 75.929 44s37.965-44 75.93-44" />
              </svg>
            </span>
          </div>
          <ol className="contact-list">
            <li>
              <MailIcon className="cotact-icon" />
            </li>
            <li>
              <Link className="contact-info" href="">
                bookhood@gmail.com
              </Link>
            </li>
            <li>
              <PhoneIcon className="cotact-icon" />
            </li>
            <li>
              <Link className="contact-info" href="">
                (+92) 3364568056
              </Link>
            </li>
          </ol>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
