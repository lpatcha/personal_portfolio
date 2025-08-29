import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import { useState } from 'react';

function calculateExperience(dates) {
    let res = {
        currentlyWorking: false,
    }

    let startMonth = parseInt(dates.startDate.split('-')[0].trim());
    let startDay = parseInt(dates.startDate.split('-')[1].trim());
    let startYear = parseInt(dates.startDate.split('-')[2].trim());

    if (dates.endDate == 'Present')
        return {
            ...res,
            startDate: dates.startDate,
            endDate: dates.endDate,
            currentlyWorking: true
        }

    let endMonth = parseInt(dates.endDate.split('-')[0].trim());
    let endDay = parseInt(dates.endDate.split('-')[1].trim());
    let endYear = parseInt(dates.endDate.split('-')[2].trim());

    let totalMonths = 0;

    if (startMonth <= endMonth) {
        totalMonths += (endMonth - startMonth) + (endYear - startYear) * 12;
    }
    else {
        totalMonths += ((endYear - startYear) * 12) - (startMonth - endMonth);
    }

    return {
        ...res,
        startDate: `${startMonth}-${startDay}-${startYear}`,
        endDate: `${endMonth}-${endDay}-${endYear}`,
        monthsOfExperience: totalMonths
    }

}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


export default function Experience({ experiences }) {
    const [expanded, setExpanded] = useState('');

    const expandAndToggle = (key) => {
        if (expanded == key) {
            setExpanded("");
            return;
        }
        setExpanded(key);
    }

    return (<>

        <div className="columns-1 mt-3">
            {experiences.map((experience) => {
                let res = calculateExperience({ startDate: experience.startDate, endDate: experience.endDate });
                let yearsofExperience = 0;

                let startDate = `${months[parseInt(res.startDate.split('-')[0]) - 1]} ${res.startDate.split('-')[2]} `;
                let endDate = `${months[parseInt(res.endDate.split('-')[0]) - 1]} ${res.endDate.split('-')[2]} `;

                if (res.currentlyWorking)
                    endDate = "present";

                let years = parseInt(res.monthsOfExperience / 12) != 0 && `${parseInt(res.monthsOfExperience / 12)} years `;
                years = years ? years : ''
                yearsofExperience = `${years}${(res.monthsOfExperience % 12)} months`;
                let key = experience.clientName + experience.startDate + experience.endDate;

                return (<>
                    <Accordion className='h-fit !rounded-lg mt-2' key={key} expanded={expanded == key}>
                        <div className='bg-stone-200'>
                            <div className="p-4 flex flex-wrap  justify-between" >
                                <div className='max-md:w-[100%]'>
                                    <ul class="list-none">
                                        <li><b>{experience.clientName}</b></li>
                                        <li> <small><b>{experience.role}</b></small></li>
                                        <li> <small>({experience.location})</small></li>
                                    </ul>
                                </div>
                                <div><small> ({`${startDate} - ${endDate}`}) {res.endDate != 'Present' && yearsofExperience}</small></div>
                            </div>
                            <div className='flex justify-center'>
                                <Button className='!text-black' variant="text" size="small" onClick={() => { expandAndToggle(key) }}>
                                    <small><u>{`${expanded == key ? 'View less' : 'View more'}`}</u></small>
                                </Button>
                            </div>
                        </div>
                        <AccordionDetails className='bg-stone-50'>

                            <ul  class="list-disc p-4">
                                {
                                    experience.rolesAndResponsibilites.map((role) => {
                                        return (
                                            <li key={experience.id + role.id}><small>{role.description}</small></li>);
                                    })
                                }
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                </>)
            })}

        </div>


    </>);
}