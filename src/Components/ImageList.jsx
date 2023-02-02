import React from 'react'
import './ImageList.css'
import ImageShow from './ImageShow'

const ImageList = ({images}) => {
  const renderedImages = images.map((image)=>{
    return <ImageShow key={image.id} image={image} />
  })
  return (
    <div>
      <div className="image-list">{renderedImages}</div>
     
    </div>
  )
}

export default ImageList
