import axios from "axios";
import { Currency } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Get reviews all with pagination and dynamic params
export async function getAllReview(page = 1, limit = 10) {
  try {
    const res = await api.get(`/reviews/all?page=${page}&limit=${limit}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching reviewss:", err);
    throw new Error("Failed to fetch all reviews with pagination");
  }
}

export async function getSubscription() {
  try {
    const res = await api.get(`/subscription/get-all`);
    return res.data;
  } catch (err) {
    console.error("Error fetching reviewss:", err);
    throw new Error("Failed to fetch all reviews with pagination");
  }
}

export async function registerForm(data: FormData) {
  try {
    const res = await api.post('/auth/register', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return res.data
  } catch (err) {
    if(err instanceof Error){

      throw new Error(err?.message || 'Failed to send your data')
    }
  }
}


export async function Payment(userId:string,planId:string) {
  
  try{
    const  res= await api.post("/subscription/payment/create-checkout",{userId:userId,planId:planId})
    return res.data
  }catch(err){
    if(err instanceof Error){
      throw new Error(err.message || 'fail to payment')
    }
  }
} 
