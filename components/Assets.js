const sushiFood = [
    {
        name: "Dragon Roll",
        ingredients: "Shrimp Tempura, Avocado, Cucumber, Eel Sauce, Spicy Mayo",
        desc: "A bold and crispy roll topped with creamy avocado and drizzled with sweet eel sauce and spicy mayo.",
        price: 18.99,
        src: "../assets/sushi-1.webp",
    },
    {
        name: "Salmon Nigiri",
        ingredients: "Fresh Salmon, Sushi Rice, Wasabi, Soy Sauce",
        desc: "Delicate slices of fresh Atlantic salmon hand-pressed over perfectly seasoned sushi rice.",
        price: 14.99,
        src: "../assets/sushi-2.webp",
    },
    {
        name: "Spicy Tuna Roll",
        ingredients: "Tuna, Sriracha, Cucumber, Nori, Sesame Seeds",
        desc: "Premium tuna blended with sriracha heat, wrapped in nori with crunchy cucumber and sesame-crusted rice.",
        price: 15.99,
        src: "../assets/sushi-3.webp",
    },
    {
        name: "Rainbow Roll",
        ingredients: "Crab, Avocado, Tuna, Salmon, Shrimp, Yellowtail",
        desc: "A California roll base topped with a vibrant array of fresh sashimi and creamy avocado slices.",
        price: 21.99,
        src: "../assets/sushi-4.webp",
    },
    {
        name: "Volcano Roll",
        ingredients: "Scallop, Crab, Masago, Spicy Mayo, Green Onion",
        desc: "A fiery baked roll loaded with spicy scallop and crab mix, finished with masago and green onion.",
        price: 19.99,
        src: "../assets/sushi-5.webp",
    },
    {
        name: "Philadelphia Roll",
        ingredients: "Smoked Salmon, Cream Cheese, Cucumber, Nori, Sushi Rice",
        desc: "A western classic combining rich cream cheese with silky smoked salmon and refreshing cucumber.",
        price: 13.99,
        src: "../assets/sushi-6.webp",
    },
]

export { sushiFood }

const diningTypes = [
    {
        type: "Fine",
        price: 499,
        src: "../assets/fine-dining-1.webp",
        includes: ["Bottle of Champagne", "Fine Sushi Tower For 2+", "Dessert"],
    },
    {
        type: "Gold",
        price: 999,
        src: "../assets/gold-dining-2.webp",
        includes: ["Bottle of Champagne", "Secret Menu Sushi For 2+", "Dessert"],
    },
    {
        type: "Luxury",
        price: 1599,
        src: "../assets/luxury-dining-3.webp",
        includes: ["Bottle of Luxury Champagne", "Special Menu Sushi For 2+", "Royal Dessert"],
    },
]

export { diningTypes }

