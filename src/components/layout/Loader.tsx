import LoaderGif from "./assets/Loader.gif";

function Loader() {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        src={LoaderGif}
        alt="Loading..."
      />
    </div>
  );
}

export default Loader;
