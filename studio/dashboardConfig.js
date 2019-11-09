export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dc73435cf9975fdbd49ec4f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8mv3z7pw',
                  apiId: 'b0be7c15-ca5b-4fea-ba4d-c0b1023b43cc'
                },
                {
                  buildHookId: '5dc7343595ff5f2e9b477286',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-e1kcskmk',
                  apiId: '6016578a-b348-44b6-a57e-d8414e28671a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/suomikiwi/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-e1kcskmk.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
