import Logo from "../../assets/logo.png";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Card,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Card className="logo">
          <CardActionArea onClick={() => navigate("/")}>
            <CardMedia component={"img"} image={Logo} alt="Logo" />
          </CardActionArea>
        </Card>

        <Box component={"div"} className="nav-links">
          <Button onClick={() => navigate("/tours")}>Tours</Button>
          <Button onClick={() => navigate("/about-us")}>About Us</Button>
          <Button onClick={() => navigate("/contact-us")}>Contact Us</Button>
          <Button onClick={() => navigate("/faqs")}>FAQs</Button>
        </Box>

        <Button
          variant="contained"
          className="btn-book"
          onClick={() => navigate("/book-tour")}
        >
          Book Tours
        </Button>
      </Toolbar>
    </AppBar>
  );
}
