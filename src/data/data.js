const employeesData = `[
    {
        "name": "worker 0",
        "skills": [
            "Engineer"
        ]
    },
    {
        "name": "worker 1",
        "skills": [
            "Engineer"
        ]
    },
    {
        "name": "worker 2",
        "skills": [
            "Engineer"
        ]
    },
    {
        "name": "worker 3",
        "skills": [
            "Consultant"
        ]
    },
    {
        "name": "worker 4",
        "skills": [
            "Consultant"
        ]
    },
    {
        "name": "worker 5",
        "skills": [
            "Consultant"
        ]
    },
    {
        "name": "worker 6",
        "skills": [
            "Consultant"
        ]
    },
    {
        "name": "worker 7",
        "skills": [
            "Consultant"
        ]
    },
    {
        "name": "worker 8",
        "skills": [
            "Manager"
        ]
    },
    {
        "name": "worker 9",
        "skills": [
            "Technician"
        ]
    },
    {
        "name": "worker 10",
        "skills": [
            "Technician"
        ]
    },
    {
        "name": "worker 11",
        "skills": [
            "Technician"
        ]
    },
    {
        "name": "worker 12",
        "skills": [
            "Technician"
        ]
    },
    {
        "name": "worker 13",
        "skills": [
            "Security"
        ]
    },
    {
        "name": "worker 14",
        "skills": [
            "Security"
        ]
    },
    {
        "name": "worker 15",
        "skills": [
            "Security"
        ]
    }
]`;

