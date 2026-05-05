
import axios from "axios"
import { asset } from "../assets/assest"
import { backendUrl } from "../App"
import { toast } from "react-toastify"
import { useState } from "react"


const AddProduct = ({ token }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [size, setSize] = useState([])
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')
  const [image4, setImage4] = useState('')

  const addProduct = {

  }
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault()
      const response = await axios.post(`${backendUrl}/api/product/add`, addProduct)
      if (response.data.success) {
        toast.success(response.data.message)
      }
      else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)

    }

  }
  return (
    <div className="px-10 py-4">
      <form onSubmit={onSubmitHandler}>

        <div className=""> 
          <label for="" className="text-2xl font-bold">Upload Products Image</label>
          <div className="flex flex-col md:flex-row gap-2">

            <div>
              <img src={image1 ? Object.entries(image1) : asset.add_product}  alt="add product icon" className="" />
              <input type="text" value={image1} onClick={()=>setImage1()}/>
            </div>
            <div>
              <img src={image2 ? Object.entries(image2) : asset.add_product} alt="add product icon" className="" />
              <input type="text" />
            </div>
            <div>
              <img src={image3 ? Object.entries(image3) : asset.add_product} alt="add product icon" className="" />
              <input type="text" />
            </div>
            <div>
              <img src={image4 ? Object.entries(image4) : asset.add_product} alt="add product icon" className="" />
              <input type="text" />
            </div>
          </div>


        </div>
        <div>
          <label htmlFor=""> Product Name  </label>
          <input type="text" placeholder="Enter Product Name" />
        </div>
        <div>
          <label htmlFor=""> Descriptions </label>
          <input type="text" placeholder="Enter Product Description" />
        </div>
        <div>
          <label htmlFor=""> Category </label>
          <select name="" id="">
            <option value=""> Men</option>
            <option value=""> Women</option>
            <option value=""> Kids</option>
            <option value=""> Winter</option>
          </select>
        </div>
        <div>
          <label htmlFor=""> SubCategory </label>
          <select name="" id="">
            <option value=""> Men</option>
            <option value=""> Women</option>
            <option value=""> Kids</option>
            <option value=""> Winter</option>
          </select>
        </div>
        <div>
          <p>Price</p>
          <input type="text" placeholder="Enter product price" />
        </div>

        <div>
          <label htmlFor="">Sizes</label>
          <div>
            <b>S</b>
          </div>
          <div>
            <b>M</b>
          </div>
          <div>
            <b>XL</b>
          </div>
          <div>
            <b>XXL</b>
          </div>
        </div>
        <div>
          <label>Add to bestSeller</label>
          <input type="checkbox" checked/>
        </div>




        <button className="bg-amber-700 px-4 py-2 w-30 rounded-md hover:bg-amber-500 cursor-pointer text-2xl font-bold" type="submit">Add </button>
      </form>
    </div>
  )
}

export default AddProduct
