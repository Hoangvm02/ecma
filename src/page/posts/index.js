import { getAll } from "../../api/posts";
// import banner from "../../components/banner";
import Footer from "../../components/footer";
import Header from "../../components/header";

const PostsPage = {
    async render() {
        const response = await getAll();
        return /* html */`
        ${Header.render()}
        <div class="max-w-7xl mx-auto mt-10 ">
                
            ${response.data.map((posts) => `
            
        <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div class="mt-10 mb-10 text-4xl text-center">
        <h1>Mời Bạn Đọc Tin</h1>
        </div>
        <div class="flex flex-col lg:flex-row justify-between gap-8">
            <div class="w-full lg:w-10/12 flex flex-col justify-center">
                <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">${posts.title}</h1>
                <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">${posts.desc}</p>
            </div>
            <div class="w-full lg:w-8/12">
                <img class="w-full h-80" src="${posts.img}" alt="A group of People" />
            </div>
        </div>

        <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
            <div class="w-full lg:w-5/12 flex flex-col justify-center">
                <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Our Story</h1>
                <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
            </div>
            <div class="w-full lg:w-8/12 lg:pt-8">
                <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                    <div class="p-4 pb-6 flex justify-center flex-col items-center">
                        <img class="md:block hidden" src="${posts.img}" alt="Alexa featured Image" />
                        <img class="md:hidden block" src="${posts.img}" alt="Alexa featured Image" />
                        <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Alexa</p>
                    </div>
                    <div class="p-4 pb-6 flex justify-center flex-col items-center">
                        <img class="md:block hidden" src="${posts.img}" alt="Olivia featured Image" />
                        <img class="md:hidden block" src="${posts.img}" alt="Olivia featured Image" />
                        <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Olivia</p>
                    </div>
                    <div class="p-4 pb-6 flex justify-center flex-col items-center">
                        <img class="md:block hidden" src="${posts.img}" alt="Liam featued Image" />
                        <img class="md:hidden block" src="${posts.img}" alt="Liam featued Image" />
                        <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Liam</p>
                    </div>
                    <div class="p-4 pb-6 flex justify-center flex-col items-center">
                        <img class="md:block hidden" src="${posts.img}" alt="Elijah featured image" />
                        <img class="md:hidden block" src="${posts.img}" alt="Elijah featured image" />
                        <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Elijah</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
            `).join("")}
           
        </div>
        ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};

export default PostsPage;