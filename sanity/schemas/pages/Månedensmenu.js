//Menukort.js
export default {
     name: 'monthMenu',
     title: 'Månedens Menukort',
     type: 'document',
     fields: [
       {
         name: 'title',
         title: 'Titel',
         type: 'string',
       },
       {
          name: 'number',
          title: 'Pris',
          type: 'number'
        },
       {
         name: 'sections',
         title: 'Sektioner',
         type: 'array',
         of: [{ type: 'monthMenuSection' }] 
       }
     ]
   };