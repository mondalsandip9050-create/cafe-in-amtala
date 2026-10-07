// Editable business content for Wildbean Café | Amtala
export const cafe = {
  name: "Wildbean Café | Amtala",
  nameBn: "ওয়াইল্ডবিন ক্যাফে | আমতলা",
  tagline: "Coffee. Food. A Better Stop.",
  phone: "062914 34742",
  phoneHref: "tel:+916291434742",
  whatsapp: "https://wa.me/916291434742?text=Hi%20Wildbean%20Caf%C3%A9%20Amtala!",
  address1: "978H+Q3 Amtala, Kriparampur, West Bengal",
  address2: "648, 649, Plot No. 651, JL No. 2, West Bengal 743503",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Wildbean+Cafe+978H%2BQ3+Amtala+West+Bengal",
  mapsEmbed: "https://www.google.com/maps?q=978H%2BQ3+Amtala,+Kriparampur,+West+Bengal&output=embed",
  hours: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((d) => ({
    day: d,
    time: "06:00 AM – 10:00 PM",
  })),
};

export type MenuItem = { name: string; desc: string; price: string; size?: string };

export const menu: Record<string, MenuItem[]> = {
  "Hot Coffees": [
    { name: "Espresso", desc: "A concentrated form of coffee served in small, strong shots.", price: "₹85", size: "65ml" },
    { name: "Filter Coffee", desc: "Traditional South Indian filter coffee.", price: "₹50 / ₹85", size: "140 / 220ml" },
    { name: "Americano", desc: "An espresso diluted with hot water.", price: "₹100", size: "220ml" },
    { name: "Cappuccino", desc: "Espresso and hot milk, topped with foamed milk.", price: "₹110 / ₹125", size: "220 / 320ml" },
    { name: "Latte", desc: "Espresso with steamed milk for a subtler coffee taste.", price: "₹110 / ₹130", size: "220 / 320ml" },
    { name: "Mocha", desc: "A chocolate-flavoured warm variant of a café latte.", price: "₹135 / ₹155", size: "220 / 320ml" },
    { name: "Hot Chocolate", desc: "Thick beverage of melted chocolate blended with milk.", price: "₹135 / ₹160", size: "220 / 320ml" },
  ],
  "Flavoured Coffees": [
    { name: "Vanilla Cappuccino", desc: "Classic cappuccino with a hint of vanilla.", price: "₹125 / ₹150", size: "220 / 320ml" },
    { name: "Vanilla Latte", desc: "Smooth latte with a hint of sweet vanilla.", price: "₹130 / ₹150", size: "220 / 320ml" },
    { name: "Hazelnut Cappuccino", desc: "Classic cappuccino with a hint of hazelnut.", price: "₹125 / ₹150", size: "220 / 320ml" },
    { name: "Hazelnut Latte", desc: "Smooth latte with a hint of hazelnut.", price: "₹130 / ₹150", size: "220 / 320ml" },
  ],
  "New Launches": [
    { name: "Hazelnut Filter Coffee", desc: "Classic filter coffee enhanced with nutty hazelnut.", price: "₹60 / ₹105", size: "125 / 220ml" },
    { name: "Cocoa Cookie Cappuccino", desc: "Coffee, cocoa and cookie crumble in every sip.", price: "₹130", size: "220ml" },
    { name: "Cookie Crumble Hot Chocolate", desc: "Rich hot chocolate loaded with cookie crumble.", price: "₹150", size: "220ml" },
    { name: "Mango Hot Chocolate", desc: "Mango sweetness fused with velvety hot chocolate.", price: "₹150", size: "220ml" },
  ],
  Chai: [
    { name: "Kadak Tea Ginger", desc: "Nothing tastes quite like ginger milk tea.", price: "₹45 / ₹75", size: "120 / 220ml" },
    { name: "Kadak Tea Masala", desc: "Black tea boiled with milk and aromatic spices.", price: "₹45 / ₹75", size: "120 / 220ml" },
  ],
};

// Replace with genuine reviews
export const reviews = [
  { name: "Customer name", text: "Add a genuine customer review here." },
  { name: "Customer name", text: "Add a second genuine customer review here." },
];
