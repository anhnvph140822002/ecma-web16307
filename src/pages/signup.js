import toastr from "toastr";
import { signup } from "../api/user";
import "toastr/build/toastr.min.css";
import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";

const Signup = {
    render() {
        return `
        <div class="max-w-5xl mx-auto">
                <div id="header">
                    ${Header.render()}
                </div>
                <div class="banner">
                   ${Banner.render()}
                </div>
                <div class="news">
                    <form id="formSignup">
                <input type="email" id="email" placeholder="your email" class="border border-black"/>
                <input type="password" id="password" placeholder="your password" class="border border-black"/>
                <button>Đăng ký</button>
            </form>
                </div>
                ${Footer.render()}
            </div>
            
        
        `;
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signup({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                if (data) {
                    toastr.success("Đăng ký thành công, chuyển trang sau 2s");
                    setTimeout(() => {
                        document.location.href = "/signin";
                    }, 2000);
                }
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};
export default Signup;