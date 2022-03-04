import React from "react";

function about() {
  return (
    <div>
      <h1 className="text-6xl mb-4">GitHub Profile Search</h1>
      <p className="mb-4 text-2xl font-light">
        A React app + Vite to search GitHub profiles and see profile details.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a className="text-white" href="https://twitter.com/hassibmoddasser">
          Hassib Moddasser
        </a>
      </p>
    </div>
  );
}

export default about;
