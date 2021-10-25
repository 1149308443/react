// componentPath 是组件相对于 views文件夹的位置 需要加上 /

export interface routerItem {
  path: string
  componentPath: string
  exact?: boolean
}

export interface RouterType  extends routerItem{
  children?: routerItem[]
}

const router: RouterType[] = [
  {
    path: '/',
    componentPath:'/demo',
    exact: true
  },
  {
    path: '/mobx',
    componentPath:'/mobx',
    exact: true
  },
  {
    path: '/detail',
    componentPath:'/detail',
    children: [{
      path: '/detail/nofind',
      componentPath:'/404',
    }]
  },
  {
    path: '/skeleton',
    componentPath:'/skeleton',
    exact: true
  },
];
export default router;
