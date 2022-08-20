export interface RouterItem {
    path: string;
    componentPath: string;
    exact?: boolean;
}
export interface RouterType extends RouterItem {
    children?: RouterItem[];
}
declare const router: RouterType[];
export default router;
