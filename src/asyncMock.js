const products = [   
        {
        id:'1',
        name: 'CyberpowerPC Gamer Xtreme VR Gaming PC',
        price: 1000,
        category:'PC',
        img:'https://m.media-amazon.com/images/I/910DymAB7fL._AC_SL1500_.jpg',
        stock:5,
        description:'Intel Core i5-9400F 2.9GHz, NVIDIA GeForce GTX 1660 6GB, 8GB DDR4, 120GB SSD, 1TB HDD, WiFi Ready & Win 10 Home (GXiVR8060A7, negro)'
        },
        {id:'2',name: 'Alarco Gaming PC Desktop Computer',price: 1000,category: 'PC',img:'https://m.media-amazon.com/images/I/81gqqKQVkAL._AC_SX466_.jpg',stock:8,description:'AMD Ryzen 5 5600G (12-Core 4.4Ghz), AMD Radeon RX Vega 7 Graphics, 16GB DDR4 RAM, 128GB NVMe SSD, 1TB HDD, WiFi, RGB, 1 Year Warranty, Black'},
        {id:'3',name: 'Lenovo Gaming PC Desktop Computer',price: 1000,category: 'PC',img:'https://m.media-amazon.com/images/I/61YfzjgM6VL._AC_SX425_.jpg',stock:2,description:'Intel Quad I5 up to 3.6GHz, GeForce GTX 1650 4G, 16GB Memory, 256G SSD + 3TB, RGB Keyboard & Mouse, WiFi & Bluetooth 5.0, DVD, Win 10 Pro (Renewed)'},
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.find(prod => prod.id === productId))
        }   , 500)
    })
}

export const getProductsByCategory = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
    }   , 500)
})
}
