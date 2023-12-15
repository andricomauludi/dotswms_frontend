import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
import { serialize } from "cookie";
import { BACKEND_PORT, COOKIE_NAME } from "@/constants";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  
  const token = cookieStore.get(COOKIE_NAME); //COOKIE_NAME diambil dari constants index.ts
  
  // const response = {
  //   message: `Bearer ${token?.value}`,
  // };

  // return new Response(JSON.stringify(response), {
  //   status: 200,
  // });
  try {
    const { data } = await axios.get(
      process.env.BACKEND_PORT + "workspaces/all-table-project/4270191b-2eea-4c59-9a32-08edcd6bf5e8",
      { headers: { Authorization: `Bearer ${token?.value}` }}
    );
    let datatoken = data;
    let hasil = datatoken;

    const response = {
     data,
    };

    return new Response(JSON.stringify(response), {
      status: 200,
    });
    // console.log(datatoken);
  } catch (e) {
    const error = e as AxiosError;
    console.log(error);
    alert(e);
  }
}
