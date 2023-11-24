//Menukort.js
export default {
     name: 'menu',
     title: 'Menukort',
     type: 'document',
     fields: [
       {
         name: 'title',
         title: 'Titel',
         type: 'string',
       },
       {
         name: 'sections',
         title: 'Sektioner',
         type: 'array',
         of: [{ type: 'menuItem' }] 
       }
     ]
   };