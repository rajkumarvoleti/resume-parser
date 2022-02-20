import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../images/logo3.png";
import Image from "next/image";

const pages = ["Home", "About", "Products", "Contact Us"];

export default function AppBarComp({ scrollTo }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "background.primary",
        color: "text.primary",
        boxShadow: "none",
      }}
      position="relative"
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Image
              src={Logo.src}
              alt="Thanks Buddy"
              width="150px"
              height="70px"
            />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
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
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    if (scrollTo) scrollTo(page);
                    handleCloseNavMenu();
                  }}
                >
                  <Typography
                    fontSize={"14px"}
                    color="black"
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Image
              src={Logo.src}
              alt="Thanks Buddy"
              width="150px"
              height="70px"
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  if (scrollTo) scrollTo(page);
                  handleCloseNavMenu();
                }}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "normal",
                  px: "20px",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* <Button
            variant="contained"
            sx={{
              backgroundColor: "darkBlue1",
              "&:hover": { backgroundColor: "darkBlue2" },
              ml: "15px",
            }}
          >
            Sign Up
          </Button> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
