export default {
  name: 'popular',
  type: 'document',
  title: 'Popular Products',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of product',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'cut_price',
      title: 'Cut Price',
      type: 'number',
    },
    {
      name: 'min_order',
      title: 'Minimum Order',
      type: 'number',
    },

    {
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    },
    {
      name: 'type_category',
      title: 'Type Category',
      type: 'reference',
      to: [
        {
          type: 'typecategory',
        },
      ],
    },
  ],
}
