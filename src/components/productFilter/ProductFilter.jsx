import React, { useContext } from "react";
import { Card, List } from "@material-tailwind/react";
import { AuthContext } from "../../authentication/AuthProvider";
import Rating from "../Rating/Rating";

const ProductFilter = () => {
  const {
    filterDispatch,
    filterState: { byStock, byFastDelivery, byRating, sort },
  } = useContext(AuthContext);
  return (
    <main>
      <div className="mb-3">
        <Card>
          <List className="text-center font-semibold">Filter by</List>
        </Card>
      </div>
      <div className="flex gap-2  w-fit p-2 ">
        <input
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
          type="radio"
          name="ascending"
          id=""
        />
        <label htmlFor="ascending">Low to High</label>
      </div>
      <div className="flex gap-2  w-fit p-2 ">
        <input
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
          type="radio"
          name="descending"
          id=""
        />
        <label htmlFor="descending">High to Low</label>
      </div>
      <div className="flex gap-2 items-center w-fit p-2 ">
        <label htmlFor="rating">Rating</label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            filterDispatch({ type: "FILTER_BY_RATING", payload: i + 1 })
          }
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="flex gap-2  w-fit p-2 ">
        <input
          onChange={() =>
            filterDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
          type="checkbox"
          name="ascending"
          id=""
        />
        <label htmlFor="ascending">Out of stock</label>
      </div>
      <div className="flex gap-2  w-fit p-2 ">
        <input
          onChange={() =>
            filterDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
          type="checkbox"
          name="ascending"
          id=""
        />
        <label htmlFor="ascending">Fast Delivary</label>
      </div>
      {/* clear filter  */}
      <div className="  w-fit p-2 ">
        <input
          type="submit"
          onClick={() =>
            filterDispatch({
              type: "CLEAR_FILTERS",
            })
          }
          className="cursor-pointer bg-zinc-300 text-zinc-900 px-2 rounded"
          value={"Clear Filter"}
          id=""
        />
      </div>
    </main>
  );
};

export default ProductFilter;
