import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";

const Contact = {
    async render() {
        return /* html */`
            <div class="max-w-5xl mx-auto">
                <div id="header">
                    ${Header.render()}
                </div>
                <div class="banner">
                   ${Banner.render()}
                </div>
                <div class="news">
                <div class="con1">
    <div class="con1">
        <div style="text-align:center">
            <h2>Liên hệ</h2>
            <p>Hãy để lại tin nhắn cho chúng tôi</p>
        </div>
        <div class="ro1">
            <div class="col1">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863855881427!2d105.74459841478466!3d21.038132792834425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2sFPT%20Polytechnic%20Hanoi!5e0!3m2!1sen!2s!4v1638689450899!5m2!1sen!2s"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div class="col1">
                <form action="/action_page.php">
                    <label for="fname">Họ tên</label>
                    <input type="text" id="fname" name="firstname" placeholder="Họ tên của bạn..">
                    <label for="lname">Tài khoản</label>
                    <input type="text" id="lname" name="lastname" placeholder="Tài khoản của bạn..">
                    <label for="country">Vấn đề về: </label>
                    <select id="country" name="country">
                        <option value="australia">Sản phẩm</option>
                        <option value="canada">Góp ý</option>
                        <option value="usa">Đánh giá</option>
                    </select>
                    <label for="subject">Lời nhắn</label>
                    <textarea id="subject" name="subject" placeholder="Lời nhắn của bạn.."
                        style="height:170px"></textarea>
                    <input type="submit" value="Gửi">
                </form>
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
        Header.afterRender();
    },
};
export default Contact;