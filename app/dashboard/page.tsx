"use client"
import { API_URL } from "@/config/constants";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";


export default function DashboardPage() {
  const [user, setUser] = useState({email: "",username: "",firstName:"",lastName:"",userId:""});
  const router = useRouter();

  {/*const getProfile = async () => {
    const res = await fetch(`${API_URL}/auth/profile`,{
      method: 'GET',
      headers: {'Authorization': `Bearer ${}`}});
    console.log(res);

    setUser({email: "lala@lala",username: "userAn",firstName:"Andres",lastName:"Leonel",userId:"34"});
  };*/}

  const logout = async () => {
    try {
      const res = await fetch("/api/logout");
      console.log(res);
      console.log("Limpiar la cookie o set en vacio el usuario");
    } catch (error) {
      console.error("Error");
    }
    router.push("/auth/login");
  };

  {/*useEffect(() => {
    getProfile();
  }, []);*/}
  return (
    <div>
      {user.email }
      
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}