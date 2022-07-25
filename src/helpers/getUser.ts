export const getUser = () => {
  const currentPathname = localStorage.getItem("currentPathname") || "";
  const isAuth = !!localStorage.getItem("token");
  return { currentPathname, isAuth };
};
