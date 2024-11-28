import { User } from "./User";

export interface AccessRecord {
    id: number;
    user: User;
    time: string;
    building: string;
    status: boolean;
}