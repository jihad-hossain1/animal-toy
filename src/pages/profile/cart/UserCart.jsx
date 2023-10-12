import React, { useContext } from 'react';
import { AuthContext } from '../../../authentication/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import useUserCart from '../../../hooks/useUserCart';

const UserCart = ({singleToy}) => {
    const {user} = useContext(AuthContext)
   const [carts, refetch] = useUserCart()
    const handleEnrollCart = async (toyObj)=>{
        if(!user){
          return toast.error('login first')
        }else{
          const cartVerify = carts?.find((item)=> item?.itemId == singleToy._id)
          if(cartVerify){
            return toast.error('already added this toy')
          }else{
            const info={
              itemId: toyObj?._id,
              email: user?.email,
              item: toyObj,

          }
            const res = await fetch(
              `${import.meta.env.VITE_BASE_URL}/carts`,
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(info),
              }
            );
            const data = await res.json();
            if(data){
              refetch()
              toast.success('check your cart')
            //   isEnrollRefetch()
            }
            // console.log(data);
          }
        }
      }
    return (
        <div>
            <Toaster />
            <div className="space-x-4 mt-4 mb-4">
            <button 
            onClick={()=>handleEnrollCart(singleToy)} 
            disabled={singleToy?.quantity == 0 }
            className="bg-[#f0c507] px-4 py-2 md:px-6 md:py-3 rounded text-black text-xs md:text-[14px] inline-block uppercase hover:bg-[#fc82bd] hover:text-white transition-all duration-500">
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