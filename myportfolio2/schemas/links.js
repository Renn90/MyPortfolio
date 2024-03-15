export const linksSchema = {
    name: 'links',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    singleton: true,
    fields: [
        {
            name: 'x',
            title: 'X or twitter',
            type: 'url'
        },
        {
            name: 'gitHub',
            title: 'Github',
            type: 'url'
        },
        {
            name: 'instagram',
            title: 'instagram',
            type: 'url'
        },
        {
            name: 'linkedIn',
            title: 'linkedIn',
            type: 'url'
        },
        {
            name: 'resume',
            title: 'My resume',
            type: 'url'
        }
    ]
}