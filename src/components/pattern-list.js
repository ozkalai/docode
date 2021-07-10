import React from "react";
import Thumbnail from "./thumbnail";
import { useInfiniteQuery } from "react-query";
import { getItems } from "../services/get-items";
import useIntersectionObserver from "../../hook/useIntersectionObserver";

function PatternList() {
  const {
    data,
    isFetching,
    isFetchingNextPage,
    isLoading,
    fetchNextPage,
    hasNextPage,
    error,
  } = useInfiniteQuery(
    "items",
    async ({ pageParam = 0 }) => {
      return await getItems(pageParam);
    },
    {
      getNextPageParam: (lastPage, pages) => lastPage.config.url.slice(-1) + 1,
    }
  );

  const loadMoreButtonRef = React.useRef();

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
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
    <>
      <div>
        {mergedPages.map((item) => (
          <Thumbnail item={item} key={item.designName} />
        ))}
      </div>
      <button
        ref={loadMoreButtonRef}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load Newer"
          : "Nothing more to load"}
      </button>
    </>
  );
}

export default PatternList;
