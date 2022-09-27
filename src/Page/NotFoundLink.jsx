import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundLink = () => {
  return (
    <div>Сторінку не знайдено пройдіть до <Link to="/">Головна</Link> </div>
  )
}
