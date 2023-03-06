import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersDetails, createUs } from "../../Redux/actions.js";
import { useAuth0 } from "@auth0/auth0-react";


export default function UserProfile() {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const email = user?.email;



  useEffect(() => {
    dispatch(getUsersDetails(user.email));
    user && dispatch(createUs(user));
  }, []);


  return (
    isAuthenticated && (
      <>
        <img
          id="avatarButton"
          type="button"
          data-dropdown-toggle="userDropdown"
          data-dropdown-placement="bottom-start"
          class="w-10 h-10 rounded-full cursor-pointer"
          src={user.picture}
          alt="User dropdown"
        />

        <div
          id="userDropdown"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{user.name}</div>
            <div class="font-medium truncate">{email}</div>
          </div>
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="avatarButton"
          >
            <li>
              <a
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
          </ul>
          <div class="py-1">
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
      </>
    )
  );
}
