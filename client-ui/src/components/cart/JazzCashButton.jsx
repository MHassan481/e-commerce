import React, { useState } from "react";
import axios from "axios";
import JazzCashForm from "../components/JazzCashForm.jsx";

const Checkout = () => {
  const [formData, setFormData] = useState(null);
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/jazzcash/initiate", {
        amount,
      });
      setFormData(res.data);
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to initiate payment");
    }
  };

  if (formData) {
    return <JazzCashForm actionURL={formData.actionURL} data={formData.data} />;
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h2 className="text-xl font-bold">JazzCash Payment</h2>
      <input
        type="number"
        placeholder="Enter amount (PKR)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <button
        onClick={handlePayment}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Pay with JazzCash
      </button>
    </div>
  );
};

export default Checkout;
