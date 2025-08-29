import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Description } from '@mui/icons-material';
import { useState } from 'react';
import Rating from '@mui/material/Rating';

const retriveSkills = (skills) => {
    let map = new Map();
    skills.forEach((skill) => {

        let key = skill.toolsAndTechnology.category.categoryName;
        let newSkill = {
            id: skill.id,
            proficiencyRating: skill.proficiencyRating,
            description: skill.description,
            name: skill.toolsAndTechnology.name
        };

        if (map.has(key)) {
            map.get(key).push(newSkill);
        }
        else {
            map.set(key, [newSkill]);
        }
    });

    return Object.fromEntries(map);
}

const calculateRating = (num)=>{
    return num / 2;
}


export default function SkillSection({ skills }) {
    const [expanded, setExpanded] = useState(false);
    skills = retriveSkills(skills);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (<>
        {
            Object.entries(skills).map(([key, value]) => {
                return (<>
                    <div key={key} className='mt-2'>
                        <Accordion className='!bg-stone-50' expanded={expanded === key} onChange={handleChange(key)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                {key}
                            </AccordionSummary>

                            <AccordionDetails>

                                <ul class="list-none">
                                    {value.map((skill) => {
                                        return (<li key = {skill.proficiencyRating + skill.name}>
                                            <hr />
                                            <div className='flex p-2 justify-between'>
                                                <div>{skill.name}</div>
                                                <div className = 'flex items-center'>
                                                <div> <Rating name="size-medium" defaultValue={calculateRating(skill.proficiencyRating)} /> </div>
                                                <div className = 'ml-2'>{calculateRating(skill.proficiencyRating)} / 5</div>
                                                </div>
                                            </div>
                                        </li>)
                                    })}
                                </ul>

                            </AccordionDetails>
                        </Accordion>
                    </div >
                </>
                )
            })
        }
    </>);
}