/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import axios from "axios";

export const usePostArticle = () => {
  const postArticle = useCallback( async (title :string, body: string) => {
    console.log("クリックされました。")
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
