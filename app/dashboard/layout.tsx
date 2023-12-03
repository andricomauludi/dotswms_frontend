"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

//layout digunakan untuk memproteksi semua page didalam dashboard

interface UserResponse{
  user: string | null;
  error : AxiosError | null;

}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [ isSuccess, setIsSuccess]=useState<boolean>(false);      //untuk membuat state apakah sukses atau nggak untuk fetching cookie, kalo nggak maka nanti di print loading 
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const { user, error } = await getUser();

      if(error){
        router.push("/");                       //akan dikembalikan kalo gaada cookies
        return;

      }

      //if error didnt happen, if everythins is alright
      setIsSuccess(true);
    })();
  }, [router]);

  if(!isSuccess){
    return <p>Loading ..</p>                                //ini print buat si issuccess kalo gaada cookies didalamnya
  }
  return (
    <main>
      <header>Navigation</header>
      {children}
    </main>
  );
}

async function getUser(): Promise<UserResponse> {
  try {
    const { data } = await axios.get("/api/auth/me");         //ngambil api dari auth me

    return {
      user: data,
      error: null,
    };
  } catch (e) {
    const error = e as AxiosError;

    return {
      user: null,
      error,
    };
  }
}
