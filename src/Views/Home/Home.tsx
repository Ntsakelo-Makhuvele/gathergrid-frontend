import ButtonLink from "../../Components/ButtonLink";
import Navbar from "../../Components/Navbar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import event from '../../assets/event.png';
import prof from '../../assets/prof.jpg';
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import ServiceCard from "../../Components/ServiceCard";
import { services } from "../../data/services";

const Home = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <section className="w-[70%] m-auto mt-30">
                <p className="text-center text-3xl font-roboto-italic">Your event, simplified.<br /> Find and book all your service providers in one clean grid.</p>
                <div>
                    <div className="mt-5">
                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 h-13">
                            <input
                                id="price"
                                name="price"
                                type="text"
                                placeholder="Search for any service"
                                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                            />
                            <div className="grid shrink-0 grid-cols-1 focus-within:relative">

                                <MagnifyingGlassIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2  border self-center justify-self-end text-gray-500 size-10 p-2 rounded-md text-white bg-main-800"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="md:grid md:grid-cols-2 md:gap-4 p-8 mt-15">
                <div className="grid items-center mb-5">
                     <div>
                     <p className="font-roboto-italic text-3xl text-center">Everything you need from finding photographers to decors, You will find in one place. GatherGrid offers the convenience of finding the right skills for your event. So what are you waiting for?</p>
                     <ButtonLink to="/home">
                        Find Service   
                     </ButtonLink>
                     </div>
                </div>
                 <div className="">
                     <img className="grayscale rounded-md" src={event}/>
                </div>
            </section>
            <section className="mt-15 p-8">
                 <div>
                    <p className="font-roboto-regular text-3xl">Popular Services</p>
                 </div>
                 <div className="sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-10">
                   
                    {services && services.map(service => {
                      return <ServiceCard key={service.id} provider={service.provider} id={service.id} service_details={service.service_details}/>
                    })}
                    
                 </div>
                 <div className="mt-10">
                    <ButtonLink to="/find-service">More Services</ButtonLink>
                 </div>
            </section>
            <section className="mt-15">
                <div>
                    <p className="font-roboto-regular text-3xl text-center">What our clients are saying</p>
                </div>
                <div className="sm:grid md:grid-cols-3 sm:grid-cols-2 gap-4 p-8">
                   <div className="p-3 border border-gray-500 rounded-md h-42 overflow-hidden text-ellipsis mb-10">
                         <div className="flex gap-2 mt-2 p-4">
                           <div className="rounded-[50%] h-10 w-10">
                            <img src={prof} alt="" className="h-[100%] w-[100%] border-2 border-buffer rounded-full object-cover"/>
                           </div>
                           <p className="mt-2 font-roboto-bold">Ntsakelo</p>
                        </div>
                        <div className="p-4 pt-0 h-25">
                            <p className="text-md h-[100%] overflow-hidden font-roboto-italic text-ellipsis">I am really happy that I can find the right service anytime here on GatherGrid with great and kind people and kind people and kind people and kind people and kind people and kind people and kind people and kind people</p> 
                        </div>
                   </div>
                      <div className="p-3 border border-gray-500 rounded-md h-42 overflow-hidden text-ellipsis mb-10">
                         <div className="flex gap-2 mt-2 p-4">
                           <div className="rounded-[50%] h-10 w-10">
                            <img src={prof} alt="" className="h-[100%] w-[100%] border-2 border-buffer rounded-full object-cover"/>
                           </div>
                           <p className="mt-2 font-roboto-bold">Ntsakelo</p>
                        </div>
                        <div className="p-4 pt-0 h-25">
                            <p className="text-md h-[100%] overflow-hidden font-roboto-italic text-ellipsis">I am really happy that I can find the right service anytime here on GatherGrid with great and kind people and kind people and kind people and kind people and kind people and kind people and kind people and kind people</p> 
                        </div>
                   </div>
                      <div className="p-3 border border-gray-500 rounded-md h-42 overflow-hidden text-ellipsis mb-10">
                         <div className="flex gap-2 mt-2 p-4">
                           <div className="rounded-[50%] h-10 w-10">
                            <img src={prof} alt="" className="h-[100%] w-[100%] border-2 border-buffer rounded-full object-cover"/>
                           </div>
                           <p className="mt-2 font-roboto-bold">Ntsakelo</p>
                        </div>
                        <div className="p-4 pt-0 h-25">
                            <p className="text-md h-[100%] overflow-hidden font-roboto-italic text-ellipsis">I am really happy that I can find the right service anytime here on GatherGrid with great and kind people and kind people and kind people and kind people and kind people and kind people and kind people and kind people</p> 
                        </div>
                   </div>
                </div>
            </section>
            <section>
                <div className="w-[95%] m-auto min-h-100 p-5 bg-indigo-200 rounded-md md:grid md:grid-cols-2 mb-30">
                    
                    <div className="p-8">
                        <p className="font-roboto-regular text-xl">GatherGrid</p>
                        <h2 className="text-3xl w-[70%] mt-5 mb-5">We guarantee you high quality work, or <span className="font-roboto-bold">your money back</span></h2>
                        <p className="w-[70%] text-xl">On GatherGrid, you can bring your event to life by booking the best services in town with just a click</p>
                 <Link to="/login" className='bg-main-800 text-white hover:bg-zinc-700 rounded-md p-3 font-semibold font-roboto-regular w-[fit-content] block mt-3'>Try now</Link>
                    </div>
                    <div className="h-90 bg-white rounded-md  grid items-center  w-[90%] m-auto">
                        <img src={logo} className="w-[90%] h-[auto] block m-auto"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;