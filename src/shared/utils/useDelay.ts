import { useState, useEffect } from 'react';

export const useDelay = (ms: number): boolean => {
    const [isDelayed, setIsDelayed] = useState<boolean>(true);

    useEffect(() => {
        const delayTimer = setTimeout(() => {
            setIsDelayed(false);
        }, ms);

        return () => clearTimeout(delayTimer);
    }, [ms]);

    return isDelayed;
};