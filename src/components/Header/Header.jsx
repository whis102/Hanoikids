import Logo from "../../assets/logo.png";
import { AppBar, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <div className="logo">
            <img src={Logo} alt="Logo" onClick={() => navigate("/")} />
          </div>

          <div className="nav-links">
            <Button className="button" onClick={() => navigate("/tours")}>
              Tours
            </Button>
            <Button className="button" onClick={() => navigate("/about")}>
              About Us
            </Button>
            <Button className="button" onClick={() => navigate("/contact")}>
              Contact Us
            </Button>
            <Button className="button" onClick={() => navigate("/faqs")}>
              FAQs
            </Button>
            <Button className="button" onClick={() => navigate("/blogs")}>
              Blogs
            </Button>
          </div>

          <Button variant="contained" onClick={() => navigate("/book")}>
            Book Tour
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
