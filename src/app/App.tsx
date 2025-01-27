import React from "react";
import { User as FirebaseUser } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  CMSApp,
  buildCollection,
  buildProperty,
} from "@firecms/core";
import "typeface-rubik";
import "@fontsource/ibm-plex-mono";

const firebaseConfig = {
  apiKey: "AIzaSyBVe2dFOYBVb52esZYaQIYcr7TqDyV6XEM",
  authDomain: "auth-app-aguakmzero.firebaseapp.com",
  projectId: "auth-app-aguakmzero",
  storageBucket: "auth-app-aguakmzero.firebasestorage.app",
  messagingSenderId: "413304596126",
  appId: "1:413304596126:web:4c7e55159fe8436d32fd8f"
};

initializeApp(firebaseConfig);

type Roles = {
  name: string;
};

type Users = {
  email: string;
  name: { first: string; last: string };
  role: string;
};

const rolesCollection = buildCollection<Roles>({
  id: "roles",
  name: "Roles",
  path: "roles",
  properties: {
    name: buildProperty({ dataType: "string", name: "Name" })
  }
});

const usersCollection = buildCollection<Users>({
  id: "users",
  name: "Users",
  path: "users",
  properties: {
    email: buildProperty({ dataType: "string", name: "Email" }),
    name: buildProperty({
      dataType: "map",
      name: "Name",
      properties: {
        first: buildProperty({ dataType: "string", name: "First Name" }),
        last: buildProperty({ dataType: "string", name: "Last Name" })
      }
    }),
    role: buildProperty({ dataType: "string", name: "Role" })
  }
});

const myAuthenticator = async (user: FirebaseUser | null): Promise<boolean> => {
  if (!user) return false;
  return true;
};

export default function App() {
  return (
    <CMSApp
      name={"DMS"}
      authentication={myAuthenticator}
      collections={[rolesCollection, usersCollection]}
      firebaseConfig={firebaseConfig}
      secondaryColor="#152438"
      primaryColor="#63cb83"
      signInOptions={["password"]}
    />
  );
}
