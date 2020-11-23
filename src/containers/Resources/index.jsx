import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar";
import NgoList from "../../components/NgoList";
import AdvancedFilters from "../../components/AdvancedFilters";
import PagesList from "../../components/PagesList";
import database from "../../firebaseConfig";
import LoadingPage from "../../components/LoadingPage";
import "./index.css";

const Resources = () => {
  const [allNgos, setAllNgos] = useState([]);
  const [filteredNgos, setFilteredNgos] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});
  const searchInput = useSelector((state) => state.currentSearchWordsReducer);
  const [searchKey, setSearchKey] = useState(searchInput);

  useEffect(() => {
    // Fetch all ngos from the database
    const fetchNgos = () => {
      database
        .collection("ngosEn")
        .get()
        .then((querySnapshot) => {
          const ngos = [];
          querySnapshot.forEach((doc) => {
            ngos.push({ id: doc.id, ...doc.data() });
            setAllNgos((prevState) => [
              ...prevState,
              { id: doc.id, ...doc.data() },
            ]);
          });
          return ngos;
        })
        .then((ngos) => {
          if (searchInput.length > 0) {
            handleSearchSubmit("", ngos);
          }
        })
        .catch((error) => {
          alert(`Error getting documents ===> ${error.message}`);
        });
    };

    fetchNgos();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkIfIsIncluded = (option, ngoValue) => {
    if (!option.includes(ngoValue)) {
      option.push(ngoValue);
    }
  };

  // OUTPUT ==> { cities: ["Ankara", "Sincan"], services: ["health care", "education"]}
  const getFilterOptions = (ngos) => {
    const options = {
      names: [],
      cities: [],
      services: [],
      ratings: [],
    };

    for (let i = 0; i < ngos.length; i++) {
      checkIfIsIncluded(options.cities, ngos[i].city);
      checkIfIsIncluded(options.services, ngos[i].service);
      checkIfIsIncluded(options.ratings, ngos[i].rating);
      checkIfIsIncluded(options.names, ngos[i].name);
    }

    return options;
  };

  useEffect(() => {
    setFilterOptions(getFilterOptions(allNgos));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allNgos]);

  // this filters ngos with chosenOption
  const applyAdvancedFilters = (chosenOptions) => {
    setFilteredNgos([]);
    for (let i = 0; i < allNgos.length; i++) {
      const isAllOptionsIncluded =
        chosenOptions.cities.includes(allNgos[i].city) ||
        chosenOptions.services.includes(allNgos[i].service) ||
        chosenOptions.names.includes(allNgos[i].name) ||
        chosenOptions.ratings.includes(allNgos[i].rating);
      if (isAllOptionsIncluded) {
        setFilteredNgos((prevState) => [...prevState, allNgos[i]]);
      }
    }
  };

  // this search a keyword and filters ngos with the given keyword
  const isSearchWordsInNgo = (ngo, searchedWords) => {
    const searchedWordsArray = searchedWords.split(" ");
    const searchedValue =
      searchedWordsArray.length > 1
        ? new RegExp(searchedWordsArray.join("|"), "i")
        : new RegExp(searchedWordsArray[0], "i");
    return Object.keys(ngo).some((parameter) => {
      return searchedValue.test(JSON.stringify(ngo[parameter]));
    });
  };

  const filterNgos = (ngos, searchedWords) => {
    return ngos.filter((ngo) => isSearchWordsInNgo(ngo, searchedWords));
  };

  const handleSearchSubmit = (e, ngos = allNgos) => {
    setFilteredNgos(filterNgos(ngos, searchKey));
    setSearchKey("");
  };

  useEffect(() => {
    if (searchKey) {
      setFilteredNgos(filterNgos(allNgos, searchKey));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allNgos]);

  if (!allNgos) {
    return <LoadingPage />;
  }

  return (
    <div>
      <SearchBar
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        handleSearchSubmit={handleSearchSubmit}
      />
      <div className="d-flex content">
        <AdvancedFilters
          applyAdvancedFilters={applyAdvancedFilters}
          setFilteredNgos={setFilteredNgos}
          filterOptions={filterOptions}
        />
        <NgoList ngos={filteredNgos.length > 0 ? filteredNgos : allNgos} />
      </div>
      <PagesList ngos={filteredNgos.length > 0 ? filteredNgos : allNgos} />
    </div>
  );
};

export default Resources;
