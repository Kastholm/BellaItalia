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
         description: 'Klik på en ret for at redigere i dens informationer, klik publish nede i højre hjørne',
         type: 'array',
         of: [{ type: 'menuItem' }] 
       }
     ]
   };