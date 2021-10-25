import { PureComponent } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import type {StoreType} from '@src/store/typings'

interface MobxPropsType  {
  store: StoreType
}
@inject('store')
@observer
class Mobx extends PureComponent<MobxPropsType> {
constructor(props: MobxPropsType){
  super(props);
  this.state = {}
}

clickBtn = (): void =>{
  this.props.store.RootStore.add()
}

render(): JSX.Element {
    const { store } = this.props;
    const { RootStore } = store;
    console.log(toJS(RootStore), RootStore.douleAge);
    return (
      <>
        <button onClick={this.clickBtn}>
          Seconds passed:
          {RootStore.age}
        </button>
      </>
    );
  }
}

export default Mobx;
