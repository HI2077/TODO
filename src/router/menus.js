const commonRouters = [
  {
    path: '',
    name: 'Index',
    filePath: 'layout',
    redirect: {
      name: 'Today',
      params: {
        icon: 'smile-o',
        color: '#6074C2'
      }
    },
    hideItem: true,
    children: [
      {
        path: '/today',
        filePath: 'Today',
        title: '我的一天',
        theme: {
          icon: 'smile-o',
          color: '#6074C2'
        }
      },
      {
        path: '/important',
        filePath: 'Important',
        title: '重要',
        theme: {
          color: '#B16FB1',
          icon: 'star-o'
        }
      },
      {
        path: '/mission',
        filePath: 'Mission',
        title: '任务',
        theme: {
          color: '#6074C2',
          icon: 'home-o'
        }
      }
    ]
  }

]

export default commonRouters
