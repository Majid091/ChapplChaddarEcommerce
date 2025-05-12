import React from 'react'
import image1 from '../../assets/chappal1.png'
import image2 from '../../assets/chaddar1.png'
import image3 from '../../assets/chappal2.png'
import image4 from '../../assets/chappal3.png'
import image5 from '../../assets/chappal4.png'
import image6 from '../../assets/chaddar2.png'

const ItemsList = () => {


    const listofItems = [
        {
            id: 1,
            img: image1,
            name: "nameofItem1"
        },
        {
            id: 2,
            img: image2,
            name: "nameofItem2"
        },
        {
            id: 3,
            img: image3,
            name: "nameofItem3"
        },
        {
            id: 4,
            img: image4,
            name: "nameofItem4"
        },
        {
            id: 5,
            img: image5,
            name: "nameofItem5"
        },
        {
            id: 6,
            img: image6,
            name: "nameofItem6"
        }
    ]

  return (
    <div className='w-auto h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 mt-20 mb-20'>
      
        {
            listofItems.map(item=>(
                <div key={item.id} className='bg-[#2F2F2F] rounded-4xl flex flex-col items-center h-100 min-w-90'>
                    <img src={item.img} alt={item.name} className='text-center w-70 h-70'/>
                    <p className='text-center font-bold text-2xl text-white mt-8'>{item.name}</p>
                </div>
            ))
        }

    </div>
  )
}

export default ItemsList
