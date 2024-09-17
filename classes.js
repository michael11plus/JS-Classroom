const classrooms = [
    { name: "Chemistry room", seats: 20, faculty: "Science" },
    { name: "Biology room", seats: 20, faculty: "Science" },
    { name: "Physics room", seats: 20, faculty: "Science" },
    { name: "Bio-Chem Lab A", seats: 10, faculty: "Science" },
    { name: "Bio-Chem Lab B", seats: 10, faculty: "Science" },
    { name: "Physics Lab", seats: 20, faculty: "Science" },
    { name: "Paint/Draw Room", seats: 12, faculty: "Arts" },
    { name: "Music Room", seats: 12, faculty: "Arts" },
    { name: "Drama Room", seats: 12, faculty: "Arts" },
    { name: "Sculpting Room", seats: 12, faculty: "Arts" },
    { name: "Cooking Room", seats: 20, faculty: "Arts" },
    { name: "IT Room A", seats: 14, faculty: "Tech" },
    { name: "IT Room B", seats: 14, faculty: "Tech" },
    { name: "Electrics Room", seats: 20, faculty: "Tech" },
    { name: "Mechanics Room", seats: 15, faculty: "Tech" },
    { name: "Roofed Ground", seats: 40, faculty: "Sports" },
    { name: "Swimming Pool", seats: 20, faculty: "Sports" },
    { name: "Gym", seats: 20, faculty: "Sports" },
  ];

const displayClassrooms = () => {
    for (const classroom of classrooms) {
        console.log(`- ${classroom.name}\n-- faculty of ${classroom.faculty} \n-- seating at ${classroom.seats} seats`);
    }
}

const displayRoomByFaculty = () => {
    let scienceRooms = []; 
    let artsRooms = [];
    let techRooms = [];
    let sportsRooms = [];
    let i = 0;
    let j = 0;
    let k = 0;
    let l = 0;

    for (const room of classrooms) {
        if (room.faculty === "Science") {
            scienceRooms[i] = room.name;
            i++;
        } else if (room.faculty === "Arts") {
            artsRooms[j] = room.name;
            j++;
        } else if (room.faculty === "Tech") {
            techRooms[k] = room.name;
            k++;
        } else if (room.faculty === "Sports") {
            sportsRooms[l] = room.name;
            l++;
        }
    }
    
    console.log(`The classrooms by faculty go like this:\n\n-Science Rooms: \n----${scienceRooms}.\n\n-Arts Rooms: \n----${artsRooms}.\n\n-Technology Rooms: \n----${techRooms}.\n\n-Sports Rooms: \n----${sportsRooms}.`);
}