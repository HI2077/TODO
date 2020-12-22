import layout from '@/layout/index.vue'

export function buildRouter (routers) {
  const result = routers.map((item) => {
    const { filePath, name, children, theme } = item
    return {
      component: filePath === 'layout' ? layout : (resolve) => require([`@/views/${filePath}`], resolve),
      name: name || filePath,
      ...item,
      meta: { title: item.title, icon: theme && theme.icon },
      children: children && buildRouter(children)
    }
  })
  return result
}

export function routersToMenu (routers) {
  const menu = []
  for (const key in routers) {
    if (Object.prototype.hasOwnProperty.call(routers, key)) {
      const element = routers[key]
      if (!element.hideItem) {
        menu.push(element)
      }
      if (element.children) {
        Array.prototype.push.apply(menu, element.children)
      }
    }
  }
  return menu
}
