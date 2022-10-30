import { Card } from "./Card";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../filter/filter-slice";
import { useEffect } from "react";
import { loadPositions } from "./position-slice";
import { selectAllPositions } from "./position-slice";
import { selectFilters } from "../filter/filter-slice";

export function JobsList() {
  const [positions, setPositions] = useState([]);
  const loadingPos = async () => {
    const res = await axios.get("https://makser-test.site/api/v1/work/");
    setPositions(res.data.results);
  };
  useEffect(() => {
    loadingPos();
  }, []);
  // const dispatch = useDispatch();
  // const handleAddFilter = (filter) => {
  //   dispatch(addFilter(filter));
  // };
  // // const currentFilters = useSelector(selectFilters);
  // const positions = useSelector((state) => {
  //   selectAllPositions(state);
  // });
  // useEffect(() => {
  //   dispatch(loadPositions());
  // }, [dispatch]);
  return (
    <>
      {positions.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </>
  );
}
