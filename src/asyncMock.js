const products = [   
        {
        id:'1',
        name: 'Intel Core i9-13900K Desktop Processor',
        price: 800,
        category:'processors',
        img:'https://m.media-amazon.com/images/I/61uI+orDOZL._AC_SL1500_.jpg',
        stock:5,
        description:'Intel Core i9-13900K Desktop Processor 24 cores (8 P-cores + 16 E-cores) 36M Cache, up to 5.8 GHz. Performance hybrid architecture integrates two core microarchitectures, prioritizing and distributing workloads to optimize performance'
        },
        {id:'2',name: 'Alarco Gaming PC Desktop Computer',price: 2000,category: 'masterrace',img:'https://m.media-amazon.com/images/I/81gqqKQVkAL._AC_SX466_.jpg',stock:8,description:'AMD Ryzen 5 5600G (12-Core 4.4Ghz), AMD Radeon RX Vega 7 Graphics, 16GB DDR4 RAM, 128GB NVMe SSD, 1TB HDD, WiFi, RGB, 1 Year Warranty, Black'},
        {id:'3',name: 'Lenovo Gaming PC Desktop Computer',price: 1200,category: 'notebooks',img:'https://m.media-amazon.com/images/I/71AGOX9MORL._AC_SL1500_.jpg',stock:2,description:'ASUS TUF Dash 15 (2022) Gaming Laptop, 15.6" 144Hz FHD Display, Intel Core i7-12650H, GeForce RTX 3060, 16GB DDR5, 512GB SSD, Thunderbolt 4, Windows 11 Home, Off Black, FX517ZM-AS73'},
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

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
    }   , 500)
})
}
