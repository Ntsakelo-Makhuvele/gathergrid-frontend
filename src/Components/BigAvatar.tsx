import Rating from '@mui/material/Rating';
import prof from '../assets/prof.jpg'
import { MapPinIcon,BriefcaseIcon } from '@heroicons/react/24/outline';

interface Avatar{
    firstName: string
    lastName: string
    rating: number
    ratings_count: number
    location: string,
    company?: string
}

const BigAvatar = (data:Avatar) => {
    return (
        <div className="flex gap-2">
            <div className='grid items-center'>
            <div className="h-30 w-30 rounded-full">
            <img src={prof} alt="" className="h-full w-full outline-2 outline-offset-3  outline-violet-500 rounded-full object-cover" />
            </div> 
            </div>
            <div className="items-center grid">
            <div>
            <p className="font-roboto-bold text-lg mb-1 ml-2">{`${data.firstName} ${data.lastName}`}</p>
           <Rating name="half-rating-read"  defaultValue={data.rating} precision={0.1} readOnly sx={{color:'#000'}}  />
           <p className="font-roboto-bold ml-2">{data.rating} <span className="font-roboto-bold text-gray-500 underline cursor-pointer">({data.ratings_count} Reviews)</span></p>
           <p className="mt-2"><MapPinIcon className='size-6 inline mr-1'/><span className='relative top-[3px]'>{data.location}</span></p>
           {data.company && <p className="mt-2"><BriefcaseIcon className='size-6 inline mr-1'/><span className='relative top-[3px]'>{data.company}</span></p>}
            </div>    
            </div>
        </div>
    )
}

export default BigAvatar;