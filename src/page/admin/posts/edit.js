import axios from "axios";
import NavAdmin from "../../../components/NavAdmin";
// import data from "../../../data";
import { edit, get } from "../../../api/posts";

const AdminEditPost = {
    async render(id) {
        const { data } = await get(id);
        console.log(data);
        return `
        <div class="min-h-full">
        ${NavAdmin.render()}
        <main>
        <div class="text-2xl">
        <span>Sửa Thông Tin</span>
        </div>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
                <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                <div class="mt-5 md:mt-0 md:col-span-2">
                  <form action="" method="POST" id="formEditPost">
                    <div class="shadow overflow-hidden sm:rounded-md">
                      <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 sm:col-span-3">
                            <label for="first-name" class="block text-sm font-medium text-gray-700">Title</label>
                            <input value="${data.title}" type="text" name="first-name" id="title-post" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-black rounded-md">
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <label for="email-address" class="block text-sm font-medium text-gray-700">DESC</label>
                            <textarea name="" class="border border-black" id="desc-post" cols="30" rows="10">${data.desc}</textarea> 
                          </div>
                          <div class="col-span-6">
                          <div>
                          <label class="block text-sm font-medium text-gray-700">
                            Cover photo
                          </label>
                          <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div class="space-y-1 text-center">
                              <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                              <img class="w-60" src="${data.img}" />
                              <div class="flex text-sm text-gray-600">
                             
                                <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                  <span>Upload a file</span>
                                  <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                </label>
                                <p class="pl-1">or drag and drop</p>
                              </div>
                              <p class="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </div>
                          </div>
                        
                        </div>
                      </div>
                      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>  
              </div>
            </div>
            </div>            
            </main>
        </div>
        `;
    },
    afterRender(id) {
        const formEditPost = document.querySelector("#formEditPost");
        const CLOUDINARY_PRESET = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";

        formEditPost.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Lấy giá trị của input file
            const file = document.querySelector("#file-upload").files[0];
            // Gắn vào đối tượng formData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            // call api cloudinary, để upload ảnh lên
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            // call API thêm bài viết
            edit({
                id,
                title: document.querySelector("#title-post").value,
                img: data.url,
                desc: document.querySelector("#desc-post").value,
            });
            document.location.href = "/admin/posts";
        });
    },

};
export default AdminEditPost;