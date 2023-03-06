import Container from "react-bootstrap/Container";

import { Banner } from "./components/Banner";
import { ErrorMessage } from "./components/ErrorMessage";
import { SalaryCard } from "./components/SalaryCard";
import { SalaryForm } from "./components/SalaryForm";

export const App = () => {
  return (
    <Container>
      <Banner />
      <SalaryForm />
      <ErrorMessage />
      <SalaryCard />
    </Container>
  );
};
