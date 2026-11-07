import { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"

function LPProducts() {

  useEffect(() => {
    Aos.init({
        duration: 1000,
        once:false
    })
},[])

  return (

    <>
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    
    <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
      <div>
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white">
                
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                
                <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2">Products</a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                
                <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">Electronics</span>
              </div>
            </li>
          </ol>
        </nav>
        <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Electronics</h2>
      </div>
      <div className="flex items-center space-x-4">
        <button data-modal-toggle="filterModal" data-modal-target="filterModal" type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">
          
          Filters
          
        </button>
        <button id="sortDropdownButton1" data-dropdown-toggle="dropdownSort1" type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">
          
          Sort
          
        </button>
        <div id="dropdownSort1" className="z-50 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700" data-popper-placement="bottom">
          <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400" aria-labelledby="sortDropdownButton">
            <li>
              <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> The most popular </a>
            </li>
            <li>
              <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Newest </a>
            </li>
            <li>
              <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Increasing price </a>
            </li>
            <li>
              <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Decreasing price </a>
            </li>
            <li>
              <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> No. reviews </a>
            </li>
            <li>
              <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Discount % </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div data-aos="fade-up" className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="h-56 w-full">
          <a href="#"><img className="mx-auto h-full w-full object-contain" src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85" alt="Apple iMac desktop computer" /></a>
        </div>
        <div className="pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="me-2 inline-flex shrink-0 items-center rounded-md bg-rose-100 px-2 py-1 text-[11px] font-semibold text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"> Up to 35% off </span>

            <div className="flex items-center justify-end gap-1">
              <button type="button" data-tooltip-target="tooltip-quick-look" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Quick look </span>
                
              </button>
              <div id="tooltip-quick-look" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Quick look
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>

              <button type="button" data-tooltip-target="tooltip-add-to-favorites" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Add to Favorites </span>
                
              </button>
              <div id="tooltip-add-to-favorites" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Add to favorites
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>
            </div>
          </div>

          <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max</a>

          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center">
              

              

              

              

              
            </div>

            <p className="text-sm font-medium text-gray-900 dark:text-white">5.0</p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">(455)</p>
          </div>

          <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Fast Delivery</p>
            </li>

            <li className="flex items-center gap-2">
              
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Price</p>
            </li>
          </ul>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">$1,699</p>

            <button type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="h-56 w-full">
          <a href="#"><img className="mx-auto h-full w-full object-contain" src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=85" alt="Apple iPhone 15 Pro Max" /></a>
        </div>

        <div className="pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="me-2 inline-flex shrink-0 items-center rounded-md bg-rose-100 px-2 py-1 text-[11px] font-semibold text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"> Up to 15% off </span>

            <div className="flex items-center justify-end gap-1">
              <button type="button" data-tooltip-target="tooltip-quick-look-2" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Quick look </span>
                
              </button>
              <div id="tooltip-quick-look-2" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Quick look
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>

              <button type="button" data-tooltip-target="tooltip-add-to-favorites-2" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Add to Favorites </span>
                
              </button>
              <div id="tooltip-add-to-favorites-2" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Add to favorites
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>
            </div>
          </div>

          <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">Apple iPhone 15 Pro Max, 256GB, Blue Titanium</a>

          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center">
              

              

              

              

              
            </div>

            <p className="text-sm font-medium text-gray-900 dark:text-white">4.9</p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">(1,233)</p>
          </div>

          <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Seller</p>
            </li>

            <li className="flex items-center gap-2">
              
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Price</p>
            </li>
          </ul>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">$1,199</p>

            <button type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="h-56 w-full">
          <a href="#"><img className="mx-auto h-full w-full object-contain" src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=85" alt="Apple iPad Pro tablet" /></a>
        </div>

        <div className="pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="me-2 inline-flex shrink-0 items-center rounded-md bg-rose-100 px-2 py-1 text-[11px] font-semibold text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"> Up to 35% off </span>

            <div className="flex items-center justify-end gap-1">
              <button type="button" data-tooltip-target="tooltip-quick-look-3" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Quick look </span>
                
              </button>
              <div id="tooltip-quick-look-3" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Quick look
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>

              <button type="button" data-tooltip-target="tooltip-add-to-favorites-3" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Add to Favorites </span>
                
              </button>
              <div id="tooltip-add-to-favorites-3" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Add to favorites
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>
            </div>
          </div>

          <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">iPad Pro 13-Inch (M4): XDR Display, 512GB</a>

          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center">
              

              

              

              

              
            </div>

            <p className="text-sm font-medium text-gray-900 dark:text-white">4.9</p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">(879)</p>
          </div>

          <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Shipping Today</p>
            </li>

            <li className="flex items-center gap-2">
              
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Price</p>
            </li>
          </ul>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">$799</p>

            <button type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="h-56 w-full">
          <a href="#"><img className="mx-auto h-full w-full object-contain" src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=85" alt="PlayStation 5 console" /></a>
        </div>

        <div className="pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="me-2 inline-flex shrink-0 items-center rounded-md bg-rose-100 px-2 py-1 text-[11px] font-semibold text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"> Up to 10% off </span>

            <div className="flex items-center justify-end gap-1">
              <button type="button" data-tooltip-target="tooltip-quick-look-4" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Quick look </span>
                
              </button>
              <div id="tooltip-quick-look-4" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Quick look
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>

              <button type="button" data-tooltip-target="tooltip-add-to-favorites-4" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Add to Favorites </span>
                
              </button>
              <div id="tooltip-add-to-favorites-4" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Add to favorites
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>
            </div>
          </div>

          <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">PlayStation®5 Console – 1TB, PRO Controller</a>

          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center">
              

              

              

              

              
            </div>

            <p className="text-sm font-medium text-gray-900 dark:text-white">4,8</p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">(2,957)</p>
          </div>

          <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Fast Delivery</p>
            </li>

            <li className="flex items-center gap-2">
              
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Price</p>
            </li>
          </ul>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">$499</p>

            <button type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="h-56 w-full">
          <a href="#"><img className="mx-auto h-full w-full object-contain" src="https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=900&q=85" alt="Microsoft Xbox Series X console" /></a>
        </div>

        <div className="pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="me-2 inline-flex shrink-0 items-center rounded-md bg-rose-100 px-2 py-1 text-[11px] font-semibold text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"> Up to 10% off </span>

            <div className="flex items-center justify-end gap-1">
              <button type="button" data-tooltip-target="tooltip-quick-look-5" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Quick look </span>
                
              </button>
              <div id="tooltip-quick-look-5" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Quick look
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>

              <button type="button" data-tooltip-target="tooltip-add-to-favorites-5" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Add to Favorites </span>
                
              </button>
              <div id="tooltip-add-to-favorites-5" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Add to favorites
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>
            </div>
          </div>

          <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">Microsoft Xbox Series X 1TB Gaming Console</a>

          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center">
              

              

              

              

              
            </div>

            <p className="text-sm font-medium text-gray-900 dark:text-white">4.8</p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">(4,263)</p>
          </div>

          <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Seller</p>
            </li>

            <li className="flex items-center gap-2">
              
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Price</p>
            </li>
          </ul>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">$499</p>

            <button type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="h-56 w-full">
          <a href="#"><img className="mx-auto h-full w-full object-contain" src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85" alt="Apple MacBook Pro laptop" /></a>
        </div>

        <div className="pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="me-2 inline-flex shrink-0 items-center rounded-md bg-rose-100 px-2 py-1 text-[11px] font-semibold text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"> Up to 5% off </span>

            <div className="flex items-center justify-end gap-1">
              <button type="button" data-tooltip-target="tooltip-quick-look-6" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Quick look </span>
                
              </button>
              <div id="tooltip-quick-look-6" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Quick look
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>

              <button type="button" data-tooltip-target="tooltip-add-to-favorites-6" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Add to Favorites </span>
                
              </button>
              <div id="tooltip-add-to-favorites-6" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Add to favorites
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>
            </div>
          </div>

          <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">Apple MacBook PRO Laptop with M2 chip</a>

          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center">
              

              

              

              

              
            </div>

            <p className="text-sm font-medium text-gray-900 dark:text-white">4.9</p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">(1,076)</p>
          </div>

          <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Fast Delivery</p>
            </li>

            <li className="flex items-center gap-2">
              
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Price</p>
            </li>
          </ul>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">$2,599</p>

            <button type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="h-56 w-full">
          <a href="#"><img className="mx-auto h-full w-full object-contain" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85" alt="Apple Watch SE" /></a>
        </div>

        <div className="pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="me-2 inline-flex shrink-0 items-center rounded-md bg-rose-100 px-2 py-1 text-[11px] font-semibold text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"> Up to 20% off </span>

            <div className="flex items-center justify-end gap-1">
              <button type="button" data-tooltip-target="tooltip-quick-look-7" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Quick look </span>
                
              </button>
              <div id="tooltip-quick-look-7" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Quick look
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>

              <button type="button" data-tooltip-target="tooltip-add-to-favorites-7" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Add to Favorites </span>
                
              </button>
              <div id="tooltip-add-to-favorites-7" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Add to favorites
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>
            </div>
          </div>

          <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">Apple Watch SE [GPS 40mm], Smartwatch</a>

          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center">
              

              

              

              

              
            </div>

            <p className="text-sm font-medium text-gray-900 dark:text-white">4.7</p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">(387)</p>
          </div>

          <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Fast Delivery</p>
            </li>

            <li className="flex items-center gap-2">
              
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Price</p>
            </li>
          </ul>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">$699</p>

            <button type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="h-56 w-full">
          <a href="#"><img className="mx-auto h-full w-full object-contain" src="https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=85" alt="Microsoft Surface Pro tablet with keyboard" /></a>
        </div>
        <div className="pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="me-2 inline-flex shrink-0 items-center rounded-md bg-rose-100 px-2 py-1 text-[11px] font-semibold text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"> Up to 35% off </span>

            <div className="flex items-center justify-end gap-1">
              <button type="button" data-tooltip-target="tooltip-quick-look-8" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Quick look </span>
                
              </button>
              <div id="tooltip-quick-look-8" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Quick look
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>

              <button type="button" data-tooltip-target="tooltip-add-to-favorites-8" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Add to Favorites </span>
                
              </button>
              <div id="tooltip-add-to-favorites-8" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Add to favorites
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>
            </div>
          </div>

          <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">Microsoft Surface Pro, Copilot+ PC, 13 Inch</a>

          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center">
              

              

              

              

              
            </div>

            <p className="text-sm font-medium text-gray-900 dark:text-white">4.9</p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">(4,775)</p>
          </div>

          <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Fast Delivery</p>
            </li>

            <li className="flex items-center gap-2">
              
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Price</p>
            </li>
          </ul>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">$899</p>

            <button type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full text-center">
      <button type="button" className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show more</button>
    </div>
  </div>

  <form action="#" method="get" id="filterModal" tabIndex="-1" aria-hidden="true" className="fixed left-0 right-0 top-0 z-50 hidden h-modal w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full">
    <div className="relative h-full w-full max-w-xl md:h-auto">

      <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">

        <div className="flex items-start justify-between rounded-t p-4 md:p-5">
          <h3 className="text-lg font-normal text-gray-500 dark:text-gray-400">Filters</h3>
          <button type="button" className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="filterModal">
            
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <div className="px-4 md:px-5">
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="-mb-px flex flex-wrap text-center text-sm font-medium" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
              <li className="mr-1" role="presentation">
                <button className="inline-block pb-2 pr-1" id="brand-tab" data-tabs-target="#brand" type="button" role="tab" aria-controls="profile" aria-selected="false">Brand</button>
              </li>
              <li className="mr-1" role="presentation">
                <button className="inline-block px-2 pb-2 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300" id="advanced-filers-tab" data-tabs-target="#advanced-filters" type="button" role="tab" aria-controls="advanced-filters" aria-selected="false">Advanced Filters</button>
              </li>
            </ul>
          </div>
          <div id="myTabContent">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3" id="brand" role="tabpanel" aria-labelledby="brand-tab">
              <div className="space-y-2">
                <h5 className="text-lg font-medium uppercase text-black dark:text-white">A</h5>

                <div className="flex items-center">
                  <input id="apple" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Apple (56) </label>
                </div>

                <div className="flex items-center">
                  <input id="asus" type="checkbox" value="" checked className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="asus" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Asus (97) </label>
                </div>

                <div className="flex items-center">
                  <input id="acer" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="acer" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Acer (234) </label>
                </div>

                <div className="flex items-center">
                  <input id="allview" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="allview" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Allview (45) </label>
                </div>

                <div className="flex items-center">
                  <input id="atari" type="checkbox" value="" checked className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="asus" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Atari (176) </label>
                </div>

                <div className="flex items-center">
                  <input id="amd" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="amd" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> AMD (49) </label>
                </div>

                <div className="flex items-center">
                  <input id="aruba" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="aruba" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Aruba (16) </label>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="text-lg font-medium uppercase text-black dark:text-white">B</h5>

                <div className="flex items-center">
                  <input id="beats" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="beats" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Beats (56) </label>
                </div>

                <div className="flex items-center">
                  <input id="bose" type="checkbox" value="" checked className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="bose" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Bose (97) </label>
                </div>

                <div className="flex items-center">
                  <input id="benq" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="benq" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> BenQ (45) </label>
                </div>

                <div className="flex items-center">
                  <input id="bosch" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="bosch" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Bosch (176) </label>
                </div>

                <div className="flex items-center">
                  <input id="brother" type="checkbox" value="" checked className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="brother" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Brother (176) </label>
                </div>

                <div className="flex items-center">
                  <input id="biostar" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="biostar" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Biostar (49) </label>
                </div>

                <div className="flex items-center">
                  <input id="braun" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="braun" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Braun (16) </label>
                </div>

                <div className="flex items-center">
                  <input id="blaupunkt" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="blaupunkt" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Blaupunkt (45) </label>
                </div>

                <div className="flex items-center">
                  <input id="benq2" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="benq2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> BenQ (23) </label>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="text-lg font-medium uppercase text-black dark:text-white">C</h5>

                <div className="flex items-center">
                  <input id="canon" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="canon" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Canon (49) </label>
                </div>

                <div className="flex items-center">
                  <input id="cisco" type="checkbox" value="" checked className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="cisco" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Cisco (97) </label>
                </div>

                <div className="flex items-center">
                  <input id="cowon" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="cowon" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Cowon (234) </label>
                </div>

                <div className="flex items-center">
                  <input id="clevo" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="clevo" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Clevo (45) </label>
                </div>

                <div className="flex items-center">
                  <input id="corsair" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="corsair" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Corsair (15) </label>
                </div>

                <div className="flex items-center">
                  <input id="csl" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="csl" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Canon (49) </label>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="text-lg font-medium uppercase text-black dark:text-white">D</h5>

                <div className="flex items-center">
                  <input id="dell" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="dell" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Dell (56) </label>
                </div>

                <div className="flex items-center">
                  <input id="dogfish" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="dogfish" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Dogfish (24) </label>
                </div>

                <div className="flex items-center">
                  <input id="dyson" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="dyson" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Dyson (234) </label>
                </div>

                <div className="flex items-center">
                  <input id="dobe" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="dobe" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Dobe (5) </label>
                </div>

                <div className="flex items-center">
                  <input id="digitus" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="digitus" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Digitus (1) </label>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="text-lg font-medium uppercase text-black dark:text-white">E</h5>

                <div className="flex items-center">
                  <input id="emetec" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="emetec" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Emetec (56) </label>
                </div>

                <div className="flex items-center">
                  <input id="extreme" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="extreme" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Extreme (10) </label>
                </div>

                <div className="flex items-center">
                  <input id="elgato" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="elgato" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Elgato (234) </label>
                </div>

                <div className="flex items-center">
                  <input id="emerson" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="emerson" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Emerson (45) </label>
                </div>

                <div className="flex items-center">
                  <input id="emi" type="checkbox" value="" checked className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="emi" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> EMI (176) </label>
                </div>

                <div className="flex items-center">
                  <input id="fugoo" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="fugoo" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Fugoo (49) </label>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="text-lg font-medium uppercase text-black dark:text-white">F</h5>

                <div className="flex items-center">
                  <input id="fujitsu" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="fujitsu" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Fujitsu (97) </label>
                </div>

                <div className="flex items-center">
                  <input id="fitbit" type="checkbox" value="" checked className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="fitbit" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Fitbit (56) </label>
                </div>

                <div className="flex items-center">
                  <input id="foxconn" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="foxconn" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Foxconn (234) </label>
                </div>

                <div className="flex items-center">
                  <input id="floston" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                  <label htmlFor="floston" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Floston (45) </label>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4" id="advanced-filters" role="tabpanel" aria-labelledby="advanced-filters-tab">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="min-price" className="block text-sm font-medium text-gray-900 dark:text-white"> Min Price </label>
                  <input id="min-price" type="range" min="0" max="7000" value="300" step="1" className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700" />
                </div>

                <div>
                  <label htmlFor="max-price" className="block text-sm font-medium text-gray-900 dark:text-white"> Max Price </label>
                  <input id="max-price" type="range" min="0" max="7000" value="3500" step="1" className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700" />
                </div>

                <div className="col-span-2 flex items-center justify-between space-x-2">
                  <input type="number" id="min-price-input" value="300" min="0" max="7000" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 " placeholder="" required />

                  <div className="shrink-0 text-sm font-medium dark:text-gray-300">to</div>

                  <input type="number" id="max-price-input" value="3500" min="0" max="7000" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label htmlFor="min-delivery-time" className="block text-sm font-medium text-gray-900 dark:text-white"> Min Delivery Time (Days) </label>

                  <input id="min-delivery-time" type="range" min="3" max="50" value="30" step="1" className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700" />
                </div>

                <input type="number" id="min-delivery-time-input" value="30" min="3" max="50" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 " placeholder="" required />
              </div>
            </div>

            <div>
              <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Condition</h6>

              <ul className="flex w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                <li className="w-full border-r border-gray-200 dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input id="condition-all" type="radio" value="" name="list-radio" checked className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600" />
                    <label htmlFor="condition-all" className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"> All </label>
                  </div>
                </li>
                <li className="w-full border-r border-gray-200 dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input id="condition-new" type="radio" value="" name="list-radio" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600" />
                    <label htmlFor="condition-new" className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"> New </label>
                  </div>
                </li>
                <li className="w-full">
                  <div className="flex items-center pl-3">
                    <input id="condition-used" type="radio" value="" name="list-radio" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600" />
                    <label htmlFor="condition-used" className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"> Used </label>
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <div>
                <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Colour</h6>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input id="blue" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                    <label htmlFor="blue" className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300">
                      <div className="mr-2 h-3.5 w-3.5 rounded-full bg-primary-600"></div>
                      Blue
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input id="gray" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                    <label htmlFor="gray" className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300">
                      <div className="mr-2 h-3.5 w-3.5 rounded-full bg-gray-400"></div>
                      Gray
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input id="green" type="checkbox" value="" checked className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                    <label htmlFor="green" className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300">
                      <div className="mr-2 h-3.5 w-3.5 rounded-full bg-green-400"></div>
                      Green
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input id="pink" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                    <label htmlFor="pink" className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300">
                      <div className="mr-2 h-3.5 w-3.5 rounded-full bg-pink-400"></div>
                      Pink
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input id="red" type="checkbox" value="" checked className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                    <label htmlFor="red" className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300">
                      <div className="mr-2 h-3.5 w-3.5 rounded-full bg-red-500"></div>
                      Red
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Rating</h6>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input id="five-stars" type="radio" value="" name="rating" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    <label htmlFor="five-stars" className="ml-2 flex items-center">
                      
                      
                      
                      
                      
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input id="four-stars" type="radio" value="" name="rating" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    <label htmlFor="four-stars" className="ml-2 flex items-center">
                      
                      
                      
                      
                      
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input id="three-stars" type="radio" value="" name="rating" checked className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    <label htmlFor="three-stars" className="ml-2 flex items-center">
                      
                      
                      
                      
                      
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input id="two-stars" type="radio" value="" name="rating" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    <label htmlFor="two-stars" className="ml-2 flex items-center">
                      
                      
                      
                      
                      
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input id="one-star" type="radio" value="" name="rating" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    <label htmlFor="one-star" className="ml-2 flex items-center">
                      
                      
                      
                      
                      
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Weight</h6>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <input id="under-1-kg" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                    <label htmlFor="under-1-kg" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Under 1 kg </label>
                  </div>

                  <div className="flex items-center">
                    <input id="1-1-5-kg" type="checkbox" value="" checked className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                    <label htmlFor="1-1-5-kg" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> 1-1,5 kg </label>
                  </div>

                  <div className="flex items-center">
                    <input id="1-5-2-kg" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                    <label htmlFor="1-5-2-kg" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> 1,5-2 kg </label>
                  </div>

                  <div className="flex items-center">
                    <input id="2-5-3-kg" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                    <label htmlFor="2-5-3-kg" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> 2,5-3 kg </label>
                  </div>

                  <div className="flex items-center">
                    <input id="over-3-kg" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />

                    <label htmlFor="over-3-kg" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Over 3 kg </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Delivery type</h6>

              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <input type="radio" id="delivery-usa" name="delivery" value="delivery-usa" className="peer hidden" checked />
                  <label htmlFor="delivery-usa" className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5">
                    <div className="block">
                      <div className="w-full text-lg font-semibold">USA</div>
                      <div className="w-full">Delivery only for USA</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input type="radio" id="delivery-europe" name="delivery" value="delivery-europe" className="peer hidden" />
                  <label htmlFor="delivery-europe" className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5">
                    <div className="block">
                      <div className="w-full text-lg font-semibold">Europe</div>
                      <div className="w-full">Delivery only for USA</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input type="radio" id="delivery-asia" name="delivery" value="delivery-asia" className="peer hidden" checked />
                  <label htmlFor="delivery-asia" className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5">
                    <div className="block">
                      <div className="w-full text-lg font-semibold">Asia</div>
                      <div className="w-full">Delivery only for Asia</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input type="radio" id="delivery-australia" name="delivery" value="delivery-australia" className="peer hidden" />
                  <label htmlFor="delivery-australia" className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5">
                    <div className="block">
                      <div className="w-full text-lg font-semibold">Australia</div>
                      <div className="w-full">Delivery only for Australia</div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 rounded-b p-4 dark:border-gray-600 md:p-5">
          <button type="submit" className="rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800">Show 50 results</button>
          <button type="reset" className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Reset</button>
        </div>
      </div>
    </div>
  </form>
</section>
    </>

)
}

export default LPProducts;