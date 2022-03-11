/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import { Comment } from "../types/comment";
import { useCommentList } from "./useCommentList";

export const useOneCommentList = () => {
  const [ OneCommentList, setOneCommentList ] = useState<Array<Comment>>([]);
  
  const { commentList } = useCommentList();
  
  const getCommnetListById = useCallback( (articlId: number) => {
    let newArray = new Array<Comment>();
    for(let comment of commentList ){
      if( comment.postId === articlId ){
        newArray.push(comment);
      }
    }
    setOneCommentList([...newArray]);
  }, []);
  return { OneCommentList, getCommnetListById }
};
