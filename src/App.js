import { useState } from "react";
import Container from "react-bootstrap/Container";

import { Banner } from "./components/Banner";
import { ErrorMessage } from "./components/ErrorMessage";
import { SalaryCard } from "./components/SalaryCard";
import { SalaryForm } from "./components/SalaryForm";

export const App = () => {
  const [error, setError] = useState(false);
  const [salary, setSalary] = useState();

  const handleFormError = () => {
    setError(true);
  };

  const handleFormSuccess = () => {
    setError(false);
  };

  const handleCalculation = (taxYear, annualIncome) => {
    if (annualIncome > 12500) {
      let taxPercentage;

      if (taxYear === "2021-2022") {
        if (annualIncome > 12500 && annualIncome <= 40000) {
          taxPercentage = 20;
        } else if (annualIncome > 40000 && annualIncome <= 100000) {
          taxPercentage = 40;
        } else {
          taxPercentage = 45;
        }
      }

      if (taxYear === "2022-2023") {
        if (annualIncome > 12500 && annualIncome <= 40000) {
          taxPercentage = 18;
        } else if (annualIncome > 40000 && annualIncome <= 100000) {
          taxPercentage = 35;
        } else {
          taxPercentage = 40;
        }
      }

      const taxableIncome = annualIncome - 12500;

      const tax = taxPercentage / 100;

      const taxAmount = taxableIncome * tax;

      const takeHomeSalary = annualIncome - taxAmount;

      const salary = {
        annualIncome,
        taxableIncome,
        taxPercentage,
        taxAmount,
        takeHomeSalary,
      };

      setSalary(salary);
    } else {
      const salary = {
        annualIncome,
        taxableIncome: 0,
        taxPercentage: 0,
        taxAmount: 0,
        takeHomeSalary: annualIncome,
      };

      setSalary(salary);
    }
  };

  return (
    <Container>
      <Banner />
      <SalaryForm
        handleFormError={handleFormError}
        handleFormSuccess={handleFormSuccess}
        handleCalculation={handleCalculation}
      />
      {error && <ErrorMessage />}
      {!error && salary && <SalaryCard salary={salary} />}
    </Container>
  );
};
