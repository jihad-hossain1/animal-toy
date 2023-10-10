// carts_by_user_email
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const useCart = () => {
    const { user, loading } = useContext(AuthContext);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ["carts", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios(`${import.meta.env.VITE_BASE_URL}/carts?email=${user?.email}`);
            console.log("res from axios", res);

            return res.data;
        },
    });

    return [cart, refetch];
};
export default useCart;