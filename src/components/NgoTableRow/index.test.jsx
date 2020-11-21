import React from "react";
import renderer from "react-test-renderer";
import NgoTableRow from "./index";

it("NgoTableRow renders correctly", () => {
  const allNgos = [
    {
      city: "Ankara",
      details: {
        address: "Sincan/Ankara",
        email: "abc@admin.com",
        facilityName: "ABC schools",
        phoneNumber: "+90 000 000 00",
        responsiblePerson: "Aişe Şen",
      },
      serviceDescription: {
        arabic: "arabic",
        english:
          "We are helping. Suspendisse pulvinar pretium scelerisque. Suspendisse potenti. Sed ullamcorper enim sed lacinia sagittis. Nulla tellus risus, maximus et vestibulum id, tempor eget ipsum. Praesent convallis dictum turpis eu ullamcorper. Curabitur in ultrices sapien. Etiam lacinia ante quis luctus luctus. Nullam efficitur turpis orci, at bibendum tortor efficitur sed. Nam accumsan dolor luctus blandit lobortis.",
        turkish: "yardım",
      },
      website: "www.abc.net",
      image:
        "https://firebasestorage.googleapis.com/v0/b/no-barriers.appspot.com/o/Zootopia-Characters-Revealed-5.jpg?alt=media&token=0a108e5a-decf-4278-9284-094db45a160a",
      name: "ABC",
      rating: 2,
      service: "Education",
    },
  ];

  const tree = renderer
    .create(
      allNgos.map((ngo, index) => {
        if (index % 2 === 0) {
          return (
            <NgoTableRow
              trClassname="table-info"
              key={ngo.id}
              image={ngo.image}
              name={ngo.name}
              service={ngo.service}
              city={ngo.city}
              rating={ngo.rating}
              details={ngo.details}
            />
          );
        }
        return (
          <NgoTableRow
            trClassname="table-light"
            key={ngo.id}
            image={ngo.image}
            name={ngo.name}
            service={ngo.service}
            city={ngo.city}
            rating={ngo.rating}
            details={ngo.details}
          />
        );
      })
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
