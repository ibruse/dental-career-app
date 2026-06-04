import clinics from '../data/clinics';

export default function ClinicsTrivandrum() {
  return (
    <div className="content-card">
      <h2>🏥 Dental Clinics in Trivandrum, Kerala</h2>
      <p style={{ color: '#718096', marginBottom: 20 }}>
        Local clinics with contact details and current vacancy status
      </p>
      <table className="clinics-table">
        <thead>
          <tr>
            <th>Clinic Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Vacancy</th>
          </tr>
        </thead>
        <tbody>
          {clinics.map((clinic) => (
            <tr key={clinic.id}>
              <td><strong>{clinic.name}</strong></td>
              <td>{clinic.address}</td>
              <td>{clinic.phone}</td>
              <td className={clinic.vacancy === 'Yes' ? 'vacancy-yes' : 'vacancy-no'}>
                {clinic.vacancy}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
