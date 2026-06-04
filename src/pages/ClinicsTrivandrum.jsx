import clinics from '../data/clinics';

export default function ClinicsTrivandrum() {
  return (
    <div>
      <h2>Dental Clinics in Trivandrum, Kerala</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
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
              <td>{clinic.name}</td>
              <td>{clinic.address}</td>
              <td>{clinic.phone}</td>
              <td style={{ color: clinic.vacancy === 'Yes' ? 'green' : 'red' }}>
                {clinic.vacancy}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
