export interface City {
  slug: string;
  name: string;
  state: string;
  region: "North" | "South" | "East" | "West" | "Central";
  angle: string;
  industries: string[];
  areas: string[];
}

export const cities: City[] = [
  {
    slug: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    region: "South",
    angle:
      "From Koramangala cafés to Whitefield startups, Bangalore businesses move fast online — and your website needs to keep up with them.",
    industries: ["IT & software", "Startups & SaaS", "Restaurants & cafés", "Real estate", "Education", "Healthcare"],
    areas: ["Koramangala", "Indiranagar", "Whitefield", "HSR Layout", "Jayanagar", "Electronic City"],
  },
  {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi NCR",
    region: "North",
    angle:
      "Delhi's retail and wholesale markets live on search. A fast, professional website puts your business in front of customers across the capital.",
    industries: ["Retail & wholesale", "Manufacturing", "Education", "Hospitality", "Real estate", "Import-export"],
    areas: ["Karol Bagh", "Connaught Place", "Lajpat Nagar", "Rohini", "Dwarka", "Saket"],
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    region: "North",
    angle:
      "Jaipur's jewellery, textile and tourism businesses win with a polished website that matches the city's craft reputation.",
    industries: ["Jewellery", "Textiles & apparel", "Tourism & hospitality", "Handicrafts", "Education", "Real estate"],
    areas: ["Malviya Nagar", "Vaishali Nagar", "C-Scheme", "Mansarovar", "GT Bypass"],
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    region: "West",
    angle:
      "Mumbai is India's most competitive market. Your website is often the first handshake with a client — make it count.",
    industries: ["Finance & banking", "Real estate", "Entertainment & media", "Healthcare", "Retail", "Logistics"],
    areas: ["Andheri", "Bandra", "Dadar", "Borivali", "Thane", "Navi Mumbai"],
  },
  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    region: "West",
    angle:
      "From Hinjewadi IT parks to Kothrud's small businesses, Pune companies trust us for websites that generate real inquiries.",
    industries: ["IT & software", "Automobile & manufacturing", "Education", "Healthcare", "Real estate", "Startups"],
    areas: ["Hinjewadi", "Kothrud", "Baner", "Viman Nagar", "Hadapsar", "Pimpri-Chinchwad"],
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    state: "Punjab",
    region: "North",
    angle:
      "Chandigarh and the tri-city region get premium, fast-loading websites — for businesses that want to look as good as the city they're in.",
    industries: ["Professional services", "Healthcare", "Education", "Real estate", "Retail"],
    areas: ["Sector 17", "Sector 22", "Mohali", "Panchkula", "Zirakpur", "Sector 35"],
  },
  {
    slug: "ludhiana",
    name: "Ludhiana",
    state: "Punjab",
    region: "North",
    angle:
      "Ludhiana's textile and manufacturing units need websites that showcase products, generate leads and win orders — that's exactly what we build.",
    industries: ["Textiles & garments", "Cycle & auto parts", "Industrial manufacturing", "Agriculture equipment", "Retail"],
    areas: ["Model Town", "Sarabha Nagar", "Civil Lines", "Dugri", "Focal Point"],
  },
  {
    slug: "mohali",
    name: "Mohali",
    state: "Punjab",
    region: "North",
    angle:
      "Mohali's growing IT and startup scene gets modern, conversion-focused websites delivered in days, not months.",
    industries: ["IT & software", "Startups", "Real estate", "Healthcare", "Education"],
    areas: ["Sector 70", "Sohana", "Kharar", "Phase 8", "Aerocity"],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    region: "South",
    angle:
      "Hyderabad's tech corridor and old-city businesses alike get websites that are fast, beautiful and built to bring in customers.",
    industries: ["IT & software", "Pharma & biotech", "Startups", "Real estate", "Retail", "Education"],
    areas: ["Gachibowli", "HITEC City", "Banjara Hills", "Kukatpally", "Secunderabad"],
  },
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    region: "South",
    angle:
      "From T. Nagar retailers to OMR software firms, Chennai businesses get professional websites that turn visitors into customers.",
    industries: ["IT & BPO", "Automobile & manufacturing", "Healthcare", "Education", "Retail", "Logistics"],
    areas: ["T. Nagar", "Anna Nagar", "Velachery", "Adyar", "OMR", "Tambaram"],
  },
  {
    slug: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    region: "North",
    angle:
      "Noida's corporate hub deserves corporate-grade websites — fast, secure and built to impress clients and rank on Google.",
    industries: ["IT & corporate", "Real estate", "E-commerce", "Media & design", "Startups", "Retail"],
    areas: ["Sector 18", "Sector 62", "Noida Expressway", "Greater Noida", "Sector 63"],
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    region: "North",
    angle:
      "Lucknow's schools, clinics and restaurants get elegant, reliable websites that make it easy for local customers to find and trust them.",
    industries: ["Education", "Healthcare", "Retail & wholesale", "Food & hospitality", "Real estate"],
    areas: ["Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", "Chinhat"],
  },
  {
    slug: "coimbatore",
    name: "Coimbatore",
    state: "Tamil Nadu",
    region: "South",
    angle:
      "Coimbatore's engineering and textile businesses use our websites to win orders from across India and beyond.",
    industries: ["Textiles & machinery", "Pumps & engineering", "IT", "Education", "Retail", "Healthcare"],
    areas: ["RS Puram", "Gandhipuram", "Peelamedu", "Saravanampatti", "Saibaba Colony"],
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    region: "West",
    angle:
      "Ahmedabad's traders, manufacturers and startups get websites that speak the language of business — leads, orders and growth.",
    industries: ["Textiles & apparel", "Pharma", "Diamond & jewellery", "Manufacturing", "Real estate", "IT"],
    areas: ["Satellite", "SG Highway", "Navrangpura", "Maninagar", "Thaltej"],
  },
  {
    slug: "kolhapur",
    name: "Kolhapur",
    state: "Maharashtra",
    region: "West",
    angle:
      "Kolhapur's footwear, jewellery and agro businesses get affordable websites that give them a serious edge over competitors.",
    industries: ["Sugar & agriculture", "Footwear & leather", "Jewellery", "Engineering", "Education", "Food processing"],
    areas: ["Shahupuri", "Tarabai Park", "Laxmipuri", "Rajarampuri", "Kasba Bawda"],
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    region: "East",
    angle:
      "Kolkata's colleges, hospitals and heritage businesses get websites with the grace of the city and the performance of modern tech.",
    industries: ["Education", "Healthcare", "Retail & wholesale", "Manufacturing", "Real estate", "IT services"],
    areas: ["Salt Lake", "Park Street", "Behala", "New Town", "Dum Dum"],
  },
  {
    slug: "nagpur",
    name: "Nagpur",
    state: "Maharashtra",
    region: "Central",
    angle:
      "Nagpur's logistics firms, traders and clinics get fast websites that turn searches into calls — right in the heart of India.",
    industries: ["Logistics & warehousing", "Agriculture", "Education", "Healthcare", "Manufacturing", "IT"],
    areas: ["Dharampeth", "Civil Lines", "Sadar", "Manish Nagar", "Wardha Road"],
  },
  {
    slug: "nashik",
    name: "Nashik",
    state: "Maharashtra",
    region: "West",
    angle:
      "From Nashik's vineyards to its manufacturing belt, businesses get websites that look premium and load in the blink of an eye.",
    industries: ["Wine & agriculture", "Manufacturing & auto", "IT", "Education", "Healthcare"],
    areas: ["College Road", "Gangapur Road", "Cidco", "Indira Nagar", "Panchavati"],
  },
  {
    slug: "varanasi",
    name: "Varanasi",
    state: "Uttar Pradesh",
    region: "North",
    angle:
      "Varanasi's hotels, silk houses and retailers get beautiful websites that bring the city's timeless appeal online.",
    industries: ["Tourism & hospitality", "Silk & handicrafts", "Education", "Healthcare", "Retail"],
    areas: ["Sigra", "Lanka", "Mahmoorganj", "Bhelupur", "Cantonment"],
  },
  {
    slug: "gurgaon",
    name: "Gurgaon",
    state: "Haryana",
    region: "North",
    angle:
      "Gurgaon's startups and corporate offices get high-performance websites built to convert in India's most click-happy market.",
    industries: ["IT & corporate", "Real estate", "Startups", "Healthcare", "Retail", "Hospitality"],
    areas: ["DLF Phase 2", "Cyber City", "Golf Course Road", "Sohna Road", "MG Road"],
  },
  {
    slug: "kanpur",
    name: "Kanpur",
    state: "Uttar Pradesh",
    region: "North",
    angle:
      "Kanpur's leather, textile and trading businesses get websites that look professional and pull in steady local enquiries.",
    industries: ["Leather & footwear", "Textiles", "Manufacturing", "Education", "Healthcare", "Retail"],
    areas: ["Swaroop Nagar", "Kakadeo", "Civil Lines", "Harsh Nagar", "Sarsaul"],
  },
  {
    slug: "jodhpur",
    name: "Jodhpur",
    state: "Rajasthan",
    region: "North",
    angle:
      "Jodhpur's hotels, artisans and heritage brands get websites as striking as the Blue City itself — and just as hard to forget.",
    industries: ["Tourism & hospitality", "Handicrafts & textiles", "Engineering", "Education", "Healthcare"],
    areas: ["Sardarpura", "Shastri Nagar", "Pal Road", "Ratanada", "Umaid Heritage"],
  },
  {
    slug: "jabalpur",
    name: "Jabalpur",
    state: "Madhya Pradesh",
    region: "Central",
    angle:
      "Jabalpur's institutions and businesses get dependable, affordable websites that keep working as hard as they do.",
    industries: ["Defence & manufacturing", "Education", "Healthcare", "Retail", "Agriculture"],
    areas: ["Wright Town", "Napier Town", "Vijay Nagar", "Garha", "Gwarighat"],
  },
  {
    slug: "gwalior",
    name: "Gwalior",
    state: "Madhya Pradesh",
    region: "Central",
    angle:
      "Gwalior's schools, clinics and heritage businesses get websites that combine timeless character with modern speed.",
    industries: ["Education", "Tourism & heritage", "Manufacturing", "Retail", "Healthcare"],
    areas: ["City Centre", "Lashkar", "Morar", "Thatipur", "University Road"],
  },
  {
    slug: "hisar",
    name: "Hisar",
    state: "Haryana",
    region: "North",
    angle:
      "Hisar's agro, dairy and trading businesses get clean, practical websites that bring customers straight to their door.",
    industries: ["Agriculture & dairy", "Education", "Healthcare", "Manufacturing", "Retail"],
    areas: ["Model Town", "Civil Lines", "Housing Board Colony", "Sushant City", "Green Vihar"],
  },
  {
    slug: "haldwani",
    name: "Haldwani",
    state: "Uttarakhand",
    region: "North",
    angle:
      "Haldwani's traders and Nainital-bound resorts get affordable websites that help tourists and locals find them first.",
    industries: ["Education", "Retail & wholesale", "Tourism", "Healthcare", "Food processing"],
    areas: ["Nainital Road", "Kaladhungi Road", "Katgharia", "Indira Nagar", "Bhotia Parao"],
  },
  {
    slug: "kota",
    name: "Kota",
    state: "Rajasthan",
    region: "North",
    angle:
      "Kota's coaching institutes and manufacturers get websites that are fast, trustworthy and built to win over parents and buyers.",
    industries: ["Coaching & education", "Industrial manufacturing", "Power & engineering", "Retail", "Healthcare"],
    areas: ["Rajeev Gandhi Nagar", "Talwandi", "Vigyan Nagar", "Kabir Nagar", "Landmark City"],
  },
  {
    slug: "kochi",
    name: "Kochi",
    state: "Kerala",
    region: "South",
    angle:
      "Kochi's IT parks, homestays and seafood exporters get websites that look world-class and speak directly to global customers.",
    industries: ["IT & software", "Tourism & hospitality", "Shipping & logistics", "Healthcare", "Retail", "Seafood export"],
    areas: ["Ernakulam", "Edappally", "Kakkanad", "Fort Kochi", "Vyttila"],
  },
  {
    slug: "ranchi",
    name: "Ranchi",
    state: "Jharkhand",
    region: "East",
    angle:
      "Ranchi's colleges, clinics and businesses get modern websites that help them stand out in a fast-growing city.",
    industries: ["Education", "Healthcare", "Mining & steel support", "Retail", "IT services"],
    areas: ["Lalpur", "Kanke Road", "Ratu Road", "Harmu", "Ashok Nagar"],
  },
  {
    slug: "rajkot",
    name: "Rajkot",
    state: "Gujarat",
    region: "West",
    angle:
      "Rajkot's auto-ancillary and jewellery units get sharp, lead-focused websites that match their world-class manufacturing.",
    industries: ["Auto & engineering manufacturing", "Jewellery", "Textiles", "Education", "Healthcare"],
    areas: ["Yagnik Road", "University Road", "Kalawad Road", "Mavdi", "150ft Ring Road"],
  },
  {
    slug: "vadodara",
    name: "Vadodara",
    state: "Gujarat",
    region: "West",
    angle:
      "Vadodara's chemical, manufacturing and education sectors get polished websites that build instant credibility.",
    industries: ["Chemicals & petrochemicals", "Manufacturing", "Education", "Healthcare", "IT"],
    areas: ["Alkapuri", "Waghodia Road", "Gotri", "Manjalpur", "Karelibaug"],
  },
  {
    slug: "udaipur",
    name: "Udaipur",
    state: "Rajasthan",
    region: "North",
    angle:
      "Udaipur's hotels and wedding brands get websites as beautiful as the Lake City — built to book more guests.",
    industries: ["Tourism & hospitality", "Education", "Healthcare", "Handicrafts", "Real estate"],
    areas: ["Panchwati", "Shobhagpura", "Fatehpura", "Savina", "Hiran Magri"],
  },
  {
    slug: "zirakpur",
    name: "Zirakpur",
    state: "Punjab",
    region: "North",
    angle:
      "Zirakpur's builders, hospitals and high-street retailers get websites that turn the city's fast growth into enquiries.",
    industries: ["Real estate", "Retail", "Healthcare", "Education", "Hospitality"],
    areas: ["VIP Road", "Airport Road", "Balongi", "Lohgarh", "Gazipur"],
  },
  {
    slug: "yamunanagar",
    name: "Yamunanagar",
    state: "Haryana",
    region: "North",
    angle:
      "Yamunanagar's plywood, paper and sugar industries get dependable websites that showcase strength and reliability.",
    industries: ["Plywood & timber", "Paper", "Sugar", "Education", "Retail"],
    areas: ["Model Town", "Jagadhri", "Civil Lines", "Kailash Nagar", "Gobindpura"],
  },
  {
    slug: "dehradun",
    name: "Dehradun",
    state: "Uttarakhand",
    region: "North",
    angle:
      "Dehradun's schools, resorts and growing startup scene get clean, modern websites that match the city's fresh energy.",
    industries: ["Education", "Government & defence", "Tourism", "IT & startups", "Healthcare"],
    areas: ["Rajpur Road", "Ballupur", "Clement Town", "Doon Vihar", "Vasant Vihar"],
  },
  {
    slug: "bhubaneswar",
    name: "Bhubaneswar",
    state: "Odisha",
    region: "East",
    angle:
      "Bhubaneswar's IT corridor and institutions get professional websites that help the Smart City's businesses go further.",
    industries: ["IT & software", "Education", "Healthcare", "Retail", "Real estate"],
    areas: ["Jaydev Vihar", "Saheed Nagar", "Patia", "Kharavela Nagar", "Sundarpada"],
  },
  {
    slug: "goa",
    name: "Goa",
    state: "Goa",
    region: "West",
    angle:
      "Goa's resorts, cafés and property developers get stunning websites that capture the vibe and book more guests.",
    industries: ["Tourism & hospitality", "Real estate", "Healthcare", "Retail", "Food & beverage"],
    areas: ["Panaji", "Margao", "Calangute", "Mapusa", "Vasco da Gama"],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
