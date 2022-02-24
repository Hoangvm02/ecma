const NewList = {
    render() {
        return /* html */ `
            <div class="pb-16">
                <div class="bg-gray-100 dark:bg-gray-800 flex flex-col justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-24 sm:pb-52">
                    <div class="2xl:container 2xl:mx-auto flex flex-col justify-center items-center sm:pb-12 lg:pb-0 space-y-4 px-4 md:px-6 2xl:px-0">
                        <div>
                            <p class="text-3xl lg:text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">Sản phẩm bán chạy nhất</p>
                        </div>
                        <div>
                            <p class="text-base leading-normal sm:leading-none text-center text-gray-600 dark:text-white dark:text-white">Khám phá các sản phẩm được mọi người mua thường xuyên nhất</p>
                        </div>
                    </div>
                </div>
                <div class="-mt-16 sm:-mt-48 lg:-mt-32 xl:-mt-40 2xl:container 2xl:mx-auto flex justify-center items-center space-y-4 px-4 md:px-6 2xl:px-0 mb-16">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-between gap-x-6 gap-y-5">
                        <div class="flex flex-col justify-center items-start p-2 bg-white dark:bg-gray-900">
                            <div class="relative">
                                <img class="hidden lg:block" src="https://i.ibb.co/4ZPL5F0/Rectangle-37.png" alt="watch" />
                                <img class="lg:hidden" src="https://i.ibb.co/h1Vc29G/Rectangle-37.png" alt="watch" />
    
                                <button class="top-4 right-4 absolute p-3.5 text-gray-600 dark:text-white hover:text-gray-500 flex justify-center items-center bg-white dark:bg-gray-900 rounded-full">
                                    <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <div class="flex justify-between mt-4">
                                    <div>
                                        <p class="text-lg font-medium leading-none text-gray-800 dark:text-white">Sony Digital Watch</p>
                                    </div>
                                    <div>
                                        <p class="text-lg leading-none text-right text-gray-600 dark:text-white">$1245</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="flex flex-col justify-center items-start p-2 bg-white dark:bg-gray-900">
                            <div class="relative">
                                <img class="lg:block hidden" src="https://i.ibb.co/znBmcWV/Rectangle-37-1.png" alt="headphones" />
                                <img class="lg:hidden" src="https://i.ibb.co/hBXHm0W/Rectangle-37-1.png" alt="headphones" />
    
                                <button class="top-4 right-4 absolute p-3.5 text-gray-600 dark:text-white hover:text-gray-500 flex justify-center items-center bg-white dark:bg-gray-900 rounded-full">
                                    <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <div class="flex justify-between mt-4">
                                    <div>
                                        <p class="text-lg font-medium leading-none text-gray-800 dark:text-white">Sony Headphones</p>
                                    </div>
                                    <div>
                                        <p class="text-lg leading-none text-right text-gray-600 dark:text-white">$765</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="flex flex-col justify-center items-start p-2 bg-white dark:bg-gray-900">
                            <div class="relative">
                                <img class="hidden lg:block" src="https://i.ibb.co/vHj3fjr/Rectangle-37-2.png" alt="speaker" />
                                <img class="lg:hidden" src="https://i.ibb.co/QbpT9td/Rectangle-37-2.png" alt="speaker" />
    
                                <button class="top-4 right-4 absolute p-3.5 text-gray-600 dark:text-white hover:text-gray-500 flex justify-center items-center bg-white dark:bg-gray-900 rounded-full">
                                    <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <div class="flex justify-between mt-4">
                                    <div>
                                        <p class="text-lg font-medium leading-none text-gray-800 dark:text-white">Wonderboom Pill</p>
                                    </div>
                                    <div>
                                        <p class="text-lg leading-none text-right text-gray-600 dark:text-white">$550</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="flex flex-col justify-center items-start p-2 bg-white dark:bg-gray-900">
                            <div class="relative">
                                <img class="hidden lg:block" src="https://i.ibb.co/KsbPgh8/Rectangle-37-3.png" alt="game-controller" />
                                <img class="lg:hidden" src="https://i.ibb.co/QrX9pRv/Rectangle-37-3.png" alt="game-controller" />
    
                                <button class="top-4 right-4 absolute p-3.5 text-gray-600 dark:text-white hover:text-gray-500 flex justify-center items-center bg-white dark:bg-gray-900 rounded-full">
                                    <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <div class="flex justify-between mt-4">
                                    <div>
                                        <p class="text-lg font-medium leading-none text-gray-800 dark:text-white">PS5 controller</p>
                                    </div>
                                    <div>
                                        <p class="text-lg leading-none text-right text-gray-600 dark:text-white">$550</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="flex flex-col justify-center items-start p-2 bg-white dark:bg-gray-900">
                            <div class="relative">
                                <img class="hidden lg:block" src="https://i.ibb.co/vHj3fjr/Rectangle-37-2.png" alt="speaker" />
                                <img class="lg:hidden" src="https://i.ibb.co/QbpT9td/Rectangle-37-2.png" alt="speaker" />
    
                                <button class="top-4 right-4 absolute p-3.5 text-gray-600 dark:text-white hover:text-gray-500 flex justify-center items-center bg-white dark:bg-gray-900 rounded-full">
                                    <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <div class="flex justify-between mt-4">
                                    <div>
                                        <p class="text-lg font-medium leading-none text-gray-800 dark:text-white">Wonderboom Pill</p>
                                    </div>
                                    <div>
                                        <p class="text-lg leading-none text-right text-gray-600 dark:text-white">$550</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="flex flex-col justify-center items-start p-2 bg-white dark:bg-gray-900">
                            <div class="relative">
                                <img class="hidden lg:block" src="https://i.ibb.co/KsbPgh8/Rectangle-37-3.png" alt="game-controller" />
                                <img class="lg:hidden" src="https://i.ibb.co/QrX9pRv/Rectangle-37-3.png" alt="game-controller" />
    
                                <button class="top-4 right-4 absolute p-3.5 text-gray-600 dark:text-white hover:text-gray-500 flex justify-center items-center bg-white dark:bg-gray-900 rounded-full">
                                    <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <div class="flex justify-between mt-4">
                                    <div>
                                        <p class="text-lg font-medium leading-none text-gray-800 dark:text-white">PS5 controller</p>
                                    </div>
                                    <div>
                                        <p class="text-lg leading-none text-right text-gray-600 dark:text-white">$550</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="flex flex-col justify-center items-start p-2 bg-white dark:bg-gray-900">
                            <div class="relative">
                                <img class="hidden lg:block" src="https://i.ibb.co/4ZPL5F0/Rectangle-37.png" alt="watch" />
                                <img class="lg:hidden" src="https://i.ibb.co/h1Vc29G/Rectangle-37.png" alt="watch" />
    
                                <button class="top-4 right-4 absolute p-3.5 text-gray-600 dark:text-white hover:text-gray-500 flex justify-center items-center bg-white dark:bg-gray-900 rounded-full">
                                    <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <div class="flex justify-between mt-4">
                                    <div>
                                        <p class="text-lg font-medium leading-none text-gray-800 dark:text-white">Sony Digital Watch</p>
                                    </div>
                                    <div>
                                        <p class="text-lg leading-none text-right text-gray-600 dark:text-white">$1245</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="flex flex-col justify-center items-start p-2 bg-white dark:bg-gray-900">
                            <div class="relative">
                                <img class="lg:block hidden" src="https://i.ibb.co/znBmcWV/Rectangle-37-1.png" alt="headphones" />
                                <img class="lg:hidden" src="https://i.ibb.co/hBXHm0W/Rectangle-37-1.png" alt="headphones" />
    
                                <button class="top-4 right-4 absolute p-3.5 text-gray-600 dark:text-white hover:text-gray-500 flex justify-center items-center bg-white dark:bg-gray-900 rounded-full">
                                    <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <div class="flex justify-between mt-4">
                                    <div>
                                        <p class="text-lg font-medium leading-none text-gray-800 dark:text-white">Sony Headphones</p>
                                    </div>
                                    <div>
                                        <p class="text-lg leading-none text-right text-gray-600 dark:text-white">$765</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-2 w-full m-auto">
                <a href=""><img class="w-full" src="https://picsum.photos/3000/400" alt=""></a>
            </div>
    
            <div class="2xl:mx-auto 2xl:container 2xl:px-20 xl:px-12 sm:px-6 px-4 py-16">
                <h1 class="lg:text-4xl text-3xl font-semibold leading-9 text-gray-800 dark:text-gray-50">Join Our Blog Community</h1>
                <p class="md:w-1/2 text-base leading-normal mt-4 sm:pr-10 text-gray-600 dark:text-white">If you're looking for random paragraphs, you've come to the right place.</p>
                <div class="md:flex items-start justify-between mt-12">
                    <div class="md:w-1/2 lg:w-full">
                        <div>
                            <div class="relative">
                                <img src="https://i.ibb.co/HxkBZQM/img-1.png" alt="stairs" />
                                <div class="bg-white absolute top-0 left-0">
                                    <p class="text-base leading-4 py-3 px-5 text-gray-800 dark:text-white dark:bg-gray-900">News</p>
                                </div>
                            </div>
                            <p class="text-base font-light leading-4 text-gray-800 dark:text-gray-50 mt-6">Michael Jackson</p>
                            <h1 class="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800 dark:text-gray-50">Moving up the corporate ladder?</h1>
                            <p class="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                            <button class="focus:outline-none flex items-center justify-between w-72 mt-6 bg-gray-800 dark:bg-white dark:hover:bg-gray-100 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                                <p class="text-base font-medium leading-4 text-white dark:text-gray-900">Read more</p>
                               <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-IV-svg1.svg" alt="arrow">
                               <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-IV-svg1dark.svg" alt="arrow">
                            </button>
                        </div>
                        <div class="mt-9">
                            <div class="relative">
                                <img src="https://i.ibb.co/8mP5tmS/img-2.png" alt="flower pot" />
                                <div class="bg-white absolute top-0 left-0">
                                    <p class="text-base leading-4 py-3 px-5 text-gray-800 dark:text-white dark:bg-gray-900">News</p>
                                </div>
                            </div>
                            <p class="text-base font-light leading-4 text-gray-800 dark:text-gray-50 mt-6">Michael Jackson</p>
                            <h1 class="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800 dark:text-gray-50">Expert advice on wood works</h1>
                            <p class="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                            <button class="focus:outline-none flex items-center justify-between w-72 mt-6 bg-gray-800 dark:bg-white dark:hover:bg-gray-100 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                                <p class="text-base font-medium leading-4 text-white dark:text-gray-900">Read more</p>
                                <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-IV-svg1.svg" alt="arrow">
                               <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-IV-svg1dark.svg" alt="arrow">
                            </button>
                        </div>
                    </div>
                    <div class="md:w-1/2 md:ml-6 md:mt-0 mt-9 lg:w-full">
                        <div>
                            <div class="relative">
                                <img src="https://i.ibb.co/DKg5zHT/img-3.png" alt="stairs" />
                                <div class="bg-white absolute top-0 left-0">
                                    <p class="text-base leading-4 py-3 px-5 text-gray-800 dark:text-white dark:bg-gray-900">News</p>
                                </div>
                            </div>
                            <p class="text-base font-light leading-4 text-gray-800 dark:text-gray-50 mt-6">James McFerson</p>
                            <h1 class="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800 dark:text-gray-50">How a serene environment affects productivity</h1>
                            <p class="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                            <button class="focus:outline-none flex items-center justify-between w-72 mt-6 bg-gray-800 dark:bg-white dark:hover:bg-gray-100 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                                <p class="text-base font-medium leading-4 text-white dark:text-gray-900">Read more</p>
                                <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-IV-svg1.svg" alt="arrow">
                               <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-IV-svg1dark.svg" alt="arrow">
                            </button>
                        </div>
                        <div class="mt-9">
                            <div class="relative">
                                <img src="https://i.ibb.co/dPBXFwY/img-4.png" alt="stairs" />
                                <div class="bg-white absolute top-0 left-0">
                                    <p class="text-base leading-4 py-3 px-5 text-gray-800 dark:text-white dark:bg-gray-900">News</p>
                                </div>
                            </div>
                            <p class="text-base font-light leading-4 text-gray-800 dark:text-gray-50 mt-6">James McFerson</p>
                            <h1 class="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800 dark:text-gray-50">How to grow as a team through a balance of collaboration and individualism</h1>
                            <p class="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                            <button class="focus:outline-none flex items-center justify-between w-72 mt-6 bg-gray-800 dark:bg-white dark:hover:bg-gray-100 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                                <p class="text-base font-medium leading-4 text-white dark:text-gray-900">Read more</p>
                                <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-IV-svg1.svg" alt="arrow">
                               <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-IV-svg1dark.svg" alt="arrow">
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        `;
    },
};
export default NewList;