import toastr from "toastr";
import { signup } from "../api/user";
import "toastr/build/toastr.min.css";
import Header from "../components/header";
import Footer from "../components/footer";

const Signup = {
    render() {
        return `
        <div class="max-w-5xl mx-auto">
                <div id="header">
                    ${Header.render()}
                </div>
                <div class="banner">
                
                </div>
                <div class="news">
                <div class="account-page">
                <div class="container">
                    <div class="row">
                        <div class="col-2">
                            <img src="images/samsung1.jpg" width="100%">
                        </div>
        
                        <div class="col-2">
                            <div class="form-container">
                                <div class="form-btn">
                                    <span onclick="register()">Signup</span>
                                    <hr id="Indicator">
                                </div>
        
                                <form id="RegForm">
                            <input type="email" id="email" placeholder="your email">
                            <input type="password" id="password" placeholder="your password">
                            <button type="submit" class="btn">Register</button>
                        </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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