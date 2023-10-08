import React, { useState, useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { BanknotesIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { FcGoogle, FcKey } from "react-icons/fc";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../authentication/AuthProvider";
const img_hosting_token = import.meta.env.VITE_IMGBB;

export const Login = () => {
  const [type, setType] = useState("card");
  const { signInAc, signInWithGoogle, createUser, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmitsLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInAc(email, password).then((result) => {
      const user = result.user;
      if (user) {
        toast.success("login successfull");
      }
    });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // saveUser(result.user);
        toast.success("login success");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(`${error}`);
      });
  };
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const confirm = form.confirm.value;

    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    await fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        const imgUrl = imgResponse.data.display_url;
        if (imgUrl) {
          toast.success("image upload successfull");
        }
        createUser(email, password)
          .then((result) => {
            updateUserProfile(name, imgUrl).then(() => {
              toast.success("user account successfull");
            });
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log(error);
            toast.error(`${error}`);
          });
      });
  };
  return (
    <div className="bg-pink-50 min-h-screen px-2">
      <Toaster />
      <div className="min-h-screen  flex flex-col justify-center relative overflow-hidden ">
        <div className="max-w-7xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative  ring-1 ring-gray-900/5 rounded-lg leading-none  ">
              <Card className="w-[350px] md:w-[400px]">
                <CardHeader
                  color="pink"
                  floated={false}
                  shadow={false}
                  className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
                >
                  <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-6 text-white">
                    <FcKey className="h-10 w-10" />
                  </div>
                  <Typography variant="h4" color="white">
                    LogIn Your Account Here
                  </Typography>
                </CardHeader>
                <CardBody>
                  <Tabs value={type} className="overflow-visible">
                    <TabsHeader className="relative z-0 ">
                      <Tab value="card" onClick={() => setType("card")}>
                        Log In
                      </Tab>
                      <Tab value="paypal" onClick={() => setType("paypal")}>
                        Register
                      </Tab>
                    </TabsHeader>
                    <TabsBody
                      className="!overflow-x-hidden !overflow-y-visible"
                      animate={{
                        initial: {
                          x: type === "card" ? 400 : -400,
                        },
                        mount: {
                          x: 0,
                        },
                        unmount: {
                          x: type === "card" ? 400 : -400,
                        },
                      }}
                    >
                      {/* Login panel  */}
                      <TabPanel value="card" className="p-0">
                        <form
                          onSubmit={handleSubmitsLogIn}
                          className="mt-12 flex flex-col  gap-4"
                        >
                          <Input
                            required
                            type="text"
                            color="pink"
                            label="Your Name"
                            variant="outlined"
                            name="name"
                          />
                          <Input
                            required
                            type="email"
                            color="pink"
                            label="Your Email"
                            variant="outlined"
                            name="email"
                          />
                          <Input
                            required
                            type="password"
                            color="pink"
                            label="Password"
                            variant="outlined"
                            name="password"
                          />
                          <Button color="amber" size="lg" variant="gradient">
                            Log In
                          </Button>
                          <Typography
                            variant="small"
                            color="gray"
                            className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                          >
                            <LockClosedIcon className="-mt-0.5 h-4 w-4" />{" "}
                            Please make sure valid information
                          </Typography>
                        </form>
                        <div className="flex flex-col items-center gap-4 py-2">
                          <Button
                            onClick={handleGoogleSignIn}
                            size="lg"
                            color="white"
                            className="flex items-center gap-3"
                          >
                            <FcGoogle className="h-6 w-6" />
                            Continue with Google
                          </Button>
                          <Link to={"/"}>
                            <Button
                              variant="text"
                              className="flex items-center gap-2"
                            >
                              <HiOutlineArrowNarrowLeft className="h-5 w-5" />{" "}
                              Go Home
                            </Button>
                          </Link>
                        </div>
                      </TabPanel>
                      <TabPanel value="paypal" className="p-0">
                        <form
                          onSubmit={handleSubmitRegister}
                          className="mt-12 flex flex-col gap-4"
                        >
                          <Input
                            type="text"
                            color="pink"
                            label="Text Here"
                            variant="outlined"
                            name="name"
                            required
                          />
                          <Input
                            type="email"
                            color="pink"
                            label="Your Email"
                            variant="outlined"
                            name="email"
                            required
                          />
                          <Input
                            type="password"
                            color="pink"
                            label="password"
                            variant="outlined"
                            name="password"
                            required
                          />
                          <Input
                            type="password"
                            color="pink"
                            label="confirm password"
                            variant="outlined"
                            name="cpassword"
                            required
                          />
                          <Input
                            required
                            name="image"
                            // variant="standard"
                            type="file"
                            label="Upload photo"
                          />

                          <Button color="amber" size="lg" variant="gradient">
                            Register
                          </Button>
                          <Typography
                            variant="small"
                            color="gray"
                            className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                          >
                            <LockClosedIcon className="-mt-0.5 h-4 w-4" />{" "}
                            Please make sure valid information
                          </Typography>
                        </form>
                        <div className="flex flex-col items-center gap-4 py-2">
                          <Button
                            onClick={handleGoogleSignIn}
                            size="lg"
                            color="white"
                            className="flex items-center gap-3"
                          >
                            <FcGoogle className="h-6 w-6" />
                            Continue with Google
                          </Button>
                          <Link to={"/"}>
                            <Button
                              variant="text"
                              className="flex items-center gap-2"
                            >
                              <HiOutlineArrowNarrowLeft className="h-5 w-5" />{" "}
                              Go Home
                            </Button>
                          </Link>
                        </div>
                      </TabPanel>
                    </TabsBody>
                  </Tabs>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
