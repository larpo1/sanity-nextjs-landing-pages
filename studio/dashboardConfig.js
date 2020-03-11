export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e68adc924a5842a85452983',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cojti9zg',
                  apiId: '1bb357b0-8bba-4989-bc5d-9528356f1fcb'
                },
                {
                  buildHookId: '5e68adc93c71c92be56da2cd',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nxuhcjqf',
                  apiId: 'fc8a0e08-a3fd-48c4-b93a-fdd596b7a984'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/larpo1/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nxuhcjqf.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
