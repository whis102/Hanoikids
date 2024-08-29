import Nhoc from "../assets/nhoc-ct.webp";
import Vie from "../assets/vie-pct.webp";

const leaders = [
  {
    category: "About Partnership: ",
    description: "For partnership, please contact our Leaderboard",
    department: "President & Vice President",
    contacts: [
      "Ms. Thu Phuong: (+84) 123 123 123",
      "Mr. Quoc Dung: (+84) 123 123 123",
    ],
    email: "leaderboard.hnks@gmail.com",
    members: [
      {
        name: "Hoang Thi Minh Ngoc",
        image: Nhoc,
        title: "President",
      },
      {
        name: "Le Mai Linh",
        image: Vie,
        title: "Vice President",
      },
    ],
  },
  {
    category: "About Tours: ",
    description:
      "For tour-related questions, please contact our Tour Operators",
    department: "Tour Operation Department",
    contacts: [
      "Mr. Truong Son: (+84) 123 123 123",
      "Ms. Thao My: (+84) 123 123 123",
    ],
    email: "hanoikidsvn@gmail.com",
    members: [
      {
        name: "Le Thi Hanh Nguyen",
        image: Vie,
        title: "Head of Tour Operation Dept.",
      },
      {
        name: "Nguyen Chi Cong",
        image: Vie,
        title: "Deputy Head of Tour Operation Dept.",
      },
    ],
  },
];

export default leaders;
