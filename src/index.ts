import express, {Application} from 'express';
import { getEmployeeData } from './controllers/employee';
const app: Application = express();

/**
 * Auto function call in controller to fetch Employee data
 */

const getEmployees = async () => {
    console.log(await getEmployeeData());
}
getEmployees();


/** Connecting server on PORT 8000 */
const PORT = process.env.PORT || 8000;
app.listen(PORT, ():void => {
    console.log(`\n\nServer Running: 👉 https://localhost:${PORT}\n`);
});