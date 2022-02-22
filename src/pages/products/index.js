import { getAll } from "../../api/product";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Footer from "../../components/footer";

const ProductPage = {
    async render() {
        const response = await getAll();
        return /* html */`
        <div class="max-w-5xl mx-auto">
                <div id="header">
                    ${Header.render()}
                </div>
                <div class="banner">
                   ${Banner.render()}
                </div>
                <div class="news">
                <div class="row grid grid-cols-4">
                ${response.data.map((product) => `
                <div class="col-4">
                    <a href="/products/${product.id}">
                        <img src="${product.img}" alt="" />
                    </a>
                    <h3 class="my-3"><a href="/products/${product.id}" class="font-semibold text-lg text-orange-500 ">${product.title}</a></h3>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <p>${product.desc}</p>
                        <p>${product.price}</p>
                </div>
                `).join("")}
            </div>
                </div>
                ${Footer.render()}
            </div>
        `;
    },
};
export default ProductPage;