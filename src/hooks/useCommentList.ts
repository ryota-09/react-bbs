/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import axios from "axios";

import { Comment } from "../types/comment";

export const useCommentList = () => {
  const [commentList, setCommentList] = useState<Array<Comment>>([]);
  const getCommentList = useCallback( async () => {
    try {
      const response = await axios.get<Array<Comment>>("https://jsonplaceholder.typicode.com/comments");
      setCommentList(response.data);
    } catch(error){
      alert("エラーです。");
    } finally {
      console.log(commentList);
    }
  }, []);
  return { commentList, getCommentList };
};
