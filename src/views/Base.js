import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // apiKey: "AIzaSyAyrTv3BUpCpLYOTTR4J-1OAijO1Qwlxls",
    // authDomain: "turnip-tracker-de2a2.firebaseapp.com",
    // databaseURL: "https://turnip-tracker-de2a2.firebaseio.com",
    apiKey: "AIzaSyDz3y38kVZJdlJj57pluQInqQJH_89vCIs",
    authDomain: "catch-of-the-day-will-stone.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-will-stone.firebaseio.com",
    // apiKey: "AIzaSyCKhVSl608K9EdMHYglg9glg3OS3ZegN8M",
    // authDomain: "turnip-tracker-5b151.firebaseapp.com",
    // databaseURL: "https://turnip-tracker-5b151.firebaseio.com",
    // projectId: "catch-of-the-day-will-stone",
    // storageBucket: "catch-of-the-day-will-stone.appspot.com",
    // messagingSenderId: "324887585267",
    // appId: "1:324887585267:web:ce9ab62e9050e062757286",
    // measurementId: "G-R2VSP3CGBY"
});

// our rebase binding
const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;



// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyCKhVSl608K9EdMHYglg9glg3OS3ZegN8M",
//     authDomain: "turnip-tracker-5b151.firebaseapp.com",
//     databaseURL: "https://turnip-tracker-5b151.firebaseio.com",
//     projectId: "turnip-tracker-5b151",
//     storageBucket: "turnip-tracker-5b151.appspot.com",
//     messagingSenderId: "989418401018",
//     appId: "1:989418401018:web:ff9b3d032739a862fead43",
//     measurementId: "G-BB4HY6M2BH"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyAyrTv3BUpCpLYOTTR4J-1OAijO1Qwlxls",
//     authDomain: "turnip-tracker-de2a2.firebaseapp.com",
//     databaseURL: "https://turnip-tracker-de2a2.firebaseio.com",
//     projectId: "turnip-tracker-de2a2",
//     storageBucket: "turnip-tracker-de2a2.appspot.com",
//     messagingSenderId: "119308035676",
//     appId: "1:119308035676:web:bc2f31da56b6d87b2d6899",
//     measurementId: "G-NYMLS65C85"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>