import React, { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Fetch all categories (with _id and name)
const fetchCategories = async () => {
  const res = await axios.get('http://localhost:3000/api/category/all-categories');
  return res.data;
};

const createProduct = async (data) => {
  const response = await axios.post('http://localhost:3000/api/product/create-product', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

const UploadProductComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    size: '',
    color: ''
  });
  const [images, setImages] = useState([]);

  // Load categories
  const { data: categories, isLoading: isCatLoading, error: catError } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories
  });

  const mutation = useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      alert(data.message || 'Product created successfully!');
      setFormData({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        size: '',
        color: ''
      });
      setImages([]);
    },
    onError: (error) => {
      alert(error?.response?.data?.message || 'Error creating product');
    }
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    images.forEach((img) => data.append('files', img));
    mutation.mutate(data);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Create New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        {['name', 'description', 'price', 'stock', 'size', 'color'].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            className="border w-full rounded-3xl placeholder:text-xs p-2"
            required
          />
        ))}

        {/* Category Select Dropdown */}
        {isCatLoading ? (
          <p>Loading categories...</p>
        ) : catError ? (
          <p className="text-red-500">Error loading categories</p>
        ) : (
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border w-full rounded-3xl placeholder:text-xs p-2"
            required
          >
            <option value="">Select Category</option>
            {categories?.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        )}

        <input
          type="file"
          name="files"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="border w-full rounded-3xl placeholder:text-xs p-2"
          required
        />
        <button
          type="submit"
          className=" bg-[#FFBF3D] text-white  hover:bg-yellow-500 border w-full rounded-3xl placeholder:text-xs p-2"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? 'Uploading...' : 'Create Product'}
        </button>
      </form>
    </div>
  );
};

export default UploadProductComponent;
