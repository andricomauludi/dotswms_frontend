import React from "react";
import styles from "./postPage.module.css";
import ViewUserButton from "../components/Posts/ViewUserButton";
import CardList from "../components/Posts/CardList";

const base_url = "http://localhost:5000/users";   //endpoint API

interface Iposts {        //interface merupakan rangka object yang mau kita masukin dari api
  _id: string;
  full_name: string;
  role: string;
  email: string;
  address: string;
}

const Posts = async () => {     //await harus didalam async
  const response = await fetch(base_url, {        //penarikan api
    cache:"no-store",
    headers: new Headers({
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTEwMDNhNy00YjRiLTQ5NjctOGRjOC1iNWYyY2FmOTNiYmIiLCJ1c2VyTmFtZSI6Ik11aGFtbWFkIFNyaSBHaWxicmFuIEJpbGxhaHB1dHJhIiwiZW1haWwiOiJnaWxicmFuYmlsbGFocHV0cmFAZ21haWwuY29tIiwicm9sZSI6ImJ1c2luZXNzIGRldmVsb3BtZW50IiwiaWF0IjoxNzAwODk1MTUyLCJleHAiOjE3MDA5ODE1NTJ9.POaaKiBjul_N4pFyiWZ_UFk2DBF5SeEs2lEiNeA2CDg",
      "Content-Type": "application/x-www-form-urlencoded",
    }),
  });
  const response2 = await response.json();
  const posts: Iposts[] = await response2.user;
  return (
    <>
      <h1 className="text-fuchsia-500">POSTONG PAGE</h1>
      {posts.map((data) => {      //melakukan mapping dari sekian banyaknya api menjadi satu per satu
        return (
          <CardList key={data._id}>
            <p>{data._id}</p>
            <p>{data.full_name}</p>
            <p>{data.role}</p>
            <p>{data.email}</p>
            <p>{data.address}</p>
            <ViewUserButton email={data.email}/>    {/*sebelum memasukkan data kedalam viewuserbutton, di component nya harus mendeklarasikan interface dan jenis componentnya */}
          </CardList>
        );
      })}      
    </>
  );
};

export default Posts;
