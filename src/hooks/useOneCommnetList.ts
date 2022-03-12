/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { Comment } from "../types/comment";

export const useOneCommentList = () => {
  const [OneCommentList, setOneCommentList] = useState<Array<Comment>>([]);

  const getCommnetListById = useCallback(async (articlId: number) => {
    const response = await axios.get<Array<Comment>>(
      `https://jsonplaceholder.typicode.com/posts/${articlId}/comments`
    );
    setOneCommentList(response.data);
  }, []);
  return { OneCommentList, getCommnetListById };
};
