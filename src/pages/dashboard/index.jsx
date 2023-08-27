import Card from "@/components/ui/Card";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (auth) {
      toast.success("User logged in successfully", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (auth === false) {
      navigate("/login");
    }
  }, [auth]);

  return (
    <div>
      <Card>Dashboard</Card>
    </div>
  );
};

export default Dashboard;
