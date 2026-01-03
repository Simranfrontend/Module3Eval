import { useContext, useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";

const AdminDashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("evalData")) || [];
        setData(stored);
    }, []);

    const addRestaurant = (rest) => {
        const updated = [...data, rest];
        localStorage.setItem("evalData", JSON.stringify(updated));
        setData(updated);
        alert("Restaurant Added");
    };

    const deleteRestaurant = (id) => {
        if (!confirm("Are you sure you want to delete?")) return;
        const updated = data.filter((r) => r.restaurantID !== id);
        localStorage.setItem("evalData", JSON.stringify(updated));
        setData(updated);
        alert("Deleted Successfully");
    };

    return (
        <div>
            <Navbar data={data} setData={setData} />
            <h2>Admin Dashboard</h2>
            {data.map((r) => (
                <RestaurantCard 
                    key={r.restaurantID}
                    data={r}
                    isAdmin
                    onDelete={deleteRestaurant}
                />
            ))}
            
        </div>
    );
};

export default AdminDashboard;