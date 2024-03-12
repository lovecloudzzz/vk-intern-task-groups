import {GroupObject} from "@entities/group/model";

export const getGroupAvatarColors = (groups: GroupObject[]): string[] => {
    const colorsSet = new Set<string>();
    groups.forEach(group => {
        if (group.avatar_color) {
            colorsSet.add(group.avatar_color);
        }
    });

    return Array.from(colorsSet);
};