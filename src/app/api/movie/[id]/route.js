import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  // Check if the user is authenticated (you need to implement your authentication logic here)
  // if (!request.session.user) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  // }
  const id = params.id;
    try {
      const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`);

        if (!id) return new Response("Movie Not Found", { status: 404 });

        // return new Response(JSON.stringify(id), { status: 200 })
        const movie = await response.json();
        return NextResponse.json({movie});

    } catch (error) {
        return NextResponse.json({ error: 'Unable to fetch movies' });
    }
}