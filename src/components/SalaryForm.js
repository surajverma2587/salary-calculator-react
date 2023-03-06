import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SalaryForm = () => {
  const [taxYear, setTaxYear] = useState("2021-2022");
  const [grossSalary, setGrossSalary] = useState(30000);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (grossSalary && grossSalary > 0) {
      console.log(taxYear, grossSalary);
      // handle calculations
    } else {
      // handle error
    }
  };

  const handleChange = ({ currentTarget }) => {
    if (currentTarget.name === "taxYear") {
      setTaxYear(currentTarget.value);
    }

    if (currentTarget.name === "grossSalary") {
      setGrossSalary(+currentTarget.value);
    }
  };

  return (
    <Form className="border p-3 rounded-3" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Select Tax Year</Form.Label>
        <Form.Select onChange={handleChange} name="taxYear" value={taxYear}>
          <option disabled>Select Tax Year</option>
          <option value="2021-2022">2021-2022</option>
          <option value="2022-2023">2022-2023</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Gross Annual Salary</Form.Label>
        <Form.Control
          value={grossSalary}
          name="grossSalary"
          onChange={handleChange}
          type="number"
          placeholder="Enter your gross annual salary"
        />
      </Form.Group>

      <Form.Group className="mb-3 text-center">
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};
