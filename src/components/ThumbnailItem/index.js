// Write your code here.

const ThumbnailItem = props => {
  const {photosList, onChange} = props
  const {thumbnailAltText, thumbnailUrl, id, imageUrl} = photosList

  const changeImage = () => {
    onChange(id, imageUrl)
  }

  return (
    <li>
      <button type="button" className="button" onClick={changeImage}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className="image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
