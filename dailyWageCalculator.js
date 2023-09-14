const regularWorkingHoursStart = 9;
const regularWorkingHoursEnd = 17;

function dailyWageCalculator([start, end, hourlyRate, overtimeMultiplier]) {
  if (start == end) {
    return `$0.00`;
  }
  let regularHours = 0;
  let overtimeHours = 0;

  // if working hours are within same day
  if (end > start) {
    regularHours =
      start < regularWorkingHoursEnd
        ? Math.min(Math.min(regularWorkingHoursEnd, end) - start, 8)
        : 0; // Regular hours (9 AM to 5 PM)
    overtimeHours = Math.min(24, end) - Math.min(24, start) - regularHours; // Overtime hours (before 9AM,after 5 PM)
  } else {
    regularHours =
      start < regularWorkingHoursEnd
        ? Math.min(regularWorkingHoursEnd - start, 8)
        : 0; // First day regular hours (9 AM to 5 PM)
    if (end > regularWorkingHoursStart) {
      regularHours += Math.min(end - regularWorkingHoursStart, 8);
    }
    overtimeHours = 24 - (start - end) - regularHours; // Overtime hours (before 9AM,after 5 PM)
  }

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
console.log(dailyWageCalculator([0, 24, 30, 1.8])); // Output: "$1104.00"
console.log(dailyWageCalculator([6, 20, 30, 1.8])); // Output: "$564.00"
console.log(dailyWageCalculator([15, 14, 30, 1.8])); // Output: "$1074.00"
console.log(dailyWageCalculator([24, 12, 30, 1.8])); // Output: "$576.00"
console.log(dailyWageCalculator([24, 0, 30, 1.8])); // Output: "$0.00"
console.log(dailyWageCalculator([0, 0, 30, 1.8])); // Output: "$0.00"
console.log(dailyWageCalculator([10, 10, 30, 1.8])); // Output: "$0.00"
console.log(dailyWageCalculator([24, 24, 30, 1.8])); // Output: "$0.00"
console.log(dailyWageCalculator([24, 25, 30, 1.8])); // Output: "$0.00"
