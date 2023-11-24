// menuSection.js
export default {
     name: 'monthMenuSection',
     title: 'Menu Sektion',
     type: 'object',
     fields: [
       {
         name: 'sectionName',
         title: 'Sektion Navn',
         type: 'string'
       },
       {
         name: 'dishes',
         title: 'Retter',
         type: 'array',
         of: [{ type: 'monthMenuItem' }] // Her tilføjes retter direkte
       }
     ]
   };
   