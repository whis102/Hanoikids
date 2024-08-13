import "./NavBar.scss";

import {
  GitHub,
  LinkedIn,
  YouTube,
  Language,
  Email,
  Phone,
} from "@mui/icons-material";

import { Link, Box, Stack, Typography } from "@mui/material";

export default function NavBar() {
  return (
    <Box className="top-nav">
      <Stack direction={"row"} spacing={2} padding={1}>
        <Link
          href="mailto:chicongnguyen.dev@gmail.com"
          underline="none"
          color={"white"}
          className="info__link"
        >
          <Email fontSize={"small"} />
          <Typography component={"p"}>chicongnguyen.dev@gmail.com</Typography>
        </Link>

        <Link
          href="tel:0868936515"
          underline="none"
          color={"white"}
          className="info__link"
        >
          <Phone fontSize={"small"} />
          <Typography component={"p"}>0868936515</Typography>
        </Link>
      </Stack>

      <Stack direction={"row"} spacing={2} padding={1}>
        <Link
          href="https://nguyen-chi-cong-cv.vercel.app/"
          underline="none"
          color={"white"}
          target="_blank"
        >
          <Language fontSize={"small"} />
        </Link>
        <Link
          href="https://github.com/whis102"
          underline="none"
          color={"white"}
          target="_blank"
        >
          <GitHub fontSize={"small"} />
        </Link>
        <Link
          href="https://www.youtube.com/@zWhis155"
          underline="none"
          color={"white"}
          target="_blank"
        >
          <YouTube fontSize={"small"} />
        </Link>

        <Link
          href="https://www.linkedin.com/in/ocvoivoii/"
          underline="none"
          color={"white"}
          target="_blank"
        >
          <LinkedIn fontSize={"small"} />
        </Link>
      </Stack>
    </Box>
  );
}
