// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: 'JavaScript',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: 'JavaScript基础',
        items: [
          { text: 'JavaScript', link: '/pages/40b4db2d38ba85f2/' },
        ],
      },
    ],
  },
]
