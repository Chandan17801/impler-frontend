import React from "react";

const Form = ({ userDetails, handleChange }) => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-gray-700">First Name</label>
        <input
          type="text"
          name="firstName"
          value={userDetails.firstName}
          onChange={handleChange}
          className="border border-gray-300 rounded p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={userDetails.lastName}
          onChange={handleChange}
          className="border border-gray-300 rounded p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Address</label>
        <input
          type="text"
          name="address"
          value={userDetails.address}
          onChange={handleChange}
          className="border border-gray-300 rounded p-2 w-full"
          required
        />
      </div>
    </form>
  );
};

export default Form;
