import { NextResponse } from 'next/server';
import { client } from "@/sanity/lib/client";

// Define the type for your product data
interface Product {
    id: number;
    productName: string;
    productDescription: string;
    price: string;
    prevPrice: string;
    stock: number;
    productImage: string;
    tag: string;
    shipmentArray: {
        trackingId: string;
        deliveryStatus: string;
        estimatedDeliveryDate: string;
    }[];
}

// Function to fetch data from the API
async function fetchData(): Promise<Product[] | null> {
    try {
        const response = await fetch('your api url');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = (await response.json()) as Product[];
        return data;
    } catch (error) {
        console.error('Error fetching data from API:', error);
        return null;
    }
}

// Function to upload products to Sanity
async function uploadProducts() {
    try {
        // Fetch data from the API
        const products = await fetchData();

        if (!products) {
            throw new Error('No data fetched from the API.');
        }

        // Loop through each product and create a document in Sanity
        for (const product of products) {
            const sanityProduct = {
                // _type: 'product', // Must match the schema name
                // id: product.id,
                // productName: product.productName,
                // productDescription: product.productDescription,
                // price: product.price,
                // prevPrice: product.prevPrice,
                // stock: product.stock,
                // productImage: product.productImage, // Image URL as a string
                // tag: product.tag,

                //set up according to your schema 
                
            };

            await client.create(sanityProduct);
        }

        return { success: true, message: 'All products uploaded successfully!' };
    } catch (error) {
        console.error('Error uploading products:', error);
        return { success: false, message: 'Error uploading products.' };
    }
}

// GET API Route
export async function GET() {
    try {
        const result = await uploadProducts();

        if (result.success) {
            return NextResponse.json({ message: result.message }, { status: 200 });
        } else {
            return NextResponse.json({ message: result.message }, { status: 500 });
        }
    } catch (error) {
        console.error('Error in GET API route:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
