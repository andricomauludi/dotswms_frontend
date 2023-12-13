"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Buttonlogout from "../components/dashboard/buttonlogout";
import ProfilePage from "./profile/page";

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
      <div
        className="min-h-screen flex flex-col bg-[]"
        style={{ backgroundColor: "#070C27" }}
      >
        <Navbar shouldHideOnScroll style={{ backgroundColor: "#101632" }}>
          <NavbarBrand>
            <p className="font-bold text-inherit text-white">DOTS WMS</p>
          </NavbarBrand>
          <NavbarContent justify="end">
            <NavbarItem>
              <Dropdown backdrop="blur">
                <DropdownTrigger>
                  <Button color="primary" variant="bordered">
                    Settings
                  </Button>
                </DropdownTrigger>
                <DropdownMenu variant="faded" aria-label="Static Actions">
                  <DropdownItem key="new">New file</DropdownItem>
                  <DropdownItem key="copy">Copy link</DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                  >
                    <Buttonlogout />
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
            <NavbarItem>
              <ProfilePage />
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        {/* <nav
          className="fixed left-60 top-0 right-0 left-20 top-0 bg-[#101632] py-5 px-5"
          style={{ backgroundColor: "#101632" }}
        >
          <div className="flex">
            <h1 className="text-white">Navbar</h1>
            
             <ul className="flex ml-5">
              <Link href="/dashboard">
                <li className="mr-6 text-blue-300 cursor-pointer">Home</li>
              </Link>
              <Link href="/dashboard/mywork">
                <li className="mr-6 text-blue-300 cursor-pointer">My Work</li>
              </Link>
              <Link href="/dashboard/workspace">
                <li className="mr-6 text-blue-300 cursor-pointer">Workspace</li>
              </Link>
            </ul>
          </div>
        </nav> */}
        <aside>
          <nav
            className="fixed h-screen w-20 border-r-4 border-slate-800"
            style={{
              backgroundColor: "#171D37",
              borderColor: "#FFFFFF",
            }}
          >
            <ul className="m-6">
              <Link href="/dashboard">
                <li
                  className={`flex p-2 text-white hover:bg-[#232F69] cursor-pointer`}
                >
                  Home
                </li>
              </Link>
              <Link href="/dashboard/mywork">
                <li
                  className={`flex p-2 text-white hover:bg-[#232F69] cursor-pointer`}
                >
                  My Work
                </li>
              </Link>
              <Link href="/dashboard/workspace">
                <li
                  className={`flex p-2 text-white hover:bg-[#232F69] cursor-pointer`}
                >
                  Workspace
                </li>
              </Link>
            </ul>
          </nav>
        </aside>
        {/* <nav className="fixed left-0 top-0 z-10 h-screen w-60 bg-[#171D37] border-r-4 border-slate-800" style={{marginTop:"60px",backgroundColor:"#171D37"}}>
            <ul className="m-6">
              <Link href="/dashboard">
                <li
                  className={`flex p-2 text-white hover:bg-[#232F69] cursor-pointer`}
                >
                  Home
                </li>
              </Link>
              <Link href="/dashboard/mywork">
                <li
                  className={`flex p-2 text-white hover:bg-[#232F69] cursor-pointer`}
                >
                  My Work
                </li>
              </Link>
              <Link href="/dashboard/workspace">
                <li
                  className={`flex p-2 text-white hover:bg-[#232F69] cursor-pointer`}
                >
                  Workspace
                </li>
              </Link>
            </ul>
          </nav> */}

        <main className="dark text-foreground" style={{marginTop:"30px"}}>{children}</main>
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
