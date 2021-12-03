import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Family Seanchaí</h1>
        <div
          style={{
            fontSize: 18,
          }}
        >
          <p>
            As the older generations pass on, the personal knowledge of their
            lives often passes with them. The people pictured in the old family
            photo albums become virtual strangers to the great grandchildren.
            Family Seanchaí is a cloud based website that allows families to
            store digital family pictures and videos, document the stories of
            the subjects of that media and have fun doing it.
          </p>
          <p>
            Members upload digital media to the Family Seanchaí Cloud, which
            assigns each item a sequential number. In addition, the person(s)
            and events who are the subject of each photo/video may be named. The
            media may then be organized as strings of related photos and videos,
            featuring individuals and/or events such as weddings, graduations
            etc.
          </p>
          <p>
            Audio narratives can be created addressing life stories and amusing
            anecdotes about the featured individuals or events. These narratives
            may then be assigned to run simultaneously with the related photo
            string or video, creating a show. Members enjoy viewing the narrated
            shows on their televisions through Apple TV or similar devices. In
            addition, shows may be ordered in DVD format.
          </p>

          <p>
            Registrants are assigned secure clouds for their own media storage.
            Upon authorization, the registrants can permit other members to view
            their cloud material and copy selected material to their own cloud.
            This is an important feature because instead of just having the
            pictures in your family album, members, with permission, access all
            the picture and videos of participating siblings, friends and
            cousins, etc.
          </p>
          <p>
            In short, Family Seanchaí allows families to digitize, organize,
            attach narratives and share these with relations, friends and
            posterity.
          </p>
        </div>
        <div>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="large" color="primary">
              Sign Up
            </Button>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="large" color="secondary">
              Login
            </Button>
          </Link>
          <Link to="/googlelog" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="large" color="primary">
              Continue with Google
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
}
export default Home;
