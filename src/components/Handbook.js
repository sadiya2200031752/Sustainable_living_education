import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Handbook() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage(''); // Clear any previous messages
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }

    // Simulate file upload success
    setTimeout(() => {
      setMessage('File uploaded successfully!');
    }, 1000); // Simulate a delay for the "upload"
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body text-center">
          <h1 className="card-title mb-4">Handbook</h1>
          <p>Click the link below to open the Handbook:</p>
          <a
            href="https://handbook.sefglobal.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mb-4"
          >
            Open Handbook
          </a>
          <p>By opening this link we can find about ‘Sustainable Education Foundation'.</p>

          <div className="file-upload-section">
            <h2 className="mb-3">Upload File or Image</h2>
            <form onSubmit={handleUpload} className="d-flex flex-column align-items-center">
              <div className="mb-3 w-75">
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*, application/pdf"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
            {message && <p className="alert alert-info mt-3 w-75">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Handbook;
