export const services = [
    {
        id:1, 
        provider: {
            firstName:'Ntsakelo',
            lastName:'Makhuvele',
            company:'Dutuyu photography',
            profile_pic: '',
            region: 'Limpopo'
        },
        service_details:{
            services:['photography','videography', 'decor'],
            description:'We offer the best services in town from photography to decor. Our clients are always happy with our services',
            service_images: ["https://images.pexels.com/photos/3739003/pexels-photo-3739003.jpeg","https://images.pexels.com/photos/3738670/pexels-photo-3738670.jpeg"],
            service_rating: 5,
            ratings_count: 241,
            locations:[{region:'Limpopo', areas:['Elim','Giyani','Thohoyandou']}],
            starting_price:450,
            packages:[
                {package:'Bronze',price:450,itemsList:['4-hour coverage','50 edited images']},
                {package:'Silver',price:550,itemsList:['6-hour coverage','100 edited images', 'Online Gallery']},
                {package:'Gold',price:650,itemsList:['8-hour coverage', '200 edited images', 'Professional Album']},
                {package:'Platinum',price:750,itemsList:['All Day Coverage', '300 edited images', 'Videographer included']} 
            ] 
        },

    },
    {
        id:2, 
        provider: {
            firstName:'Muzwai',
            lastName:'Kavende',
            company:'Stylish Decor',
            profile_pic: '',
            region: 'Limpopo'
        },
        service_details:{
            services:['decor'],
            description:'Are you looking for the best decor in Gauteng, say less, we have you covered',
            service_images: ["https://images.pexels.com/photos/32854440/pexels-photo-32854440.jpeg","https://images.pexels.com/photos/2972463/pexels-photo-2972463.jpeg","https://images.pexels.com/photos/18573170/pexels-photo-18573170.jpeg","https://images.pexels.com/photos/18573170/pexels-photo-18573170.jpeg","https://images.pexels.com/photos/18573170/pexels-photo-18573170.jpeg"],
            service_rating: 5,
            ratings_count: 241,
            locations:[{region:'Gauteng', areas:['Midrand','Germiston','Soweto']}],
            starting_price: 3500,
            packages:[
                {package:'Bronze',price:3500,itemsList:['Basic Table Settings (5 tables)', 'Standard Linen','Small Centrepieces']},
                {package:'Silver',price:5500,itemsList:['Mid-range Decor (10 tables)', 'Premium Lighting setup','Floral Centrepieces']},
                {package:'Gold',price:8000,itemsList:['Full Venue Styling', 'Custom Backdrop','Premium Furniture rental']},
                {package:'Platinum',price:12000,itemsList:['Custom Theme Design', 'Full Setup & Break down crew', 'Luxury Linen & Chairs']}
            ]
        },
    },
    {
        id:3, 
        provider: {
            firstName:'Kelvin',
            lastName:'Santa',
            company:'Kelvin Beauty',
            profile_pic: '',
            region: 'Mpumalanga'
        },
        service_details:{
            services:['Make-up'],
            description:'We offer the best make up services. Our clients are always happy with our services',
            service_images: ["https://images.pexels.com/photos/9303789/pexels-photo-9303789.jpeg","https://images.pexels.com/photos/9924254/pexels-photo-9924254.jpeg"],
            service_rating: 5,
            ratings_count: 241,
            // Updated location structure for consistency
            locations:[{region:'Mpumalanga', areas:['Countrywide Travel']}], 
            starting_price: 600,
            packages:[
                {package:'Bronze',price:600,itemsList:['One face application', 'In-studio service']},
                {package:'Silver',price:1500,itemsList:['Bridal Consultation and Trial', 'On-location Service']},
                {package:'Gold',price:3000,itemsList:['Bridal Package (Bride + 2)', 'Full Day Touch-ups']},
                {package:'Platinum',price:4500,itemsList:['Full Wedding Party Package (Bride + 4)', 'Premium Products', 'Full Day standby']}
            ]
        },
    },
    {
        id:4, 
        provider: {
            firstName:'Samantha',
            lastName:'Muranga',
            company:'Samantha entertainment',
            profile_pic: '',
            region: 'Western Cape'
        },
        service_details:{
            services:['Entertainment'],
            description:'We offer the best sound entertainment in the country. We have worked with many event organizers to provide sound systems',
            service_images: ["https://images.pexels.com/photos/2724670/pexels-photo-2724670.jpeg","https://images.pexels.com/photos/2716728/pexels-photo-2716728.jpeg"],
            service_rating: 5,
            ratings_count: 241,
            // Updated location structure for consistency
            locations:[{region:'Western Cape', areas:['Countrywide Travel']}], 
            starting_price: 1800,
            packages:[
                {package:'Bronze',price:1800,itemsList:['4-hour DJ Set', 'Small PA System', 'Standard Lighting']},
                {package:'Silver',price:3500,itemsList:['6-hour MC/DJ Set', 'Medium Sound System', 'Custom Playlist']},
                {package:'Gold',price:6000,itemsList:['8-hour Professional MC/DJ', 'Large Sound & Lighting Rig', 'Wireless Microphones']},
                {package:'Platinum',price:9000,itemsList:['Full Day Service (Music for ceremony/cocktails/reception)', 'MC Services', 'Special Effects (Smoke/Haze)']}
            ]
        },
    },
];