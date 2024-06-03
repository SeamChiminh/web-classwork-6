import { cardComponent } from "../components/cardComponent.js";
import { products } from "../data/products.js";

// console.log(products);
let readerArea = document.querySelector("#card-area");

const BASE_URL = "http://172.27.64.1:51193/data/products.json";

fetch(BASE_URL).then((res) => res.json())
.then((data) => {
    data.map((pro) => {
        readerArea.innerHTML += cardComponent(pro)
    })
});

// products.map((pro) => {
//     readerArea.innerHTML += cardComponent(pro);
// });