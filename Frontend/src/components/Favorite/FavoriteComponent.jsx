import React from 'react'
import image1 from '../../assets/chappal1.png'
import image3 from '../../assets/chappal2.png'
import image4 from '../../assets/chappal3.png'
import image5 from '../../assets/chappal4.png'

const FavoriteComponent = () => {


     const Items = [
             {
                 id: 1,
                 img: image1,
                 desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
                 price: 4500,
                 rating: 4.5
             },
             {
                 id: 2,
                 img: image5,
                 desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
                 price: 4500,
                 rating: 4.5
             },
             {
                 id: 3,
                 img: image3,
                 desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
                 price: 4500,
                 rating: 4.5
             },
             {
                 id: 4,
                 img: image4,
                 desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
                 price: 4500,
                 rating: 4.5
             },
             {
                id: 5,
                img: image1,
                desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
                price: 4500,
                rating: 4.5
            },
            {
                id: 6,
                img: image5,
                desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
                price: 4500,
                rating: 4.5
            },
            {
                id: 7,
                img: image3,
                desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
                price: 4500,
                rating: 4.5
            },
            {
                id: 8,
                img: image4,
                desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
                price: 4500,
                rating: 4.5
            },
            {
                id: 9,
                img: image1,
                desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
                price: 4500,
                rating: 4.5
            },
            {
                id: 10,
                img: image5,
                desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
                price: 4500,
                rating: 4.5
            },
            {
                id: 11,
                img: image3,
                desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
                price: 4500,
                rating: 4.5
            },
            {
                id: 12,
                img: image4,
                desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
                price: 4500,
                rating: 4.5
            },
     
         ]

  return (
    <div className='m-20'>
        <h1 className='font-bold text-2xl text-center mt-4'>FAVORITE</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
            {
                Items.map(item=>(
                    <div key={item.id} className=''>
                        <div className='bg-[#2F2F2F1A] w-auto h-80 rounded-4xl'><img src={item.img} alt={item.name} /></div>
                        <p className='text-[Merriweather Sans]'>{item.desc}</p>
                        <div className='flex justify-between px-2 mt-4'>
                            <p className='font-bold '>{item.price}</p>
                            <p className=' font-bold '>{item.rating}</p>
                        </div>

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FavoriteComponent
