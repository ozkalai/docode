import React from "react";
import Thumbnail from "./thumbnail";
import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { getItems } from "../services/get-items";

function PatternList() {
  const {
    data,
    isFetching,
    isFetchingNextPage,
    isLoading,
    fetchNextPage,
    hasNextPage,
    error,
  } = useInfiniteQuery("items", async ({ pageParam = 0 }) => {
    return await getItems(pageParam);
  });

  const mergedPages = React.useMemo(() => {
    const merged = [].concat(
      ...(data?.pages.map((el) => el?.data ?? []) ?? [])
    );

    return merged;
  }, [data]);

  console.log({
    data: data,
    isFetching: isFetching,
    mergedPages: mergedPages,
  });
  return (
    <div>
      {mergedPages.map((item) => (
        <Thumbnail item={item} key={item.designName} />
      ))}
    </div>
  );
}

export default PatternList;
