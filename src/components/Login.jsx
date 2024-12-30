import { useNavigate } from "react-router-dom";
export function LogIn() {
  //Programatically navigating
  const Navigate = useNavigate();
  const handlelogin = () => {
    Navigate("/dashboard");
  };
  return (
    <div>
      <button onClick={handlelogin}>LogIn</button>
    </div>
  );
}
