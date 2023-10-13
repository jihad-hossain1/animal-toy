import { Button, Input, Textarea } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../authentication/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
//hosting token
const img_hosting_token = import.meta.env.VITE_IMGBB;


const offers = [
    {title: "Free Delivery",
    about: "Lorem Ipsum dummy"},
    {title: "Big Savings",
    about: "Lorem Ipsum dummy"},
    {title: "Care Support",
    about: "Lorem Ipsum dummy"},
    {title: "Gift Voucher",
    about: "Lorem Ipsum dummy"} 
]
const size = ["S","M","L","XL","XXL"]

const displayImage = ["https://i.ibb.co/LQ0tmBs/dsfs-1.webp",
"https://i.ibb.co/VCZwcvy/dsfs-2.webp",
"https://i.ibb.co/0hnFVyS/dsfs-3.webp",
"https://i.ibb.co/1m5zqWr/dsfs-4.webp"]
const colors = ["white","green","black","purple","red","pink"]
const toyListDescription = [
    "Comodous in tempor ullamcorper miaculis",
    "Soft and stretchy material for a comfortable fit",
    "Accessorize with a straw hat and you re ready for summer",
    "Proin molestie egestas orci ac suscipit risus posuere loremou",
    "Pellentesque vitae neque mollis urna mattis laoree"
]
const toyAnotherListDescription = [
    "Comodous in tempor ullamcorper miaculis",
    "Soft and stretchy material for a comfortable fit",
    "Accessorize with a straw hat and you re ready for summer",
    "Proin molestie egestas orci ac suscipit risus posuere loremou",
    "Pellentesque vitae neque mollis urna mattis laoree"
]
const detailsDescription = "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summe!"


const AddToy = () => {
    const {user} =useContext(AuthContext)
    
    
    
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const form = e.target;
        const toyTitle = form.toyTitle.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const seller = form.seller.value;
        const toyDescHeader = form.toyDescHeader.value;

        const image = form.image.files[0];
        const formData = new FormData();
        formData.append("image", image);

        const imageHosting = await fetch(img_hosting_url, {
            method: "POST",
            body: formData,
          }).then(res=>res.json())

        const imgUrl = imageHosting.data.display_url
        if(imgUrl){
            toast.success("image upload successfull")
        }else{
            return toast.error('iMage upload error')
        }
        const info= {
            toyTitle,
            category,
            seller,
            email: user?.email,
            rating: parseFloat(rating),
            price: parseFloat(price),
            quantity: parseFloat(quantity),
            offers,
            size,
            images: {
                img: {
                    img1: imgUrl,

                },
                displayImage
            },
            toyDescription: {
                toyDescHeader,
                toyListDescription,
                toyAnotherListDescription,
                detailsDescription
            }
        }

        try {
            const res = await fetch(
              `${import.meta.env.VITE_BASE_URL}/toys`,
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(info),
              }
            );
            const data = await res.json();
            //   console.log(data)
            if (data) {
              toast.success(`Toy added successfull`);
            //   refetch()
              form.reset()
            }
          } catch (error) {
            // console.log(error);
            toast.error(`${error}`);
          }
        // console.log(info);
    }
    return (
      <div>
        <Toaster />
        <div>
          <h4 className="text-xl text-center font-bold underline text-blue-gray-800 mb-4 md:mb-8">
            Add Your Toy
          </h4>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className='md:gap-3 gap-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <div className="mb-2">
              <Input
                variant="outlined"
                label="Toy Title"
                name="toyTitle"
                color="pink"
                type="text"
                required
              />
            </div>
            <div className="mb-2">
              <Input
                variant="outlined"
                label="Toy Category"
                name="category"
                color="pink"
                type="text"
                required
              />
            </div>
            <div className="mb-2">
              <Input
                variant="outlined"
                label="Seller Name"
                name="seller"
                color="pink"
                type="text" 
                required
              />
            </div>
            <div className="mb-2">
              <Input
                variant="outlined"
                label="Quantity"
                name="quantity"
                color="pink"
                type="number" 
                required
              />
            </div>
          </div>
          <div className='md:gap-3 gap-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <div className="mb-2">
              <Input
                variant="outlined"
                label="Seller Email"
                name="email"
                color="pink"
                type="text"
                value={user?.email}
                required
              />
            </div>
            <div className="mb-2">
              <Input
                variant="outlined"
                label="Toy Size"
                name="size"
                color="pink"
                type="text"
                required
                
              />
            </div>
            <div className="mb-2">
              <Input
                variant="outlined"
                label="rating"
                name="rating"
                color="pink"
                type="number" 
                required
              />
            </div>
            <div className="mb-2">
              <Input
                variant="outlined"
                label="Price"
                name="price"
                color="pink"
                type="number" 
                required
              />
            </div>
          </div>
          <div className='grid grid-cols-1 mb-3 md:grid-cols-2 gap-3'>
            <div className="mb-2">
              <Textarea
                variant="outlined"
                label="Toy Description"
                name="toyDescHeader"
                color="pink"
                type="text"
                maxLength={5000}
                required
              />
            </div>
            <div className="mb-2">
              <Input
                variant="standard"
                label="Toy Photo uploader"
                name="image"
                color="pink"
                type="file"
               
               
              />
            </div>
            

          </div>
          <div className="mb-2">
            <Button
              variant="gradient"
              color="pink"
              className="w-[200px]"
              type="submit"
            >
              {" "}
              Submit{" "}
            </Button>
          </div>
        </form>
      </div>
    );
};

export default AddToy;