import { Link } from "react-router-dom";
import Avatar from "./Avatar"
import ImageSlide from "./ImageSlide"
import { StarIcon } from "@heroicons/react/24/outline"
// 1. Core Interfaces

/** Defines the structure for a Service Package (Bronze, Silver, Gold, Platinum). */
export interface Package {
  //package: 'Bronze' | 'Silver' | 'Gold' | 'Platinum'; // Uses a Union Type for consistency
  package: string,
  price: number;
  itemsList: string[]; // List of items/inclusions for the package
}

/** Defines the geographical areas a service provider covers. */
interface Location {
  region: string;
  areas: string[]; // Specific cities, townships, or 'Countrywide Travel'
}

// 2. Main Data Interfaces

/** Defines the personal and company details of the Service Provider. */
interface Provider {
  firstName: string;
  lastName: string;
  company: string;
  profile_pic: string; // URL string for the profile picture
  region: string; // The provider's base region
}

/** Defines the specific service offerings and related business information. */
export interface ServiceDetails {
  services?: string[]; // List of services offered by the provider (e.g., 'photography', 'decor')
  description?: string;
  service_images?: string[]; // Array of image URLs for the gallery
  service_rating?: number; // The average rating (e.g., 4.5, 5)
  ratings_count?: number; // Total number of ratings/reviews
  locations?: Location[]; // Array of regions and areas covered
  starting_price?: number;
  packages?: Package[]; // Array of defined price packages (optional, as some services might not have them defined yet)
}

/** The main interface for a single service listing item in the array. */
export interface ServiceListing {
  id: number;
  provider: Provider;
  service_details: ServiceDetails;
}

const ServiceCard = (serviceData: ServiceListing) => {
    return (
        <Link to={`/service/provider/profile?id=${serviceData.id}`}>
        <div key={serviceData.id}>
                        <ImageSlide images={serviceData.service_details.service_images!}/>
                        <Avatar avatar_type="small" display_name={serviceData.provider.firstName}  profile_pricture={serviceData.provider.profile_pic}/>
                        <div className="p-4 pt-0">
                            <p className="text-lg font-roboto-regular line-clamp-3 hover:underline">{serviceData.service_details.description}</p> 
                            <div className="mt-2">
                            <StarIcon className="size-5 inline mr-1"/>
                            <p className="inline relative top-[3px] font-roboto-bold">{serviceData.service_details.service_rating!.toFixed(1)} <span className="font-roboto-regular">({serviceData.service_details.ratings_count})</span></p>
                            </div>
                            <div className="mt-2">
                                <p className="font-roboto-bold text-lg">From ZAR {serviceData.service_details.starting_price}</p>
                            </div>
                        </div>
                    </div>
                    </Link>
    )
}

export default ServiceCard;