export const stacks = {
    name: 'stack',
    title: 'Tech Stack',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Stack name',
            type: 'string'
        },
        {
            name: 'cartegory',
            title: 'stack cartegory',
            type: 'reference',
            to: [{ type: 'cartegory'}],
        }
    ]
}