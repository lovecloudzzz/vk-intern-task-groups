import {UserObject} from "@entities/user/model";

export interface GroupObject{
    id: number;
    name: string;
    closed: boolean;
    avatar_color?: string;
    members_count: number;
    friends?: UserObject[];
}