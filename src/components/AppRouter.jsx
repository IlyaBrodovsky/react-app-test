import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import { privateRoutes, publicRoutes } from "../router/routes";

const AppRouter = () => {
  const isAuth = true;  
  return (
      
      <Routes>
      {publicRoutes.map(route => {
        <Route path={route.path} element={route.component} key={route.path}/>
      })}
      <Route  path="/about" element={<About />} />
      <Route  path="/posts" element={<Posts />} />
      <Route  path="/posts/:id" element={<PostIdPage />} />
      <Route  path="/login" element={<Login />} />
      <Route  path="*" element={<Navigate replace to="/404" />} />

      
    </Routes>
  );
};

export default AppRouter;
