import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  bookCardContainer: {
    width: '90%',
    'background-color': 'beige',
    outline: 'black 1px solid',
    margin: '5px',
    padding: '5px'
  }
}))

export const BookCard = ({ book }) => {
  const classes = useStyles()
  const unavailable = 'information Unavailable'

  return (
    <div className={classes.bookCardContainer}>
      <div className="title">Title: {book.title || unavailable}</div>
      <div className="author">author: {JSON.stringify(book?.authors[0]?.name)}</div>
    </div>
  )
}
