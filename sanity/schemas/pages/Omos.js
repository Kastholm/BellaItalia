export default {
     name: 'omos',
     title: 'Om Bella Italia',
     type: 'document',
     fields: [
       {
         name: 'title',
         title: 'Titel',
         type: 'string'
       },
       {
         name: 'descriptiondk',
         title: 'Dansk Beskrivelse',
         type: 'array', // Angiver at dette er en array af blokke
         of: [{ type: 'block' }] // Tillader almindelige tekstblokke
       },
       {
          name: 'descriptionen',
          title: 'Engelsk Beskrivelse',
          type: 'array', // Angiver at dette er en array af blokke
          of: [{ type: 'block' }] // Tillader almindelige tekstblokke
        },
     ]
   };
   