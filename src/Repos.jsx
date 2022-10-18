import React from "react";
import CardRepo from "./CardRepo";

const Repos = (props) => {
  const { repos, darkMode } = props;
  console.log(repos);
  //list github repos passing by props

  return (
    <div className="max-h-96 overflow-x-auto">
      <h1 className={darkMode ? "text-white" : "text-black"}>Repos</h1>
      <ul>
        {repos.map((repo) => {
          return (
            <li key={repo.id}>
              <CardRepo repo={repo} darkMode />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Repos;
