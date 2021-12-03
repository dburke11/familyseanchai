import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
function Googlelog() {
  return (
    <div className="Googlelog">
      <div>
        <header className="App-header">
          Google Auth
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="large" color="primary">
              Return Home
            </Button>
          </Link>
        </header>
      </div>
    </div>
  );
}
export default Googlelog;
