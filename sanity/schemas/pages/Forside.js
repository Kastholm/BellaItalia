export default {
     name: 'forside',
     title: 'Forside',
     type: 'document',
     fields: [
       {
         name: 'title',
         title: 'Overskrift',
         type: 'string'
       },
       {
         name: 'description',
         title: 'Beskrivelse',
         type: 'array',
         of: [{ type: 'block' }]
       },
       {
         name: 'image1',
         title: 'Billede 1',
         type: 'image',
         options: {
           hotspot: true // enables hotspot for precise cropping
         },
         fields: [
           {
             name: 'caption',
             type: 'string',
             title: 'Billedtekst 1',
             options: {
               isHighlighted: true // highlights the caption field in the Sanity Studio
             }
           }
         ]
       },
       {
         name: 'image2',
         title: 'Billede 2',
         type: 'image',
         options: {
           hotspot: true
         },
         fields: [
           {
             name: 'caption',
             type: 'string',
             title: 'Billedtekst 2',
             options: {
               isHighlighted: true
             }
           }
         ]
       },
       {
         name: 'image3',
         title: 'Billede 3',
         type: 'image',
         options: {
           hotspot: true
         },
         fields: [
           {
             name: 'caption',
             type: 'string',
             title: 'Billedtekst 3',
             options: {
               isHighlighted: true
             }
           }
         ]
       }
     ]
   };
   