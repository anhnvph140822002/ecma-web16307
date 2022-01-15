import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import DetailNewsPage from "./pages/detailNews";
import DashBoardPage from "./pages/admin/dashboard";
import AddNewsPage from "./pages/admin/news/add";
import AdminNewsPage from "./pages/admin/news";
import SignUp from "./pages/signup";
import NewList from "./components/admin/NewList";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/admin/dashboard": () => {
        print(DashBoardPage.render());
    },
    "/admin/news": () => {
        print(AdminNewsPage.render());
    },
    "/admin/news/add": () => {
        console.log("12");
        print(AddNewsPage.render());
    },
    "/Signup": () => {
        print(SignUp.render());
    },
    "/admin/new/list": () => {
        print(NewList.render());
    },
});
router.resolve();

// class KhuanBanh {
//     constructor(ten, duong, bot) {
//         this.ten = ten;
//         this.duong = duong;
//         this.bot = bot;
//     }

//     showInfo() {
//         console.log(`
//             Ten banh: ${this.ten}
//             Luong Duong: ${this.duong}
//             Luong Bot: ${this.bot}
//         `);
//     }
// }

// const banhDeo = new KhuanBanh("Banh Deo", 1, 5);
// const banhNuong = new KhuanBanh("Banh Nuong", 3, 2);
// banhDeo.showInfo();
// banhNuong.showInfo();

// const person = { // object litteral
//     name: "Dat",
//     run() {
//         console.log("Run method");
//     },
// };
// console.log(person.name);
// person.run();