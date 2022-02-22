// import toastr from "toastr";
import { get } from "../../api/posts";
// import { addToCart } from "../../utils/cart";
import "toastr/build/toastr.min.css";
// import banner from "../../components/banner";
import Footer from "../../components/footer";
import Header from "../../components/header";

const postsDetailPage = {
    async render(id) {
        const { data: posts } = await get(id);
        return /* html */`
        ${Header.render()}
       
        <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div class="lg:w-10/12 w-full">
                <p class="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer">${posts.title}</p>
                <h2 class="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">${posts.title}</h2>
                <p class="font-normal text-base leading-6 text-gray-600 mt-6">${posts.desc}</p>
            </div>

            <div class="lg:mt-14 sm:mt-10 mt-12">
                <img class="lg:block hidden w-full" src="${posts.img}" alt="Group of people Chilling" />
                <img class="lg:hidden sm:block hidden w-full" src="${posts.img}" alt="Group of people Chilling" />
                <img class="sm:hidden block w-full" src="${posts.img}" alt="Group of people Chilling" />
            </div>

            <div class="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                <div class="w-full xl:w-5/12 lg:w-6/12">
                    <h2 class="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Story</h2>
                    <p class="font-normal text-base leading-6 text-gray-600 mt-4">${posts.title}</p>
                    <p class="font-normal text-base leading-6 text-gray-600 mt-6">${posts.desc}</p>
                </div>
                <div class="lg:flex items-center w-full lg:w-1/2">
                    <img class="lg:block hidden w-full" src="${posts.img}" alt="people discussing on board" />
                    <img class="lg:hidden sm:block hidden w-full h-3/4" src="${posts.img}" alt="people discussing on board" />
                    <img class="sm:hidden block w-full" src="${posts.img}" alt="people discussing on board" />
                </div>
            </div>
        </div>
        
        ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
    },

};
export default postsDetailPage;