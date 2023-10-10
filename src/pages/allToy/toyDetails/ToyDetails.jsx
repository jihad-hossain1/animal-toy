import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Progress, Rate } from "antd";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BiPencil } from "react-icons/bi";
import { BsCheck2 } from "react-icons/bs";
import { MdFavorite, MdOutlineLocalOffer } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import {
  ButtonGroup,
  IconButton,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ToyReview from "./toyReview/ToyReview";

import { Link } from "react-scroll";




const ToyDetails = () => {
  const singleToy = useLoaderData();
  // const [isLoading,setIsLoading] = useState({});
  const [percent, setPercent] = useState(0);

  const increase = () => {
    let newPercent = percent + 1;
    if (newPercent > 100) {
      newPercent = 100;
    }
    setPercent(newPercent);
  };
  const decline = () => {
    let newPercent = percent - 1;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };
  console.log(singleToy);
  return (
    <div className="p-2 mt-4 font-kanit font-medium">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="h-96">
          <img
            className="object-cover"
            src={singleToy?.images.img.img1}
            alt=""
          />
        </div>
        <div className="ml-3">
            {/* toy title  */}
          <h4 className="text-xl md:text-2xl mb-4">{singleToy?.toyTitle}</h4>
          {/* rating & write review  */}
          <div className="flex items-center space-x-2 mb-2">
            <Rate className="text-sm" disabled value={singleToy?.rating} />
            <Link to={`review`} spy={true} smooth={true} duration={500}>
            <button className="text-blue-gray-700 flex space-x-1 items-center">
              <span className="text-blue-gray-700 text-sm">Write Review</span>{" "}
              <BiPencil className="h-5" />
            </button>
            </Link>
          </div>
          {/* priece  */}
          <h4 className="text-sm md:text-md font-semibold mb-2">
            <span className="text-blue-gray-600 line-through text-xs">
              ${singleToy?.price}.00
            </span>{" "}
            <span className="text-xl font-poppin">${singleToy?.price - 10}.00</span>
          </h4>
          {/* seller info  */}
          <h4 className="text-blue-gray-700 mb-2 font-">
            Vendor :{" "}
            <span className="ml-2">
              {singleToy?.seller || "stock product"}
            </span>
          </h4>
          <h4 className="text-blue-gray-700 mb-2 font-">
            Toy Type : <span className="ml-2">{singleToy?.category}</span>
          </h4>
          {/* add to whitelist & Sizechart  */}
          <div className=" flex items-center space-x-5 mb-2">
            <button className="text-sm text-blue-gray-700 flex space-x-2 items-center">
              <MdFavorite className="text-xl text-blue-gray-500" />{" "}
              <span>Add to Whitelist</span>
            </button>
            <button className="text-sm text-blue-gray-700 flex items-center space-x-1">
              <LiaChalkboardTeacherSolid className="text-xl text-blue-gray-700" />
              <span>Sizechart</span>
            </button>
          </div>
          {/* progrssbar  */}
          <div className="">
            {singleToy?.quantity <= 10 && singleToy.quantity > 0 ? (
              <>
                <h4>
                  Hurry! Only{" "}
                  <span className="font-semibold text-[#ff4626]">
                    {singleToy?.quantity}
                  </span>{" "}
                  units left in stock!
                </h4>
                <Progress
                  className="max-w-[300px] "
                  status="active"
                  strokeColor={{
                    "0%": "#ff4626",
                    "25%": "#f88333",
                    "50%": "#f2aa3a",
                    "75%": "#ecd543",
                    "100%": "#ecd543",
                  }}
                  showInfo={false}
                  percent={singleToy?.quantity * 10}
                />
              </>
            ) : (
              <div className="text-blue-gray-700 font-medium font-kanit text-sm">
                Avilable QTY. {singleToy?.quantity}
              </div>
            )}
          </div>
          {/* toys stock  */}
          <div>
            <h4 className="mb-1 font-medium  font-poppin  text-blue-gray-500 antialiased ">
              Size
            </h4>
            <div className="flex space-x-3 items-center mb-2">
              {singleToy?.size.map((item, index) => (
                <button
                  className="border border-gray-400 active:bg-gray-900 active:text-gray-50 uppercase p-2 transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 "
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          {/* add size  */}
          <div className="mb-2">
            <h4 className="mb-1 font-medium font-kanit  text-blue-gray-500 antialiased ">
              Color
            </h4>
            <div className="flex space-x-2 mb-2 mx-w-[200px] group">
              {singleToy?.colors.map((item, index) => (
                <button
                  style={{ backgroundColor: `${item}` }}
                  className={`rounded-sm border drop-shadow-sm shadow  h-10 w-10 hover:translate-x-1 hover:-translate-y-1 duration-200`}
                  key={index}
                ></button>
              ))}
            </div>
          </div>
          {/* add or minus quantity on cart  */}
          <div className="mt-3">
            <h4 className="text-blue-gray-700">Quantity</h4>
            <ButtonGroup className="mt-2">
              <IconButton
                variant="outlined"
                className="rounded rounded-r-none text-blue-gray-900 bg-blue-gray-50 hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10"
                onClick={decline}
              >
                <MinusOutlined />{" "}
              </IconButton>
              <input
                className=" text-blue-gray-900 bg-blue-gray-50 hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10 max-w-[40px] px-3 focus:outline-none outline-none"
                type="text"
                onChange={() => setPercent(percent)}
                value={percent}
              />
              <IconButton
                variant="outlined"
                className="rounded rounded-l-none text-blue-gray-900 bg-blue-gray-50 hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10"
                onClick={increase}
              >
                <PlusOutlined />{" "}
              </IconButton>
            </ButtonGroup>
          </div>
          {/* add cart button  */}
          <div className="space-x-4 mt-4 mb-4">
            <button className="bg-[#f0c507] px-4 py-2 md:px-6 md:py-3 rounded text-black text-xs md:text-[14px] inline-block uppercase hover:bg-[#fc82bd] hover:text-white transition-all duration-500">
              add to cart
            </button>
            <button className="bg-[#fc82bd] px-4 py-2 md:px-6 md:py-3 rounded text-black text-xs md:text-[14px] inline-block uppercase hover:bg-[#f0c507] hover:text-white transition-all duration-500">
              Buy it now
            </button>
          </div>
          {/* delivary system  */}
          <div className="rounded-md border border-blue-gray-100 p-2 md:p-4 grid grid-cols-2 gap-2">
            {singleToy?.offers.map(({ title, about, icon }, index) => (
              <div
                className="text-blue-gray-800 flex space-x-2 items-center"
                key={index}
              >
                {icon ? (
                  <span className="text-blue-gray-400 text-4xl ">{icon}</span>
                ) : (
                  <MdOutlineLocalOffer className="text-blue-gray-400 text-4xl " />
                )}
                <div>
                  <h4 className="font-semibold">{title}</h4>
                  <p>{about}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* description & review & condition by tab section  */}
      <div className="mt-2">
        <Tabs id="custom-animation" value="html">
          <TabsHeader>
            
            <Tab value={'description'}>
                {'Description'}
              </Tab>
            <Tab value={'review'}>
                <div id="review">
                {'Review'}
                </div>
              </Tab>
            <Tab value={'ShipingReturn'}>
            {'Shipping'}
              </Tab>
            <Tab value={'others'}>
                {'Others'}
              </Tab>
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            <TabPanel  value={'description'}>
                <p className="text-blue-gray-600 mb-2">
                {singleToy?.toyDescription.toyDescHeader}
                </p>
                <div className="text-blue-gray-600 mb-2">
                    <h4 className="font-semibold text-blue-gray-900">
                        List Description here
                    </h4>
                <ul className="">
                    {singleToy?.toyDescription.toyListDescription.map((lis,index)=><li className="ml-4 flex items-center space-x-2" key={index}>
                      <BsCheck2 className="text-xl text-[#fc82bd]" />  <span>{lis}</span>
                    </li>)}
                    </ul>
                </div>
                <div className="text-blue-gray-600 mb-2">
                    <h4 className="font-semibold text-blue-gray-900">
                        Another List Description here
                    </h4>
                <ul className="">
                    {singleToy?.toyDescription.toyAnotherListDescription.map((lis,index)=><li className="ml-4 flex items-center space-x-2" key={index}>
                      <BsCheck2 className="text-xl text-[#fc82bd]" />  <span>{lis}</span>
                    </li>)}
                    </ul>
                </div>
                <div className="text-blue-gray-600">
                    <h4 className="font-semibold text-blue-gray-900">
                        Toys Details information
                    </h4>
                    <p className="ml-5 pl-7  border-l-2 border-[#fc82bd]/50">
                    {
                        singleToy?.toyDescription.detailsDescription
                    }
                    </p>
                </div>
              </TabPanel>
              <ToyReview singleToy={singleToy} />
              <TabPanel  value={'ShipingReturn'}>
              <div className="text-blue-gray-600">
                    <h4 className="font-semibold text-blue-gray-900">
                        Returns Policy
                    </h4>
                    <p className="mb-2">
                    You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the return shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.).
                    </p>
                    <p className="mb-2">
                    You should expect to receive your refund within four weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. This time period includes the transit time for us to receive your return from the shipper (5 to 10 business days), the time it takes us to process your return once we receive it (3 to 5 business days), and the time it takes your bank to process our refund request (5 to 10 business days).
                    </p>
                    <p className="mb-2">
                    If you need to return an item, simply login to your account, view the order using the 'Complete Orders' link under the My Account menu and click the Return Item button. We'll notify you via e-mail of your refund once we've received and processed the returned item.
                    </p>
                </div>
              <div className="text-blue-gray-600">
                    <h4 className="font-semibold text-blue-gray-900">
                       Shipping
                    </h4>
                    <p className="mb-2">
                    We can ship to virtually any address in the world. Note that there are restrictions on some products, and some products cannot be shipped to international destinations.
                    </p>
                    <p className="mb-2">
                    When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items and the shipping options you choose. Depending on the shipping provider you choose, shipping date estimates may appear on the shipping quotes page.
                    </p>
                    <p className="mb-2">
                    Please also note that the shipping rates for many items we sell are weight-based. The weight of any such item can be found on its detail page. To reflect the policies of the shipping companies we use, all weights will be rounded up to the next full pound.
                    </p>
                </div>
              </TabPanel>
              <TabPanel  value={'others'}>
                <div className="min-h-[200px]">

                </div>
              </TabPanel>
            
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default ToyDetails;
