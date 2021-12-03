import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
function Dashboard() {
  return (
    <div className="Dashboard">
      <div>
        <header className="App-header">
          Dashboard
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
export default Dashboard;
