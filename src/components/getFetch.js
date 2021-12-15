const products = [
    {
      id: 1,
      nombre: "Notebook Acer",
      imagen: "https://raw.githubusercontent.com/francozalazar/imagenes/main/acer.jpg",
      precioLabel: "28999",
      precio: 28999,
      cantidad: 1,
    },
    {
      id: 2,
      nombre: "MacBook",
      imagen: "https://raw.githubusercontent.com/francozalazar/imagenes/main/apple.jpg",
      precioLabel: "24999",
      precio: 24999,
      cantidad: 1,
    },
    {
      id: 3,
      nombre: "Samsung",
      imagen: "https://raw.githubusercontent.com/francozalazar/imagenes/main/samsung.jpg",
      precioLabel: "18999",
      precio: 18999,
      cantidad: 1,
    },
    {
      id: 4,
      nombre: "Notebook Dell",
      imagen: "https://raw.githubusercontent.com/francozalazar/imagenes/main/dell.jpg",
      precioLabel: "8999",
      precio: 8999,
      cantidad: 1,
    },
    {
      id: 5,
      nombre: "Notebook HP",
      imagen: "https://raw.githubusercontent.com/francozalazar/imagenes/main/hp1.jpg",
      precioLabel: "8999",
      precio: 8999,
      cantidad: 1,
    },
    {
      id: 6,
      nombre: "Notebook Huawei",
      imagen:"https://raw.githubusercontent.com/francozalazar/imagenes/main/huawei.jpg",
      precioLabel: "24999",
      precio: 24999,
      cantidad: 1,
    },
    {
      id: 7,
      nombre: "Notebook Lenovo",
      imagen: "https://raw.githubusercontent.com/francozalazar/imagenes/main/lenovo.jpg",
      precioLabel: "18999",
      precio: 18999,
      cantidad: 1,
    },
    {
      id: 8,
      nombre: "Notebook LG",
      imagen: "https://raw.githubusercontent.com/francozalazar/imagenes/main/lg.jpg",
      precioLabel: "23999",
      precio: 23999,
      cantidad: 1,
    },
    
  ];
  
   export const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(products)
    },2000)
})
