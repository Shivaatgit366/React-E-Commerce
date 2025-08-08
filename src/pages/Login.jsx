import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center px-6 md:px-0">
      <Form
        method="post"
        className="card w-65 md:w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        {/* Email input */}
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue=""
        />

        {/* Password input */}
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue=""
        />

        {/* Submit button */}
        <div className="mt-4" capitalize>
          <SubmitBtn text="Login" />
        </div>

        {/* Guest user button */}
        <button
          type="button"
          className="btn btn-secondary btn-block capitalize"
        >
          guest user
        </button>

        {/* Register link */}
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
