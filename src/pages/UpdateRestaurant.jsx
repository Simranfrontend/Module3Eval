import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const UpdateRestaurant = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [restaurant, setRestaurant] = useState({
        name: "",
        location: "",
        price_range: "",
    });

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const res = await axios.get( 
                    `https://localhost:5000/api/v1/restaurants/${id}`
                );

                setRestaurant(res.dats.data.restaurant);
            }
            catch (err) {
                console.error(err);
            }
        };

        fetchRestaurant();
    }, [id]);

    const handleChange = (e) => {
        setRestaurant({
            ...restaurant,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(
                `https://localhost:5000/api/v1/restaurants/${id}`,
                restaurant
            );
            navigate("/");
        }catch(err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1 className="text-center">Update Restaurant</h1>
            <form onSubmit={handleSubmit}>
                <input 
                name = "name"
                value = {restaurant.name}
                onChange={handleChange}
                className="form-control my-2" 
                />

                <input 
                name = "location"
                value = {restaurant.location}
                onChange={handleChange}
                className="form-control my-2" 
                />

                <input 
                name = "price_range"
                value = {restaurant.price_range}
                onChange={handleChange}
                className="form-control my-2" 
                />
                <button className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};

export default UpdateRestaurant;