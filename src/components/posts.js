import { getAll } from "../api/posts";

const List = {
    async render() {
        const response = await getAll();
        return /* html */`
        <div class="max-w-5xl mx-auto mt-10 ">
            <div class="grid grid-cols-2 gap-8 ">
            ${response.data.map((posts) => `
            <div>
            <div class="relative group">
              <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                 <img class="w-full h-80" src="${posts.img}" alt=""A girl wearing dark blue suit and posing" />
                 <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                     <button class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full" src="/cart">Add to bag</button>
                     <a href="/posts/${posts.id}"><button class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button></a>
                 </div>
                   </div>
                     <p class="font-normal  text-xl leading-5 text-gray-800 md:mt-6 mt-4">${posts.title}</p>
                     <p class="font-semibold truncate w-full text-xl leading-5 text-gray-800 mt-4 mb-8">${posts.desc}</p>
         </div>
            `).join("")}
        </div>
        `;
    },
};
export default List;