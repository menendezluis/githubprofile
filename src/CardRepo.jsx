import React from "react";
import * as constants from "./constants";

const CardRepo = (props) => {
  const { repo } = props;
  console.log(constants.getLenguageImage(repo.lenguage));
  return (
    <div className="p-10">
      <div className=" w-full lg:max-w-full lg:flex">
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <img
                className="w-6 h-6 rounded-full mr-4"
                src={constants.getLenguageImage(repo.language)}
                alt="Programming Lenguage"
              />
              Watchers {repo.watchers_count}
            </p>

            <div className="text-gray-900 font-bold text-xl mb-2">
              <a href={repo.html_url}>{repo.name}</a>
            </div>
            <p className="text-gray-700 text-base">{repo.description}</p>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={repo.owner.avatar_url}
              alt="Programming Lenguage"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{repo.owner.login}</p>
              <p className="text-gray-600">{repo.updated_at}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRepo;
