/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import axios from "axios";

export const useCommentList = () => {
  const postArticle = useCallback( async (title :string, body: string) => {
    try{
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts",{
        title: title,
        body: body,
        userId: 1
      });
      console.log(response.data);
    }catch(error){
      alert("ログインできませんでした。")
    }finally{
      console.log("ファイナリー");
    }
  }, []);
  return { postArticle }
};
