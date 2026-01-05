import Image from "next/image";
import { Inter } from 'next/font/google';
import Rating from '@mui/material/Rating';
import SkillSection from '../components/SkillSection/index';
import Experience from "@/components/Experience";
import ContactUs from "@/components/ContactUs";
import Head from "next/head";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // optional: useful for Tailwind integration
  display: 'swap',
});

const mailIcon = () => {
  return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>);
}

const phoneIcon = () => {
  return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>
  );
}

const linkedinIcon = () => {
  return (<span class="[&>svg]:h-5 [&>svg]:w-5 text-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 448 512">
      <path
        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
    </svg>
  </span>)
}

const gitHub = () => {
  return (<span class="[&>svg]:h-5 [&>svg]:w-5 text-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 496 512">
      <path
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>
  </span>)
}


const locationIcon = () => {
  return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>);
}


const response = {
  "message": "Intended operation is performed Successfully",
  "result": {
    "id": 10,
    "educationDto": [
      {
        "degree": "Bachelors in Computer Science",
        "description": "test3",
        "institutionName": "GITAM",
        "cgpa": 8,
        "maxCgpa": 10,
        "startDate": "2013-06-21",
        "endDate": "20247-06-21",
        "userId": 10,
        "educationImageResponseDto": {
          "id": 12,
          "image": {
            "id": 45,
            "url": "https://lokeshpatchalaportfolio.s3.us-east-2.amazonaws.com/images/1754341357960-passport_size_photo.jpg",
            "userId": 10
          },
          "education_id": 23
        },
        "id": 23
      },
      // {
      //   "degree": "Masters",
      //   "description": "Masters in Computer Science and Data Science",
      //   "institutionName": "Illinois state university",
      //   "cgpa": 3.5,
      //   "maxCgpa": 4.0,
      //   "startDate": "2024-12-21",
      //   "endDate": "2024-12-30",
      //   "userId": 10,
      //   "educationImageResponseDto": {
      //     "id": 10,
      //     "image": {
      //       "id": 31,
      //       "url": "https://lokeshpatchalaportfolio.s3.us-east-2.amazonaws.com/images/lokeshpatchalaportfolio/1735658164361-P1000563_cropped.png",
      //       "userId": 10
      //     },
      //     "education_id": 24
      //   },
      //   "id": 24
      // }
    ],
    "projectDto": [
        {
          "id": 4,
          "projectName": "",
          "clientName": "Bank of America",
          "location": "Plano, Texas, United States",
          "role": "Senior Frontend Developer",
          "endDate": "Present",
          "startDate": "02-01-2025",
          "description": "",
          "userId": 10,
          "projectImageResponseDto": null,
          "rolesAndResponsibilites": [
            {
              "id": 1,
              "description": "Developed scalable web components and backend services capable of handling 3K–6K TPS, ensuring high performance with Cypress & K6 test automation.",
              "projectId": 4
            },
            {
              "id": 2,
              "description": "Designed and deployed secure Spring Boot REST APIs, integrating Spring Security and Data JPA for robust service delivery.",
              "projectId": 4
            },
            {
              "id": 3,
              "description": "Managed AWS infrastructure using Terraform, deploying applications on ECS Fargate and Lambda for efficient event-driven workflows.",
              "projectId": 4
            }
          ]
        },
      {
        "id": 1,
        "projectName": "",
        "clientName": "General Motors",
        "location": "Austin, Texas, USA",
        "role": "Sr. Software Engineer",
        "endDate": "01-01-2025",
        "startDate": "10-01-2022",
        "description": "",
        "userId": 10,
        "projectImageResponseDto": null,
        "rolesAndResponsibilites": [
          {
            "id": 1,
            "description": "Developed REST APIS using Micro Service Architecture and used Kafka as a communication agent between services.",
            "projectId": 1
          },
          {
            "id": 2,
            "description": "Developed Scripts for migrating data from MongoDb to DynamoDb and achieved 95% success rate.",
            "projectId": 1
          },
          {
            "id": 3,
            "description": "Created Responsive and engaging user interfaces using Angular with Material UI Components.",
            "projectId": 1
          },
          {
            "id": 4,
            "description": "Developed user interfaces which are cross-device compatible across various screen sizes.",
            "projectId": 1
          },
          {
            "id": 5,
            "description": "Enhanced state consistency across components by utilizing NgRx for state management, resulting in a 30% reduction in code and improved application performance.",
            "projectId": 1
          }
        ]
      },
      {
        "id": 2,
        "projectName": "",
        "clientName": "Williams Sonoma",
        "location": "Costa Mesa, California, United States",
        "role": "Full Stack Developer",
        "endDate": "09-01-2022",
        "startDate": "07-02-2021",
        "description": "",
        "userId": 10,
        "projectImageResponseDto": null,
        "rolesAndResponsibilites": [
          {
            "id": 1,
            "description": "Developed Components, Services, and Custom Annotations tailored to meet specific business requirements, enhancing application functionality.",
            "projectId": 2
          },
          {
            "id": 2,
            "description": "Integrated SonarQube and Veracode into CI/CD pipelines, significantly improving code quality and reducing security vulnerabilities.",
            "projectId": 2
          },
          {
            "id": 3,
            "description": "Contributed to the documentation of REST APIs using Swagger, facilitating effective communication between development teams and external stakeholders.",
            "projectId": 2
          },
          {
            "id": 4,
            "description": "Played a key role in migrating components from a legacy Struts application to modern web applications using the Angular framework, enhancing overall performance.",
            "projectId": 2
          },
          {
            "id": 5,
            "description": "Eliminated over 10% of redundant code in the codebase by creating more than 20 reusable Angular components, promoting efficiency and maintainability.",
            "projectId": 2
          }
        ]
      },
      {
        "id": 3,
        "projectName": "",
        "clientName": "Verizon",
        "location": "Ashburn, VA, United States",
        "role": "Node.js Full Stack Developer",
        "endDate": "06-01-2021",
        "startDate": "01-01-2020",
        "description": "",
        "userId": 10,
        "projectImageResponseDto": null,
        "rolesAndResponsibilites": [
          {
            "id": 1,
            "description": "Implemented and configured over 10 AWS Lambda functions to communicate with downstream systems, reducing latency by more than 20% and contributing to a more scalable architecture.",
            "projectId": 3
          },
          {
            "id": 2,
            "description": "Developed Scripts for migrating data from MongoDb to DynamoDb and achieved 95% success rate.",
            "projectId": 3
          },
          {
            "id": 3,
            "description": "Performed Unit testing using Jasmine to check the functionality of Components, Services, Repositories and Custom annotations.",
            "projectId": 3
          },
          {
            "id": 4,
            "description": "Effectively utilized GraphQL APIs using Apollo Client and Server for efficient data fetching, caching and manipulation.",
            "projectId": 3
          },
          {
            "id": 5,
            "description": "Designed user-friendly web pages with React.js, Material UI, and Ant UI, ensuring functionality and responsiveness aligned with business requirements.",
            "projectId": 3
          },
          {
            "id": 6,
            "description": "Implemented robust state management solutions using Apollo Client and Redux, optimizing data handling for complex application scenarios.",
            "projectId": 3
          }
        ]
      },
      {
        "id": 5,
        "projectName": "",
        "clientName": "Covent Informatics",
        "location": "Hyderabad, India",
        "role": "Java Developer",
        "endDate": "11-01-2029",
        "startDate": "08-01-2018",
        "description": "",
        "userId": 10,
        "projectImageResponseDto": null,
        "rolesAndResponsibilites": [
          {
            "id": 1,
            "description": " Developed responsive web applications using JSP, Servlets, and Spring MVC, ensuring cross-device compatibility. ",
            "projectId": 5
          },
          {
            "id": 2,
            "description": "Implemented microservices architecture with Kafka, Docker, and Kubernetes to enhance system performance.",
            "projectId": 5
          },
          {
            "id": 3,
            "description": "Conducted unit testing with JUnit and API testing with Postman, ensuring robust application performance.",
            "projectId": 5
          }
        ]
      },
      {
        "id": 6,
        "projectName": "",
        "clientName": "Sixpath Technologies",
        "location": "Hyderabad, India",
        "role": "Frontend Developer",
        "endDate": "07-01-2018",
        "startDate": "06-01-2017",
        "description": "",
        "userId": 10,
        "projectImageResponseDto": null,
        "rolesAndResponsibilites": [
          {
            "id": 1,
            "description": "Developed responsive web applications using Angular, Bootstrap, and Material UI to enhance user experience.",
            "projectId": 6
          },
          {
            "id": 2,
            "description": "Implemented state management with NgRx & RxJS, ensuring efficient data handling and application performance.",
            "projectId": 6
          },
          {
            "id": 3,
            "description": "Integrated Google Maps & Places API for interactive location-based features, improving user engagement.",
            "projectId": 6
          },
          {
            "id": 4,
            "description": "Conducted unit and integration testing with Jasmine to maintain high code quality and reliability.",
            "projectId": 6
          }
        ]
      }

    ],
    "socialMediaDto": [
      {
        "link": "http://localhost:8081",
        "media": {
          "id": 1,
          "name": "Linkedin"
        },
        "id": 10
      },
      {
        "link": "http://locahost:8080",
        "media": {
          "id": 2,
          "name": "Twitter"
        },
        "id": 10
      }
    ],
    "userToolsAndTechnologiesDto": [
      {
        "id": 1,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "Java",
          "id": 1,
          "categoryId": 1,
          "category": {
            "id": 1,
            "categoryName": "Programming Languages"
          }
        },
        "toolId": 0
      },
      {
        "id": 2,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "Java Script",
          "id": 1,
          "categoryId": 1,
          "category": {
            "id": 1,
            "categoryName": "Programming Languages"
          }
        },
        "toolId": 0
      },
      {
        "id": 3,
        "userId": 10,
        "proficiencyRating": 8.5,
        "description": "",
        "toolsAndTechnology": {
          "name": "C",
          "id": 1,
          "categoryId": 1,
          "category": {
            "id": 1,
            "categoryName": "Programming Languages"
          }
        },
        "toolId": 0
      },
      {
        "id": 4,
        "userId": 10,
        "proficiencyRating": 7,
        "description": "",
        "toolsAndTechnology": {
          "name": "C",
          "id": 1,
          "categoryId": 1,
          "category": {
            "id": 1,
            "categoryName": "Programming Languages"
          }
        },
        "toolId": 0
      },
      {
        "id": 5,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "MySQL",
          "id": 1,
          "categoryId": 2,
          "category": {
            "id": 2,
            "categoryName": "Databases"
          }
        },
        "toolId": 0
      },
      {
        "id": 6,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "Oracle Sql",
          "id": 1,
          "categoryId": 2,
          "category": {
            "id": 2,
            "categoryName": "Databases"
          }
        },
        "toolId": 0
      },
      {
        "id": 7,
        "userId": 10,
        "proficiencyRating": 8.5,
        "description": "",
        "toolsAndTechnology": {
          "name": "MongoDb",
          "id": 1,
          "categoryId": 2,
          "category": {
            "id": 2,
            "categoryName": "Databases"
          }
        },
        "toolId": 0
      },
      {
        "id": 8,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "PostgreSQL",
          "id": 1,
          "categoryId": 2,
          "category": {
            "id": 2,
            "categoryName": "Databases"
          }
        },
        "toolId": 0
      },
      {
        "id": 9,
        "userId": 10,
        "proficiencyRating": 9,
        "description": "",
        "toolsAndTechnology": {
          "name": "Amazon RDS",
          "id": 1,
          "categoryId": 2,
          "category": {
            "id": 2,
            "categoryName": "Databases"
          }
        },
        "toolId": 0
      },
      {
        "id": 10,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "Express",
          "id": 1,
          "categoryId": 3,
          "category": {
            "id": 3,
            "categoryName": "Backend Frameworks and Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 11,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "Spring Boot",
          "id": 1,
          "categoryId": 3,
          "category": {
            "id": 3,
            "categoryName": "Backend Frameworks and Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 12,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "Node.js",
          "id": 1,
          "categoryId": 3,
          "category": {
            "id": 3,
            "categoryName": "Backend Frameworks and Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 13,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "Docker",
          "id": 1,
          "categoryId": 3,
          "category": {
            "id": 3,
            "categoryName": "Backend Frameworks and Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 14,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "Kafka",
          "id": 1,
          "categoryId": 3,
          "category": {
            "id": 3,
            "categoryName": "Backend Frameworks and Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 15,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "Kubernetes",
          "id": 1,
          "categoryId": 3,
          "category": {
            "id": 3,
            "categoryName": "Backend Frameworks and Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 16,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "Postman",
          "id": 1,
          "categoryId": 3,
          "category": {
            "id": 3,
            "categoryName": "Backend Frameworks and Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 17,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "Swagger",
          "id": 1,
          "categoryId": 3,
          "category": {
            "id": 3,
            "categoryName": "Backend Frameworks and Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 18,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "React.js",
          "id": 1,
          "categoryId": 4,
          "category": {
            "id": 4,
            "categoryName": "Frontend Frameworks and Desgin Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 19,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "Angular",
          "id": 1,
          "categoryId": 4,
          "category": {
            "id": 4,
            "categoryName": "Frontend Frameworks and Desgin Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 20,
        "userId": 10,
        "proficiencyRating": 9,
        "description": "",
        "toolsAndTechnology": {
          "name": "Next.js",
          "id": 1,
          "categoryId": 4,
          "category": {
            "id": 4,
            "categoryName": "Frontend Frameworks and Desgin Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 21,
        "userId": 10,
        "proficiencyRating": 8,
        "description": "",
        "toolsAndTechnology": {
          "name": "JQuery",
          "id": 1,
          "categoryId": 4,
          "category": {
            "id": 4,
            "categoryName": "Frontend Frameworks and Desgin Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 22,
        "userId": 10,
        "proficiencyRating": 9.5,
        "description": "",
        "toolsAndTechnology": {
          "name": "Microsoft Visio",
          "id": 1,
          "categoryId": 4,
          "category": {
            "id": 4,
            "categoryName": "Frontend Frameworks and Desgin Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 23,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "K6",
          "id": 1,
          "categoryId": 5,
          "category": {
            "id": 5,
            "categoryName": "Testing Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 24,
        "userId": 10,
        "proficiencyRating": 8.5,
        "description": "",
        "toolsAndTechnology": {
          "name": "Karma",
          "id": 1,
          "categoryId": 5,
          "category": {
            "id": 5,
            "categoryName": "Testing Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 25,
        "userId": 10,
        "proficiencyRating": 9,
        "description": "",
        "toolsAndTechnology": {
          "name": "Jasmine",
          "id": 1,
          "categoryId": 5,
          "category": {
            "id": 5,
            "categoryName": "Testing Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 26,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "Mockito",
          "id": 1,
          "categoryId": 5,
          "category": {
            "id": 5,
            "categoryName": "Testing Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 27,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "JUnit",
          "id": 1,
          "categoryId": 5,
          "category": {
            "id": 5,
            "categoryName": "Testing Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 28,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "Log4j",
          "id": 1,
          "categoryId": 5,
          "category": {
            "id": 5,
            "categoryName": "Testing Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 29,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "Mocha",
          "id": 1,
          "categoryId": 5,
          "category": {
            "id": 5,
            "categoryName": "Testing Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 30,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "Maven",
          "id": 1,
          "categoryId": 6,
          "category": {
            "id": 6,
            "categoryName": "Testing Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 31,
        "userId": 10,
        "proficiencyRating": 8.5,
        "description": "",
        "toolsAndTechnology": {
          "name": "Gradle",
          "id": 1,
          "categoryId": 6,
          "category": {
            "id": 6,
            "categoryName": "Testing Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 32,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "NPM",
          "id": 1,
          "categoryId": 6,
          "category": {
            "id": 6,
            "categoryName": "Testing Tools"
          }
        },
        "toolId": 0
      },
      {
        "id": 33,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "Git",
          "id": 1,
          "categoryId": 6,
          "category": {
            "id": 6,
            "categoryName": "Version Managment System"
          }
        },
        "toolId": 0
      },
      {
        "id": 34,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "BitBucket",
          "id": 1,
          "categoryId": 6,
          "category": {
            "id": 6,
            "categoryName": "Version Managment System"
          }
        },
        "toolId": 0
      },
      {
        "id": 35,
        "userId": 10,
        "proficiencyRating": 10,
        "description": "",
        "toolsAndTechnology": {
          "name": "GitLab",
          "id": 1,
          "categoryId": 6,
          "category": {
            "id": 6,
            "categoryName": "Version Managment System"
          }
        },
        "toolId": 0
      }
    ],
    "userDetailsDto": {
      "id": 20,
      "userId": 10,
      "phoneNo": "3096126680",
      "firstName": "Lokesh",
      "lastName": "Patchala",
      "photo": null,
      "address": "test",
      "aboutme": "I am a highly skilled Full-Stack Developer with over 8 years of experience in designing, developing, testing, deploying, and maintaining large-scale enterprise applications in the Retail, Telecommunication, Automobile, E-commerce, and Healthcare sectors. I possess a strong expertise in creating responsive web applications using React.js, Next.js, and Angular, with a keen focus on performance, scalability, and accessibility as top priorities. Additionally, I have developed content-based and portfolio websites using the no-code platform Wordpress. As a self-motivated professional, I am passionate about problem-solving and continually exploring new technologies and frameworks. I am enthusiastic about contributing to open-source projects and collaborating with others to share innovative ideas.",
      "dateOfBirth": "1998-03-30",
      "userImageResponseDto": {
        "id": 1,
        "profilePicture": {
          "id": 43,
          "url": "https://lokeshpatchalaportfolio.s3.us-east-2.amazonaws.com/images/1741140065467-Screenshot_2025-02-25_at_7.18.11 PM.png",
          "userId": 10
        },
        "heroImage": {
          "id": 47,
          "url": "https://lokeshpatchalaportfolio.s3.us-east-2.amazonaws.com/images/1754845577426-passport_size_photo.jpg",
          "userId": 10
        },
        "contactUsImage": {
          "id": 48,
          "url": "https://lokeshpatchalaportfolio.s3.us-east-2.amazonaws.com/images/1754845619706-passport_size_photo.jpg",
          "userId": 10
        },
        "coverImage": null
      },
      "email": "lokeshpatchala9@gmail.com"
    },
    "leadInfoDto": [
      {
        "id": 1,
        "email": "srinivas@gmail.com",
        "phoneNo": "8639612352",
        "firstName": "Srinivas",
        "lastName": "Patchala",
        "message": "nice profile",
        "userId": 10
      },
      {
        "id": 2,
        "email": "sailaja@gmail.com",
        "phoneNo": "3096126680",
        "firstName": "Sailaja",
        "lastName": "Patchala",
        "message": "good boy",
        "userId": 10
      }
    ]
  },
  "statusCode": "200"
}

export default function Home() {

  return (
    <>
      <Head>
        <title>Lokesh Patchala | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Lokesh Patchala, a Full Stack Developer with 7+ years of experience in React, Angular, Spring Boot, Node.js, and cloud platforms."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, React, Angular, Spring Boot, Node.js, AWS, Azure, GCP, Portfolio"
        />
        <meta name="author" content="Lokesh Patchala" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <div className={`${inter.variable} bg-stone-50 max-md:text-sm`}>
        <section>
          <div className="relative h-[20vh]">
            <Image
              src="/el-capitan-sunny-afternoon-landscape.jpg"
              alt="cover image"
              fill // Makes the image fill its parent container
              style={{ objectFit: 'cover' }} // Ensures the image covers the area without distortion
            />
            <div className="absolute bg-[#00000075] h-[100%] w-[100%] z-1">
              <div className="container flex h-[100%] flex-row-reverse items-center space-x-4 space-x-reverse">
                <a  className = "mr-3" href="https://www.linkedin.com/in/lokeshpatchala-61958217b/" target="_blank">{linkedinIcon()}</a>
                <a href="https://github.com/lpatcha">{gitHub()}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto bg-stone-200 p-4">
          <div className="relative">
            <div className="flex flex-wrap">
              <div className="w-[100%] md:w-[60%]">
                <div className="relative z-2 w-[100px] h-[100px] border-4 border-white top-[-50px] rounded-[50%] overflow-hidden">
                  <Image
                    src="/profile2.jpeg"
                    alt="cover image"
                    fill // Makes the image fill its parent container
                    style={{ objectFit: 'cover' }} // Ensures the image covers the area without distortion
                  />
                </div>
                <div className="relative top-[-45px]">
                  <b>{`${response.result.userDetailsDto.firstName} ${response.result.userDetailsDto.lastName}`}</b>
                  <p>
                    {`${response.result.userDetailsDto.aboutme}`}
                  </p>
                </div>
              </div>
              <div className="w-[100%] md:w-[40%]">
                <section className="p-4 rounded-lg bg-stone-50">
                  <div className="flex space-x-2 ">
                    {mailIcon()}
                    <a href="mailto:lokeshp3098@gmail.com">lokeshpatchala9@gmail.com</a>
                  </div>
                  <div className="flex mt-3 space-x-2 ">
                    {phoneIcon()}
                    <a href="tel:+13096126680">+1 (571) 399 6154</a>
                  </div>
                  <div className="flex mt-3 space-x-2 ">
                    {locationIcon()}
                    <a target = "_blank" href="https://www.google.com/maps/place/2372+Birch+Run+Cir,+Herndon,+VA+20171/@38.9483185,-77.4001867,17z/data=!3m1!4b1!4m6!3m5!1s0x89b647ea4f87b6e9:0xf819ce14ecd0857a!8m2!3d38.9483144!4d-77.3976118!16s%2Fg%2F11rwm0pfv5?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D">25696 Spring Race Terrace, Aldie, VA</a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto mt-2 p-2">
          <div>
            <h2 className="text-lg max-md:text-base"><b>Education</b></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <div className="flex flex-wrap w-[100%] items-center space-x-2 p-4 rounded-lg bg-stone-200">
                  <div className="w-[100px] h-[100px] relative  border-4 border-white rounded-[50%] overflow-hidden">
                    <Image
                      src="/GITAM_Hyderabad_Campus.jpg"
                      alt="cover image"
                      fill // Makes the image fill its parent container
                      style={{ objectFit: 'cover' }} // Ensures the image covers the area without distortion
                    />
                  </div>
                  <div className="flex flex-wrap justify-between grow max-md:mt-2">
                    <ul class="list-none">
                      <li><b>Bachelors in Computer Science</b></li>
                      <li>Gandhi Institute of Science and Technology</li>
                      <li><small>Visakhapatnam, Andhra Pradesh, India</small></li>
                    </ul>
                    <div>
                      <small>(2013 - 2017)</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto mt-2 bg-stone-200 p-2">
          <div>
            <h2 className="text-lg max-md:text-base"><b>Skills</b></h2>
            <SkillSection skills={response.result.userToolsAndTechnologiesDto} />
          </div>
        </section>
        <section className="container mx-auto mt-2 p-2">
          <div>
            <h2 className="text-lg max-md:text-base"><b>Professional Experience</b></h2>
            <Experience experiences={response.result.projectDto} />
          </div>
        </section>
        <section className="container mx-auto bg-stone-200 mt-2 p-2">
          <div>
            <h2 className="text-lg max-md:text-base"><b>Get in Touch</b></h2>
            <ContactUs />
          </div>
        </section>
      </div>
    </>
  );
}
