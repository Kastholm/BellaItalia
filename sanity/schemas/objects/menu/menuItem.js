// menuItem.js
export default {
  name: 'menuItem',
  title: 'Ret',
  type: 'object',
  fields: [
    {
      name: 'number',
      title: 'Nummer',
      type: 'number'
    },
    {
      name: 'name',
      title: 'Navn',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'text'
    },
    {
      name: 'price',
      title: 'Pris',
      type: 'number'
    },
    {
      name: 'takeawayprice',
      title: 'Take Away Pris',
      type: 'number'
    },
  ]
};
