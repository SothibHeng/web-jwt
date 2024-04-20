"use client";
import React, { useState } from "react";

export default function TestJWT() {
  const [accessToken, setAccessToken] = useState("");
  const [user, setUser] = useState(null);
  

  // handle login
  const handleLogin = async () => {
    const email = "anotherunivers23@gmail.com";
    const password = "!@#123456";

    fetch(process.env.NEXT_PUBLIC_API_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAccessToken(data.accessToken);
        setUser(data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handle partial update
  const handlePartialUpdate = async () => {
    const body = {
      "name": "Update specific update1"
    }

    fetch(`${process.env.NEXT_PUBLIC_DJANGO_API_URL}/api/products/${1}`
    ,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    })
    .then(res => res.json())
    .then((data) => {
      console.log("Data from partial update",data);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <main className="h-screen grid place-content-center">
      <h1 className="text-6xl">Testing JWT</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-800 py-3 px-6 rounded-md text-white mt-6"
      >
        Login
      </button>

      <button
        onClick={handlePartialUpdate}
        className="bg-blue-800 py-3 px-6 rounded-md text-white mt-6"
      >
        Partial update
      </button>

    </main>
  );
}

	