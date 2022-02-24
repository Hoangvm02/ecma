import toastr from "toastr";
import { get } from "../../api/product";
import { addToCart } from "../../utils/cart";
import "toastr/build/toastr.min.css";
// import banner from "../../components/banner";
import Footer from "../../components/footer";
import Header from "../../components/header";

const ProductDetailPage = {
    async render(id) {
        const { data: product } = await get(id);
        return /* html */`
        ${Header.render()}
        <section>
        <div class="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div class="xl:w-2/6 lg:w-3/5 w-80 md:block hidden">
                <img class="w-full h-96" src="https://i.ibb.co/znBmcWV/Rectangle-37-1.png" alt="A girl Posing Image" />
            </div>
            <div class="md:hidden">
                <img class="w-full" alt="image of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" />
                <div class="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                    <img alt="image-tag-one" class="md:w-48 md:h-48 w-full" src="${product.img}" />
                    <img alt="image-tag-one" class="md:w-48 md:h-48 w-full" src="${product.img}" />
                    <img alt="image-tag-one" class="md:w-48 md:h-48 w-full" src="${product.img}" />
                    <img alt="image-tag-one" class="md:w-48 md:h-48 w-full" src="${product.img}" />
                </div>
            </div>
            <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div class="border-b border-gray-200 pb-6">
                    <p class="text-sm leading-none text-gray-600 dark:text-gray-300 ">${product.name}</p>
                    <h1 class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">${product.name}</h1>
                </div>
                    <p class="text-2xl mt-6 mb-4">${product.desc}</p>
                     <p class="text-2xl mt-6 mb-4">${product.price}</p>
                     <input type="number" id="inputValue" class="border-4 bg-black-200 mb-4"/>
                <button data-id="${product.id}" id="btnAddToCart" class="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none">
                Add to cart
            </button>
            </div>
        </div>
        ${Footer.render()}
        `;
    },
    afterRender() {
        const btnAddToCart = document.querySelector("#btnAddToCart");
        const { id } = btnAddToCart.dataset;
        const inputValue = document.querySelector("#inputValue");

        btnAddToCart.addEventListener("click", async () => {
            // console.log(inputValue.value)
            const { data } = await get(id);
            console.log(data);
            addToCart({ ...data, quantity: inputValue.value ? inputValue.value : 1 }, () => {
                toastr.success(`Thêm ${data.name} vào giỏ hàng thành công!`);
            });
        });
        Header.afterRender();
    },
};
export default ProductDetailPage;