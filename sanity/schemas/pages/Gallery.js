// gallery.js

export default {
  name: 'gallery',
  type: 'document',
  title: 'Galleri',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Overskrift',
    },
    {
      name: 'content',
      type: 'galleryObject',
      title: 'Gallery Content',
      description: 'Tilføj billeder til Galleri',
    },
    // ... any other fields you want on your gallery page
  ],
  // ... any other configurations for the gallery page
};
