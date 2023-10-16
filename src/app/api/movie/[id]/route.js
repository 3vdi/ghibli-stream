import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const id = params.id;
    // try {
      const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`);

        if (!id) return new Response("Movie Not Found", { status: 404 });

        // return new Response(JSON.stringify(id), { status: 200 })
        const movie = await response.json();
        return NextResponse.json({ movie});

    // } catch (error) {
    //     return new Response("Internal Server Error", { status: 500 });
    // }
}