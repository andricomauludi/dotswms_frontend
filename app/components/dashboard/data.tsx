import React from "react";
const columns = [
  { name: "ITEM", uid: "item" },
  { name: "POSTING SCHEDULE", uid: "postingschedule" },
  { name: "POSTING TIME", uid: "postingtime" },
  { name: "LEAD", uid: "lead" },
  { name: "CONTENT CATEGORY", uid: "contentcategory" },
  { name: "CONTENT TEXT LINK", uid: "contenttextlink" },
  { name: "CONTENT TEXT", uid: "contenttext" },
  { name: "CONTENT POSTING", uid: "contentposting" },
  { name: "POSTING CAPTION", uid: "postingcaption" },
  { name: "INSTAGRAM POSTING STATUS", uid: "instagrampostingstatus" },
  { name: "TIKTOK POSTING STATUS", uid: "tiktokpostingstatus" },
  { name: "LAST UPDATED", uid: "lastupdated" },  
  { name: "ACTIONS", uid: "actions" },
];


const users = [
  {
    id: 1,
    lead: "Tony Reichert",               
    avatar: "profil_gilbran.jpg",
    email: "tony.reichert@example.com",
    item: "Video cara masak nashville",
    postingschedule: "7 Nov",
    postingtime: "19:00",
    contentcategory: "reels",
    contenttextlink: "www.google.com",
    contenttext: "TEXT FILE",
    contentposting: "file yang akan diposting",
    postingcaption: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    instagrampostingstatus: "posted",
    tiktokpostingstatus: "posted",
    lastupdated: "Gilbran",
  },
  {
    id: 2,
    lead: "Zoey Lang",             
    avatar: "profil_gilbran.jpg",
    email: "zoey.lang@example.com",
    item: "Video cara masak nashville",
    postingschedule: "7 Nov",
    postingtime: "19:00",
    contentcategory: "tiktok",
    contenttextlink: "www.google.com",
    contenttext: "TEXT FILE",
    contentposting: "file yang akan diposting",
    postingcaption: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    instagrampostingstatus: "on hold",
    tiktokpostingstatus: "on hold",
    lastupdated: "Gilbran",
  },
  {
    id: 3,
    lead: "Jane Fisher",              
    avatar: "profil_gilbran.jpg",
    email: "jane.fisher@example.com",
    item: "Video cara masak nashville",
    postingschedule: "7 Nov",
    postingtime: "19:00",
    contentcategory: "design",
    contenttextlink: "www.google.com",
    contenttext: "TEXT FILE",
    contentposting: "file yang akan diposting",
    postingcaption: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    instagrampostingstatus: "not yet posted",
    tiktokpostingstatus: "not yet posted",
    lastupdated: "Gilbran",
  },
  {
    id: 4,
    lead: "William Howard",            
    avatar: "profil_ico.png",
    email: "william.howard@example.com",
    item: "Video cara masak nashville",
    postingschedule: "7 Nov",
    postingtime: "19:00",
    contentcategory: "photo",
    contenttextlink: "www.google.com",
    contenttext: "TEXT FILE",
    contentposting: "file yang akan diposting",
    postingcaption: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    instagrampostingstatus: "on preview",
    tiktokpostingstatus: "on preview",
    lastupdated: "Gilbran",
  },
  {
    id: 5,
    lead: "Kristen Copper",            
    avatar: "profil_ico.png",
    email: "kristen.cooper@example.com",
    item: "Video cara masak nashville",
    postingschedule: "7 Nov",
    postingtime: "19:00",
    contentcategory: "education",
    contenttextlink: "www.google.com",
    contenttext: "TEXT FILE",
    contentposting: "file yang akan diposting",
    postingcaption: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    instagrampostingstatus: "posted",
    tiktokpostingstatus: "posted",
    lastupdated: "Gilbran",
  },
];

export { columns, users };
