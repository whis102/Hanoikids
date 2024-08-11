import "./Footer.scss";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import { FaPaypal } from "react-icons/fa";

import Copyright from "../Copyright/Copyright";
import Subscribe from "../Subscribe/Subscribe";

export default function Footer() {
  return (
    <Box component={"footer"}>
      <Container>
        <Stack direction="row" spacing={3}>
          <Box sx={{ width: "30%" }}>
            <Card>
              <CardMedia component={"img"} image={Logo} alt="Logo" />
            </Card>
          </Box>

          <Box sx={{ width: "40%" }}>
            <Paper className="footer-box">
              <Typography variant="h5" gutterBottom className="footer-title">
                Pages
              </Typography>

              <List>
                {[
                  { text: "Home", link: "/" },
                  { text: "Tours", link: "/tours" },
                  { text: "About Us", link: "/about-us" },
                  { text: "Contact Us", link: "/contact-us" },
                  { text: "FAQs", link: "/faqs" },
                ].map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton component={Link} to={item.link}>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Box>

          <Box sx={{ width: "30%" }}>
            <Paper className="footer-box">
              <Typography variant="h5" gutterBottom className="footer-title">
                Contribution
              </Typography>

              <Typography component={"p"}>
                Your interest and support mean a lot to us. By contributing
                here, you're helping us build a better Hanoikids.
              </Typography>

              <Button variant="contained">
                <FaPaypal size={24} />
                Donate
              </Button>
            </Paper>

            {/* <Paper className="footer-box">
              <Typography variant="h5" gutterBottom className="footer-title">
                Book Tours
              </Typography>

              <Typography component={"p"}>Book Tour</Typography>

              <Button variant="contained">
                <FaPaypal />
                Donate
              </Button>
            </Paper> */}
          </Box>
        </Stack>
        <Subscribe />
        <Copyright />
      </Container>
    </Box>
  );
}
