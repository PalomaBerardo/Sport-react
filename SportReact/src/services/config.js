
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sport-25525.firebaseapp.com",
  projectId: "sport-25525",
  storageBucket: "sport-25525.firebasestorage.app",
  messagingSenderId: "432053877682",
  appId: "1:432053877682:web:26df5fc166cd67481502ab"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)

//const misProductos = [
   // {id: "1", nombre: "Buzo Boreal",stock: 15,  precio: 25000, img: "../public/imagenes/imagenes/buzo1.jpg", idCat:"Buzos"},
   //{id: "2", nombre: "Buzo Eclipse",stock: 20,  precio: 20000, img: "../public/imagenes/imagenes/buzo2.jpg", idCat:"Buzos"},
   // {id: "3", nombre: "Buzo Andes",stock: 25,  precio: 15000, img: "../public/imagenes/imagenes/buzo3.jpg", idCat:"Buzos"},descripción,
   // {id: "4", nombre: "Buzo Vertex", stock: 15, precio: 10000, img: "../public/imagenes/imagenes/buzo4.jpg", idCat:"Buzos"},
    //{id: "5", nombre: "Campera Bruma",stock: 20,  precio: 25000, img: "../public/imagenes/imagenes/campera1.jpg", idCat:"Buzos"},descripción,
   // {id: "6", nombre: "Campera Ignis",stock: 25,  precio: 20000, img: "../public/imagenes/imagenes/campera2.jpg", idCat:"Buzos"},
   // {id: "7", nombre: "Campera Terma",stock: 15,  precio: 15000, img: "../public/imagenes/imagenes/campera3.jpg", idCat:"Buzos"},
    //{id: "8", nombre: "Campera Strom",stock: 25,  precio: 10000, img: "../public/imagenes/imagenes/campera4.jpg", idCat:"Buzos"},
   //{id: "9", nombre: "Campera Polar",stock: 20,  precio: 25000, img: "../public/imagenes/imagenes/campera5.jpg", idCat:"Buzos"},
   // {id: "10", nombre: "Short Ágil",stock: 15,  precio: 20000, img: "../public/imagenes/imagenes/short1.jpg", idCat:"Calzas"},descripción,
   // {id: "11", nombre: "Short Aura",stock: 25,  precio: 15000, img: "../public/imagenes/imagenes/short2.jpg", idCat:"Calzas"},
   // {id: "12", nombre: "Short Flash",stock: 20,  precio: 10000, img: "../public/imagenes/imagenes/short3.jpg", idCat:"Calzas"},
   // {id: "13", nombre: "Short Marea",stock: 25,  precio: 20000, img: "../public/imagenes/imagenes/short4.jpg", idCat:"Calzas"},
    //{id: "14", nombre: "Calza Fénix",stock: 15,  precio: 15000, img: "../public/imagenes/imagenes/calza1.jpg", idCat:"Calzas"},descripción,
    //{id: "15", nombre: "Calza Átomo",stock: 25,  precio: 10000, img: "../public/imagenes/imagenes/calza2.jpg", idCat:"Calzas"},
    //{id: "16", nombre: "Calza Selva",stock: 20,  precio: 20000, img: "../public/imagenes/imagenes/calza3.jpg", idCat:"Calzas"},
    //{id: "17", nombre: "Calza Lúa",stock: 25,  precio: 15000, img: "../public/imagenes/imagenes/calza4.jpg", idCat:"Calzas"},
   // {id: "18", nombre: "Calza Térmica Nova",stock: 20,  precio: 10000, img: "../public/imagenes/imagenes/calza5.jpg", idCat:"Calzas"},descripción,
    //{id: "19", nombre: "Calza Prisma",stock: 15,  precio: 20000, img: "../public/imagenes/imagenes/calza6.jpg", idCat:"Tops"},
   // {id: "21", nombre: "Remera Alma",stock: 20,  precio: 10000, img: "../public/imagenes/imagenes/remera2.jpg", idCat:"Tops"},descripción,
   // {id: "22", nombre: "Remera Urban",stock: 15,  precio: 15000, img: "../public/imagenes/imagenes/remera3.jpg", idCat:"Tops"},
   // {id: "23", nombre: "Remera Lumen",stock: 25,  precio: 10000, img: "../public/imagenes/imagenes/remera4.jpg", idCat:"Tops"},
 //   {id: "24", nombre: "Top Amarea",stock: 15,  precio: 15000, img: "../public/imagenes/imagenes/top1.jpg", idCat:"Tops"},
  //  {id: "25", nombre: "Top Iris",stock: 20,  precio: 10000, img: "../public/imagenes/imagenes/top2.jpg", idCat:"Tops"},
  //  {id: "26", nombre: "Top Vega", stock: 15, precio: 15000, img: "../public/imagenes/imagenes/top3.jpg", idCat:"Tops"},
  //  {id: "27", nombre: "Top Eclipse",stock: 25,  precio: 10000, img: "../public/imagenes/imagenes/top4.jpg", idCat:"Tops"},
 //   {id: "28", nombre: "Top Éter",stock: 15,  precio: 15000, img: "../public/imagenes/imagenes/top5.jpg", idCat:"Tops"},
//]

//import { collection, doc, writeBatch } from "firebase/firestore";

//const subirProductos = async () => {
//    const batch = writeBatch(db);
//   const productosRef = collection(db, "productos");

//misProductos.forEach((producto) => {
//    const nuevoDoc = doc(productosRef);
 //   batch.set(nuevoDoc, producto);
//});

//try {
//    await batch.commit();
//   console.log("Productos subidos exitosamente");
//} catch (error) {
 //   console.error("Error subiendo productos:", error);
//}
//};

//subirProductos()  