import { GroupObject } from '@entities/group/model/types.ts';
import { FilterState } from '@features/filters/model';

export const filterGroups = (groups: GroupObject[], filter: FilterState): GroupObject[] => {
    return groups.filter((group: GroupObject) => {
        if (filter.avatar_color !== 'any' && group.avatar_color !== filter.avatar_color) {
            return false;
        }

        if ((filter.friends === 'with' && !group.friends) || (filter.friends === 'without' && group.friends)) {
            return false;
        }

        return !(filter.privacy !== 'all' && group.closed !== (filter.privacy === 'closed'));


    });
};
