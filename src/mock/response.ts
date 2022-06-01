import { responseType } from './types'
export const responseData = (obj: Partial<responseType>): responseType => {
  return Object.assign(
    {},
    {
      code: 0,
      message: 'success',
      data: null
    },
    obj
  )
}
