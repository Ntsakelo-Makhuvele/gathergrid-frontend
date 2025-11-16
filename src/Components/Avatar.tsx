
interface Avatar{
    profile_pricture: string,
    avatar_type: 'big' | 'small',
    display_name: string,
}

const Avatar = (avatarData:Avatar) => {
    return (
       avatarData.avatar_type=="small" && <div className="flex gap-2 mt-2 p-4">
            <div className="rounded-[50%] h-10 w-10">
                <img src={avatarData.profile_pricture} alt="" className="h-[100%] w-[100%] border-2 border-buffer rounded-full object-cover" />
            </div>
            <p className="mt-2 font-roboto-bold">{avatarData.display_name}</p>
        </div>
    )
}

export default Avatar;