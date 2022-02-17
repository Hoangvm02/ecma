import Navigo from "navigo";
import HomePage from "./page/home";
import AboutPage from "./page/about";
import ProductPage from "./page/product";
// import LoginPage from "./page/login";
// import SignupPage from "./page/signup";
// import Header from "./components/header";
// import Footer from "./components/footer";
import DashBoardPage from "./page/admin/dashboard";
import AdminAddPosts from "./page/admin/posts/add";
import AdminPost from "./page/admin/posts";
import AdminEditposts from "./page/admin/posts/edit";
import Signup from "./page/signup";
import Signin from "./page/signin";
import CartPage from "./page/cart";
import ProductDetailPage from "./page/admin/products/detail";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before: (done) => {
        if (localStorage.getItem("user")) {
            console.log("ahihi");
            const userId = JSON.parse(localStorage.getItem("user")).id;
            if (userId === 1) {
                done();
            } else {
                document.location.href = "/";
            }
        }
    },
});

router.on({

    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/products": () => print(ProductPage),
    "/admin/dashboard": () => print(DashBoardPage),
    "/admin/posts": () => print(AdminPost),
    "/products/:id": ({ data }) => print(ProductDetailPage, data.id),
    "/admin/posts/add": () => print(AdminAddPosts),
    "/admin/posts/:id/edit": ({ data }) => print(AdminEditposts, data.id),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/cart": () => print(CartPage),

    // "/": () => {
    //     print(HomePage);
    // },
    // "/about": () => {
    //     print(AboutPage);
    // },
    // "/product": () => {
    //     print(ProductPage);
    // },
    // "/login": () => {
    //     print(LoginPage);
    // },
    // "/signup": () => {
    //     print(SignupPage);
    // },

    // "/news/:id": ({ data }) => {
    //     const { id } = data;
    //     print(DetailNewsPage);
    // },
});
router.resolve();