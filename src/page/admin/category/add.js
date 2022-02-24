import NavAdmin from "../../../components/NavAdmin";
import { add } from "../../../api/category";

const AdminAddCategory = {
    async render() {
        return `
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Thêm mới 
                    </h1>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                        <form id="formAddCategory">
                        <div class="shadow overflow-hidden sm:rounded-md">
                          <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                              <div class="col-span-6 sm:col-span-3">
                                <label for="first-name" class="block text-sm font-medium text-gray-700">Danh Mục</label>
                                <input  type="text" id="title-category" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  border border-black rounded-md">
                              </div>
                            </div>
                          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Save
                            </button>
                          </div>
                      </form>
            </main>
        </div>
                    `;
    },
    afterRender() {
        const formAddPost = document.querySelector("#formAddCategory");
        formAddPost.addEventListener("submit", async (e) => {
            e.preventDefault();

            // call API thêm bài viết
            add({
                title: document.querySelector("#title-category").value,

            });
            document.location.href = "/admin/category";
        });
    },
};
export default AdminAddCategory;