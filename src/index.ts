import * as readline from "readline";
import {createTicket, changeStatus, showReport} from "./functions.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function menu() {
    console.log("--- Control de incidentes salón C-27 ---");
    console.log("1. Registrar incidente");
    console.log("2. Cambiar estado");
    console.log("3. Ver reporte");
    console.log("4. Salir");
    rl.question("Opción: ", (option) => {
        switch (option) {
            case "1":
                createTicket();
                break;
            case "2":
                changeStatus();
                break;
            case "3":
                showReport();
                break;
            case "4":
                rl.close();
                break;
            default:
                console.log("No existe esta opcion. Intente de nuevo.");
                menu();
            }
    });
}

menu();