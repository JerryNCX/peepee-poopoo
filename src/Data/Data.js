
// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";
  
  // Analytics Cards imports
  import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

  
  // Recent Card Imports
  import img1 from "../assets/MyImage/1801287.svg";
  import img2 from "../assets/MyImage/1801287.svg";
  import img3 from "../assets/MyImage/1801287.svg";
  
  // Sidebar Data
  // Data.jsx
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    id: "dashboard", // Add an ID for each section
  },
  {
    icon: UilClipboardAlt,
    heading: "Calculation",
    id: "calculation", 
  },
  {
    icon: UilUsersAlt,
    heading: "Data",
    id: "data", 
  },
  {
    icon: UilPackage,
    heading: 'Notification',
    id: "Notification",
  },
  {
    icon: UilChart,
    heading: 'Invoice',
    id: "Invoice",
  },
];
  
  // Analytics Cards Data
  export const cardsData = [
    {
      title: "Customer Satisfaction (%)",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "70%",
      png: UilUsdSquare,
      series: [
        {
          name: "Satisfaction",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Total Services Delivered",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "14,270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Services",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    }
  ];

  
  // Recent Update Card Data
  export const UpdatesData = [
    {
      img: img1,
      name: "Andrew Thomas",
      noti: "The verification is pending.",
      time: "25 seconds ago",
    },
    {
      img: img2,
      name: "James Bond",
      noti: "Received car.",
      time: "30 minutes ago",
    },
    {
      img: img3,
      name: "Iron Man",
      noti: "Pending invoices.",
      time: "2 hours ago",
    },
  ];
  