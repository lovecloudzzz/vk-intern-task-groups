import {GroupObject} from "@entities/group/model/types";


export interface GetGroupsResponse {
    result: 1 | 0;
    data?: GroupObject[];
}