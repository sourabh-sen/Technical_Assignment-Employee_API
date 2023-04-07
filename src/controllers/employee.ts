import fetch from "node-fetch";
import { EmployeeResponseType } from "../interfaces/employee";

const API_KEY = "85255a7e9d8017c613679171c68f9fc4be79a41f"
const EmployeeId = 0;
const companySubDomain = "genesistechnologies";

/**
 * @name
 * getEmployeeData
 * 
 * @description
 * Function will send the request via Fetch API to BambooHR to get employees data
 * 
 * @returns
 * API will return Employee data as per the given interface
 */
export const getEmployeeData = async (): Promise<EmployeeResponseType> => {
    let fields = [
                    "id",
                    "firstName",
                    "lastName",
                    "name",
                    "displayName",
                    "dateOfBirth",
                    "photoUrl",
                    "personalPhoneNumber",
                    "homePhone",
                    "workEmail",
                    "jobTitle",
                    "department",
                    "managerId",
                    "startDate",
                    "tenure",
                    "workAnniversary",
                    "location",
                    "employmentStatus",
                    "ssn",
                    "state",
                    "address1",
                    "address2",
                    "city",
                    "payRateEffectiveDate",
                    "payChangeReason",
                    "country",
                    "division",
                    "eeo",
                    "employeeNumber",
                    "employmentHistoryStatus",
                    "acaStatus",
                    "employeeStatusDate",
                    "gender",
                    "hireDate",
                    "hoursPerPayCycle",
                    "customNIN1",
                    "originalHireDate",
                    "overtimeRate",
                    "exempt",
                    "payPer",
                    "payRate",
                    "customSecondaryLanguage1",
                    "workPhoneExtension",
                    "workPhone",
                    "zipcode",
                    "terminationDate"
                ];
    let fieldsName = fields.toString().replace(',','%2C');
    return await fetch(`https://${API_KEY}:x@api.bamboohr.com/api/gateway.php/${companySubDomain}/v1/employees/${EmployeeId}/?fields=${fieldsName}`, {
        headers: {
            "accept": "application/json"
        }
    }).then((response) => {
        if(response.status === 404) {
            throw response.status;
        } else {
            return response.json()
        }
    }).then((result) => {
        console.log("✅ Employees Data: ");
        return result;
    }).catch((error) => {
        if(error == 404) {
            return "🔴 EmployeeId may not exist."
        } else {
            return "🔴 " + new Error(error).message
        }
    })
}