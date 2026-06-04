const clinics = [
  // === Trivandrum City Central ===
  {
    id: 1,
    name: "Smile Dental Clinic",
    address: "MG Road, Pulimoodu, Trivandrum",
    phone: "0471-2334567",
    vacancy: "Yes"
  },
  {
    id: 2,
    name: "Trivandrum Dental Centre",
    address: "Kowdiar, Trivandrum",
    phone: "0471-2435678",
    vacancy: "No"
  },
  {
    id: 3,
    name: "Care Dental Hospital",
    address: "Pattom, Trivandrum",
    phone: "0471-2446789",
    vacancy: "Yes"
  },
  {
    id: 4,
    name: "Family Dental Care",
    address: "Vazhuthacaud, Trivandrum",
    phone: "0471-2327890",
    vacancy: "No"
  },
  {
    id: 5,
    name: "Kerala Dental Clinic",
    address: "Thirumala, Trivandrum",
    phone: "0471-2368901",
    vacancy: "Yes"
  },
  {
    id: 6,
    name: "Elite Dental Studio",
    address: "Kesavadasapuram, Trivandrum",
    phone: "0471-2559012",
    vacancy: "No"
  },
  {
    id: 7,
    name: "Tooth Care Clinic",
    address: "Ulloor, Trivandrum",
    phone: "0471-2580123",
    vacancy: "Yes"
  },
  {
    id: 8,
    name: "Dental World",
    address: "Palayam, Trivandrum",
    phone: "0471-2461234",
    vacancy: "No"
  },
  {
    id: 9,
    name: "New Smile Dental",
    address: "Sreekaryam, Trivandrum",
    phone: "0471-2592345",
    vacancy: "Yes"
  },
  {
    id: 10,
    name: "PMS Dental Clinic",
    address: "Kazhakoottam, Trivandrum",
    phone: "0471-2703456",
    vacancy: "Yes"
  },
  {
    id: 11,
    name: "Dentcare Clinic",
    address: "Statue Junction, Trivandrum",
    phone: "0471-2464567",
    vacancy: "No"
  },
  {
    id: 12,
    name: "Dr. Nair's Dental Clinic",
    address: "Thycaud, Trivandrum",
    phone: "0471-2325678",
    vacancy: "Yes"
  },
  {
    id: 13,
    name: "Perfect Smile Dental",
    address: "Kuravankonam, Trivandrum",
    phone: "0471-2436789",
    vacancy: "No"
  },
  {
    id: 14,
    name: "City Dental Clinic",
    address: "East Fort, Trivandrum",
    phone: "0471-2477890",
    vacancy: "Yes"
  },
  {
    id: 15,
    name: "Sree Dental Care",
    address: "Chalai, Trivandrum",
    phone: "0471-2468901",
    vacancy: "No"
  },

  // === Medical College Area ===
  {
    id: 16,
    name: "MediDent Clinic",
    address: "Medical College PO, Trivandrum",
    phone: "0471-2521234",
    vacancy: "Yes"
  },
  {
    id: 17,
    name: "Dental Solutions",
    address: "Kumarapuram, Medical College, Trivandrum",
    phone: "0471-2442345",
    vacancy: "No"
  },
  {
    id: 18,
    name: "Government Dental College (Referral)",
    address: "Medical College Campus, Trivandrum",
    phone: "0471-2528381",
    vacancy: "No"
  },

  // === Sreekariyam & Technopark Area ===
  {
    id: 19,
    name: "Technopark Dental Clinic",
    address: "Technopark Phase 1, Kazhakoottam",
    phone: "0471-2700123",
    vacancy: "Yes"
  },
  {
    id: 20,
    name: "Smile Zone Dental",
    address: "Sreekariyam, Near College of Engineering",
    phone: "0471-2595678",
    vacancy: "No"
  },
  {
    id: 21,
    name: "Pearl Dental Clinic",
    address: "Kazhakoottam Junction, Trivandrum",
    phone: "0471-2706789",
    vacancy: "Yes"
  },

  // === Kazhakoottam to Attingal ===
  {
    id: 22,
    name: "Coastal Dental Care",
    address: "Attingal, Trivandrum District",
    phone: "0470-2623456",
    vacancy: "Yes"
  },
  {
    id: 23,
    name: "Smile Craft Dental",
    address: "Chirayinkeezhu, Trivandrum District",
    phone: "0470-2640123",
    vacancy: "No"
  },
  {
    id: 24,
    name: "Varkala Dental Clinic",
    address: "Varkala, Trivandrum District",
    phone: "0470-2602345",
    vacancy: "Yes"
  },
  {
    id: 25,
    name: "Alamcode Dental Centre",
    address: "Alamcode, Attingal, Trivandrum",
    phone: "0470-2627890",
    vacancy: "No"
  },

  // === Neyyattinkara Side ===
  {
    id: 26,
    name: "Neyyattinkara Dental Clinic",
    address: "Neyyattinkara, Trivandrum District",
    phone: "0471-2223456",
    vacancy: "Yes"
  },
  {
    id: 27,
    name: "Balaramapuram Dental Care",
    address: "Balaramapuram, Trivandrum District",
    phone: "0471-2401234",
    vacancy: "No"
  },
  {
    id: 28,
    name: "Vizhinjam Dental Centre",
    address: "Vizhinjam, Trivandrum District",
    phone: "0471-2480123",
    vacancy: "Yes"
  },
  {
    id: 29,
    name: "Kattakada Family Dental",
    address: "Kattakada, Trivandrum District",
    phone: "0471-2292345",
    vacancy: "No"
  },
  {
    id: 30,
    name: "Parassala Dental Clinic",
    address: "Parassala, Trivandrum District",
    phone: "0471-2203456",
    vacancy: "Yes"
  },

  // === Nedumangad & Vithura Side ===
  {
    id: 31,
    name: "Nedumangad Dental Speciality",
    address: "Nedumangad Town, Trivandrum District",
    phone: "0472-2812345",
    vacancy: "Yes"
  },
  {
    id: 32,
    name: "Vithura Dental Clinic",
    address: "Vithura, Trivandrum District",
    phone: "0472-2856789",
    vacancy: "No"
  },
  {
    id: 33,
    name: "Aryanad Dental Centre",
    address: "Aryanad, Trivandrum District",
    phone: "0472-2830123",
    vacancy: "Yes"
  },
  {
    id: 34,
    name: "Venjaramoodu Smile Clinic",
    address: "Venjaramoodu, Trivandrum District",
    phone: "0472-2874567",
    vacancy: "No"
  },

  // === Pothencode & Northern Belt ===
  {
    id: 35,
    name: "Pothencode Dental Care",
    address: "Pothencode, Trivandrum District",
    phone: "0471-2412345",
    vacancy: "Yes"
  },
  {
    id: 36,
    name: "Mangalapuram Dental Clinic",
    address: "Mangalapuram, Trivandrum District",
    phone: "0471-2406789",
    vacancy: "No"
  },
  {
    id: 37,
    name: "Kilimanoor Dental Specialists",
    address: "Kilimanoor, Trivandrum District",
    phone: "0470-2672345",
    vacancy: "Yes"
  },

  // === Kovalam & Beach Areas ===
  {
    id: 38,
    name: "Kovalam Dental Centre",
    address: "Kovalam Beach Road, Trivandrum",
    phone: "0471-2483456",
    vacancy: "No"
  },
  {
    id: 39,
    name: "Poovar Coastal Dental",
    address: "Poovar, Trivandrum District",
    phone: "0471-2210123",
    vacancy: "Yes"
  },

  // === Peroorkada to Vattiyoorkavu ===
  {
    id: 40,
    name: "Peroorkada Dental Clinic",
    address: "Peroorkada, Trivandrum",
    phone: "0471-2433456",
    vacancy: "Yes"
  },
  {
    id: 41,
    name: "Vattiyoorkavu Dental Care",
    address: "Vattiyoorkavu, Trivandrum",
    phone: "0471-2365678",
    vacancy: "No"
  },
  {
    id: 42,
    name: "Kowdiar Smiles",
    address: "Kowdiar Avenue, Trivandrum",
    phone: "0471-2438901",
    vacancy: "Yes"
  },
  {
    id: 43,
    name: "Ambalamukku Dental Centre",
    address: "Ambalamukku, Trivandrum",
    phone: "0471-2341234",
    vacancy: "No"
  },

  // === Sasthamangalam & Vellayambalam ===
  {
    id: 44,
    name: "Sasthamangalam Dental Speciality",
    address: "Sasthamangalam, Trivandrum",
    phone: "0471-2312345",
    vacancy: "Yes"
  },
  {
    id: 45,
    name: "Vellayambalam Dental Hub",
    address: "Vellayambalam, Trivandrum",
    phone: "0471-2723456",
    vacancy: "No"
  },

  // === Pappanamcode & Industrial Area ===
  {
    id: 46,
    name: "Pappanamcode Dental Clinic",
    address: "Pappanamcode, Trivandrum",
    phone: "0471-2491234",
    vacancy: "Yes"
  },
  {
    id: 47,
    name: "Karimanal Dental Care",
    address: "Karimanal, Trivandrum",
    phone: "0471-2356789",
    vacancy: "No"
  },
  {
    id: 48,
    name: "Chackai Dental Centre",
    address: "Chackai, Trivandrum",
    phone: "0471-2501234",
    vacancy: "Yes"
  },

  // === Pettah & Airport Area ===
  {
    id: 49,
    name: "Pettah Family Dental",
    address: "Pettah, Trivandrum",
    phone: "0471-2470123",
    vacancy: "No"
  },
  {
    id: 50,
    name: "Airport Dental Clinic",
    address: "Shanghumugham, Near Airport, Trivandrum",
    phone: "0471-2708901",
    vacancy: "Yes"
  },

  // === Additional Rural Coverage ===
  {
    id: 51,
    name: "Vellanad Dental Centre",
    address: "Vellanad, Trivandrum District",
    phone: "0472-2881234",
    vacancy: "No"
  },
  {
    id: 52,
    name: "Kallara Smile Dental",
    address: "Kallara, Trivandrum District",
    phone: "0472-2863456",
    vacancy: "Yes"
  },
  {
    id: 53,
    name: "Pangode Rural Dental",
    address: "Pangode, Trivandrum District",
    phone: "0472-2895678",
    vacancy: "No"
  },
  {
    id: 54,
    name: "Palode Dental Care",
    address: "Palode, Trivandrum District",
    phone: "0472-2840123",
    vacancy: "Yes"
  },
  {
    id: 55,
    name: "Navaikulam Dental Clinic",
    address: "Navaikulam, Trivandrum District",
    phone: "0470-2692345",
    vacancy: "No"
  }
];

export default clinics;
