"use client";

import axios, { AxiosError } from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
    };
    try {
      const {data} = await axios.post("/api/auth/login", payload);
      alert(JSON.stringify(data));
      //redirect the user to dashboard
      router.push('/dashboard');
    } catch (e) {
      const error = e as AxiosError;
      alert(error.message);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Nextjs Auth JWT Verification</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="border rounded border-black"
            name="username"
            id="username"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            className="border rounded border-black"
            name="password"
            required
          />
        </div>
        <button className="p-2 bg-orange-600 text-white w-fit rounded">
          Submit
        </button>
      </form>
    </main>
  );
}
