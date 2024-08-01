import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

export default function Partner() {
  const partners = [
    {
      image:
        "https://hanoikids.org/wp-content/uploads/2023/11/dong-ielts-xuan-phi-2048x2048.png",
      alt: "IELTS Xuân Phi",
    },
    {
      image:
        "https://hanoikids.org/wp-content/uploads/2023/11/vang-nui-truc-my-space-2048x2048.jpg",
      alt: "Núi Trúc",
    },

    {
      image:
        "https://hanoikids.org/wp-content/uploads/2023/11/dong-ielts-xuan-phi-2048x2048.png",
      alt: "IELTS Xuân Phi",
    },
    {
      image:
        "https://hanoikids.org/wp-content/uploads/2023/11/vang-nui-truc-my-space-2048x2048.jpg",
      alt: "Núi Trúc",
    },

    {
      image:
        "https://hanoikids.org/wp-content/uploads/2023/11/dong-ielts-xuan-phi-2048x2048.png",
      alt: "IELTS Xuân Phi",
    },
    {
      image:
        "https://hanoikids.org/wp-content/uploads/2023/11/vang-nui-truc-my-space-2048x2048.jpg",
      alt: "Núi Trúc",
    },

    {
      image:
        "https://hanoikids.org/wp-content/uploads/2023/11/dong-ielts-xuan-phi-2048x2048.png",
      alt: "IELTS Xuân Phi",
    },
    {
      image:
        "https://hanoikids.org/wp-content/uploads/2023/11/vang-nui-truc-my-space-2048x2048.jpg",
      alt: "Núi Trúc",
    },

    {
      image:
        "https://hanoikids.org/wp-content/uploads/2023/11/dong-ielts-xuan-phi-2048x2048.png",
      alt: "IELTS Xuân Phi",
    },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        Our Partner
      </Typography>

      <Grid container spacing={4} justifyContent={"center"}>
        {partners.map((recommend, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  width="200"
                  image={recommend.image}
                  alt={recommend.alt}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
