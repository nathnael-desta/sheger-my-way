const buses = [
  {
    "stop": "Amist Kilo",
    "from": "Sidit Kilo",
    "next": "Stadium",
    "time": {
      "arrival": "10",
      "min": "24"
    },
    "plate": "A23456",
    "diabilityFriendly": false,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico", "Mexico", "Mexico", "Mexico", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Amist Kilo",
    "from": "Shiromeda",
    "next": "Jemo II",
    "time": {
      "arrival": "8",
      "min": "24"
    },
    "plate": "A12345",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Amist Kilo",
    "from": "Janmeda",
    "next": "Mexico",
    "time": {
      "arrival": "17",
      "min": "23"
    },
    "plate": "A34663",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Amist Kilo",
    "from": "Sidist Kilo",
    "next": "Mexico",
    "time": {
      "arrival": "25",
      "min": "22"
    },
    "plate": "A12463",
    "diabilityFriendly": false,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Sidist Kilo",
    "from": "Janmeda",
    "next": "Stadium",
    "time": {
      "arrival": "8",
      "min": "24"
    },
    "plate": "A12345",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Arat Kilo",
    "from": "Janmeda",
    "next": "Jemo II",
    "time": {
      "arrival": "8",
      "min": "24"
    },
    "plate": "A12345",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Amist Kilo",
    "from": "Janmeda",
    "next": "Mexico",
    "time": {
      "arrival": "8",
      "min": "24"
    },
    "plate": "A12463",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Amist Kilo",
    "from": "Shiromeda",
    "next": "Mexico",
    "time": {
      "arrival": "17",
      "min": "23"
    },
    "plate": "A12463",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Amist Kilo",
    "from": "Megenagna",
    "next": "Mexico",
    "time": {
      "arrival": "25",
      "min": "22"
    },
    "plate": "A12463",
    "diabilityFriendly": false,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
]

const busStands = [
  {
    "location": "Amist Kilo",
    "occupancy": "Not Crowded",
    "distance": "0.1"
  },
  {
    "location": "Sidist Kilo 1",
    "occupancy": "Moderate",
    "distance": "0.1"
  },
  {
    "location": "Sidist Kilo 2",
    "occupancy": "Crowded",
    "distance": "0.3"
  },
  {
    "location": "Arat Kilo 2",
    "occupancy": "Not Crowded",
    "distance": "0.4"
  },
  {
    "location": "Kazanchis 1",
    "occupancy": "Moderate",
    "distance": "1.2"
  },
  {
    "location": "Kazanchis 2",
    "occupancy": "Not Crowded",
    "distance": "1.5"
  }
]

export default {
  getAllBuses() {
    return buses;
  },
  getAllBusStands() {
    return busStands;
  }
}