const settingsData = `[
        {
            "id": "1",
            "day": "MONDAY",
            "shift": "M",
            "skill": "Consultant",
            "minEmployees": 2
          },
          {
            "id": "2",
            "day": "MONDAY",
            "shift": "M",
            "skill": "Engineer",
            "minEmployees": 1
          },
          {
            "id": "3",
            "day": "MONDAY",
            "shift": "M",
            "skill": "Technician",
            "minEmployees": 1
          },
          {
            "id": "4",
            "day": "MONDAY",
            "shift": "M",
            "skill": "RH",
            "minEmployees": 1
          },
          {
            "id": "5",
            "day": "MONDAY",
            "shift": "S",
            "skill": "Consultant",
            "minEmployees": 1
          },
          {
            "id": "6",
            "day": "MONDAY",
            "shift": "S",
            "skill": "Engineer",
            "minEmployees": 1
          },
          {
            "id": "7",
            "day": "MONDAY",
            "shift": "S",
            "skill": "Technician",
            "minEmployees": 1
          },
          {
            "id": "8",
            "day": "MONDAY",
            "shift": "S",
            "skill": "RH",
            "minEmployees": 1
          },
          {
            "id": "9",
            "day": "MONDAY",
            "shift": "N",
            "skill": "Consultant",
            "minEmployees": 1
          },
          {
            "id": "10",
            "day": "MONDAY",
            "shift": "N",
            "skill": "Technician",
            "minEmployees": 1
          },
          {
            "id": "11",
            "day": "MONDAY",
            "shift": "N",
            "skill": "RH",
            "minEmployees": 1
          },
          {
            "id": "12",
            "day": "TUESDAY",
            "shift": "M",
            "skill": "Consultant",
            "minEmployees": 2
          },
          {
            "id": "13",
            "day": "TUESDAY",
            "shift": "M",
            "skill": "Engineer",
            "minEmployees": 1
          },
          {
            "id": "14",
            "day": "TUESDAY",
            "shift": "M",
            "skill": "Technician",
            "minEmployees": 1
          },
          {
            "id": "15",
            "day": "TUESDAY",
            "shift": "M",
            "skill": "Manager",
            "minEmployees": 1
          },
          {
            "id": "16",
            "day": "TUESDAY",
            "shift": "S",
            "skill": "Consultant",
            "minEmployees": 1
          },
          {
            "id": "17",
            "day": "TUESDAY",
            "shift": "S",
            "skill": "Technician",
            "minEmployees": 1
          },
          {
            "id": "18",
            "day": "TUESDAY",
            "shift": "S",
            "skill": "RH",
            "minEmployees": 1
          },
          {
            "id": "19",
            "day": "TUESDAY",
            "shift": "N",
            "skill": "Consultant",
            "minEmployees": 1
          },
          {
            "id": "20",
            "day": "TUESDAY",
            "shift": "N",
            "skill": "Engineer",
            "minEmployees": 1
          },
          {
            "id": "21",
            "day": "TUESDAY",
            "shift": "N",
            "skill": "RH",
            "minEmployees": 1
          },
          {
            "id": "22",
            "day": "WEDNESDAY",
            "shift": "M",
            "skill": "Consultant",
            "minEmployees": 1
          },
          {
            "id": "23",
            "day": "WEDNESDAY",
            "shift": "M",
            "skill": "Engineer",
            "minEmployees": 1
          },
          {
            "id": "24",
            "day": "WEDNESDAY",
            "shift": "M",
            "skill": "Technician",
            "minEmployees": 1
          },
          {
            "id": "25",
            "day": "WEDNESDAY",
            "shift": "S",
            "skill": "Consultant",
            "minEmployees": 1
          },
          {
            "id": "26",
            "day": "WEDNESDAY",
            "shift": "S",
            "skill": "Technician",
            "minEmployees": 1
          },
          {
            "id": "27",
            "day": "WEDNESDAY",
            "shift": "S",
            "skill": "RH",
            "minEmployees": 1
          },
          {
            "id": "28",
            "day": "WEDNESDAY",
            "shift": "N",
            "skill": "Consultant",
            "minEmployees": 1
          },
          {
            "id": "29",
            "day": "WEDNESDAY",
            "shift": "N",
            "skill": "Technician",
            "minEmployees": 1
          },
          {
            "id": "30",
            "day": "WEDNESDAY",
            "shift": "N",
            "skill": "RH",
            "minEmployees": 1
          },
          {
            "id": "31",
            "day": "THURSDAY",
            "shift": "M",
            "skill": "Consultant",
            "minEmployees": 2
          },
          {
            "id": "32",
            "day": "THURSDAY",
            "shift": "M",
            "skill": "Engineer",
            "minEmployees": 1
          },
          {
            "id": "33",
            "day": "THURSDAY",
            "shift": "M",
            "skill": "Technician",
            "minEmployees": 1
          },
          {
            "id": "34",
            "day": "THURSDAY",
            "shift": "M",
            "skill": "RH",
            "minEmployees": 1
          },
          {
            "id": "35",
            "day": "THURSDAY",
            "shift": "S",
            "skill": "Consultant",
            "minEmployees": 1
          },
          {
            "id": "36",
            "day": "THURSDAY",
            "shift": "S",
            "skill": "Engineer",
            "minEmployees": 1
          },
          {
            "id": "37",
            "day": "THURSDAY",
            "shift": "S",
            "skill": "Technician",
            "minEmployees": 1
          },
          {
            "id": "38",
            "day": "THURSDAY",
            "shift": "S",
            "skill": "RH",
            "minEmployees": 1
          },
          {
            "id": "39",
            "day": "THURSDAY",
            "shift": "N",
            "skill": "Consultant",
            "minEmployees": 1
          },
          {
            "id": "40",
            "day": "THURSDAY",
            "shift": "N",
            "skill": "Technician",
            "minEmployees": 1
          },
          {
            "id": "41",
            "day": "THURSDAY",
            "shift": "N",
            "skill": "Manager",
            "minEmployees": 1
          },
          {
            "id": "42",
            "day": "FRIDAY",
            "shift": "M",
            "skill": "Consultant",
            "minEmployees": 1
          },
          {
            "id": "43",
            "day": "FRIDAY",
            "shift": "M",
            "skill": "Engineer",
            "minEmployees": 1
          },
          {
            "id": "44",
            "day": "FRIDAY",
            "shift": "M",
            "skill": "RH",
            "minEmployees": 1
          },
          {
            "id": "45",
            "day": "FRIDAY",
            "shift": "S",
            "skill": "Consultant",
            "minEmployees": 1
          },
          {
            "id": "46",
            "day": "FRIDAY",
            "shift": "S",
            "skill": "Technician",
            "minEmployees": 1
          },
          {
            "id": "47",
            "day": "FRIDAY",
            "shift": "S",
            "skill": "RH",
            "minEmployees": 1
          },
          {
            "id": "48",
            "day": "FRIDAY",
            "shift": "N",
            "skill": "Consultant",
            "minEmployees": 1
          },
          {
            "id": "49",
            "day": "FRIDAY",
            "shift": "N",
            "skill": "Technician",
            "minEmployees": 1
          },
          {
            "id": "50",
            "day": "FRIDAY",
            "shift": "N",
            "skill": "RH",
            "minEmployees": 1
          },
          {
            "id": "51",
            "day": "SATURDAY",
            "shift": "M",
            "skill": "Consultant",
            "minEmployees": 1
          },
          {
            "id": "52",
            "day": "SATURDAY",
            "shift": "M",
            "skill": "Technician",
            "minEmployees": 1
          },
          {
            "id": "53",
            "day": "SATURDAY",
            "shift": "M",
            "skill": "RH",
            "minEmployees": 1
          },
          {
            "id": "54",
            "day": "SATURDAY",
            "shift": "S",
            "skill": "Consultant",
            "minEmployees": 1
          },
          {
            "id": "55",
            "day": "SATURDAY",
            "shift": "S",
            "skill": "Engineer",
            "minEmployees": 1
          },
          {
            "id": "56",
            "day": "SATURDAY",
            "shift": "S",
            "skill": "RH",
            "minEmployees": 1
          },
          {
            "id": "57",
            "day": "SATURDAY",
            "shift": "N",
            "skill": "Consultant",
            "minEmployees": 1
          },
          {
            "id": "58",
            "day": "SATURDAY",
            "shift": "N",
            "skill": "Technician",
            "minEmployees": 1
          },
          {
            "id": "59",
            "day": "SATURDAY",
            "shift": "N",
            "skill": "RH",
            "minEmployees": 1
          },
          {
            "id": "60",
            "day": "SUNDAY",
            "shift": "M",
            "skill": "Consultant",
            "minEmployees": 1
          },
          {
            "id": "61",
            "day": "SUNDAY",
            "shift": "M",
            "skill": "Technician",
            "minEmployees": 1
          },
          {
            "id": "62",
            "day": "SUNDAY",
            "shift": "M",
            "skill": "RH",
            "minEmployees": 1
          },
          {
            "id": "63",
            "day": "SUNDAY",
            "shift": "S",
            "skill": "Consultant",
            "minEmployees": 1
          },
          {
            "id": "64",
            "day": "SUNDAY",
            "shift": "S",
            "skill": "Engineer",
            "minEmployees": 1
          },
          {
            "id": "65",
            "day": "SUNDAY",
            "shift": "S",
            "skill": "RH",
            "minEmployees": 1
          },
          {
            "id": "66",
            "day": "SUNDAY",
            "shift": "N",
            "skill": "Consultant",
            "minEmployees": 1
          },
          {
            "id": "67",
            "day": "SUNDAY",
            "shift": "N",
            "skill": "Technician",
            "minEmployees": 1
          },
          {
            "id": "68",
            "day": "SUNDAY",
            "shift": "N",
            "skill": "Manager",
            "minEmployees": 1
          }
    ]`;

export { settingsData, employeesData };