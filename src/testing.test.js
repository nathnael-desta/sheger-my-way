import { routeListCreator, getNearestBus } from "./utils/routeUtils";

describe("creating routes lists", () => {
  it("returns no route", () => {
    const route = [];

    expect(routeListCreator(route)).toEqual({
      order: [],
      route: [],
    });
  });

  it("returns a single route", () => {
    const routeSingle = ["Janmeda"];

    expect(routeListCreator(routeSingle)).toEqual({
      order: [
        {
          type: "normalEnding",
          data: ["Janmeda"],
        },
      ],
      route: ["Janmeda"],
    });
  });

  it("returns a two route", () => {
    const routeTwo = ["Janmeda", "sidist kilo"];

    expect(routeListCreator(routeTwo)).toEqual({
      order: [
        {
          type: "normalEnding",
          data: ["Janmeda", "sidist kilo"],
        },
      ],
      route: ["Janmeda", "sidist kilo"],
    });
  });

  it("returns a three route", () => {
    const routeThree = ["Janmeda", "sidist kilo", "amist kilo"];

    expect(routeListCreator(routeThree)).toEqual({
      order: [
        {
          type: "normal",
          data: ["Janmeda", "sidist kilo", "amist kilo"],
        },
      ],
      route: ["Janmeda", "sidist kilo", "amist kilo"],
    });
  });

  it("returns a four route", () => {
    const routeFour = ["Janmeda", "sidist kilo", "amist kilo", "arat kilo"];

    expect(routeListCreator(routeFour)).toEqual({
      order: [
        {
          type: "normal",
          data: ["Janmeda", "sidist kilo", "amist kilo"],
        },
        {
          type: "curvedEnding",
          data: ["arat kilo"],
        },
      ],
      route: ["Janmeda", "sidist kilo", "amist kilo", "arat kilo"],
    });
  });

  it("returns a five route", () => {
    const routeFive = [
      "Janmeda",
      "sidist kilo",
      "amist kilo",
      "arat kilo",
      "unity park",
    ];

    expect(routeListCreator(routeFive)).toEqual({
      order: [
        {
          type: "normal",
          data: ["Janmeda", "sidist kilo", "amist kilo"],
        },
        {
          type: "curved",
          data: ["arat kilo", "unity park"],
        },
      ],
      route: [
        "Janmeda",
        "sidist kilo",
        "amist kilo",
        "arat kilo",
        "unity park",
      ],
    });
  });

  it("returns a six route", () => {
    const routeSix = [
      "Janmeda",
      "sidist kilo",
      "amist kilo",
      "arat kilo",
      "unity park",
      "kazanchis",
    ];

    expect(routeListCreator(routeSix)).toEqual({
      order: [
        {
          type: "normal",
          data: ["Janmeda", "sidist kilo", "amist kilo"],
        },
        {
          type: "curved",
          data: ["arat kilo", "unity park"],
        },
        {
          type: "normalEnding",
          data: ["kazanchis"],
        },
      ],
      route: [
        "Janmeda",
        "sidist kilo",
        "amist kilo",
        "arat kilo",
        "unity park",
        "kazanchis",
      ],
    });
  });

  it("returns a seven route", () => {
    const routeSeven = [
      "Janmeda",
      "sidist kilo",
      "amist kilo",
      "arat kilo",
      "unity park",
      "kazanchis",
      "mexico",
    ];

    expect(routeListCreator(routeSeven)).toEqual({
      order: [
        {
          type: "normal",
          data: ["Janmeda", "sidist kilo", "amist kilo"],
        },
        {
          type: "curved",
          data: ["arat kilo", "unity park"],
        },
        {
          type: "normalEnding",
          data: ["kazanchis", "mexico"],
        },
      ],
      route: [
        "Janmeda",
        "sidist kilo",
        "amist kilo",
        "arat kilo",
        "unity park",
        "kazanchis",
        "mexico",
      ],
    });
  });

  it("returns a eight route", () => {
    const routeEight = [
      "Janmeda",
      "sidist kilo",
      "amist kilo",
      "arat kilo",
      "unity park",
      "kazanchis",
      "mexico",
      "sarbet",
    ];

    expect(routeListCreator(routeEight)).toEqual({
      order: [
        {
          type: "normal",
          data: ["Janmeda", "sidist kilo", "amist kilo"],
        },
        {
          type: "curved",
          data: ["arat kilo", "unity park"],
        },
        {
          type: "normal",
          data: ["kazanchis", "mexico", "sarbet"],
        },
      ],
      route: [
        "Janmeda",
        "sidist kilo",
        "amist kilo",
        "arat kilo",
        "unity park",
        "kazanchis",
        "mexico",
        "sarbet",
      ],
    });
  });
});


describe("get nearest bus", () => {
  const buses = [
    {
      "stop": "Amist Kilo",
      "from": "Janmeda",
      "next": "Mexico",
      "time": {
        "arrival": "17",
        "min": "23"
      },
      "plate": "A34263",
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
      "plate": "A12460",
      "diabilityFriendly": false,
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
      "plate": "A12483",
      "diabilityFriendly": true,
      "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
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
      "plate": "A12460",
      "diabilityFriendly": true,
      "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
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
      "plate": "A23463",
      "diabilityFriendly": false,
      "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
      "nextRoute": "amistKilo-mexico"
    },
  ]

  const currentBusMedium = {
    "stop": "Amist Kilo",
    "from": "Shiromeda",
    "next": "Mexico",
    "time": {
      "arrival": "12",
      "min": "35"
    },
    "plate": "A92463",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  }

  const currentBusFastest = {
    "stop": "Amist Kilo",
    "from": "Janmeda",
    "next": "Mexico",
    "time": {
      "arrival": "8",
      "min": "24"
    },
    "plate": "A14883",
    "diabilityFriendly": true,
    "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
    "nextRoute": "amistKilo-mexico"
  }

  it("returns the nearest when nearest isn't the choosen bus", () => {
    expect(getNearestBus(buses, currentBusMedium)).toEqual({
      "stop": "Amist Kilo",
      "from": "Janmeda",
      "next": "Mexico",
      "time": {
        "arrival": "8",
        "min": "24"
      },
      "plate": "A12483",
      "diabilityFriendly": true,
      "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
      "nextRoute": "amistKilo-mexico"
    })
  })

  it("returns the nearest when nearest is the choosen bus", () => {
    expect(getNearestBus(buses, {
      "stop": "Amist Kilo",
      "from": "Janmeda",
      "next": "Mexico",
      "time": {
        "arrival": "8",
        "min": "24"
      },
      "plate": "A12483",
      "diabilityFriendly": true,
      "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
      "nextRoute": "amistKilo-mexico"
    })).toEqual({
      "stop": "Amist Kilo",
      "from": "Shiromeda",
      "next": "Mexico",
      "time": {
        "arrival": "12",
        "min": "35"
      },
      "plate": "A12460",
      "diabilityFriendly": true,
      "route": ["Janmeda", "Amist Kilo", "Arat Kilo", "Fil Wuha", "Friendship", "Stadium", "Mexico"],
      "nextRoute": "amistKilo-mexico"
  })
  })
})