import "./Contact.scss";
import { Container, Typography } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import LeaderCard from "../../components/LeaderCard/LeaderCard";
import leaders from "../../data/leader";

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

        {leaders.map((leader, index) => (
          <LeaderCard
            key={index}
            category={leader.category}
            description={leader.description}
            department={leader.department}
            contacts={leader.contacts}
            email={leader.email}
            members={leader.members}
            reverse={index % 2 === 1}
          />
        ))}
      </Container>
    </Layout>
  );
}
