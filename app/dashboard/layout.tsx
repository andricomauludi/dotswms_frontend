"use client";

import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

//layout digunakan untuk memproteksi semua page didalam dashboard

interface UserResponse {
  user: string | null;
  error: AxiosError | null;
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSuccess, setIsSuccess] = useState<boolean>(false); //untuk membuat state apakah sukses atau nggak untuk fetching cookie, kalo nggak maka nanti di print loading
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const { user, error } = await getUser();

      if (error) {
        router.push("/"); //akan dikembalikan kalo gaada cookies
        return;
      }

      //if error didnt happen, if everythins is alright
      setIsSuccess(true);
    })();
  }, [router]);

  if (!isSuccess) {
    return <p>Loading ..</p>; //ini print buat si issuccess kalo gaada cookies didalamnya
  }
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#070C27]">
        <nav className="fixed left-60 top-0 right-0 left-20 top-0 bg-[#101632] py-5 px-5">
          <div className="flex">
            <h1 className="text-white">Navbar</h1>
            <ul className="flex ml-5">
              <Link href="/dashboard">
                <li className="mr-6 text-blue-300 cursor-pointer">Home</li>
              </Link>
              <Link href="/dashboard/about">
                <li className="mr-6 text-blue-300 cursor-pointer">About</li>
              </Link>
              <Link href="/dashboard/profile">
                <li className="mr-6 text-blue-300 cursor-pointer">Profile</li>
              </Link>
            </ul>
          </div>
        </nav>
        <div className="flex flex-col md:flex-row flex-1 bg-[#070C27]">
          <aside className="w-full md:w-60 outline-slate-600">           
            <nav className="fixed left-0 top-0 z-10 h-screen w-60 bg-[#171D37] border-r-4 border-slate-800">
              <ul className="m-6">
                <h3 className="text-white">DOTS-WMS</h3>
                
                <Link href="/dashboard">
                  <li  className={`flex p-2 text-white hover:bg-[#232F69] cursor-pointer`}>Home</li>
                </Link>
                <Link href="/dashboard/about">
                  <li  className={`flex p-2 text-white hover:bg-[#232F69] cursor-pointer`}>About</li>
                </Link>
                <Link href="/dashboard/profile">
                  <li  className={`flex p-2 text-white hover:bg-[#232F69] cursor-pointer`}>Profile</li>
                </Link>
              </ul>
            </nav>
          </aside>
          <main className="flex-1 bg-[#070C27] mt-20 text-white">{children}</main>
        </div>
      </div>
    </>
  );
}

async function getUser(): Promise<UserResponse> {
  try {
    const { data } = await axios.get("/api/auth/me"); //ngambil api dari auth me

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
