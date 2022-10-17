import { useEffect, useState } from "react";
import Plot from "react-plotly.js";

// import Chart from "react-apexcharts";
// npm install react-apexcharts apexcharts ==> not working in code sandbox
import api from "./api/api.json";
import Table from "./Table";
import * as _ from "lodash";
function App() {
  const [dataTable, setDataTable] = useState([]);
  useEffect(() => {
    setDataTable(api);
  }, []);
  const column = [
    { heading: "id", value: "id" },
    { heading: "season", value: "season" },
    { heading: "city", value: "city" },
    { heading: "date", value: "date" },
    { heading: "team1", value: "team1" },
    { heading: "team2", value: "team2" },
    { heading: "toss_winner", value: "toss_winner" },
    { heading: "toss_decision", value: "toss_decision" },
    { heading: "result", value: "result" },
    { heading: "dl_applied", value: "dl_applied" },
    { heading: "winner", value: "winner" },
    { heading: "win_by_runs", value: "win_by_runs" },
    { heading: "win_by_wickets", value: "win_by_wickets" },
    { heading: "player_of_match", value: "player_of_match" },
    { heading: "venue", value: "venue" },
    { heading: "umpire1", value: "umpire1" },
    { heading: "umpire2", value: "umpire2" },
    { heading: "umpire3", value: "umpire3" }
  ];
  return (
    <div className="App">
      <h1>IPL data from 2008 to 2017</h1>
      {/* <Table data={dataTable} column={column} /> */}
      {console.log(api.map((data) => data.win_by_runs))}
      <Plot
        data={[
          {
            x: api.map((data) => data.winner),
            y: api.map((data) => data.win_by_runs),
            type: "bar",
            mode: "lines+markers",
            marker: { color: "red" }
          }
          // { type: "bar", x: [1, 2, 3], y: [2, 5, 3] }
        ]}
        layout={{ width: 900, height: 700, title: "A Fancy Plot" }}
      />
      {/* <h3>match data</h3>
      <Chart type="pie" width={1349} height={500}></Chart>
      <ul>
        {data.map((value) => {
          return <li>{value.city}</li>;
        })}
      </ul> */}
    </div>
  );
}

export default App;
