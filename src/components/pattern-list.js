import React, { useState } from "react";
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
      getNextPageParam: (lastPage, pages) => {
        let currentUrl = lastPage.config.url.replace(/[^0-9]/g, "");
        let newUrl = parseInt(currentUrl) + 1;
        return newUrl;
      },
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
      <div className="p-2 sm:p-10 bg-gray-200 flex flex-wrap justify-center">
        <div className="flex flex-wrap justify-center">
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
      </div>
    </>
  );
}

export default PatternList;
