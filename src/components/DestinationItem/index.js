// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li className="des-card">
      <img src={imgUrl} alt={name} className="des-image" />
      <p className="des-name">{name}</p>
    </li>
  )
}

export default DestinationItem
