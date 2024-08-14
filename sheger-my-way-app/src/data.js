const buses = [
  {
    "stop": "Amist Kilo",
    "from": "Sidit Kilo",
    "next": "Stadium",
    "time": {
      "arrival": "10",
      "min": "24"
    },
    "plate": "A23845",
    "diabilityFriendly": false,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico", "Arat Kilo", "Fil Wuha", "Friendship"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Amist Kilo",
    "from": "Sidit Kilo",
    "next": "Stadium",
    "time": {
      "arrival": "13",
      "min": "12"
    },
    "plate": "A23456",
    "diabilityFriendly": false,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Amist Kilo",
    "from": "Sidit Kilo",
    "next": "Stadium",
    "time": {
      "arrival": "56",
      "min": "98"
    },
    "plate": "A23656",
    "diabilityFriendly": false,
    "route": ["Janmeda", "Amist Kilo", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Amist Kilo",
    "from": "Sidit Kilo",
    "next": "Stadium",
    "time": {
      "arrival": "23",
      "min": "45"
    },
    "plate": "A73456",
    "diabilityFriendly": false,
    "route": ["Janmeda", "Amist Kilo", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Amist Kilo",
    "from": "Sidit Kilo",
    "next": "Stadium",
    "time": {
      "arrival": "86",
      "min": "23"
    },
    "plate": "A83456",
    "diabilityFriendly": false,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Amist Kilo",
    "from": "Sidit Kilo",
    "next": "Stadium",
    "time": {
      "arrival": "45",
      "min": "87"
    },
    "plate": "A93456",
    "diabilityFriendly": false,
    "route": [ "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Amist Kilo",
    "from": "Sidit Kilo",
    "next": "Stadium",
    "time": {
      "arrival": "96",
      "min": "22"
    },
    "plate": "A56456",
    "diabilityFriendly": false,
    "route": ["Janmeda", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
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
    "plate": "A17345",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship"],
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
    "plate": "A30663",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo"],
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
    "plate": "A11463",
    "diabilityFriendly": false,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium"],
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
    "plate": "A12335",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo"],
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
    "plate": "A12235",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico", "Friendship", "Stadium", "Mexico"],
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
    "plate": "A12343",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Amist Kilo",
    "from": "Shiromeda",
    "next": "Mexico",
    "time": {
      "arrival": "12",
      "min": "35"
    },
    "plate": "A12453",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Amist Kilo",
    "from": "Megenagna",
    "next": "Mexico",
    "time": {
      "arrival": "50",
      "min": "20"
    },
    "plate": "A124663",
    "diabilityFriendly": false,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Sidist Kilo 1",
    "from": "Megenagna",
    "next": "Sidist Kilo 1",
    "time": {
      "arrival": "50",
      "min": "20"
    },
    "plate": "A124663",
    "diabilityFriendly": false,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Sidist Kilo 1",
    "from": "Janmeda",
    "next": "Jemo II",
    "time": {
      "arrival": "8",
      "min": "24"
    },
    "plate": "A12235",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Sidist Kilo 1",
    "from": "Janmeda",
    "next": "Mexico",
    "time": {
      "arrival": "8",
      "min": "24"
    },
    "plate": "A12343",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Sidist Kilo 1",
    "from": "Shiromeda",
    "next": "Mexico",
    "time": {
      "arrival": "12",
      "min": "35"
    },
    "plate": "A12453",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha"],
    "nextRoute": "amistKilo-mexico"
  },
  
  {
    "stop": "Sidist Kilo 2",
    "from": "Shiromeda",
    "next": "Mexico",
    "time": {
      "arrival": "12",
      "min": "35"
    },
    "plate": "A12453",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Sidist Kilo 2",
    "from": "Megenagna",
    "next": "Mexico",
    "time": {
      "arrival": "50",
      "min": "20"
    },
    "plate": "A124663",
    "diabilityFriendly": false,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Sidist Kilo 2",
    "from": "Megenagna",
    "next": "Sidist Kilo 1",
    "time": {
      "arrival": "50",
      "min": "20"
    },
    "plate": "A124663",
    "diabilityFriendly": false,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Sidist Kilo 2",
    "from": "Janmeda",
    "next": "Jemo II",
    "time": {
      "arrival": "8",
      "min": "24"
    },
    "plate": "A12235",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Sidist Kilo 2",
    "from": "Janmeda",
    "next": "Mexico",
    "time": {
      "arrival": "8",
      "min": "24"
    },
    "plate": "A12343",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Sidist Kilo 2",
    "from": "Shiromeda",
    "next": "Mexico",
    "time": {
      "arrival": "12",
      "min": "35"
    },
    "plate": "A12453",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha"],
    "nextRoute": "amistKilo-mexico"
  },

  {
    "stop": "Sidist Kilo 1",
    "from": "Shiromeda",
    "next": "Mexico",
    "time": {
      "arrival": "12",
      "min": "35"
    },
    "plate": "A12453",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha"],
    "nextRoute": "amistKilo-mexico"
  },
  
  {
    "stop": "Arat Kilo 2",
    "from": "Shiromeda",
    "next": "Mexico",
    "time": {
      "arrival": "12",
      "min": "35"
    },
    "plate": "A12453",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Arat Kilo 2",
    "from": "Megenagna",
    "next": "Mexico",
    "time": {
      "arrival": "50",
      "min": "20"
    },
    "plate": "A124663",
    "diabilityFriendly": false,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Arat Kilo 2",
    "from": "Megenagna",
    "next": "Sidist Kilo 1",
    "time": {
      "arrival": "50",
      "min": "20"
    },
    "plate": "A124663",
    "diabilityFriendly": false,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Arat Kilo 2",
    "from": "Janmeda",
    "next": "Jemo II",
    "time": {
      "arrival": "8",
      "min": "24"
    },
    "plate": "A12235",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Arat Kilo 2",
    "from": "Janmeda",
    "next": "Mexico",
    "time": {
      "arrival": "8",
      "min": "24"
    },
    "plate": "A12343",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Arat Kilo 2",
    "from": "Shiromeda",
    "next": "Mexico",
    "time": {
      "arrival": "12",
      "min": "35"
    },
    "plate": "A12453",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha"],
    "nextRoute": "amistKilo-mexico"
  },
  
  {
    "stop": "Kazanchis 1",
    "from": "Shiromeda",
    "next": "Mexico",
    "time": {
      "arrival": "12",
      "min": "35"
    },
    "plate": "A12453",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Kazanchis 1",
    "from": "Megenagna",
    "next": "Mexico",
    "time": {
      "arrival": "50",
      "min": "20"
    },
    "plate": "A124663",
    "diabilityFriendly": false,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Kazanchis 1",
    "from": "Megenagna",
    "next": "Sidist Kilo 1",
    "time": {
      "arrival": "50",
      "min": "20"
    },
    "plate": "A124663",
    "diabilityFriendly": false,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Kazanchis 1",
    "from": "Janmeda",
    "next": "Jemo II",
    "time": {
      "arrival": "8",
      "min": "24"
    },
    "plate": "A12235",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Kazanchis 1",
    "from": "Janmeda",
    "next": "Mexico",
    "time": {
      "arrival": "8",
      "min": "24"
    },
    "plate": "A12343",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Kazanchis 1",
    "from": "Shiromeda",
    "next": "Mexico",
    "time": {
      "arrival": "12",
      "min": "35"
    },
    "plate": "A12453",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha"],
    "nextRoute": "amistKilo-mexico"
  },

  {
    "stop": "Kazanchis 2",
    "from": "Shiromeda",
    "next": "Mexico",
    "time": {
      "arrival": "12",
      "min": "35"
    },
    "plate": "A12453",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Kazanchis 2",
    "from": "Megenagna",
    "next": "Mexico",
    "time": {
      "arrival": "50",
      "min": "20"
    },
    "plate": "A124663",
    "diabilityFriendly": false,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Kazanchis 2",
    "from": "Megenagna",
    "next": "Sidist Kilo 1",
    "time": {
      "arrival": "50",
      "min": "20"
    },
    "plate": "A124663",
    "diabilityFriendly": false,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Kazanchis 2",
    "from": "Janmeda",
    "next": "Jemo II",
    "time": {
      "arrival": "8",
      "min": "24"
    },
    "plate": "A12235",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Kazanchis 2",
    "from": "Janmeda",
    "next": "Mexico",
    "time": {
      "arrival": "8",
      "min": "24"
    },
    "plate": "A12343",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  },
  {
    "stop": "Kazanchis 2",
    "from": "Shiromeda",
    "next": "Mexico",
    "time": {
      "arrival": "12",
      "min": "35"
    },
    "plate": "A12453",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha"],
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