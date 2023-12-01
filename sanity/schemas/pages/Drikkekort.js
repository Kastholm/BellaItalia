//Menukort.js
export default {
     name: 'drikkemenu',
     title: 'Drikkekort',
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