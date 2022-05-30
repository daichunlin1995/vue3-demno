import { Dashboard } from '@/api'
export default async () => {
  let result = await Dashboard.getCollapseList()
  return result
}
