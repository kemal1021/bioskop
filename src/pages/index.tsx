import React, { useState } from "react";
import { Router } from "react-router-dom";
import { consumers } from "stream";
import { useRouter } from 'next/router';
import { connect } from "http2";

export default function Index() {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const router = useRouter();

  function validateLogin(r:React.FormEvent){
    r.preventDefault();
console.log(username)
console.log(password)

if(username === 'user' && password === 'user123'){
  alert('sukses')
  router.push('/bioskop')
}
else{
  alert('username atau password salah,coba lagi')
}
  }


  return (
    <div className="relative h-screen ">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "brightness(0.4)", // Mengatur tingkat kegelapan
          backgroundImage:
            "url(https://www.wallpapertip.com/wmimgs/182-1821410_film-wallpaper-square-v2-movie-collection.jpg)",
        }}
      ></div>

      <div className="relative flex mx-9 py-5 ">
        <span className="font-bold text-5xl text-red-600 ">NETFLIX</span>
      </div>
      <div className="relative h-full flex-col flex items-center justify-center">
        <div className=" w-4/12  bg-black h-80 opacity-80 mb-32  "></div>
        <div className="absolute mb-40 w-96 ml-24 flex-col mt-8  ">
          <h1 className="text-4xl mx-2 mb-5  text-white ">Sign In</h1>
          <p id="mesage"></p>

          <form className="justify-center  " onSubmit={validateLogin}>
            <input
              type="text"
              id="username"
              value={username}
              placeholder="Username or mail"
              className="input rounded-none bg-white text-black w-8/12 h-10 mx-4"
              onChange={(r) => setUsername(r.target.value)}
            />
            <div className="py-6">
              <input
                type="password"
                className="input rounded-none bg-white text-black w-8/12 h-10 mx-4"
                id="password"
                placeholder="Password"
                value={password}
              onChange={(r) => setPassword(r.target.value)}

              />
            </div>
            <div className="py-5 ml-4">
              <button className="btn bg-red-700 btn-wide rounded-none" >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
