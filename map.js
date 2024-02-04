const rajib = [21, 45, 64, 34, 24, 67, 77, 90,];

const mim = rajib.map(rajib => rajib * 3)

console.log(mim);



const items = [
    {name:'shart',color:'black',price:500},
    {name:'pant',color:'green',price:600},
    {name:'watch',color:'gold',price:1200},
]

const nusrat = items.map(item => item.price)

console.log(nusrat);



const items = [
    {name:'shart',color:'black',price:500},
    {name:'pant',color:'green',price:600},
    {name:'watch',color:'gold',price:1200},
]


const minjuli = items.find(items => items.price == 1200);

console.log(minjuli);