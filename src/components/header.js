import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const Header = {
    render() {
        return /* html */`
        <div class="header">
            <div class="container">
                <div class="navbar">
                    <div class="logo">
                    <a href="index.html"><img src="images/samsung.jpg" width="125px"></a>
                    </div>
                        <nav>
                            <ul id="MenuItems">
                                <li><a href="/">Home</a></li>
                                <li><a href="/products">Products</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/contact">Contact</a></li>
                                <li><a href="/signin">Signin</a></li>
                                <li><a href="/signup">Signup</a></li>
                                <li><a href="/admin/posts">Admin</a></li>
                            </ul>
                            ${localStorage.getItem("user") ? `
                            <ul class="flex" style="margin-left: 400px;">
                            <li class="flex items-center">Chào <a href="/" class="block px-4 py-3 hover:bg-blue-800 hover:text-white" id="email"></a></li>
                            <li class="flex items-center"><a class="block px-4 py-3 hover:bg-blue-800 hover:text-white" id="logout">Logout</a></li>
                            </ul>
                            ` : ""}
                        </nav>
                    <a href="/cart"><img src="images/cart.png" width="30px" height="30px"></a>
                    <img src="images/menu.png" class="menu-icon" onclick="menutoggle()">
                </div>
        

                `;
    },
    afterRender() {
        // Lấy thông tin từ localStorage
        // Sử dụng JSON.parse để chuyển đổi chuỗi sang object
        const email = document.querySelector("#email");
        const logout = document.querySelector("#logout");
        if (email) {
            email.innerHTML = JSON.parse(localStorage.getItem("user")).email;
        }
        if (logout) {
            logout.addEventListener("click", () => {
                localStorage.removeItem("user");
                reRender(Header, "#header");
                toastr.success("Logout thành công");
            });
        }
    },
};
export default Header;