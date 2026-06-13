import { Prioridad, EstadoIncidente } from "./types.js";
export interface Incidente {
    readonly id: number;
    titulo: string;
    descripcion: string;
    reportadoPor: string;
    prioridad: Prioridad;
    estado: EstadoIncidente;
    fechaCreacion: Date;
}
//# sourceMappingURL=interfaces.d.ts.map