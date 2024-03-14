export const projSchema = {
    name: 'Projects',
    title: 'Projects',
    type: 'document',
    fields: [
         {
            name: 'name',
            title: 'name',
            type: 'string'
         },
         {
            name: 'Detail',
            title: 'Details',
            type: 'string',
            validation: Rule => Rule.max(200).warning(`Details should not be above 200 characters.`)
         },
         {
            name: 'image',
            title: 'Project image',
            type: 'image'
         },
         {
            name: 'stack',
            title: 'Tech stacks',
            type: 'array',
            "of": [
               {
                 "type": "reference",
                 to: [{type: 'stack'}]
               }
             ],
         },
         {
            name: 'gitlink',
            title: 'Git Link',
            type: 'url'
         },
         {
            name: 'livelink',
            title: 'Live Link',
            type: 'url'
         }
    ]
}