import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { CalendarIcon,CalendarDateRangeIcon,UserIcon,ChatBubbleOvalLeftIcon,XMarkIcon,Bars3Icon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";

const DashboardLayout = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div>
             <div className="flex lg:hidden p-8">
                     <button
                       type="button"
                       onClick={() => setMobileMenuOpen(true)}
                       className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                     >
                       <span className="sr-only">Open main menu</span>
                       <Bars3Icon aria-hidden="true" className="size-6" />
                     </button>
                   </div>
        <div className="grid grid-cols-12 h-[100vh] gap-4">
            <div className="col-span-3 h-full border-r-1 border-gray-300 hidden lg:block">
                <div className="px-8 mt-10">
                   <img src={logo} alt="logo" className="h-8 w-auto"/>
                </div>
                <div className="px-8 mb-0 mt-5 mb-3">
               <Link to="/" className="py-3 px-3 block w-[90%] hover:bg-gray-100 hover:rounded-md">
                <CalendarIcon className="size-6 inline mr-3" /><span className="relative top-[3px]">Book</span>
               </Link>
                </div>
                <div className="px-8 mb-3">
               <Link to="/" className="py-3 px-3 block w-[90%] hover:bg-gray-100 hover:rounded-md">
                <CalendarDateRangeIcon className="size-6 inline mr-3" /><span className="relative top-[3px]">Availability</span>
               </Link>
                </div>
                  <div className="px-8 mb-3">
               <Link to="/" className="py-3 px-3 block w-[90%] hover:bg-gray-100 hover:rounded-md">
                <UserIcon className="size-6 inline mr-3" /><span className="relative top-[3px]">Profile</span>
               </Link>
                </div>
                   <div className="px-8 mb-3">
               <Link to="/" className="py-3 px-3 block w-[90%] hover:bg-gray-100 hover:rounded-md">
                <ChatBubbleOvalLeftIcon className="size-6 inline mr-3" /><span className="relative top-[3px]">Chat</span>
               </Link>
                </div>
            </div>
             <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src={logo}
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="px-8 mb-0 mt-5 mb-3">
               <Link to="/" className="py-3 px-3 block w-[90%] hover:bg-gray-100 hover:rounded-md">
                <CalendarIcon className="size-6 inline mr-3" /><span className="relative top-[3px]">Book</span>
               </Link>
                </div>
                <div className="px-8 mb-3">
               <Link to="/" className="py-3 px-3 block w-[90%] hover:bg-gray-100 hover:rounded-md">
                <CalendarDateRangeIcon className="size-6 inline mr-3" /><span className="relative top-[3px]">Availability</span>
               </Link>
                </div>
                  <div className="px-8 mb-3">
               <Link to="/" className="py-3 px-3 block w-[90%] hover:bg-gray-100 hover:rounded-md">
                <UserIcon className="size-6 inline mr-3" /><span className="relative top-[3px]">Profile</span>
               </Link>
                </div>
                   <div className="px-8 mb-3">
               <Link to="/" className="py-3 px-3 block w-[90%] hover:bg-gray-100 hover:rounded-md">
                <ChatBubbleOvalLeftIcon className="size-6 inline mr-3" /><span className="relative top-[3px]">Chat</span>
               </Link>
                </div>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
            <div className="md:col-span-12 lg:col-span-9 h-full">

            </div>
        </div>
        </div>
    )
}

export default DashboardLayout;