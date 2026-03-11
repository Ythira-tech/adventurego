import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import './AdminBookings.css';

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const data = await api.get('/bookings');
      setBookings(data.bookings || []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (id, status) => {
    try {
      await api.patch(`/bookings/${id}/status`, { status });
      fetchBookings(); // Refresh the list
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  if (loading) return <div className="loading">Loading bookings...</div>;

  return (
    <div className="admin-bookings">
      <h1>Bookings Management</h1>
      
      <div className="table-responsive">
        <table className="bookings-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Destination</th>
              <th>Travel Date</th>
              <th>Travelers</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking._id}>
                <td>
                  {booking.firstName} {booking.lastName}<br />
                  <small>{booking.email}</small>
                </td>
                <td>{booking.destination}</td>
                <td>{booking.travelDate}</td>
                <td>{booking.numberOfAdults} A, {booking.numberOfChildren} C</td>
                <td>${booking.totalPrice}</td>
                <td>
                  <span className={`status-badge ${booking.status}`}>
                    {booking.status}
                  </span>
                </td>
                <td>
                  <select 
                    onChange={(e) => updateBookingStatus(booking._id, e.target.value)}
                    value={booking.status}
                    className="status-select"
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBookings;