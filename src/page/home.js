import banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import newList from "../components/newsList";

const HomePage = {
    render() {
        return /* html */ `
        ${Header.render()}
            <div class="max-w-5xl mx-auto">
                <div class="banner">
                   ${banner.render()}
                </div>
                <div class="news">
                    ${newList.render()}
                </div>
            </div>
            ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;