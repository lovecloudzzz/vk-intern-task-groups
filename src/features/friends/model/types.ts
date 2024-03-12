import {UserObject} from "@entities/user/model";

export interface FriendsObject{
    users?: UserObject[]
    groupId: number;
}