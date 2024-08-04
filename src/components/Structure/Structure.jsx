import { Container } from "@mui/material";

import "./Structure.scss";
import Partner from "../Partner/Partner";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Structure({ children }) {
  return (
    <>
      <NavBar />
      <Header />
      <Container>
        {children}
        <Partner />
      </Container>
      <Footer />
    </>
  );
}
