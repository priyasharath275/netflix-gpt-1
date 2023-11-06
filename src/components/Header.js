import React, { useEffect } from "react";
import netflix1 from "../assets/netflix.png";
import userIcon from "../assets/userIcon.png";
import { auth } from "../utils/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const user = useSelector((store) => store.user);
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img src={netflix1} alt="logo" className="w-44" />
        {user && (
          <div className="p-2 flex gap-3 items-center">
            <img
              src={user.photoURL ? user.photoURL : userIcon}
              alt="usericon"
              className="w-10 h-10"
            />
            <button className="font-bold text-white" onClick={signOutHandler}>
              Sign out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
