import { Box, Container } from "@mui/material";

import "./Layout.scss";
import Partner from "../Partner/Partner";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <Header />
      <Box className="container">{children}</Box>
      <Container>
        <Partner />
      </Container>
      <Footer />
    </>
  );
}
