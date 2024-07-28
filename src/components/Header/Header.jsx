import Logo from "../../assets/logo.png";
import { AppBar, ToolBar, Button } from "@mui/material";

export default function Header() {
  return (
    <div className="root">
      <AppBar position="static">
        <ToolBar>
          <div className="logo">
            <img src={Logo} alt="Logo" style={{ height: 40 }} />
          </div>

          <div className="navLinks">
            <Button className="button">Tours</Button>
            <Button className="button">Tuyển dụng</Button>
            <Button className="button">Về chúng tôi</Button>
            <Button className="button">Liên hệ</Button>
            <Button className="button">FAQs</Button>
            <Button className="button">Blogs</Button>
          </div>
          <Button color="inherit">Đặt tour</Button>
        </ToolBar>
      </AppBar>
    </div>
  );
}
