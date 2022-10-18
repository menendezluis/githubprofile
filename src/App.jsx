import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Repos from "./Repos";
import axios from "axios";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [username, setUsername] = useState("CleverProgrammers");
  const [user, setUser] = useState("CleverProgrammers");
  const [githubProfile, setGithubProfile] = useState(null);
  const [showRepositories, setShowRepositories] = useState(false);
  const [repositories, setRepositories] = useState([]);
  let textColor = darkMode ? "white" : "black";
  useEffect(() => {
    axios.get(`https://api.github.com/users/${user}`).then((res) => {
      console.log(res.data);
      setGithubProfile(res.data);
    });
  }, [user]);

  const handleUser = () => {
    setUser(username);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleUser();
    }
  };

  const getRepos = () => {
    axios.get(`https://api.github.com/users/${user}/repos`).then((res) => {
      setShowRepositories(true);
      setRepositories(res.data);
    });
  };

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#333" : "#fff";
    document.body.style.color = darkMode ? "#fff" : "#333";
    document.body.style.transition = "all 2s ease";

    return () => {
      document.body.style.backgroundColor = null;
    };
  }, [darkMode]);

  return (
    <div className={darkMode ? "bg-gray-900" : "bg-slate-200"}>
      <div>
        <label
          for="default-toggle"
          className="inline-flex relative items-center cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            onClick={() => setDarkMode(!darkMode)}
            id="default-toggle"
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {darkMode ? <span>☀️</span> : <span>🌙</span>}
          </span>
        </label>
        <label
          for="website-admin"
          className={
            "block mb-2 text-sm font-medium" +
            (darkMode ? "text-gray-900" : "text-gray-900")
          }
        >
          Username
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            @
          </span>
          <input
            type="text"
            id="website-admin"
            className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="CleverProgrammers"
            onChange={(e) => setUsername(e.target.value)}
            onBlur={handleUser}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={githubProfile?.avatar_url}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{githubProfile?.name}</div>
          <p className="text-gray-700 text-base">{githubProfile?.bio}</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            @{githubProfile?.login}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Location: {githubProfile?.location || "Earth"}
          </span>
        </div>

        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Followers: {githubProfile?.followers}
          </span>

          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Following: {githubProfile?.following}
          </span>
        </div>

        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            <button onClick={getRepos}>
              Show Repos: {githubProfile?.public_repos}
            </button>
          </span>
        </div>
        {showRepositories && <Repos repos={repositories} darkMode />}
      </div>
    </div>
  );
}
export default App;
