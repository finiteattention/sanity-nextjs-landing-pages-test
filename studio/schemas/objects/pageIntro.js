export default {
    type: 'object',
    name: 'pageIntro',
    title: 'Page intro',
    fields: [
      {
        name: 'heading',
        type: 'string',
        title: 'Heading',
      },
      {
        name: 'tagline',
        type: 'simplePortableText',
        title: 'Tagline',
      },
      {
        name: 'backgroundImage',
        type: 'image',
        title: 'Background image',
        options: {
          hotspot: true,
        },
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
          subtitle: 'Page intro',
          media,
        };
      },
    },
  };
  