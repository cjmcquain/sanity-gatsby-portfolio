export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff6a22a92388a655cc08837',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7e1kv9mk',
                  apiId: 'b75acad8-57fa-4adb-a390-86b488b8fe79'
                },
                {
                  buildHookId: '5ff6a22b0d1b225e9c8c81fa',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6arg7dtf',
                  apiId: 'b95a7203-cb11-4dff-a6b1-de5d08bba570'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cjmcquain/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6arg7dtf.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
