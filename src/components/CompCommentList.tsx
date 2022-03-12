/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { useOneCommentList } from "../hooks/useOneCommnetList";

type Props = {
  articleId: number;
}

export const CommentList: FC<Props> = (props) => {
  const { articleId } =props;
  const { OneCommentList, getCommnetListById } = useOneCommentList();
  
  useEffect(() => {
    getCommnetListById(articleId);
  }, [])

  return (
    <>
      {OneCommentList.map((comment) => (
        <div key={comment.id}>
          <p>{comment.name}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </>
  );
};
