import { useState } from 'react';
import Hostels from "./components/Hostels";
import 'bootstrap/dist/css/bootstrap.min.css';
import hostelImage from "./assets/hostelImage1.jpg"; // this here is the image

function App() {
  const [hostels, setHostels] = useState([
    {id: 1,
    hostelName: "New Nana",
    hostelLocation: "Makerere Kagugbe",
    roomsAvailable: 120,
    hostelImage: {hostelImage},
    rating: 4.5
  },
    {id: 2,
    hostelName: "Dream World",
    hostelLocation: "Makerere Kikoni",
    roomsAvailable: 100,
    hostelImage: {hostelImage},
    rating: 4.0
  },
    {id: 3,
    hostelName: "Olympia",
    hostelLocation: "Makerere Kikoni",
    roomsAvailable: 100,
    hostelImage: {hostelImage},
    rating: 5.0
  },
    {id: 4,
    hostelName: "Nana",
    hostelLocation: "Wandegeya",
    roomsAvailable: 120,
    hostelImage: {hostelImage},
    rating: 4.5
  },
    {id: 5,
    hostelName: "Douglas Villa",
    hostelLocation: "Makerere Kikoni",
    roomsAvailable: 110,
    hostelImage: {hostelImage},
    rating: 4.5
  },
    {id: 6,
    hostelName: "Garden Courts",
    hostelLocation: "Makerere Kagugbe",
    roomsAvailable: 100,hostelImage: {hostelImage},
    rating: 4.0
  },
    {id: 7,
    hostelName: "Kare",
    hostelLocation: "Makerere Kagugbe",
    roomsAvailable: 100,
    hostelImage: {hostelImage},
    rating: 4.5
  },
    {id: 8,
    hostelName: "Aryan",
    hostelLocation: "Wandegeya",
    roomsAvailable: 80,
    hostelImage: {hostelImage},
    rating: 3.5
  },
  {id: 9,
    hostelName: "New Nana",
    hostelLocation: "Makerere Kagugbe",
    roomsAvailable: 120,
    hostelImage: {hostelImage},
    rating: 4.5
  },
  {id: 10,
    hostelName: "Dream World",
    hostelLocation: "Makerere Kikoni",
    roomsAvailable: 100,
    hostelImage: {hostelImage},
    rating: 4.0
  },
  {id: 11,
    hostelName: "Olympia",
    hostelLocation: "Makerere Kikoni",
    roomsAvailable: 100,
    hostelImage: {hostelImage},
    rating: 5.0
  },
  {id: 12,
    hostelName: "Nana",
    hostelLocation: "Wandegeya",
    roomsAvailable: 120,
    hostelImage: {hostelImage},
    rating: 4.5
  },
  {id: 13,
    hostelName: "Douglas Villa",
    hostelLocation: "Makerere Kikoni",
    roomsAvailable: 110,
    hostelImage: {hostelImage},
    rating: 4.5
  },
  {id: 14,
    hostelName: "Garden Courts",
    hostelLocation: "Makerere Kagugbe",
    roomsAvailable: 100,hostelImage: {hostelImage},
    rating: 4.0
  },
  {id: 15,
    hostelName: "Kare",
    hostelLocation: "Makerere Kagugbe",
    roomsAvailable: 100,
    hostelImage: {hostelImage},
    rating: 4.5
  },
  {id: 16,
    hostelName: "Aryan",
    hostelLocation: "Wandegeya",
    roomsAvailable: 80,
    hostelImage: {hostelImage},
    rating: 3.5
  }
])

if({hostelImage}) {
  console.log("Image accessed successfully!");
  console.log({hostelImage});
} else {
  console.log("Failed to access image!");
}

  return (
    <div className="container">
        <Hostels hostels={hostels} />
    </div>
  );
}

export default App;