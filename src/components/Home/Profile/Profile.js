import './Profile.scss';
import mdek from "../../../assets/images/mdek.png";


const Profile = () => {
  return (
    <div className="profile-container">
      <div className="image-wrapper">
        <img src={mdek} alt="M" className="profile" />
      </div>
    </div>
  );
}

export default Profile;