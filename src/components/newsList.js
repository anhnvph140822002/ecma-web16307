import { getAll } from "../api/posts";

const NewList = {
    async render() {
        const response = await getAll();
        return /* html */`
        <div class="categories">
            <div class="small-container">
                <div class="row">
                    <div class="col-3">
                        <img src="images/zfold3_carousel_mainsinglekv_mo.webp">
                    </div>
                    <div class="col-3">
                        <img src="images/samsung-galaxy-z-flip-3-violet-1-600x600.jpg">
                    </div>
                    <div class="col-3">
                        <img src="images/Tai-nghe-samsung-galaxy-buds-pro-7.jpg">
                    </div>

                </div>
            </div>
        </div>
        <div class="small-container"> 
            <h2 class="title">Sản phảm bán chạy 2020</h2>   
            <div class="row grid grid-cols-4">
                ${response.data.map((post) => `
                <div class="col-4 boder p-3 ">
                    <a href="">
                        <img src="${post.img}" alt="" />
                    </a>
                    <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">${post.title}</a></h3>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <p>${post.desc}</p>
                    <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">${post.price}</a></h3>
                </div>
                `).join("")}
            </div>
        </div>
        `;
    },
};
export default NewList;