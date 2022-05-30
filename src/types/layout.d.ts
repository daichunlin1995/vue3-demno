import { RouteRecordName } from 'vue-router'
// header
export declare interface Ioptions {
  label: string
  key: string
  icon: Function
}

// tab
export declare interface Itab {
  name: RouteRecordName
  path: string
  meta: {
    [PropName: string]: any
  }
  params: {
    [PropName: string]: any
  }
  query: {
    [PropName: string]: any
  }
}
