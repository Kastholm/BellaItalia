// menuSection.js
export default {
     name: 'menuSection',
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
         of: [{ type: 'menuItem' }] // Her tilføjes retter direkte
       }
     ]
   };
   