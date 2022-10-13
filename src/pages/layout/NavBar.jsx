import * as React from "react";
import Pipe from "./bar.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Logo from "./logo.png";
import Bookmark from "./bookmark.png";
import BookmarkLogin from "./bookmark-login.png";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate, useLocation } from "react-router-dom";
import "./NavBar.css";
const login = true;
const page = login ? "Profile" : "About";
const pages = ["Home", "Books", "Libraries", "Hoods", page];
const links = {
  Home: "/",
  Books: "/books",
  Libraries: "/libraries",
  Hoods: "/hoods",
  Profile: "/profile",
  "My Account": "/my-account",
  "My Books": "/my-books",
  "My Libraries": "/my-libraries",
  "My Hoods": "/my-hoods",
  Logout: "",
  About: "/about",
  Login: "/login",
  Notifications: "/notifications",
};
const settings = [
  "My Account",
  "Notifications",
  "My Books",
  "My Libraries",
  "My Hoods",
  "Logout",
];
const logo = {
  "My Account": [<AccountCircleOutlinedIcon />],
  Notifications: [<NotificationsNoneIcon />],
  "My Books": [<AutoStoriesOutlinedIcon />],
  "My Libraries": [<LibraryBooksOutlinedIcon />],
  "My Hoods": [<VolunteerActivismOutlinedIcon />],
  Logout: [<LogoutOutlinedIcon />],
};

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    navigate(page);
  };

  const handleCloseUserMenu = (page) => {
    setAnchorElUser(null);
    navigate(page);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#283655" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              mr: 2,
              ml: 1,
              cursor: "pointer",
            }}
          >
            <img
              src={Logo}
              alt="logo"
              className="logo"
              onClick={() => navigate("/")}
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 800,
              fontSize: 25,
              letterSpacing: ".2rem",
              color: "#D0E1F9",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            BookHood
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              ml: 0,
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1,
                  width: 130,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 15,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  className="nav-button"
                  key={page}
                  sx={{
                    fontWeight: "bold",
                    color: `${
                      pathMatchRoute(links[page]) ? "#D0E1F9" : "black"
                    }`,
                    backgroundColor: `${
                      pathMatchRoute(links[page]) ? "#4d648d" : ""
                    }`,
                  }}
                  onClick={() => handleCloseNavMenu(links[page])}
                >
                  <Typography
                    textAlign="center"
                    className="nav-button nav-button-ltr"
                    sx={{
                      fontWeight: "bold",
                      fontSize: 15,
                      textTransform: "uppercase",
                      color: `${
                        pathMatchRoute(links[page]) ? "#D0E1F9" : "black"
                      }`,
                      backgroundColor: `${
                        pathMatchRoute(links[page]) ? "#4d648d" : ""
                      }`,
                    }}
                  >
                    {pathMatchRoute(links[page]) ? (
                      <img
                        src={Bookmark}
                        className="bookmark"
                        alt="bookmark"
                      ></img>
                    ) : (
                      ""
                    )}
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              cursor: "pointer",
            }}
          >
            <img
              src={Logo}
              alt="logo"
              className="logo"
              onClick={() => navigate("/")}
            />
          </Box>
          <Typography
            variant="h5"
            noWrap
            onClick={() => navigate("/")}
            sx={{
              mr: 1,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 800,
              fontSize: 25,
              letterSpacing: ".1rem",
              color: "#D0E1F9",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            BookHood
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
            alignItems="center"
            justifyContent="center"
          >
            {pages.map((page) => (
              <Button
                key={page}
                className="nav-button nav-button-ltr"
                onClick={() => handleCloseNavMenu(links[page])}
                sx={{
                  my: 2,
                  mx: 4,
                  color: `${pathMatchRoute(links[page]) ? "#D0E1F9" : "white"}`,
                  backgroundColor: `${
                    pathMatchRoute(links[page]) ? "#4d648d" : ""
                  }`,
                  display: "block",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                {pathMatchRoute(links[page]) ? (
                  <img src={Bookmark} className="bookmark" alt="bookmark"></img>
                ) : (
                  ""
                )}
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, mr: 2 }}>
            {login ? (
              <>
                <Tooltip title="User Options" sx={{ pl: 3 }}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <img src={Pipe} alt="pipe" className="pipe" />
                    <Avatar
                      sx={{ bgcolor: "#FF6700" }}
                      variant="rounded"
                      alt="Aqib Amin"
                      src=""
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "44px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      width: 180,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      className="nav-button nav-button-ltr"
                      onClick={() => handleCloseUserMenu(links[setting])}
                      sx={{
                        color: `${
                          pathMatchRoute(links[setting]) ? "#d0e1f9" : "black"
                        }`,
                        backgroundColor: `${
                          pathMatchRoute(links[setting]) ? "#4d648d" : ""
                        }`,
                      }}
                    >
                      {logo[setting]}
                      <Typography
                        className="nav-button"
                        textAlign="center"
                        sx={{
                          color: `${
                            pathMatchRoute(links[setting]) ? "#D0E1F9" : "black"
                          }`,
                          backgroundColor: `${
                            pathMatchRoute(links[setting]) ? "#4d648d" : ""
                          }`,
                          fontSize: 19,
                          pl: 1,
                        }}
                      >
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Button
                key={"/login"}
                className="nav-login nav-button-ltr"
                onClick={() => handleCloseNavMenu(links["Login"])}
                sx={{
                  my: 2,
                  mx: 0,
                  color: `${
                    pathMatchRoute(links["Login"]) ? "#1e1f26" : "#1e1f26"
                  }`,
                  backgroundColor: `${
                    pathMatchRoute(links["Login"]) ? "#d0e1f9" : "#d0e1f9"
                  }`,
                  display: "block",
                  fontWeight: { xs: "bold", md: "800", lg: "800" },
                  fontSize: 15,
                }}
              >
                {pathMatchRoute(links["Login"]) ? (
                  <img
                    src={BookmarkLogin}
                    className="bookmark"
                    alt="bookmark"
                  ></img>
                ) : (
                  ""
                )}
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
