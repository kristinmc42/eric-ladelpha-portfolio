export type RuleType = {
    required: () => RuleType;
    min: (min: number) => RuleType;
    max: (max: number) => RuleType;
    length: (exactLength: number) => RuleType;
    greaterThan: (gt: number) => RuleType;
    uri: (options: { scheme: string[] }) => RuleType;
    integer: () => RuleType;
    precision: (limit: number) => RuleType;
    error: (error: string) => RuleType;
    warning: (warning: string) => RuleType;
  }
  
export default {
    name: 'artwork',
    type: 'document',
    title: 'Artwork',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
        validation: (Rule:RuleType) => [
          Rule.required().min(1).error('A title of min. 1 characters is required'),
          Rule.max(80).warning('Shorter titles are usually better'),
        ],
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200,
        },
        validation: (Rule:RuleType) => Rule.required()
      },
      {
        title: 'Category',
        name: 'category',
        type: 'string',
        options: {
          list: [
            {title: 'Portraits', value: 'portraits'},
            {title: 'Landscape Views', value: 'landscapeViews'},
            {title: 'Urban Views', value: 'urbanViews'},
            {title: 'Various Compositions', value: ' variousCompositions'},
            {title: 'Drawings', value: 'drawings'},
          ], // <-- predefined values
          layout: 'radio', // <-- defaults to 'dropdown'
        },
        validation: (Rule:RuleType) => Rule.required().error("please select one of these")
      },
      {
        title: 'Image',
        name: 'image',
        type: 'image',
        options: {
          hotspot: true, // <-- Defaults to false
          },
          fields: [
              {
                  name: 'alt',
                  title: "Alt",
                  type: 'string'
            }
        ]
      },
      {
        title: 'Description',
        name: 'description',
        type: 'array',
        of: [{type: 'block'}]
      },
    ],
  }
  