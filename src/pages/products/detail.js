import toastr from "toastr";
import { get } from "../../api/posts";
// import { get } from "../../api/product";
import { addToCart } from "../../utils/cart";
import "toastr/build/toastr.min.css";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Footer from "../../components/footer";

const ProductDetailPage = {
    async render(id) {
        const { data: posts } = await get(id);
        return /* html */`
        <div class="max-w-5xl mx-auto">
                <div id="header">
                    ${Header.render()}
                </div>
                <div class="banner">
                   ${Banner.render()}
                </div>
                <div class="news">
                <div class="small-container single-product">
                <div class="row">
                    <div class="col-2">
                        <a href="">
                            <img src="${posts.img}" alt="" />
                        </a>
                    </div>
                    <div class="col-2">
                        <p>Home / SmartPhone</p>
                        <h1 class="my-3">${posts.title}</h1>
                        <p>${posts.price}</p>
                        <select>
                            <option>option</option>
                            <option>64G</option>
                            <option>128G</option>
                            <option>256G</option>
                            <option>512G</option>
                            <option>1TB</option>
                            </select>
                            <input type="number" id="inputValue" class="border border-black"/>
                            <button data-id="${posts.id}" id="btnAddToCart">Add to cart</button>
                            <br>
                            <p>${posts.desc}</p>
                    </div>
                </div>
            </div>
                </div>
                ${Footer.render()}
            </div>
        
        `;
    },
    afterRender() {
        const btnAddToCart = document.querySelector("#btnAddToCart");
        const { id } = btnAddToCart.dataset;
        const inputValue = document.querySelector("#inputValue");

        btnAddToCart.addEventListener("click", async () => {
            // console.log(inputValue.value)
            const { data } = await get(id);
            console.log(data);
            addToCart({ ...data, quantity: inputValue.value ? inputValue.value : 1 }, () => {
                toastr.success(`Thêm sản phẩm ${data.name} vào giỏ hàng thành công!`);
            });
        });
    },
};
export default ProductDetailPage;