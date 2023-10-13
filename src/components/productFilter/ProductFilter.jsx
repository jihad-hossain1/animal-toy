import React from "react";
import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Input,
} from "@material-tailwind/react";

const ProductFilter = ({ data }) => {
  return (
    <div>
      <div className="mb-3">
        <Card>
          <List className="text-center font-semibold">Filter by</List>
        </Card>
      </div>

      {/* product by stock  */}
      <div className="mb-3">
        <Card>
          <List>
            <div className="px-2 text-blue-gray-800">Availability</div>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-react"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="vertical-list-react"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  In stock {`(${data?.data?.length})`}
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-vue"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="vertical-list-vue"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  Out stock {`(${3})`}
                </Typography>
              </label>
            </ListItem>
          </List>
        </Card>
      </div>

      {/* color size  */}
      <div className="mb-3">
        <Card className="w-full max-w-[24rem]">
          <List className="grid">
            <div className="px-2 text-blue-gray-800">Size</div>
            <ListItem className="p-0">
              <label
                htmlFor="horizontal-list-react"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="horizontal-list-react"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  S {`(${4})`}
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="horizontal-list-vue"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="horizontal-list-vue"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  M {`(${6})`}
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="horizontal-list-svelte"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="horizontal-list-svelte"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  L {`(${4})`}
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="horizontal-list-svelte"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="horizontal-list-svelte"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  XL {`(${2})`}
                </Typography>
              </label>
            </ListItem>
          </List>
        </Card>
      </div>

      {/* prodcut by price renge  */}

      <div className="mb-3">
        <Card>
          <List className="my-2">
            <div className="px-2 text-blue-gray-800">Price range</div>
            <div className="flex flex-col space-y-3 ">
              <div className="w-4">
                <Input
                  color="pink"
                  className="w-full  "
                  variant="outlined"
                  type="number"
                  label="From"
                />
              </div>
              <div className="w-4">
                <Input
                  color="pink"
                  className="w-full  "
                  variant="outlined"
                  type="number"
                  label="To"
                />
              </div>
            </div>
          </List>
        </Card>
      </div>

      {/* color category  */}
      <div>
        <Card>
          <List>
            <div className="px-2 text-blue-gray-800">Color</div>
            <div>
            <div className="grid grid-cols-3 w-max gap-2">
      <Checkbox label='blue' color="blue" defaultChecked />
      <Checkbox label='red' color="red" defaultChecked />
      <Checkbox label='green'  color="green" defaultChecked />
      <Checkbox label='amber'  color="amber" defaultChecked />
      <Checkbox  label='teal' color="teal" defaultChecked />
      <Checkbox label='indigo'  color="indigo" defaultChecked />
      <Checkbox label='purple' color="purple" defaultChecked />
      <Checkbox label='pink'  color="pink" defaultChecked />
    </div>
            </div>
          </List>
        </Card>
      </div>
    </div>
  );
};

export default ProductFilter;
