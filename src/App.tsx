import { FC, useState } from "react";
import Lists from "./components/List";

import "./App.css";

interface IState {
  people: {
    name: string;
    age: number;
    note?: string | "";
    url: string;
  }[];
}

const App: FC = () => {
  const [people, setpeople] = useState<IState["people"]>([]);
  return (
    <div className="App">
      <h2>People Invited to our Party</h2>
      <Lists data={people} setData={setpeople} />
    </div>
  );
};

export default App;
