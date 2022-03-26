import dashboard from "../assets/svg/dashboard.svg";
import contribute from "../assets/svg/contribute.svg";
import mentor from "../assets/svg/mentor.svg";
import track from "../assets/svg/track.svg";

export const navlinks = [
  {
    text: "Dashboard",
    active: true,
    icon: dashboard,
  },
  {
    text: "Tracks",
    active: false,
    icon: track,
  },
  {
    text: "Mentoring",
    active: false,
    icon: mentor,
  },
  {
    text: "Contribute",
    active: false,
    icon: contribute,
  },
];
