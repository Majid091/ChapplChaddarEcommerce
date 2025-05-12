import React from 'react'
import chappal from '../../assets/chappal5.png'
import image1 from '../../assets/chappal1.png'
import image3 from '../../assets/chappal2.png'
import image4 from '../../assets/chappal3.png'
import image5 from '../../assets/chappal4.png'
import { data, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';


// Fetch product by ID
const fetchProductById = async () => {
    const response = await fetch(`http://localhost:3000/api/product/get-product/${id}`)
    if (!response.ok) throw new Error('Failed to fetch product')
    return response.json()
  }

  // Fetch all products
  const fetchAllProducts = async () => {
    const response = await fetch('http://localhost:3000/api/product/all-products')
    if (!response.ok) throw new Error('Failed to fetch products')
    return response.json()
  }


const ProductDetails = () => {


  // Query for single product
  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: fetchProductById,
  })

  // Query for all products
  const { data: products = [] } = useQuery({
    queryKey: ['products'],
    queryFn: fetchAllProducts,
  })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading product</p>
  if (!product) return <p>Product not found</p>





    //  const Items = [
    //              {
    //                  id: 1,
    //                  img: image1,
    //                  desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
    //                  price: 4500,
    //                  rating: 4.5,
    //                  orignalPrice: 5000,
    //                  color: 'brown',
    //                  size: 12
    //              },
    //              {
    //                  id: 2,
    //                  img: image5,
    //                  desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
    //                  price: 4500,
    //                  rating: 4.5,
    //                  orignalPrice: 5000,
    //                  color: 'brown',
    //                  size: 12
    //              },
    //              {
    //                  id: 3,
    //                  img: image3,
    //                  desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
    //                  price: 4500,
    //                  rating: 4.5,
    //                  orignalPrice: 5000,
    //                  color: 'brown',
    //                  size: 12
    //              },
    //              {
    //                  id: 4,
    //                  img: image4,
    //                  desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
    //                  price: 4500,
    //                  rating: 4.5,
    //                  orignalPrice: 5000,
    //                  color: 'brown',
    //                  size: 12
    //              },
    //              {
    //                 id: 5,
    //                 img: image1,
    //                 desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
    //                 price: 4500,
    //                 rating: 4.5,
    //                 orignalPrice: 5000,
    //                  color: 'brown',
    //                  size: 12
    //             },
    //             {
    //                 id: 6,
    //                 img: image5,
    //                 desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
    //                 price: 4500,
    //                 rating: 4.5,
    //                 orignalPrice: 5000,
    //                  color: 'brown',
    //                  size: 12
    //             },
    //             {
    //                 id: 7,
    //                 img: image3,
    //                 desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
    //                 price: 4500,
    //                 rating: 4.5,
    //                 orignalPrice: 5000,
    //                  color: 'brown',
    //                  size: 12
    //             },
    //             {
    //                 id: 8,
    //                 img: image4,
    //                 desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
    //                 price: 4500,
    //                 rating: 4.5,
    //                 orignalPrice: 5000,
    //                  color: 'brown',
    //                  size: 12
    //             },
    //             {
    //                 id: 9,
    //                 img: image1,
    //                 desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
    //                 price: 4500,
    //                 rating: 4.5,
    //                 orignalPrice: 5000,
    //                  color: 'brown',
    //                  size: 12
    //             },
    //             {
    //                 id: 10,
    //                 img: image5,
    //                 desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
    //                 price: 4500,
    //                 rating: 4.5,
    //                 orignalPrice: 5000,
    //                  color: 'brown',
    //                  size: 12
    //             },
    //             {
    //                 id: 11,
    //                 img: image3,
    //                 desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
    //                 price: 4500,
    //                 rating: 4.5,
    //                 orignalPrice: 5000,
    //                  color: 'brown',
    //                  size: 12
    //             },
    //             {
    //                 id: 12,
    //                 img: image4,
    //                 desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
    //                 price: 4500,
    //                 rating: 4.5,
    //                 orignalPrice: 5000,
    //                  color: 'brown',
    //                  size: 12
    //             },
         
    //          ]

    //  const products = [
    //     {
    //         id: 1,
    //         img: image1,
    //         desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
    //         price: 4500,
    //         rating: 4.5,
    //         orignalPrice: 5000,
    //         color: 'brown',
    //         size: 12
    //     },
    //     {
    //         id: 2,
    //         img: image5,
    //         desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
    //         price: 4500,
    //         rating: 4.5,
    //         orignalPrice: 5000,
    //         color: 'brown',
    //         size: 12
    //     },
    //     {
    //         id: 3,
    //         img: image3,
    //         desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
    //         price: 4500,
    //         rating: 4.5,
    //         orignalPrice: 5000,
    //         color: 'brown',
    //         size: 12
    //     },
    //     {
    //         id: 4,
    //         img: image4,
    //         desc: "Denim Peshawari Chappal (NDL xKP Shop Collaboration",
    //         price: 4500,
    //         rating: 4.5,
    //         orignalPrice: 5000,
    //         color: 'brown',
    //         size: 12
    //     },
    // ]


    // const { id } = useParams();
    // const item = Items.find((p) => p.id.toString() === id);

    // if (!item) {
    //    return <p>Product not found</p>;
    // }


  return (
    <div>
        {/* top section */}
        <div className='flex m-16 gap-10'>
            <div className='bg-[#EBEBEB] rounded-4xl w-[70%]'>
                <img src={product.img} alt="chappal image"/>
            </div>

            <div className='mt-8 flex flex-col gap-8'>
                <p className='font-bold text-3xl'>{product.desc}</p>
                <p className='font-bold text-2xl'>{product.rating} <span className='text-sm'>(23)</span></p>
                <div className='flex gap-2'>
                    <p className='line-through font-bold text-gray-500 text-sm'>{product.orignalPrice}</p>
                    <p className='font-bold text-lg'>{product.price}</p>
                </div>
                <p className='font-bold text-xl'>SIZE</p>
                <p className='font-bold text-xl'>{product.size}</p>
                <p className='font-bold text-xl'>COLOR</p>
                <div className='w-7 h-7 bg-[#444863] rounded-full'></div>
                <div className='flex gap-4'>
                    <button className='bg-black text-white px-8 py-4 rounded-4xl text-xs font-bold'>ADD TO CART</button>
                    <button className='bg-[#FFBF3D] text-white px-8 py-4 rounded-4xl text-xs font-bold'>BUY NOW</button>
                </div>
            </div>
        </div>

        {/* description */}
        <div className='flex flex-col gap-8 m-20'>
            <h1 className='font-bold text-2xl'>DESCRIPTION</h1>
            <p >Lorem ipsum dolor sit amet consectetur. At in penatibus a rhoncus ullamcorper sit cursus pellentesque. Feugiat maecenas
mus mollis quis in nullam scelerisque sagittis eleifend. Amet amet convallis in eu mollis. Enim malesuada neque habitant in
scelerisque ultrices id pharetra dui erat. Nec tempor ut imperdiet varius condimentum tristique urna velit. At eros id nec
faucibus facilisi bibendum est sollicitudin. Ipsum in ac ac fermentum at et. Facilisi sit blandit nisi non ipsum. In dolor purus
aliquam ac libero. Viverra velit purus condimentum lacus. Tristique dolor quisque eget fames senectus gravida non. Dolor
Cursus amet tincidunt fames dictumst arcu aliquam commodo auctor. Tincidunt elementum nulla aliquam nunc eros amet
ornare ornare dignissim. Lacus id pellentesque euismod arcu diam tortor lectus in neque</p>
           <p>Lorem ipsum dolor sit amet consectetur. At in penatibus a rhoncus ullamcorper sit cursus pellentesque. Feugiat id nec am
mus mollis quis in nullam scelerisque sagittis eleifend. Amet amet convallis in eu mollis. Enim malesuada neque In dolor in
scelerisque ultrices id pharetra dui erat. Nec tempor ut imperdiet varius condimentum tristique urna velit. At  dolor ame
faucibus facilisi bibendum est sollicitudin. Ipsum in ac ac fermentum at et. Facilisi sit blandit nisi non ipsum. In dolorpurus
aliquam ac libero. Viverra velit purus condimentum lacus.</p>
        </div>

        {/* related products */}
        <div className='m-20'>
            <h1 className='font-bold text-2xl'>RELATED PRODUCTS</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
            {products
            .filter(p => p.id !== parseInt(id))
            .slice(0, 4)
            .map(item => (
              <div key={item.id}>
                <div className='bg-[#2F2F2F1A] w-auto h-80 rounded-4xl'>
                  <img src={item.img} alt={item.desc} />
                </div>
                <p>{item.desc}</p>
                <div className='flex justify-between px-2 mt-4'>
                  <p className='font-bold'>{item.price}</p>
                  <p className='font-bold'>{item.rating}</p>
                </div>
              </div>
            ))}
            </div>
        </div>
      
    </div>
  )
}

export default ProductDetails
