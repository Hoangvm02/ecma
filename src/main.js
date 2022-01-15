import Navigo from "navigo";
import HomePage from "./page/home";
import AboutPage from "./page/about";
import ProductPage from "./page/product";
import LoginPage from "./page/login";
import SignupPage from "./page/signup";
// import AdminPage from "./page/admin";
// import AddPage from "./page/add";
// import EditPage from "./page/edit";
// import Header from "./components/header";
// import Footer from "./components/footer";
import DetailNewsPage from "./page/detailNews";
import DashBoardPage from "./page/admin/dashboard";
import AddNewsPage from "./page/admin/news/add";
import AdminNewsPage from "./page/admin/news";
import EditNewsPage from "./page/admin/news/edit";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    // document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    // document.getElementById("footer").innerHTML = Footer.render();
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
    "/login": () => {
        print(LoginPage.render());
    },
    "/signup": () => {
        print(SignupPage.render());
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
        // console.log("12");
        print(AddNewsPage.render());
    },
    // "/admin/news/edit": () => {
    //     // console.log("12");
    //     print(EditNewsPage.render());
    // },
    "/admin/news/edit:id": ({ data }) => {
        const { id } = data;
        print(EditNewsPage.render(id));
    },
});
router.resolve();
// "/admin": () => {
//     print(AdminPage.render());
// },
// "/add": () => {
//     print(AddPage.render());
// },
// "/edit": () => {
//     print(EditPage.render());
// },