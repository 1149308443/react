import { observer, inject } from 'mobx-react';

export default inject('store')(observer((props :any):any=>{
    console.log(props)
    const { age, add} = props.store.RootStore
    return(
        <div>
            <p>你的年龄{age}</p>
            <p onClick={add}>点击</p>
            <p onClick={()=>{
                props.history.push('/mobx')
            }}>跳转mobx</p>
        </div>
    )
}))
