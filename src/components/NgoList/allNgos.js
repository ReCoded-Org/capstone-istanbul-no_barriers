import image from "./image/image.jpg";

// This will be a fetch from the database
const allNgos = [
  {
    id: "firebaseDocIda",
    image,
    name: "Teng",
    service: "Health Care",
    city: "Ankara",
    rating: "4",
    details: {
      facilityName: "Teng clinic",
      address: "Çankaya/Ankara",
      serviceDescription:
        "Suspendisse pulvinar pretium scelerisque. Suspendisse potenti. Sed ullamcorper enim sed lacinia sagittis. Nulla tellus risus, maximus et vestibulum id, tempor eget ipsum. Praesent convallis dictum turpis eu ullamcorper. Curabitur in ultrices sapien. Etiam lacinia ante quis luctus luctus. Nullam efficitur turpis orci, at bibendum tortor efficitur sed. Nam accumsan dolor luctus blandit lobortis.",
      responsiblePerson: "Ali Demir",
      phoneNumber: "+90 000 000 00",
      email: "tengAdmin@teng.com",
      website: "www.teng.com",
    },
  },
  {
    id: "firebaseDocIdb",
    image,
    name: "Teng",
    service: "Health Care",
    city: "Ankara",
    rating: "4",
    details: {
      facilityName: "Teng clinic",
      address: "Çankaya/Ankara",
      serviceDescription:
        "Suspendisse pulvinar pretium scelerisque. Suspendisse potenti. Sed ullamcorper enim sed lacinia sagittis. Nulla tellus risus, maximus et vestibulum id, tempor eget ipsum. Praesent convallis dictum turpis eu ullamcorper. Curabitur in ultrices sapien. Etiam lacinia ante quis luctus luctus. Nullam efficitur turpis orci, at bibendum tortor efficitur sed. Nam accumsan dolor luctus blandit lobortis.",
      responsiblePerson: "Ali Demir",
      phoneNumber: "+90 000 000 00",
      email: "tengAdmin@teng.com",
      website: "www.teng.com",
    },
  },
  {
    id: "firebaseDocIdc",
    image,
    name: "ABC",
    service: "Education",
    city: "Şanlıurfa",
    rating: "4",
    details: {
      facilityName: "ABC School",
      address: "Şanlıurfa",
      serviceDescription:
        "Suspendisse pulvinar pretium scelerisque. Suspendisse potenti. Sed ullamcorper enim sed lacinia sagittis. Nulla tellus risus, maximus et vestibulum id, tempor eget ipsum. Praesent convallis dictum turpis eu ullamcorper. Curabitur in ultrices sapien. Etiam lacinia ante quis luctus luctus. Nullam efficitur turpis orci, at bibendum tortor efficitur sed. Nam accumsan dolor luctus blandit lobortis.",
      responsiblePerson: "Aişe Şen",
      phoneNumber: "+90 000 000 00",
      email: "abcAdmin@abc.com",
      website: "www.abc.com",
    },
  },
];

export default allNgos;
