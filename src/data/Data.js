import { imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix } from "../assets/images"

export const Data = () => {
    const products = [
        {
            id: 2239,
            image: imgOne,
            name: 'Product 1',
            description:
                'Detailed description product 1',
            price: 20,
        },
        {
            id: 2240,
            image: imgTwo,
            name: 'Product 2',
            description:
                'Detailed description product 2',
            price: 22,
        },
        {
            id: 2241,
            image: imgThree,
            name: 'Product 3',
            description:
                'Detailed description product 3',
            price: 37,
        },
        {
            id: 2242,
            image: imgFour,
            name: 'Product 4',
            description:
                'Detailed description product 4',
            price: 25,
        },
        {
            id: 2243,
            image: imgFive,
            name: 'Product 5',
            description:
                'Detailed description product 5',
            price: 31,
        },
        {
            id: 2244,
            image: imgSix,
            name: 'Product 6',
            description:
                'Detailed description product 6',
            price: 33,
        },
    ];

    return products
}
