import { USERIMAGE_1, USERIMAGE_10, USERIMAGE_2, USERIMAGE_3, USERIMAGE_4, USERIMAGE_5, USERIMAGE_6, USERIMAGE_7, USERIMAGE_8, USERIMAGE_9 } from "./image";

export interface userListingDummyDataTypes {
  name: string;
  image: string;
  date: string;
  email: string;
  source: string;
  type: string;
  status: string;
  tags: string[];
  performance: {
    [key: string]: number;
  };
  totalInvites: {
    [key: string]: number;
  };
  totalCalls: {
    [key: string]: number;
  };
  totalChats: {
    [key: string]: number;
  };
}

export const userListingDummyData: userListingDummyDataTypes[] = [
  {
    image: USERIMAGE_1,
    name: "Jane Doe",
    date: "31 Jan, 2024",
    email: "janedoe@example.com",
    source: "direct",
    type: "user",
    status: "in progress",
    tags: ["sales", "product info", "customer", "interested"],
    performance: {
      positive: 100,
      negative: 50,
    },
    totalInvites: {
      sent: 200,
      accepted: 50,
    },
    totalCalls: {
      incoming: 500,
      outgoing: 300,
      missedCall: 40,
    },
    totalChats: {
      sent: 460,
      received: 230,
      notReceived: 45,
    },
  },
  {
    image: USERIMAGE_2,
    name: "John Smith",
    date: "15 Feb, 2024",
    email: "johnsmith@example.com",
    source: "referral",
    type: "admin",
    status: "completed",
    tags: ["sales", "product info", "customer", "interested"],
    performance: {
      positive: 120,
      negative: 30,
    },
    totalInvites: {
      sent: 250,
      accepted: 100,
    },
    totalCalls: {
      incoming: 600,
      outgoing: 400,
      missedCall: 30,
    },
    totalChats: {
      sent: 520,
      received: 270,
      notReceived: 20,
    },
  },
  {
    image: USERIMAGE_3,
    name: "Alice Johnson",
    date: "10 Mar, 2024",
    email: "alicej@example.com",
    source: "social media",
    type: "user",
    status: "in progress",
    tags: ["sales", "product info", "customer", "interested"],
    performance: {
      positive: 90,
      negative: 40,
    },
    totalInvites: {
      sent: 180,
      accepted: 60,
    },
    totalCalls: {
      incoming: 450,
      outgoing: 350,
      missedCall: 20,
    },
    totalChats: {
      sent: 410,
      received: 200,
      notReceived: 15,
    },
  },
  {
    image: USERIMAGE_4,
    name: "Michael Lee",
    date: "28 Feb, 2024",
    email: "mlee@example.com",
    source: "email campaign",
    type: "user",
    status: "completed",
    tags: ["sales", "product info", "customer", "interested"],
    performance: {
      positive: 130,
      negative: 20,
    },
    totalInvites: {
      sent: 300,
      accepted: 120,
    },
    totalCalls: {
      incoming: 700,
      outgoing: 500,
      missedCall: 60,
    },
    totalChats: {
      sent: 640,
      received: 310,
      notReceived: 30,
    },
  },
  {
    image: USERIMAGE_5,
    name: "Emily Davis",
    date: "20 Mar, 2024",
    email: "edavis@example.com",
    source: "direct",
    type: "admin",
    status: "pending",
    tags: ["sales", "product info", "customer", "interested"],
    performance: {
      positive: 110,
      negative: 25,
    },
    totalInvites: {
      sent: 220,
      accepted: 90,
    },
    totalCalls: {
      incoming: 520,
      outgoing: 380,
      missedCall: 45,
    },
    totalChats: {
      sent: 500,
      received: 260,
      notReceived: 25,
    },
  },
  {
    image: USERIMAGE_6,
    name: "Sophia Martinez",
    date: "02 Apr, 2024",
    email: "smartinez@example.com",
    source: "referral",
    type: "user",
    status: "in progress",
    tags: ["sales", "product info", "customer", "interested"],
    performance: {
      positive: 140,
      negative: 50,
    },
    totalInvites: {
      sent: 280,
      accepted: 110,
    },
    totalCalls: {
      incoming: 620,
      outgoing: 420,
      missedCall: 35,
    },
    totalChats: {
      sent: 550,
      received: 300,
      notReceived: 40,
    },
  },
  {
    image: USERIMAGE_7,
    name: "David Wilson",
    date: "12 Apr, 2024",
    email: "dwilson@example.com",
    source: "social media",
    type: "user",
    status: "completed",
    tags: ["sales", "product info", "customer", "interested"],
    performance: {
      positive: 160,
      negative: 10,
    },
    totalInvites: {
      sent: 330,
      accepted: 140,
    },
    totalCalls: {
      incoming: 750,
      outgoing: 480,
      missedCall: 20,
    },
    totalChats: {
      sent: 670,
      received: 350,
      notReceived: 15,
    },
  },
  {
    image: USERIMAGE_8,
    name: "Oliver Brown",
    date: "01 May, 2024",
    email: "obrown@example.com",
    source: "direct",
    type: "admin",
    status: "pending",
    tags: ["sales", "product info", "customer", "interested"],
    performance: {
      positive: 170,
      negative: 15,
    },
    totalInvites: {
      sent: 400,
      accepted: 200,
    },
    totalCalls: {
      incoming: 800,
      outgoing: 550,
      missedCall: 50,
    },
    totalChats: {
      sent: 720,
      received: 390,
      notReceived: 35,
    },
  },
  {
    image: USERIMAGE_9,
    name: "Lily White",
    date: "15 May, 2024",
    email: "lwhite@example.com",
    source: "email campaign",
    type: "user",
    status: "in progress",
    tags: ["sales", "product info", "customer", "interested"],
    performance: {
      positive: 105,
      negative: 45,
    },
    totalInvites: {
      sent: 240,
      accepted: 80,
    },
    totalCalls: {
      incoming: 580,
      outgoing: 400,
      missedCall: 30,
    },
    totalChats: {
      sent: 490,
      received: 270,
      notReceived: 20,
    },
  }, 
  {
    image: USERIMAGE_10,
    name: "Grace Hall",
    date: "10 Jun, 2024",
    email: "ghall@example.com",
    source: "social media",
    type: "user",
    status: "in progress",
    tags: ["sales", "product info", "customer", "interested"],
    performance: {
      positive: 135,
      negative: 60,
    },
    totalInvites: {
      sent: 210,
      accepted: 70,
    },
    totalCalls: {
      incoming: 490,
      outgoing: 310,
      missedCall: 55,
    },
    totalChats: {
      sent: 460,
      received: 230,
      notReceived: 35,
    },
  }
];

export const daysList: string[] = ["7", "15", "30"];