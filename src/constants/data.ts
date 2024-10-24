import {
  USERIMAGE_1,
  USERIMAGE_10,
  USERIMAGE_2,
  USERIMAGE_3,
  USERIMAGE_4,
  USERIMAGE_5,
  USERIMAGE_6,
  USERIMAGE_7,
  USERIMAGE_8,
  USERIMAGE_9,
} from "./image";

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
    date: "22 Oct, 2024",
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
      incoming: 50,
      outgoing: 30,
      missedCall: 4,
    },
    totalChats: {
      sent: 46,
      received: 23,
      notReceived: 4,
    },
  },
  {
    image: USERIMAGE_2,
    name: "John Smith",
    date: "15 Oct, 2024", // last 15 days
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
      incoming: 60,
      outgoing: 40,
      missedCall: 3,
    },
    totalChats: {
      sent: 52,
      received: 27,
      notReceived: 2,
    },
  },
  {
    image: USERIMAGE_3,
    name: "Alice Johnson",
    date: "4 Oct, 2024", // last 30 days
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
      incoming: 45,
      outgoing: 35,
      missedCall: 2,
    },
    totalChats: {
      sent: 41,
      received: 20,
      notReceived: 1,
    },
  },
  {
    image: USERIMAGE_4,
    name: "Michael Lee",
    date: "21 Oct, 2024", // last 7 days
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
      incoming: 70,
      outgoing: 50,
      missedCall: 6,
    },
    totalChats: {
      sent: 64,
      received: 31,
      notReceived: 3,
    },
  },
  {
    image: USERIMAGE_5,
    name: "Emily Davis",
    date: "14 Oct, 2024", // last 15 days
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
      incoming: 52,
      outgoing: 38,
      missedCall: 4,
    },
    totalChats: {
      sent: 50,
      received: 26,
      notReceived: 2,
    },
  },
  {
    image: USERIMAGE_6,
    name: "Sophia Martinez",
    date: "5 Oct, 2024", // last 30 days
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
      incoming: 62,
      outgoing: 42,
      missedCall: 3,
    },
    totalChats: {
      sent: 55,
      received: 30,
      notReceived: 4,
    },
  },

  {
    image: USERIMAGE_7,
    name: "David Wilson",
    date: "20 Oct, 2024", // last 7 days
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
      incoming: 75,
      outgoing: 48,
      missedCall: 2,
    },
    totalChats: {
      sent: 67,
      received: 35,
      notReceived: 1,
    },
  },
  {
    image: USERIMAGE_8,
    name: "Oliver Brown",
    date: "13 Oct, 2024", // last 15 days
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
      incoming: 80,
      outgoing: 55,
      missedCall: 5,
    },
    totalChats: {
      sent: 70,
      received: 39,
      notReceived: 3,
    },
  },
  {
    image: USERIMAGE_9,
    name: "Lily White",
    date: "6 Oct, 2024", // last 30 days
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
      incoming: 58,
      outgoing: 40,
      missedCall: 3,
    },
    totalChats: {
      sent: 49,
      received: 27,
      notReceived: 2,
    },
  },
  {
    image: USERIMAGE_10,
    name: "Grace Hall",
    date: "19 Oct, 2024", // last 7 days
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
      incoming: 49,
      outgoing: 31,
      missedCall: 5,
    },
    totalChats: {
      sent: 46,
      received: 23,
      notReceived: 3,
    },
  },
];

export const daysList: number[] = [7, 15, 30, 100];
