export const formatNumber = (value) => Number(value ?? 0).toLocaleString("th-TH");

export const formatDate = (value) =>
  value
    ? new Date(value).toLocaleString("th-TH", {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : "-";

export const fullName = (user) =>
  user ? `${user.first_name} ${user.last_name}` : "ผู้ใช้ NiceTry";

// Levels are earned from the like count of a post
const LEVELS = [
  { likes: 10000, name: "ตำนาน", className: "bg-amber-100 text-amber-800" },
  { likes: 5000, name: "ดาวเด่น", className: "bg-emerald-100 text-emerald-800" },
  { likes: 1000, name: "ยอดนิยม", className: "bg-violet-100 text-violet-800" },
  { likes: 500, name: "มาแรง", className: "bg-sky-100 text-sky-800" },
  { likes: 100, name: "น่าจับตา", className: "bg-stone-200 text-stone-700" },
];

export const postLevel = (likes) => LEVELS.find((level) => likes > level.likes);
