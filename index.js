// const names = [
//   "Dwiki Dharmawan",
//   "Monita Tahalea",
//   "Budi Doremi",
//   "Andre Hehanusa"
// ];

// const showNames = names => {
//   for (let index = 0; index < names.length; index++) {
//     const name = names[index];

//     console.log(`[${index + 1}] ${name}`);
//   }
// };

// showNames(names);

// filter Names

// const nameFull = [
//   "Dwiki Dharmawan",
//   "Monita Tahalea",
//   "Budi Doremi",
//   "Andre Hehanusa"
// ];

// const filterNames = (names, minimumLength) => {
//   let newNames = [];

//   for (let index = 0; index < names.length; index++) {
//     const name = names[index];

//     if (name.length >= minimumLength) {
//       newNames.push(name);
//     }
//   }
//   return newNames;
// };

// const filteredNames = filterNames(nameFull, 12);

// showNames(filteredNames);

// Array of Objects

const contacts = [
  {
    id: 1,
    name: "Rudi Marudi",
    phone: "+21883928192",
    email: "Rudi123@raymail.com",
    favorite: true,
    rating: 9,
    tags: ["popular", "cool"]
  },
  {
    id: 2,
    name: "Betty Lavenia",
    phone: "+21234234234",
    email: "bettykelapapeang@raymail.com",
    favorite: false,
    rating: 5,
    tags: ["smart", "unpopular"]
  },
  {
    id: 3,
    name: "Fulcrum Boeing",
    phone: "+21987836347",
    email: "boeingoing@oing.org",
    favorite: false,
    rating: 6,
    tags: ["strong", "can fly"]
  }
];

// Show Contact;
// console.log(contacts);

// const showContacts = contact => {
//   for (let index = 0; index < contact.length; index++) {
//     const contact = contacts[index];
//     console.log(
//       `[${contact.id}] ${contact.name} (${contact.phone}) <${contact.email}>`
//     );
//   }
// };

// showContacts(contacts);

// // Filter Contacts

const filterContacts = telpNo => {
  // for (let index = 0; index < contacts.length; index++) {
  //   const contact = [contacts[index]];
  //   console.log(contact);
  const filteredItem = contacts.find(sp => {
    return sp.phone === telpNo;
  });
  return filteredItem;
};
const filteredContacts = filterContacts("+21883928192");

console.log(filteredContacts);
