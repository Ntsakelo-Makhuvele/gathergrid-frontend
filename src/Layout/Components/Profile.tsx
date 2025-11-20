import BigAvatar from "../../Components/BigAvatar";
import { services } from "../../data/services";
import { useSearchParams } from "react-router-dom";

const Profile = () => {
    const [searchParams] = useSearchParams();
    const profileId = searchParams.get('id');
    const service = services.filter(service => service.id === Number(profileId))[0];
    const images = service.service_details.service_images; 
    return (
        <div className="">
            <div className="w-[fit-content] m-auto mt-10">
           <BigAvatar firstName={service.provider.firstName} lastName={service.provider.lastName} rating={service.service_details.service_rating} ratings_count={service.service_details.ratings_count} location={service.provider.region} company={service.provider.company}/>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-1 mt-10 w-[80%] m-auto">
                {images && images.map((image,index) => (
                    <div key={index} className="h-80 w-full aspect-3/2">
                        <img src={image} alt="service image" className="h-full w-full object-cover rounded-md  saturate-100 block auto" />
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Profile;