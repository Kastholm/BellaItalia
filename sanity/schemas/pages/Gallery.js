// gallery.js

export default {
  name: 'gallery',
  type: 'document',
  title: 'Galleri Hjemmeside',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the gallery page',
    },
    {
      name: 'content',
      type: 'galleryObject',
      title: 'Gallery Content',
      description: 'Add images to the gallery',
    },
    // ... any other fields you want on your gallery page
  ],
  // ... any other configurations for the gallery page
};
