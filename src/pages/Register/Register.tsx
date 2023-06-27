import { useState } from "react";
import axios from 'axios';

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  async function register(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await axios.post('/register', {username, password})

  }
  return (
    <div className="bg-slate-100 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={register}>
        <input
          value={username}
          type="text"
          placeholder="Username"
          className="block w-full rounded-sm p-2 mb-2 border"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          value={password}
          type="password"
          placeholder="Password"
          className="block w-full rounded-sm p-2 mb-2 border"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          value={confirmPassword}
          type="password"
          placeholder="Confirm password"
          className="block w-full rounded-sm p-2 mb-2 border"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        <button className="bg-sky-600 block w-full rounded-sm p-2 text-white">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
