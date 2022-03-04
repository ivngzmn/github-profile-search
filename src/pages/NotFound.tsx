import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <p className="font-bold text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl tracking-tight mb-6 text-white dark:text-white">
            404 error 😩
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Uh oh! I think you're lost.
          </h1>
          <p className="mt-2 text-lg font-medium text-white max-w-screen-lg mx-auto text-opacity-100">
            Why show a generic 404 when I can make it sound mysterious? It seems
            you've found something that used to exist, or you spelled something
            wrong. I'm guessing you spelled something wrong. Can you double
            check that URL?
          </p>
          <Link className="btn btn-primary btn-lg mt-4" to="/">
            <FaHome className="mr-2" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
