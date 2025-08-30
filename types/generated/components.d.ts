import type { Schema, Struct } from '@strapi/strapi';

export interface ProductDetails extends Struct.ComponentSchema {
  collectionName: 'components_product_details';
  info: {
    displayName: 'details';
  };
  attributes: {
    description: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.details': ProductDetails;
    }
  }
}
