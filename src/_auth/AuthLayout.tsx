import { useUserContext } from "@/context/AuthContext";
import { Outlet, Navigate, useLocation } from "react-router-dom";


const AuthLayout = () => {
  const { isAuthenticated } = useUserContext();
  const location = useLocation();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" replace state={{ from: location?.pathname }}/>
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
