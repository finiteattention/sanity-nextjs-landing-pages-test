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
                  buildHookId: '5d1b3323a8dbff3b493ecdf6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-test-studio-gvtzud9m',
                  apiId: '3000cd6d-0ae6-42fb-ada6-8963001bb675'
                },
                {
                  buildHookId: '5d1b33232138a1958476370f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-test-web-kce95ty4',
                  apiId: '5518f2c3-4701-4066-bc29-009f8fc5b2b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/finiteattention/sanity-nextjs-landing-pages-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-test-web-kce95ty4.netlify.com', category: 'apps'}
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
