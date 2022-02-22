import { reRender } from "../utils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";
// import banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import Cart from "../components/cart";
// import newList from "../components/newsL

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return /* html */`
        ${Header.render()}
            <div class="max-w-5xl mx-auto">
            <table>
            ${Cart.render()}
             <main>
                        <div class="flex flex-col mt-10">
                          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200">
                                  <thead class="bg-gray-50">
                                    <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ẢNH
                                  </th>
                                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                      </th>
                                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        GIÁ
                                      </th>
                                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Số Lượng
                                    </th>
                                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      TĂNG
                                      </th>
                                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      GIẢM
                                      </th>
                                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      TỔNG GIÁ
                                      </th>
                                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Xóa
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                  ${cart.map((item) => `
                                      <tr>
                                      <td class="px-6 py-4 whitespace-nowrap">
                                      <img class="h-10 w-10 rounded-full" src="${item.img}" alt="">
                                    </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                          <span class="max-w-full px-2 text-xs font-semibold">
                                          ${item.name}
                                          </span>
                                        </td>

                                        <td class="px-6 py-4 whitespace-nowrap">
                                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            ${item.price}
                                          </span>
                                        </td>

                                        <td class="px-2 py-2 whitespace-nowrap">
                                          <input type="text" class="border w-10 text-center" value="${item.quantity}">
                                        </td>

                                        <td class="px-6 py-4 whitespace-nowrap">
                                          <button data-id="${item.id}" class="btn btn-increase rounded-full text-2xl">+</button>
                                        </td>

                                        <td class="px-6 py-4 whitespace-nowrap">
                                          <button data-id="${item.id}" class="btn btn-decrease py-1 px-1 rounded-full text-2xl">-</button>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        ${item.price * item.quantity}
                                        </span>
                                        </td>
                                        <td>
                                          <button data-id="${item.id}" class="btn btn-remove bg-red-500 text-white inline-block py-1 px-1 rounded">XÓA</button>
                                        </td>
                                    </tr>
                                  `).join("")}
                                 </tbody>
                                 </table>
                              </div>
                            </div>
                          </div>
                      </main>
            ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
        const btns = document.querySelectorAll(".btn");
        btns.forEach((button) => {
            button.addEventListener("click", () => {
                const { id } = button.dataset;
                if (button.classList.contains("btn-increase")) {
                    increaseQuantity(id);
                } else if (button.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                    });
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                    });
                }
            });
        });
        Header.afterRender();
    },
};
export default CartPage;