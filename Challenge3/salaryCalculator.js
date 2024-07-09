
  // Function to calculate employee net pay
function calculateEmployeeNetPay(baseSalary, employeeBenefits) {
    // Constants for tax rates (use actual values from provided links)
    const taxRate = 0.3;
    const nhifRate = 0.05;
    const nssfRate = 0.1;
  
    // Calculations
    const grossSalary = baseSalary + employeeBenefits;
    const tax = grossSalary * taxRate;
    const nhifDeduction = grossSalary * nhifRate;
    const nssfDeduction = grossSalary * nssfRate;
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;
  
    return {
      grossSalary,
      tax,
      nhifDeduction,
      nssfDeduction,
      netSalary,
    };
  }
  
  // Prompt the user for input
  const baseSalary = Number(prompt("Enter your base salary: "));
  const employeeBenefits = Number(prompt("Enter your employee benefits: "));
  
  // Calculate net salary
  const result = calculateEmployeeNetPay(baseSalary, employeeBenefits);
  
  // Output the results
  console.log("Gross Salary:", result.grossSalary);
  console.log("NSSF Deduction:", result.nssfDeduction);
  console.log("Net Salary:", result.netSalary);
  