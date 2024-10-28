// order.controller.js
import Order from '../model/order.model.js';

export const createOrder = async (req, res) => {
    try {
        const { customerId, products, address, service, delivery, instructions } = req.body;

        // Check if required fields are provided
        if (!products || !products.length || !address || !service || !delivery) {
            return res.status(400).json({
                message: "Bad Request: Missing required fields",
                fields: {
                    products: !products.length ? "At least one product is required" : null,
                    address: !address ? "Address is required" : null,
                    service: !service ? "Service type is required" : null,
                    delivery: !delivery ? "Delivery type is required" : null,
                }
            });
        }

        // Create a new order
        const newOrder = new Order({
            customerId, // Optional, may be undefined for general orders
            products,
            address,
            service,
            delivery,
            instructions
        });

        // Save the order to the database
        await newOrder.save();

        return res.status(201).json({
            message: "Order created successfully",
            order: newOrder // returning the saved order
        });
    } catch (error) {
        console.error("Error creating order: ", error);

        if (error.name === "ValidationError") {
            return res.status(400).json({ message: "Validation error", error: error.message });
        }

        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

// Export the createOrder function
export default createOrder; // Default export
