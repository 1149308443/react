import { BrowserHistoryBuildOptions, HashHistoryBuildOptions, MemoryHistoryBuildOptions } from 'history';
export declare enum TypeBuildOptions {
    BROWSER = "BROWSER",
    HASH = "HASH",
    MEMORY = "MEMORY"
}
export declare type ConfigBuildOptions = {
    type?: TypeBuildOptions;
} & BrowserHistoryBuildOptions & HashHistoryBuildOptions & MemoryHistoryBuildOptions;
