export default {
  widgets: [
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
                  buildHookId: '5f9163bba6f01cf848bf541a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-n4n6oiaf',
                  apiId: 'f6eed550-d398-4404-80d3-39f78d9d5ce2'
                },
                {
                  buildHookId: '5f9163bb4a8ec1c781f9b5eb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-yuypzk6m',
                  apiId: 'ae654329-4bb4-4d25-a8e0-63ca7301647a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leisensai/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-yuypzk6m.netlify.app', category: 'apps'}
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
