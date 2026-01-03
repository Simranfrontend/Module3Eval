import { Link } from "react-router-dom";

const RestaurantCard = ({ data, isAdmin, onDelete }) => {
    return (
        <div style={{ border: "1px solid gray", margin: "10px", padding: "10px"}}>
            <img src={data.image} width="150" />
            <h3>{data.restaurantName}</h3>
            <p>{data.address}</p>
            <p>{data.type}</p>
            <p>Parking: {data.parkingLot ? "Yes" : "No"}</p>

            {isAdmin && (
                <>
                    <Link to={`/admin/restaurants/update/${data.restaurantID}`}>
                    <button>Update</button>

                    </Link>
                    <button onClick={() => onDelete(data.restaurantID)}>Delete</button>
                </>
            )}
        </div>
    );
};

export default RestaurantCard;