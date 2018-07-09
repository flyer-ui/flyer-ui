module.exports = {
    base: 'https://flyerui.github.io',
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
      collapsable: false,
      search: true,
      searchMaxSuggestions: 10,
      algolia: {
        apiKey: '<API_KEY>',
        indexName: '<INDEX_NAME>'
      },
      // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
      repo: 'vuejs/vuepress',
      // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
      // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
      repoLabel: '查看源码',
      //navbar: false,
      sidebar: 'auto',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'External', link: 'https://google.com' },
        {
          text: 'Languages',
          items: [
            {
              text: 'Chinese', link: '/language/chinese', items: [
                {
                  text: 'baidu',
                  link: 'https://www.baidu.com',
                },
                {
                  text: 'google',
                  link: 'https://www.google.com'
                }
              ]
            },
            { text: 'Japanese', link: '/language/japanese' }
          ]
        }
      ]
    }
}