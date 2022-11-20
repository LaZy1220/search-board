import { Card } from "./Card";
import { useDispatch, useSelector } from "react-redux";
// import { addFilter } from "../filter/filter-slice";
import { useEffect } from "react";
import { loadPositions } from "./position-slice";
// import { selectFilters } from "../filter/filter-slice";

export function JobsList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPositions());
  }, [dispatch]);
  const { status, error, list } = useSelector((state) => ({
    ...state.positions,
  }));
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
      {/* {error && <h2>Can't fetch data</h2>}
      {status === "loading" && <h2>Loading...</h2>}
      <>
        {status === "received" &&
          list.map((item) => <Card key={item.id} {...item} />)}
      </> */}
    </>
  );
}
