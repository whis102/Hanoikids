import "./Checkout.scss";

export default function Checkout({ formData }) {
  return (
    <div className="checkout-details">
      <h2>Booking Details</h2>
      <p>
        <strong>Hotel Name:</strong> {formData.hotelName}
      </p>
      <p>
        <strong>Hotel Address:</strong> {formData.hotelAddress}
      </p>
      <p>
        <strong>Tour Option:</strong> {formData.tourOption}
      </p>
      <p>
        <strong>Date:</strong> {formData.date}
      </p>
      <p>
        <strong>Starting Time:</strong> {formData.startingTime}
      </p>
      <p>
        <strong>Participants:</strong> {formData.participants}
      </p>

      <h2>Personal Details</h2>
      <p>
        <strong>Full Name:</strong> {formData.fullName}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>
        <strong>Date of Birth:</strong> {formData.dob}
      </p>
      <p>
        <strong>Gender:</strong> {formData.gender}
      </p>
      <p>
        <strong>Passport Number:</strong> {formData.passportNumber}
      </p>
    </div>
  );
}
