import React from 'react'
import image1 from '../../assets/chappal1.png'
import image2 from '../../assets/chaddar1.png'
import image3 from '../../assets/chappal2.png'
import image4 from '../../assets/chappal3.png'

const MostPopular = () => {


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
            img: image2,
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

    ]

  return (
    <div className='w-auto h-screen items-center '>
      
      <h1 className='text-center font-bold text-2xl m-4'>MOST POPULAR</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4 '>
            {Items.map(item => (
                <div key={item.id} >
                    <div className='bg-[#2F2F2F1A] w-auto h-70 rounded-2xl'><img src={item.img} alt={item.rating} /></div>
                    <p className='mt-2'>{item.desc}</p>
                    <div className='mt-8 flex justify-between mx-4'>
                        <p className='font-bold'>{item.price}</p>
                        <p className='font-bold text-sm'>{item.rating}</p>
                    </div>

                </div>
            ))}
        </div>



    </div>
  )
}

export default MostPopular
