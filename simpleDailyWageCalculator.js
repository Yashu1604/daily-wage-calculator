const regularWorkingHoursStart = 9;
const regularWorkingHoursEnd = 17;

function dailyWageCalculator([start, end, hourlyRate, overtimeMultiplier]) {
  const regularHours =
    start < regularWorkingHoursEnd
      ? Math.min(regularWorkingHoursEnd, end) - start
      : 0; // Regular hours (up to 5 PM)
  const overtimeHours =
    end > regularWorkingHoursEnd
      ? Math.min(24, end) - Math.max(regularWorkingHoursEnd, start)
      : 0; // Overtime hours (after 5 PM)

  // Calculate regular pay and overtime pay
  const regularPay = regularHours * hourlyRate;
  const overtimePay = overtimeHours * hourlyRate * overtimeMultiplier;

  // Total earnings for the day
  const totalEarnings = regularPay + overtimePay;

  // Format the total earnings as a string with 2 decimal places
  const formattedEarnings = `$${totalEarnings.toFixed(2)}`;

  return formattedEarnings;
}

// Test cases
console.log(dailyWageCalculator([16, 18, 30, 1.8])); // Output: "$84.00"
console.log(dailyWageCalculator([19, 22, 30, 1.8])); // Output: "$162.00"
