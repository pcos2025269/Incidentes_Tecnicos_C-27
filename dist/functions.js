import * as readline from "readline";
import { menu } from "./index.js";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let incidents = [];
let currentid = 1;
export function createTicket() {
    rl.question("Titulo: ", (title) => {
        rl.question("Descripcion: ", (description) => {
            rl.question("Nombre de quien reporto: ", (reportFor) => {
                rl.question("Prioridad (Baja/Media/Alta): ", (priority) => {
                    const incident = {
                        id: currentid++,
                        title: title,
                        description: description,
                        reportFor: reportFor,
                        priority: priority,
                        state: "Abierto",
                        DateCreate: new Date()
                    };
                    incidents.push(incident);
                    console.log("Se registrado el incidente con ID:", incident.id);
                    menu();
                });
            });
        });
    });
}
export function changeStatus() {
    rl.question("ID del ticket: ", (id) => {
        rl.question("Nuevo estado (Abierto/En Progreso/Resuelto): ", (state) => {
            const incident = incidents.find(i => i.id === Number(id));
            if (incident) {
                incident.state = state;
                console.log("Estado actualizado.");
            }
            else {
                console.log("No se ha encontrado el ticket");
            }
            menu();
        });
    });
}
export function showReport() {
    console.log("--- Reporte de Incidentes ---");
    console.log("Total:", incidents.length);
    console.table(incidents);
    menu();
}
//# sourceMappingURL=functions.js.map