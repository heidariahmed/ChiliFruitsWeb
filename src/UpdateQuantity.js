import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './updateQuantity.css';

function UpdateQuantity() {
  const [chiliFruitsList, setChiliFruitsList] = useState([]);
  const { chiliFruitId } = useParams();

  const [selectedChiliFruit, setSelectedChiliFruit] = useState(null);
  const [newQuantity, setNewQuantity] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/api/chilifruits')
      .then(response => response.json())
      .then(data => {
        setChiliFruitsList(data);
        const selected = data.find(fruit => fruit.id === parseInt(chiliFruitId));
        setSelectedChiliFruit(selected);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [chiliFruitId]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedChiliFruit) {
      setError('Please select a chili fruit');
      return;
    }

    // const updatedQuantity = Math.max(parseInt(newQuantity), 0);
    
    if (selectedChiliFruit && newQuantity >= 0) {
        const updatedQuantity = Math.max(parseInt(newQuantity), 0);
    
        const response = await fetch(`http://localhost:8080/api/chilifruits/${selectedChiliFruit.id}/updateQuantity`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedQuantity),
        });
    
        if (response.ok) {
          setSuccess(true);
          setError(null);
        } else {
          setSuccess(false);
          setError('Error updating quantity. Please try again.');
        }
      } else {
        setError('Please select a valid chili fruit and enter a positive quantity.');
      }
    };

  return (
    <div className="update-quantity-container">
        <h2 className="update-quantity-heading"> Update Quantity for {selectedChiliFruit ? selectedChiliFruit.name : '...'}
        </h2>
      <form onSubmit={handleSubmit} className="update-form">
      <label className="form-label">Select Chili Fruit:
          <select value={selectedChiliFruit ? selectedChiliFruit.id : ''}
          onChange={(e) => setSelectedChiliFruit(chiliFruitsList.find(fruit => fruit.id === parseInt(e.target.value)))}
          className="select-dropdown">
          <option value="">Select...</option>
          {chiliFruitsList.map(fruit => (
          <option key={fruit.id} value={fruit.id}>{fruit.name}</option>
           ))}
         </select>
      </label>
      <label className="form-label" style={{marginLeft:'20px'}}>
          New Quantity:
          <input
            type="number"
            value={newQuantity}
            onChange={(e) => setNewQuantity(e.target.value)}
            className="quantity-input"
            min="0"
            step="1"  
          />
        </label>
        <button type="submit" className="submit-button" style={{ margin: '10px' }}>Update Quantity</button>
      </form>
      {success && <div className="success-message">Quantity updated successfully!</div>}
      {error && <div className="error-message">{error}</div>}
      <Link className='backlink' to="/">Back to Chili Fruit List</Link>
    </div>
  );
}

export default UpdateQuantity;
