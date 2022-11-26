import { writeFile } from 'fs';

const command = 'run';
const fileURL = '../CS361-FtoC_Microservice-main/readFile.txt';
let message = '';

/**
 * Let microservice know that a conversion of forecast data is needed.
 */
const writeCommand = async () => {

    writeFile(fileURL, command, (err) => {
        if (err)
            message = err;
        else {
            message = "Command to microservice issued successfully\n";
            
        }
        });
    
}

export { writeCommand }