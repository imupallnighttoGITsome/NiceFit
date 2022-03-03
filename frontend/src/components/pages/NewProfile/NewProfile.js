import { Form, Button, Image } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../layout/Layout/Layout.css";
import "./NewProfile.css";

const NewProfile = () => {
  const newProfile = {
    firstName: "",
    lastName: "",
    profilePic: "",
    email: "",
    userName: "",
    height: "",
    bust: "",
    waist: "",
    hips: "",
    shoeSize: "",
  };
  const [profile, setProfile] = useState(newProfile);

  const newProfileHandler = (event) => {
    setProfile({ ...profile, [event.target.id]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(profile);
    setProfile(newProfile);
  };

  return (
    <>
  
    <div className="form-style">
      <Form onSubmit={submitHandler}>
        <Form.Label>Add Profile Image:</Form.Label>
        <br />
        <Image src="../../../../Images/Avatar.jpg" className="profile-pic" />
        <br />
        <input
          type="text"
          placeholder="FIRST NAME"
          id="firstName"
          onChange={newProfileHandler}
          value={profile.firstName}
        />
        <br />
        <input
          type="text"
          placeholder="LAST NAME"
          id="lastName"
          onChange={newProfileHandler}
          value={profile.lastName}
        />
        <br />
        <input
          type="text"
          placeholder="EMAIL"
          id="email"
          onChange={newProfileHandler}
          value={profile.email}
        />
        <br />
        <input
          type="text"
          placeholder="USERNAME"
          id="userName"
          onChange={newProfileHandler}
          value={profile.userName}
        />
        <br />
        <Form.Label>Measurements:</Form.Label>
        <br />
        <div className="measurements">
          <input
            type="text"
            placeholder="HEIGHT"
            id="height"
            onChange={newProfileHandler}
            value={profile.height}
          />
          <input
            type="text"
            placeholder="BUST *inches"
            id="bust"
            onChange={newProfileHandler}
            value={profile.bust}
          />
          <input
            type="text"
            placeholder="WAIST *inches"
            id="waist"
            onChange={newProfileHandler}
            value={profile.waist}
          />
          <input
            type="text"
            placeholder="HIPS *inches"
            id="hips"
            onChange={newProfileHandler}
            value={profile.hips}
          />
          <input
            type="text"
            placeholder="SHOE SIZE"
            id="shoeSize"
            onChange={newProfileHandler}
            value={profile.shoeSize}
          />
        </div>
        <br />
        <Button type="submit" ><Link to='/nicefit/profile'/>CREATE PROFILE</Button>
      </Form>
    </div>
    </>
  );
};

export default NewProfile;
