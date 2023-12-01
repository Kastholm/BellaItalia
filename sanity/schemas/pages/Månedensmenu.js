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
         description: 'Klik på et måltid for at redigere i dens informationer, tilføj en ny ret, klik publish nede i højre hjørne',
         type: 'array',
         of: [{ type: 'monthMenuSection' }] 
       }
     ]
   };