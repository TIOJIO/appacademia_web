
import Dashboard from "views/Dashboard.js";
import Teachers from "views/Teachers.js";
import Students from "views/Students.js";
import Attendance from "views/Attendance.js";
import Classroom from "views/Classroom.js";
import Bulletin from "views/Bulletin.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";
import LoginAdmin from "views/LoginAdmin.js";
import LoginUser from "views/LoginUser.js";
import Users from "views/Users.js";

var dashRoutes = [


  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/students",
    name: "Students",
    icon: "business_briefcase-24",
    component: Students,
    layout: "/admin",
  },

  {
    path: "/teachers",
    name: "Teachers",
    icon: "business_badge",
    component: Teachers,
    layout: "/admin",
  },
  
  {
    path: "/classroom",
    name: "Classroom",
    icon: "files_paper",
    component: Classroom,
    layout: "/admin",
  },

  {
    path: "/Users",
    name: "Users",
    icon: "files_paper",
    component: Users,
    layout: "/admin",
  },
 
  {
    path: "/bulletin",
    name: "Bulletin",
    icon: "location_map-big",
    component: Bulletin,
    layout: "/admin",
  },

  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
  },

  {
    path: "/attendance",
    name: "Attendance",
    icon: "design-2_ruler-pencil",
    component: Attendance,
    layout: "/admin",
  },
  
  {
    path: "/loginUser",
    component: LoginUser,
    
  },
  
  /*{
    pro: true,
    path: "/loginUser",
    name: "Deconnexion",
    icon: "objects_spaceship",
    component: LoginUser,
    layout: "/admin",
  },*/
];
export default dashRoutes;
