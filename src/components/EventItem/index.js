import './index.css'

const EventItem = props => {
  const {eventDetails, selectEvent} = props
  const {id, name, imageUrl, location} = eventDetails
  let selectId

  const onClickEvent = () => {
    selectEvent(id)
    selectId = id
  }

  const selectOutline = selectId === id ? 'img-btn selected-img' : 'img-btn'

  return (
    <li className="event-item">
      <button type="button" className={selectOutline} onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p className="card-heading">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
