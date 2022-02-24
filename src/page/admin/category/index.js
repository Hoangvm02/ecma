import axios from "axios";
import NavAdmin from "../../../components/NavAdmin";
import { getAll } from "../../../api/category";
// import data from "../../../data";

const AdminCategory = {
    async render() {
        const response = await getAll();
        return `
             ${NavAdmin.render()}
             <div class="w-11/12 mx-auto">
                      <header class="bg-white shadow">
                          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                              <div class="lg:flex lg:items-center lg:justify-between">
                                  <div class="flex-1 min-w-0">
                                  <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                                      Quản lý tin tức
                                  </h2>
                                  </div>
                                  <div class="mt-5 flex lg:mt-0 lg:ml-4">
                                  <a href="/admin/category/add" class="sm:ml-3">
                                      <button type="button"
                                      class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                      Thêm mới
                                      </button>
                                  </a>
                                  </div>
                              </div>
                          </div>
                      </header>
                      <main>
                        <div class="flex flex-col">
                          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200">
                                  <thead class="bg-gray-50">
                                    <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                    </th>
                                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Danh Mục
                                      </th>
                                    
                                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      SỬA
                                      </th>
                                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Xóa
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody class="bg-white divide-y divide-gray-200">
                                  ${response.data.map((category, index) => `
                                  <tr>
                                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  ${index + 1}
                                  </td>
                                  <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="">
                                    </div>
                                    <div class="flex items-center">
                                      <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">
                                          ${category.title}
                                        </div>
                                      
                                      </div>
                                    </div>
                                  </td>
                                  <td class="px-6 py-4 whitespace-nowrap">
                                  <a href="/admin/category/${category.id}/edit">Edit</a>
                                  </td>
                                  <td>
                                  <button data-id="${category.id}" class="btn bg-red-500 text-white inline-block py-3 px-5 rounded">Delete</button>
                                  </td>
                                  `).join("")}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </main>
                    </div>
      `;
    },
    afterRender() {
        // Lấy danh sách button
        const btns = document.querySelectorAll(".btn");
        // tạo vòng lặp và lấy ra từng button
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            // Viết sự kiện khi click vào button call api và xóa sản phẩm
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (confirm) {
                    axios.delete(`http://localhost:3000/category/${id}`);
                    document.location.href = "/admin/category";
                }
            });
        });
    },
};
export default AdminCategory;