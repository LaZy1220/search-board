import { Card } from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../filter/filter-slice";
import { useEffect } from "react";
import { queryPositions } from "./position-slice";
import { selectVisiblePositions } from "./position-slice";
import { selectFilters } from "../filter/filter-slice";

export function JobsList() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("effect");
    dispatch(queryPositions());
  }, [dispatch]);
  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) => {
    selectVisiblePositions(state, currentFilters);
  });
  return (
    <>
      {positions?.map((item) => (
        <Card key={item.id} handleAddFilter={handleAddFilter} {...item} />
      ))}
    </>
  );
}
