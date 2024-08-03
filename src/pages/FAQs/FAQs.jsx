import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import Structure from "../../components/Footer/Structure";

export default function FAQs() {
  const navigate = useNavigate();

  return (
    <Structure>
      <Title>Frequently Asked Questions</Title>

      <Typography variant="subtitle1" gutterBottom>
        This section provides answers to common questions from Tourists and
        Kid-wannabes. If you cannot find the answer to your questions below or
        have urgent enquiries, please{" "}
        <Link variant="body2" onClick={() => navigate("/contact-us")}>
          contact us.
        </Link>
      </Typography>
    </Structure>
  );
}
