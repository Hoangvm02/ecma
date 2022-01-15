const Header = {
    render() {
        return /* html */ `
        <div class=" max-w-5xl mx-auto bg-blue-900 py-4">
            <a href="">
            <img src="https://picsum.photos/150/50" class="mx-auto" alt="">
            </a>
        </div>
        <div class=" max-w-5xl mx-auto flex bg-amber-600">
        <div class="">
                <ul class="flex py-5">
                <li><a href="/" class=" block px-4 py-3 hover:bg-blue-800 hover:text-white">Trang chủ</a></li>
                <li><a href="/about" class=" block px-4 py-3 hover:bg-blue-800 hover:text-white">Tuyển sinh</a></li>
                <li><a href="login" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">Đăng Nhập</a></li>
                <li><a href="signup" class=" block px-4 py-3 hover:bg-blue-800 hover:text-white">Đăng Ký</a></li>
                <li><a href="admin/dashboard" class=" block px-4 py-3 hover:bg-blue-800 hover:text-white">Dashboard</a></li>
            </ul>
           
         </div>
        <div class="py-5 mr-5 pl-20">
                <input type="text" class="py-0.9">
                <input type="submit" value="Tìm kiếm" class="bg-blue-800 py-0.5 px-2 text-white">
                 </div>
        </div> `;
    },
};
export default Header;