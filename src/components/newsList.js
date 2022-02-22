import { getAll } from "../api/posts";

const NewList = {
    async render() {
        const response = await getAll();
        return /* html */`
    
        <div class="small-container"> 
            <h2 class="title">Sản phảm bán chạy 2021</h2>   
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