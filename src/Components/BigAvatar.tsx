import Rating from '@mui/material/Rating';
import prof from '../assets/prof.jpg'

interface Avatar{
    firstName: string
    LastName: string
    rating: number
    ratings_count: number
}

const BigAvatar = (data:Avatar) => {
    return (
        <div className="flex gap-2">
            
            <div className="h-25 w-25 border rounded-full">
            <img src={prof} alt="" className="h-[100%] w-[100%] border-2 border-buffer rounded-full object-cover" />
            </div>
            <div className="items-center grid">
            <div>
            <p className="font-roboto-bold text-lg mb-1">{`${data.firstName} ${data.LastName}`}</p>
           <Rating name="half-rating-read"  defaultValue={data.rating} precision={0.1} readOnly sx={{color:'#000'}}  />
           <p className="font-roboto-bold">{data.rating} <span className="font-roboto-bold text-gray-500 underline cursor-pointer">({data.ratings_count} Reviews)</span></p>
            </div>    
            </div>
        </div>
    )
}

export default BigAvatar;