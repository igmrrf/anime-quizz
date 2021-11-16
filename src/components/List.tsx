import React, { FC } from "react";

interface IProps {
  data: {
    name: string;
    age: number;
    note?: string | "";
    url: string;
  }[];
  setData: Function;
}
const List: FC<IProps> = ({ data, setData }) => {
  return (
    <div>
      <h2>I am a list</h2>
    </div>
  );
};

export default List;
