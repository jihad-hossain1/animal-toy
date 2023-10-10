import React, { useContext } from 'react';
import { AuthContext } from '../../../authentication/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const UserCart = ({singleToy}) => {
    const {user} = useContext(AuthContext)
    const handleEnrollCart=async (toyObj)=>{
        if(!user){
          return toast.error('login first')
        }else{
          const cartVerify = userCarts.find(({_id})=> _id == singleToy._id)
          if(cartVerify){
            return toast.error('already added this toy')
          }else{
            const res = await fetch(
              `${import.meta.env.VITE_BASE_URL}/carts`,
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(toyObj),
              }
            );
            const data = await res.json();
            if(data){
              toast.success('check your enroll course option')
            //   isEnrollRefetch()
            }
            console.log(data);
          }
        }
      }
    return (
        <div>
            <Toaster />
            <div className="space-x-4 mt-4 mb-4">
            <button onClick={()=>handleEnrollCart(singleToy)} className="bg-[#f0c507] px-4 py-2 md:px-6 md:py-3 rounded text-black text-xs md:text-[14px] inline-block uppercase hover:bg-[#fc82bd] hover:text-white transition-all duration-500">
              add to cart
            </button>
            <button className="bg-[#fc82bd] px-4 py-2 md:px-6 md:py-3 rounded text-black text-xs md:text-[14px] inline-block uppercase hover:bg-[#f0c507] hover:text-white transition-all duration-500">
              Buy it now
            </button>
          </div>
        </div>
    );
};

export default UserCart;