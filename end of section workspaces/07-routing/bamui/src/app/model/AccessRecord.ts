import { User } from "./User";

export type AccessRecord = {
    id: number;
    user: User;
    time: string;
    building: string;
    status: boolean;
}