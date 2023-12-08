export default {
     name: 'contactInfo',
     title: 'Kontakt Information',
     type: 'document',
     fields: [
       {
         name: 'title',
         title: 'Titel',
         type: 'string'
       },
       {
         name: 'description',
         title: 'Beskrivelse',
         type: 'array', // Angiver at dette er en array af blokke
         of: [{ type: 'block' }] // Tillader almindelige tekstblokke
       },
       {
         name: 'address',
         title: 'Adresse',
         type: 'string'
       },
       {
        name: 'mail',
        title: 'E-mail',
        type: 'string'
      },
       {
         name: 'city',
         title: 'By',
         type: 'string'
       },
       {
         name: 'postalCode',
         title: 'Post Nr',
         type: 'string'
       },
       {
         name: 'phoneNumber',
         title: 'Telefon Nummer',
         type: 'string'
       },
     ]
   };
   