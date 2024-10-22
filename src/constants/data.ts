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

// Get today's date
const today = new Date();

// Helper function to format date as "DD MMM, YYYY"
const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { 
    day: '2-digit', 
    month: 'short', 
    year: 'numeric' 
  };
  return date.toLocaleDateString('en-GB', options);
};

// Function to get a random date based on the specified input days
const getRandomDateFromLastDays = (inputDays: number): string => {
  const today = new Date();

  let startDate: Date;
  let endDate: Date;

  // Determine the date range based on inputDays
  if (inputDays === 7) {
    // Last 7 days
    startDate = new Date(today);
    startDate.setDate(today.getDate() - 7);
    endDate = today;
  } else if (inputDays === 15) {
    // Last 15 days, neglecting the last 7 days
    startDate = new Date(today);
    startDate.setDate(today.getDate() - 15);
    endDate = new Date(today);
    endDate.setDate(endDate.getDate() - 7);
  } else if (inputDays === 30) {
    // Last 30 days, neglecting the last 15 days
    startDate = new Date(today);
    startDate.setDate(today.getDate() - 30);
    endDate = new Date(today);
    endDate.setDate(endDate.getDate() - 15);
  } else {
    throw new Error("Invalid input days. Only 7, 15, or 30 are allowed.");
  }

  // Generate a random date between startDate and endDate
  const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
  const randomDate = new Date(randomTime);

  // Format and return the random date as "DD MMM, YYYY"
  return formatDate(randomDate);
};




export const userListingDummyData: userListingDummyDataTypes[] = [
  {
    image: USERIMAGE_1,
    name: "Jane Doe",
    date: '22 Oct, 2024',
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
    date: '15 Oct, 2024', // last 15 days
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
    date: '4 Oct, 2024', // last 30 days
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
    date: '21 Oct, 2024', // last 7 days
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
    date: '14 Oct, 2024', // last 15 days
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
    date: '5 Oct, 2024', // last 30 days
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
    date: '20 Oct, 2024', // last 7 days
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
    date: '13 Oct, 2024', // last 15 days
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
    date: '6 Oct, 2024', // last 30 days
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
    date: '19 Oct, 2024', // last 7 days
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


export const daysList: number[] = [7, 15, 30, 100];