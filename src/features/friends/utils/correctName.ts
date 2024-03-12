export const correctName = (count: number | null | undefined): string| null  => {
    if (count){
    if ( count % 10 === 1 && count % 100 !== 11) {
        return "друг";
    } else if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
        return "друга";
    } else {
        return "друзей";
    }
    }
    else {
        return null
    }
};