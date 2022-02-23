import { getAll } from "../../api/posts";
// import { getAll } from "../../api/product";
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
                <div class="row grid grid-cols-4"  style="margin-left: 200px; margin-right: 200px;">
                ${response.data.map((posts) => `
                <div class="col-4">
                    <a href="/products/${posts.id}">
                        <img src="${posts.img}" alt="" />
                    </a>
                    <h3 class="my-3"><a href="/products/${posts.id}" class="font-semibold text-lg text-orange-500 ">${posts.title}</a></h3>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <p>${posts.desc}</p>
                        <p>${posts.price}</p>
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