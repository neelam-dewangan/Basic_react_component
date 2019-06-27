
const defaultList =  [
    {
        name: "Car",
        id: 1,
        price: 100000,
        url: "https://drop.ndtv.com/albums/AUTO/tata-tiago-jtp/10.jpg"
    },
    {
        name: "Bike",
        id: 2,
        price: 10000,
        url: "https://drop.ndtv.com/albums/AUTO/tata-tiago-jtp/11.jpg"
    },
    {
        name: "SUV",
        id: 3,
        price: 1000000,
        url: "https://drop.ndtv.com/albums/AUTO/tata-tiago-jtp/3.jpg"
    },
]


export const productReducer = (reducerState = defaultList, action) => {
    switch(action.type) {
        default: return reducerState
    }
}