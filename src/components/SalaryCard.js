import ListGroup from "react-bootstrap/ListGroup";

export const SalaryCard = ({ salary }) => {
  const {
    annualIncome,
    taxableIncome,
    taxPercentage,
    taxAmount,
    takeHomeSalary,
  } = salary;

  return (
    <ListGroup>
      <ListGroup.Item>
        <div className="d-flex justify-content-between">
          <div>Annual Salary</div>
          <div>{annualIncome}</div>
        </div>
      </ListGroup.Item>
      <ListGroup.Item>
        <div className="d-flex justify-content-between">
          <div>Taxable Income</div>
          <div>{taxableIncome}</div>
        </div>
      </ListGroup.Item>
      <ListGroup.Item>
        <div className="d-flex justify-content-between">
          <div>Tax Percentage</div>
          <div>{taxPercentage}%</div>
        </div>
      </ListGroup.Item>
      <ListGroup.Item>
        <div className="d-flex justify-content-between">
          <div>Tax Payable</div>
          <div>{taxAmount}</div>
        </div>
      </ListGroup.Item>
      <ListGroup.Item className="p-0">
        <div className="d-flex justify-content-between fs-3 bg-light p-2">
          <div>Take Home Salary</div>
          <div>{takeHomeSalary}</div>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};
