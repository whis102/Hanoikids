import Logo from "../../assets/logo.png";
import { AppBar, Toolbar, Button } from "@mui/material";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <div className="logo">
            <img src={Logo} alt="Logo" style={{ height: 40 }} />
          </div>

          <div className="nav-links">
            <Button className="button">Tours</Button>
            <Button className="button">About Us</Button>
            <Button className="button">Contact</Button>
            <Button className="button">FAQs</Button>
            <Button className="button">Blogs</Button>
          </div>

          <Button variant="contained">Book Tour</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
