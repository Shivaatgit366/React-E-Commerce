import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();  // Get the error object from the route
  console.log(error);

  return <h4 className="font-bold text-4xl">There was an error...</h4>;
};

export default ErrorElement;
