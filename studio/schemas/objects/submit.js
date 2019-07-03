export default {
  type: 'object',
  name: 'submit',
  title: 'Submit',
  fields: [
    
    {
      name: 'ctas',
      type: 'array',
      title: 'Call to actions',
      of: [
        {
          title: 'Call to action',
          type: 'cta',
        },
        {
          title: 'Secondary call to action',
          type: 'cta2',
        }
      ],
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Submit section',
        media,
      };
    },
  },
};
