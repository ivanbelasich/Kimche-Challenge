import React from "react";
import { useQuery } from "@apollo/client";
import { Switcher } from "./components/Switcher/Switcher";
import { Countries } from "./components/Countries/Countries";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ALL_COUNTRIES } from "./GraphQL/GraphQL";
import "./App.css";

function App() {
  const { data, loading, error } = useQuery(ALL_COUNTRIES);
  const [groupBy, setGroupBy] = React.useState("continents");
  const [input, setInput] = React.useState();

  if (error) return <span style={{ color: "red" }}>{error}</span>;
  return (
    <>
      <div className="app-container">
        <h1>Country Search</h1>
        <SearchBar input={input} setInput={setInput} />
        <Switcher groupBy={groupBy} setGroupBy={setGroupBy} />
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Countries
              countries={data.countries}
              input={input}
              groupBy={groupBy}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
