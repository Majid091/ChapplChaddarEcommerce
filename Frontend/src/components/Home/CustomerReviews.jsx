import React from 'react'
import customer1 from '../../assets/customer1.png'
import customer2 from '../../assets/customer2.png'
import customer3 from '../../assets/customer3.png'

const CustomerReviews = () => {

    const customers = [
        {
            id: 1,
            img: customer1,
            name: "ALI KHAN",
            review: 4.9,
            comment: "I wasn’t expecting much, but this product went above and beyond what I imagined. The quality and performance are outstanding! It exceeded my expectations in every way."
        },
        {
            id: 2,
            img: customer2,
            name: "HAFSA",
            review: 4.9,
            comment: "I wasn’t expecting much, but this product went above and beyond what I imagined. The quality and performance are outstanding! It exceeded my expectations in every way."
        },
        {
            id: 3,
            img: customer3,
            name: "HAROON KHAN",
            review: 4.9,
            comment: "I wasn’t expecting much, but this product went above and beyond what I imagined. The quality and performance are outstanding! It exceeded my expectations in every way."
        }
    ]

  return (
    <div className='w-auto h-screen'>
      <h1 className='text-center font-bold text-2xl'>CUSTOMER REVIEWS</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12'>
        {
            customers.map(customer=>(
                <div  key={customer.id}>
                    <div className='flex gap-4'>
                        <img src={customer.img} alt={customer.name} />
                        <div className='flex flex-col gap-2 mt-2'>
                            <p className='font-bold text-xs'>{customer.name}</p>
                            <p className='font-bold text-xs'>{customer.review}</p>
                        </div>
                    </div>
                    <p className='text-sm mt-4'>{customer.comment}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default CustomerReviews
