import React, { useState, createContext, useContext, useRef } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const btnHoverBgColor = {
    "&:hover": { backgroundColor: "#1fb75c", color: "black" },
  };
  const theLogo = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [musicSearchResult, setMusicSearchResult] = useState([]);
  const [loggedUser, setLoggedUser] = useState(() => {
    const isLogged = localStorage.getItem("loggedUser");
    return isLogged ? JSON.parse(isLogged) : [];
  });
  const [isUserInDataBase, setIsUserInDataBase] = useState(false);

  const rndm = (min, max) => {
    let difference = max + 1 - min;
    return Math.floor(Math.random() * difference) + min;
  };

  const rndmRange = (quotesArr) => {
    let result = [];

    const getRandomObjects = (startIndex, endIndex, numObjects) => {
      let objects = [];
      for (let i = startIndex; i <= endIndex; i++) {
        objects.push({ ...quotesArr[i] });
      }
      let selectedObjects = [];
      for (let i = 0; i < numObjects; i++) {
        let randomIndex = Math.floor(Math.random() * objects.length);
        selectedObjects.push(objects.splice(randomIndex, 1)[0]);
      }
      return selectedObjects;
    };

    result.push(...getRandomObjects(0, 9, 2));
    result.push(...getRandomObjects(10, 19, 2));
    result.push(...getRandomObjects(20, 29, 2));
    result.push(...getRandomObjects(30, 39, 2));
    result.push(...getRandomObjects(40, 49, 2));
    result.push(...getRandomObjects(0, 49, 2));

    return result;
  };

  const localApi = (method, key, value) => {
    let localApiArr = [];
    switch (method) {
      case "set":
        localStorage.setItem(key, JSON.stringify(value));
        break;
      case "get":
        localApiArr.push(
          localStorage.getItem(key)
            ? JSON.parse(localStorage.getItem(key))
            : "not Found!"
        );
        break;
      case "del":
        localStorage.removeItem(key);
        break;
      default:
        localApiArr.push("undefined method");
    }

    return localApiArr && localApiArr.flat();
  };

  return (
    <AppContext.Provider
      value={{
        rndmRange,
        isLoading,
        setIsLoading,
        localApi,
        loggedUser,
        setLoggedUser,
        musicSearchResult,
        setMusicSearchResult,
        rndm,
        btnHoverBgColor,
        theLogo,
        isUserInDataBase,
        setIsUserInDataBase,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
