import { mount as productMount } from "products/ProductsIndex";
import { mount as cartMount} from "../../cart/src/bootstrap";

console.log("Container");

productMount(document.querySelector("#my-products"))
cartMount(document.querySelector("#my-cart"))