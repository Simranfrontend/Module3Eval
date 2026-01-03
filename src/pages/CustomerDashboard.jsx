import { useContext, useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";

const AdminDashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("evalData")) || []);
    }, []);

    return (
        <div>
            <Navbar data={data} setData={setData} />
            <h2>Customer Dashboard</h2>
            {data.map((r) => (
                <RestaurantCard 
                    key={r.restaurantID}
                    data={r}
                />
            ))}
            
        </div>
    );
};

export default CustomerDashboard;