import toastr from "toastr";
import { reRender } from "../utils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";
import "toastr/build/toastr.min.css";

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return `
            <table>
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>dung lượng</th>
                        <th>Giá sản phẩm</th>
                        <th>Ảnh sản phẩm</th>
                        <th>Số lượng</th>
                        <th></th>
                        <th></th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${cart.map((item) => `
                        <tr>
                            <td>${item.title}</td>
                            <td>${item.price}</td>
                            <td><img src="${item.img}" alt=""></td>
                            <td>
                                <input type="number" value="${item.quantity}" class="border border-gray-500"/>
                                <button data-id="${item.id}" class="bg-green-500 text-white btn btn-increase mr-2 px-2">Tăng</button>
                                <button data-id="${item.id}" class="bg-orange-500 text-white btn btn-decrease mr-2 px-2">Giảm</button>
                            </td>
                            <td>
                            <button data-id="${item.id}" class="bg-red-500 text-white btn btn-remove mr-2 px-2">Xóa</button>
                            </td>
                        </tr>
                    `).join("")}
                    
                </tbody>
            </table>
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantity(id, () => reRender(CartPage, "#app"));
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => reRender(CartPage, "#app"));
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Bạn đã xóa sản phẩm thành công");
                    });
                }
            });
        });
    },
};
export default CartPage;