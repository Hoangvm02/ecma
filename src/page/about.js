import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = {
    render() {
        return /* html */ `
        ${Header.render()}
        <div class="max-w-5xl mx-auto">
            <h1>About Page</h1>
        </div>
        ${Footer.render()}
        `;
    },
};
export default AboutPage;