# One

* run `npm install firebase`
* run `mpm run dev`
* Go to firebase console:
    * create project
    * add authentication
    * enable userid/password
    * copy config
* create firebase.js with firebase config
* add import { getAuth }, export const auth
* To `page/Login`:
    * add imports of "firebase/auth" and "../firebase"
    * add onLongin funtion
    * add onClick to the button
* To `page/Signup`:
    * add imports
    * add onSubmit function
    * add onClick to button
* To `page/Home`:
    * add imports
    * add const navigate
    * add useEffect
    * add handleLogout
    * add logout button
* navigate to /, /x
