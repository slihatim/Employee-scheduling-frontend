import "@bitnoi.se/react-scheduler/dist/style.css";
import { Scheduler, SchedulerData } from "@bitnoi.se/react-scheduler";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { useState, useEffect, useCallback } from "react";

export default function SchedulerComponent({isLoading, startDate, shifts}) {
    dayjs.extend(isBetween);
    const [filterButtonState, setFilterButtonState] = useState(-1);
    const bgColors = ['#e8817f','#8d5273','#311f62','#808080'];
    
    const convertedOutput = [];
    let id = 1;
    for(let i=0; i<shifts.length/21; i++){
        convertedOutput.push({
            id,
            label: {
                title: shifts[i*21].employee.name,
                subtitle: shifts[i*21].employee.skills
            },
            data: []
        })
        id++;
    }

    shifts.forEach(shift => {
        const row = convertedOutput.find(resource => resource.label.title === shift.employee.name);
        row.data.push({
            id: shift.id,
            startDate: new Date(shift.date+"T00:00:00.000Z"),
            endDate: new Date(shift.date+"T22:00:00.000Z"),
            title: shift.shiftType,
            occupancy: 3600*8,
            bgColor: returnBgColor(shift.shiftType)
        })
    });

    console.log(convertedOutput);

    function returnBgColor(shiftType){
        switch(shiftType){
            case "M": return bgColors[0]; break;
            case "S": return bgColors[1]; break;
            case "N": return bgColors[2]; break;
            case "R": return bgColors[3]; break;
            default: return '#000';
        }
    }

    
    

    const mockedSchedulerData = [
        {
        id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
        label: {
            icon: "https://picsum.photos/24",
            title: "Joe Doe",
            subtitle: "Frontend Developer"
        },
        data: [
            {
            id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
            startDate: new Date("2023-04-13T15:31:24.272Z"),
            endDate: new Date("2023-08-28T10:28:22.649Z"),
            occupancy: 3600,
            title: "Project A",
            subtitle: "Subtitle A",
            description: "array indexing Salad West Account",
            bgColor: "rgb(254,165,177)"
            },
            {
            id: "22fbe237-6344-4c8e-affb-64a1750f33bd",
            startDate: new Date("2023-10-07T08:16:31.123Z"),
            endDate: new Date("2023-11-15T21:55:23.582Z"),
            occupancy: 2852,
            title: "Project B",
            subtitle: "Subtitle B",
            description: "Tuna Home pascal IP drive",
            bgColor: "rgb(254,165,177)"
            },
            {
            id: "3601c1cd-f4b5-46bc-8564-8c983919e3f5",
            startDate: new Date("2023-03-30T22:25:14.377Z"),
            endDate: new Date("2023-09-01T07:20:50.526Z"),
            occupancy: 1800,
            title: "Project C",
            subtitle: "Subtitle C",
            bgColor: "rgb(254,165,177)"
            },
            {
            id: "b088e4ac-9911-426f-aef3-843d75e714c2",
            startDate: new Date("2023-10-28T10:08:22.986Z"),
            endDate: new Date("2023-10-30T12:30:30.150Z"),
            occupancy: 11111,
            title: "Project D",
            subtitle: "Subtitle D",
            description: "Garden heavy an software Metal",
            bgColor: "rgb(254,165,177)"
            }
        ]
        }
    ];

    const [range, setRange] = useState(() => {
        let eDate = new Date(startDate);
        eDate.setDate(eDate.getDate() + 20)
        return {
            startDate: new Date(startDate),
            endDate: eDate
        }
    });

    const handleRangeChange = useCallback((range) => {
        setRange(range);
    }, []);

    // Filtering events that are included in current date range
    // Example can be also found on video https://youtu.be/9oy4rTVEfBQ?t=118&si=52BGKSIYz6bTZ7fx
    // and in the react-scheduler repo App.tsx file https://github.com/Bitnoise/react-scheduler/blob/master/src/App.tsx
    const filteredConvertedOutput = convertedOutput.map((person) => ({
            ...person,
            data: person.data.filter(
            (project) =>
                // we use "dayjs" for date calculations, but feel free to use library of your choice
                dayjs(project.startDate).isBetween(range.startDate, range.endDate) ||
                dayjs(project.endDate).isBetween(range.startDate, range.endDate) ||
                (dayjs(project.startDate).isBefore(range.startDate, "day") &&
                dayjs(project.endDate).isAfter(range.endDate, "day"))
            )
        }))

    return (
        <section style={{position: 'relative',minHeight:'500px', minWidth:'100px'}}>
        <Scheduler
            data={filteredConvertedOutput}
            isLoading={isLoading}
            onRangeChange={handleRangeChange}
            onTileClick={(clickedResource) => console.log(clickedResource)}
            onItemClick={(item) => console.log(item)}
            
            config={{
            zoom: 1,
            filterButtonState,
            showThemeToggle: true
            }}
            range={range}
            
        />
        </section>
    );
    }


