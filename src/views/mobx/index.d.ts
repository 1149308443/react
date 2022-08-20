import { PureComponent } from 'react';
import type { StoreType } from '@src/store/typings';
interface MobxPropsType {
    store: StoreType;
}
declare class Mobx extends PureComponent<MobxPropsType> {
    constructor(props: MobxPropsType);
    clickBtn: () => void;
    render(): JSX.Element;
}
export default Mobx;