const menuData = [
    {
        id: 'specialities',
        number: '01',
        tag: "Chef's Picks",
        title: 'Specialities',
        items: [
            {
                name: 'Dragon Emperor Roll', price: '28.99',
                ingredients: 'Lobster · Black Tobiko · Truffle Oil · Avocado · Gold Leaf',
                desc: 'Our crown jewel — a luxurious roll of butter-poached lobster, hand-rolled with premium black tobiko and finished with a whisper of white truffle oil.',
                spice: 2, tag: 'Signature', badge: "Chef's Special", symbol: '❋', featured: true,
            },
            {
                name: 'Volcano Roll', price: '19.99',
                ingredients: 'Scallop · Crab · Masago · Spicy Mayo',
                desc: 'Baked to perfection, topped with a spicy scallop and crab mix that cascades over sesame rice like molten fire.',
                spice: 3, tag: 'Spicy', symbol: '✦',
            },
            {
                name: 'Rainbow Roll', price: '21.99',
                ingredients: 'Crab · Tuna · Salmon · Shrimp · Yellowtail',
                desc: 'A California base crowned with a vibrant spectrum of fresh sashimi — a feast for the eyes as much as the palate.',
                spice: 1, tag: 'Popular', symbol: '◈',
            },
        ],
    },
    {
        id: 'sushi',
        number: '02',
        tag: 'Maki & Uramaki',
        title: 'Sushi Rolls',
        items: [
            {
                name: 'Spicy Tuna Roll', price: '15.99',
                ingredients: 'Tuna · Sriracha · Cucumber · Sesame',
                desc: 'Premium tuna blended with sriracha heat, wrapped in nori with crunchy cucumber and sesame-crusted rice.',
                spice: 3, tag: 'Spicy', symbol: '⊛',
            },
            {
                name: 'Philadelphia Roll', price: '13.99',
                ingredients: 'Smoked Salmon · Cream Cheese · Cucumber',
                desc: 'A western classic — silky smoked salmon paired with rich cream cheese and crisp cucumber.',
                spice: 1, tag: 'Classic', symbol: '◉',
            },
            {
                name: 'Dragon Roll', price: '18.99',
                ingredients: 'Shrimp Tempura · Avocado · Eel Sauce',
                desc: 'Crispy shrimp tempura topped with creamy avocado, drizzled with sweet eel sauce and spicy mayo.',
                spice: 2, tag: 'Bestseller', symbol: '❋',
            },
        ],
    },
    {
        id: 'nigiri',
        number: '03',
        tag: 'Hand-Pressed',
        title: 'Nigiri',
        items: [
            {
                name: 'Salmon Nigiri', price: '14.99',
                ingredients: 'Atlantic Salmon · Sushi Rice · Wasabi',
                desc: 'Delicate slices of fresh Atlantic salmon hand-pressed over perfectly seasoned sushi rice with a touch of wasabi.',
                spice: 1, tag: 'Fresh Daily', symbol: '✦',
            },
            {
                name: 'Otoro Tuna Nigiri', price: '24.99',
                ingredients: 'Bluefin Otoro · Rice · Micro Shiso',
                desc: 'The most prized cut of bluefin — intensely marbled, buttery otoro that dissolves on the palate. Served with micro shiso.',
                spice: 1, tag: 'Premium', badge: 'Premium', symbol: '◈',
            },
            {
                name: 'Yellowtail Nigiri', price: '16.99',
                ingredients: 'Hamachi · Rice · Yuzu Zest · Jalapeño',
                desc: 'Silky hamachi elevated with bright yuzu zest and a whisper of jalapeño heat for a clean, citrus-forward finish.',
                spice: 2, tag: 'Seasonal', symbol: '⊛',
            },
        ],
    },
    {
        id: 'cocktails',
        number: '04',
        tag: 'Crafted Spirits',
        title: 'Cocktails',
        items: [
            {
                name: 'Tokyo Mist', price: '16.00',
                ingredients: 'Sake · Yuzu · Elderflower · Prosecco',
                desc: "A luminous, effervescent cocktail inspired by Tokyo's neon skyline — light, floral, and gently warming.",
                spice: 1, tag: 'Signature', symbol: '◉',
            },
            {
                name: 'Golden Hour', price: '18.00',
                ingredients: 'Whisky · Honey · Ginger · Lemon · Gold Dust',
                desc: 'A bold, amber cocktail finished with edible gold dust — perfect to accompany our premium nigiri selection.',
                spice: 2, tag: 'Premium', symbol: '✦',
            },
            {
                name: 'Sakura Blush', price: '14.00',
                ingredients: 'Gin · Rose · Lychee · Cherry Blossom Syrup',
                desc: 'A delicate blush cocktail with the floral sweetness of cherry blossom — as beautiful to look at as it is to sip.',
                spice: 1, tag: 'Floral', symbol: '❋',
            },
        ],
    },
    {
        id: 'desserts',
        number: '05',
        tag: 'Sweet Endings',
        title: 'Desserts',
        items: [
            {
                name: 'Matcha Lava Cake', price: '12.00',
                ingredients: 'Ceremonial Matcha · Dark Chocolate · Cream',
                desc: 'A warm, molten-centered cake of ceremonial grade matcha with a dark chocolate lava core. Served with yuzu cream.',
                spice: 1, tag: 'Warm', symbol: '◈',
            },
            {
                name: 'Black Sesame Mochi', price: '9.00',
                ingredients: 'Glutinous Rice · Black Sesame · Red Bean',
                desc: 'Handmade mochi filled with a smooth black sesame and red bean paste — a traditional ending to a luxurious meal.',
                spice: 1, tag: 'Traditional', badge: "Chef's Choice", symbol: '⊛',
            },
            {
                name: 'Gold Leaf Tiramisu', price: '14.00',
                ingredients: 'Mascarpone · Espresso · Sake · Gold Leaf',
                desc: 'Our east-meets-west tiramisu — classic Italian technique with sake-soaked ladyfingers, crowned with edible gold leaf.',
                spice: 1, tag: 'Signature', symbol: '◉',
            },
        ],
    },
]

export { menuData }