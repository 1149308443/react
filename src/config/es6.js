// eslint-disable-next-line import/no-mutable-exports
export let count = 3;

// export const Add = () => {
//     count += 1;
//     return count;
// };
export function Add() {
    count += 1;
    return count;
}
export default {
    count,
    inAdd: Add
};
