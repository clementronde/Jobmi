import React from 'react'
import { Pagination } from './Pagination'
import { ArticleGrid } from './ArticleGrid'


export const CardList = ({ articles }) => {


  return (
    <div>
      <ArticleGrid articles={articles} />
    </div>
  )
}
