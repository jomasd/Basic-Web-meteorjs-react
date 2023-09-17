import React, { useState } from 'react';
import DashboardNavbar from './DashboardNavbar';
// Mock Data
const mockData = [
  {
    id: 1,
    title: "Total Visitors",
    value: 1200,
    isVisible: true,
  },
  {
    id: 2,
    title: "Total Sales",
    value: "$5000",
    isVisible: true,
  },
  {
    id: 3,
    title: "New Subscribers",
    value: 25,
    isVisible: true,
  },
  // Add more fields as needed
];

const Dashboard = () => {
  const [fields, setFields] = useState(mockData);

  const toggleField = (id) => {
    const newFields = fields.map((field) => {
      if (field.id === id) {
        return { ...field, isVisible: !field.isVisible };
      }
      return field;
    });
    setFields(newFields);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <DashboardNavbar />
      {/* Dynamic Fields */}
      <div className="dashboard-fields">
        {fields.map((field) => field.isVisible && (
          <div key={field.id} className="dashboard-field">
            <h2>{field.title}</h2>
            <p>{field.value}</p>
          </div>
        ))}
      </div>

      {/* Field Customization */}
      <div className="field-customization">
        <h2>Customize Fields</h2>
        {fields.map((field) => (
          <div key={field.id}>
            <label>
              <input
                type="checkbox"
                checked={field.isVisible}
                onChange={() => toggleField(field.id)}
              />
              {field.title}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
