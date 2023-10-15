import axios from "axios";
import React, {createContext} from "react";

export const CustomContext = createContext();

export const MyContext = ({children}) => {
  const [filmsData, setFilmsData] = React.useState([]);
  const receivingData = (num = 1) => {
    axios
      .get(`http://localhost:3002/films?_limit=20&_page=${num}`)
      .then((res) => setFilmsData(res.data));
  };


  React.useEffect(() => {
    receivingData();
  }, []);

  const value = {
    filmsData,
	 receivingData
  };
  return (
    <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
  );
};

export default MyContext;
