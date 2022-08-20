export interface RootStoreType {
    age: number;
    add: () => void;
    douleAge: number;
}
export interface StoreType {
    RootStore: RootStoreType;
}
