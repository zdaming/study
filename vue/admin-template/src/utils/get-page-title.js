import defaultSettings from '@/settings'

const title = defaultSettings.title || '绘美苑艺术商城管理系统'

export default function getPageTitle (pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
