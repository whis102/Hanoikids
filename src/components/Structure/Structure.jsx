import PropTypes from "prop-types";
import { Box, Container } from "@mui/material";

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
      <Box className="container">{children}</Box>
      <Container>
        <Partner />
      </Container>
      <Footer />
    </>
  );
}

Structure.propTypes = {
  children: PropTypes.node,
};
