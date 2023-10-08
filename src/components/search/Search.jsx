import { Button, Input } from '@material-tailwind/react';
import React, { useState } from 'react';

const Search = () => {
    const [searchProduct, setSearchProduct] = useState("");
    return (
        <>
            <div className=" relative flex lg:w-[24rem] ">
          <Input
          color='pink'
            type="text"
            label="Search Toys"
            value={searchProduct}
            onChange={({ target }) => setSearchProduct(target.value)}
            className="pr-20"
            containerProps={{
              className: "m w-full",
            }}
          />
          <Button
            size="sm"
            color={searchProduct ? "yellow" : "blue-gray"}
            disabled={!searchProduct}
            className="!absolute right-1 top-1 rounded hover:text-white hover:bg-pink-500"
          >
            Search
          </Button>
        </div>
        </>
    );
};

export default Search;