import { useState, useEffect } from 'react';
import groupsData from './groups.json';
import { GroupObject } from "@entities/group/model/types";
import { GetGroupsResponse } from "@entities/responses/";
import { useDelay } from "@shared/utils";

export const useFetchGroups = (): { loading: boolean; error: string | null; groups: GroupObject[] | null } => {
    const [groups, setGroups] = useState<GroupObject[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const isDelayed = useDelay(1000);

    useEffect(() => {
        let isMounted = true;

        if (!isDelayed) {
            const fetchData = async () => {
                try {
                    const response: GetGroupsResponse = {
                        result: groupsData.result === 1 ? 1 : 0,
                        data: groupsData.data
                    };

                    if (response.result === 1 && response.data) {
                        if (isMounted) {
                            setGroups(response.data);
                            setLoading(false);
                        }
                    } else {
                        setError('Ошибка при получении групп');
                    }
                } catch (error) {
                    setError('Ошибка при получении групп');
                }
            };
            fetchData();
        }

        return () => {
            isMounted = false;
        };
    }, [isDelayed]);

    return { loading, error, groups };
};
