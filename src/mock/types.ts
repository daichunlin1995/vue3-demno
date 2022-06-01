export type responseType = {
  code: number
  message: string
  data: any
}

export type LoginType = {
  user: string
  password: string
}

type CollapseKeyType = 'title' | 'info' | 'avatar' | 'extra'
type CollapseBisisType = Record<CollapseKeyType, string>
export type CollapseType = { weibo: { name: string; link: string } } & CollapseBisisType
