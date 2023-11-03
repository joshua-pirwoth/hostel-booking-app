const express = require('express');
const app = express();
const PORT = 3001; // You can change the port as needed

// Create an array to store hostel data
const hostels = [
  {
    name: 'Nalika Hostel',
    location: 'Kikoni',
    singleRoomPrice:950000 ,
    doubleRoomPrice:650000,
    rooms: 150,
  },
  {
    name: 'JJ Hostel',
    location: 'Kikoni',
    singleRoomPrice:1200000 ,
    doubleRoomPrice:720000,
    rooms: 100,
  },
  {
    name: 'Nakiyingi Hostel',
    location: 'Kikoni',
    singleRoomPrice:1000000 ,
    doubleRoomPrice:700000,
    rooms: 97,
  },
  {
    name: 'Nana Hostel',
    location: 'Makerere',
    singleRoomPrice:950000 ,
    doubleRoomPrice:650000,
    rooms: 120,
  },
  
  
  // Add more hostels as needed
];

// Define a route to get the list of hostels
app.get('/hostels', (req, res) => {
  res.json(hostels);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
