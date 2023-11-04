import { NextResponse } from "next/server";

// Handles GET requests to /api
export async function GET(req, res) {
  // Check if the user is authenticated (you need to implement your authentication logic here)
  
  try {
    const response = await fetch('https://ghibliapi.vercel.app/films');
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    const movies = await response.json();
    return NextResponse.json(movies);
  } catch (error) {
    return NextResponse.json({ error: 'Unable to fetch movies' });
  }
}