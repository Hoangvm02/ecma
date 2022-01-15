import NavAdmin from "../../../components/NavAdmin";

const AddNewsPage = {
    render() {
        return /* html */ `
        
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
                        <form action="#" method="POST" class="m-auto">
                        <div class="w-full ">
                          <div class="px-4 py-5 bg-white sm:p-9">
                              <div class="grid grid-cols-6 gap-6">
                              <div class="col-span-6  sm:col-span-4">
                                  <label for="first-name" class="block text-sm font-medium text-gray-700">Họ và Tên</label>
                                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                              </div>
                              <div class="col-span-6 sm:col-span-4 ">
                                  <label for="email-address" class="block text-sm font-medium text-gray-700">Email</label>
                                  <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ">
                              </div>
                              <div class="col-span-6 sm:col-span-4">
                              <label for="email-address" class="block text-sm font-medium text-gray-700">Địa Chỉ</label>
                              <input type="text" name="email-address" id="email-address" autocomplete="email"class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                              </div>
                                  <div class="col-span-6 sm:col-span-4 ">
                                      <label for="country" class="block text-sm font-medium text-gray-700">Trạng Thái</label>
                                      <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                      <option>Hoạt Động</option>
                                      <option>Không Hoạt Động</option>
                                      </select>
                                  </div>
                                  <div class="col-span-6 sm:col-span-4">
                                  <label for="country" class="block text-sm font-medium text-gray-700">ADMIN</label>
                                  <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                      <option>Quản Trị</option>
                                      <option>Nhân Viên</option>
                                  </select>
                                </div>
                              </div>
                              <div class=" py-3  ">
                                  <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                  Lưu
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
};
export default AddNewsPage;