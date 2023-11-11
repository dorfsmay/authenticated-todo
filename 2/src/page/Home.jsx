import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useCheckAuth } from "../hooks";

export default function Home() {
  useCheckAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Signed out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <section>Hello !!</section>
      <div>
        {" "}
        <button onClick={handleLogout}> Logout </button>
      </div>
    </>
  );
}
