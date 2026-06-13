import {Priority, IncidentStatus} from "./types.js";

export interface Incident {
    readonly id: number;
    title: string;
    description: string;
    reportFor: string;
    priority: Priority;
    state: IncidentStatus;
    DateCreate: Date;
}