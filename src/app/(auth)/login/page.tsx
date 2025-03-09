"use client";
import Button from "@/components/UI/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    signIn("credentials", {
      ...loginData,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        router.push("/admin");
      }

      if (callback?.error) {
        setError(callback.error);
      }
    });
  };

  return (
    <div>
      <input
        type="text"
        value={loginData.email}
        onChange={(e) =>
          setLoginData({ ...loginData, email: e.currentTarget.value })
        }
      />
      <input
        type="password"
        value={loginData.password}
        onChange={(e) =>
          setLoginData({ ...loginData, password: e.currentTarget.value })
        }
      />
      <Button text="LOGIN" onClick={handleLogin} />
      <span style={{ color: "red" }}>{error}</span>
    </div>
  );
};

export default Login;
