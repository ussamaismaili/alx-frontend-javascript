export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: employeesList,
    getNumberOfDepartments: (allEmployees) => Object.keys(allEmployees).length,
  };

  return reportObject;
}
