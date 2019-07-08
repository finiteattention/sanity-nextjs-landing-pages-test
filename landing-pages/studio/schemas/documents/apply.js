export default {
    name: 'apply',
    type: 'document',
    title: 'Søk penger',
    fields: [

        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'applicationForms',
            title: 'Sånn søker du',
            type: 'simplePortableText'
        },
        {
            name: 'productTag',
            title: 'Relatert til produkt(er)',
            type: 'array',
                of: [{type: 'reference', 
                    to: {type: 'product'}}]
        }
    ],
  
    preview: {
      select: {
        title: 'title',
        media: 'openGraphImage',
      },
    },
  };
  