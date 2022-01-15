const AddPage = {
    render() {
        return /* html */ `
        <div class="min-h-full">
        <nav class="bg-gray-800">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                <a href="#">
                <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
                </a>
                </div>
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-4">
                    <a href="admin" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>
      
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
      
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
      
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
      
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reports</a>
                  </div>
                </div>
              </div>
              <div class="hidden md:block">
                <div class="ml-4 flex items-center md:ml-6">
                  <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span class="sr-only">View notifications</span>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </nav> 
        
            <h2 class=" mb-8  text-center text-5xl">Tạo Mới</h2>
            <main class=" max-w-3xl m-auto">
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
              </main>
        `;
    },
};
export default AddPage;