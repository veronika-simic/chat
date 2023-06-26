const Register = () => {
  return (
    <div className="bg-teal-300 h-screen">
      <form className="w-64 mx-auto">
        <input type="text" placeholder="username" className="block w-full rounded-sm p-2 mb-2 border"></input>
        <input type="password" placeholder="password" className="block w-full rounded-sm p-2 mb-2 border"></input>
        <button className="bg-slate-50 block w-full rounded-sm p-2">Register</button>
      </form>
    </div>
  );
};

export default Register;
