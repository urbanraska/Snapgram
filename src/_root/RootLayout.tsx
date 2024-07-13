import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import TopBar from "@/components/shared/Topbar";
import { useUserContext } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const RootLayout = () => {
  const { isAuthenticated } = useUserContext();
  return (
    <>
      {isAuthenticated ? (
        <div className="w-full md:flex">
          <TopBar />
          <LeftSidebar />
          <section className="flex flex-1 h-full">
            <Outlet />
          </section>
          <Bottombar />
        </div>
      ) : (
        <Navigate to="/sign-in" />
      )}
    </>
  );
};

export default RootLayout;
