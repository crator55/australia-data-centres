function FacilityPopup({ location }) {
  return (
    <div className="popup">
      <h2>{location.company}</h2>

      <p>
        <strong>Facility:</strong> {location.facility}
      </p>

      <p>
        <strong>Location:</strong> {location.location}
      </p>

      <p>
        <strong>Address:</strong> {location.address}
      </p>

      <p>
        <strong>Power Capacity:</strong> {location.powerCapacityMW} MW
      </p>

      <p>
        <strong>Status:</strong> {location.status}
      </p>

      <p>
        <strong>Notes:</strong>
      </p>

      <p>{location.notes}</p>
    </div>
  );
}

export default FacilityPopup;