"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

interface ViewUserButtonProps {
  email: string;
}

const Buttonlogout= () => {
  //Mendeklarasikan viewuserbutton sebagai react functional component agar bisa pake interface viewuserbutton
  const router = useRouter();

  const handleLogout = async () => {
    try {      
      const {data} = await axios.post("/api/auth/logout");
      alert(JSON.stringify(data));
      console.log(data.status)
      if (data.status==404) {
        alert(data.message)
      }else{
        router.push('/')
      }
      //redirect the user to dashboard
    //   router.push('/');
    } catch (e) {
      const error = e as AxiosError;
      console.log(error)
      alert(error.message);
    }
  };
  return (
    <>
      <button onClick={handleLogout}>
        Sign Out
      </button>
    </>
  );
};

export default Buttonlogout;
