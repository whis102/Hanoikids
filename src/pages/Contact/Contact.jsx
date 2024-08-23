import "./Contact.scss";
import { Container, Typography } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import LeaderCard from "../../components/LeaderCard/LeaderCard";
import leader from "../../data/leader";

export default function Contact() {
  return (
    <Layout>
      <Title heading={"h4"}>Contact Us</Title>
      <Container>
        <Typography gutterBottom>
          We truly appreciate your support and contribution to our organization.
          If you have any further questions or have things make you confused in
          your mind, please don’t hesitate to contact us for clearer explanation
          and long-term cooperation in the future.
        </Typography>

        {leader.map((leaders, index) => (
          <LeaderCard
            key={index}
            about={leaders.about}
            aboutContent={leaders.aboutContent}
            dept={leaders.dept}
            contact1={leaders.contact1}
            contact2={leaders.contact2}
            email={leaders.email}
            image={leaders.image}
            name={leaders.name}
            title={leaders.title}
            name1={leaders.name1}
            image1={leaders.image1}
            reverse={leaders.about === "About Partnership: "}
            title1={leaders.title1}
          />
        ))}
      </Container>
    </Layout>
  );
}
