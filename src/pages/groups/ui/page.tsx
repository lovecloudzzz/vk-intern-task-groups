import { FC, useEffect } from 'react';
import { useFetchGroups } from '@shared/api/groupsApi';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/store';
import { GroupCardsList } from "@widgets/GroupCard";
import { Filter } from "@widgets/GroupFilter";
import { fetchGroupsSuccess } from "@entities/group/model/slice.ts";
import {filterGroups} from "@pages/groups/utils";

export const GroupsPage: FC = () => {
    const dispatch = useDispatch();
    const { loading, error, groups } = useFetchGroups();
    const storedGroups = useSelector((state: RootState) => state.groups.groups);
    const filter = useSelector((state: RootState) => state.filter); // Получаем состояние фильтров

    useEffect(() => {
        if (groups) {
            dispatch(fetchGroupsSuccess(groups));
        }
    }, [dispatch, groups]);

    const filteredGroups = filterGroups(storedGroups, filter);

    if (loading && !storedGroups.length) {
        return <div>Загрузка...</div>;
    }

    if (error || !storedGroups.length) {
        return <div>{error || 'Ошибка загрузки данных групп.'}</div>;
    }

    return (
        <div>
            <Filter />
            <GroupCardsList groups={filteredGroups} />
        </div>
    );
};