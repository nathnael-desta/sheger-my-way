import { routeListCreator } from "./utils/routeUtils";

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
