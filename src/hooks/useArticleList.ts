/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import axios from "axios";

import { Article } from "../types/article";

export const useArticleList = () => {
  const [articleList, setArticleList] = useState<Array<Article>>([]);
  const getArticleList = useCallback( async () => {
    try {
      const response = await axios.get<Array<Article>>("https://jsonplaceholder.typicode.com/posts");
      setArticleList(response.data);
    } catch(error){
      alert("エラーです。");
    } finally {
      console.log(articleList);
    }
  }, []);
  return { articleList, getArticleList };
};
