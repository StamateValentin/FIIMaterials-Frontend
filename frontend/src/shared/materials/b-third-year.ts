import {Class, Semester, Year} from "../interfaces/interfaces";
import {ClassType} from "../const";

export const FIRST_SEMESTER_CLASSES: Class[] = [
  {
    "count": 1,
    "name": "Machine Learning",
    "short": "ML",
    "credits": 6,
    "materials": "https://bit.ly/3LgqCJ5",
    "site": "",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 2,
    "name": "Information Security",
    "short": "SI",
    "credits": 5,
    "materials": "https://bit.ly/3B5dmSH",
    "site": "https://www.flt-info.eu/course/isec/",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 3,
    "name": "Artificial Intelligence",
    "short": "AI",
    "credits": 6,
    "materials": "https://bit.ly/3ooSqkw",
    "site": "https://sites.google.com/view/iafii/home",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 4,
    "name": "Python Programming",
    "short": "Python",
    "credits": 4,
    "materials": "https://bit.ly/3Gzl8Fw",
    "site": "https://sites.google.com/site/fiipythonprogramming/",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 5,
    "name": "Introduction to .NET",
    "short": ".NET",
    "credits": 4,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_1,
  },
  {
    "count": 6,
    "name": "Physical Systems Development Using Microprocessors",
    "short": "DSFUM",
    "credits": 4,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_1,
  },
  {
    "count": 7,
    "name": "Neural Networks",
    "short": "NN",
    "credits": 4,
    "materials": "https://bit.ly/3LgcHmg",
    "site": "https://sites.google.com/view/rbenchea/neural-networks",
    "password": "",
    "type": ClassType.OPTIONAL_1,
  },
  {
    "count": 8,
    "name": "3D Computer Animation",
    "short": "Animations",
    "credits": 4,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_1,
  },
  {
    "count": 9,
    "name": "Probabilistic Programming and Modeling",
    "short": "PMP",
    "credits": 5,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_2,
  },
  {
    "count": 10,
    "name": "Introduction to Mixed Realities",
    "short": "IRM",
    "credits": 5,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_2,
  },
  {
    "count": 11,
    "name": "Special Chapters in Operating Systems",
    "short": "CSSO",
    "credits": 5,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_2,
  },
  {
    "count": 12,
    "name": "Multiprocessor Programming Techniques",
    "short": "TPM",
    "credits": 5,
    "materials": "https://bit.ly/3JnXFt1",
    "site": "https://profs.info.uaic.ro/~eonica/mpt/index.html",
    "password": "",
    "type": ClassType.OPTIONAL_2,
  },
  {
    "count": 13,
    "name": "Competitive Programming",
    "short": "PC",
    "credits": 3,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.FACULTY,
  },
  {
    "count": 14,
    "name": "Industry Training II",
    "short": "Practice",
    "credits": 3,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.FACULTY,
  },
];

const SECOND_SEMESTER_CLASSES: Class[] = [
  {
    "count": 1,
    "name": "Numeric Calculus",
    "short": "CN",
    "credits": 4,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 2,
    "name": "Computer Graphics",
    "short": "GC",
    "credits": 4,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 3,
    "name": "Diploma Project Development ",
    "short": "Thesis",
    "credits": 5,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.NORMAL,
  },
  {
    "count": 4,
    "name": "Rule Based Programming",
    "short": "PBR",
    "credits": 5,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_1,
  },
  {
    "count": 5,
    "name": "Mobile Development",
    "short": "Mobile",
    "credits": 5,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_1,
  },
  {
    "count": 6,
    "name": "Computational Aspects on the Number Theory",
    "short": "ACTN",
    "credits": 5,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_1,
  },
  {
    "count": 7,
    "name": "Game Design",
    "short": "Game Design",
    "credits": 5,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_1,
  },
  {
    "count": 8,
    "name": "Psychology of the Professional Communication in IT Industry",
    "short": "PCPID",
    "credits": 6,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_2,
  },
  {
    "count": 9,
    "name": "Cloud Computing",
    "short": "CC",
    "credits": 6,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_2,
  },
  {
    "count": 10,
    "name": "Human-Computer Interaction ",
    "short": "HCI",
    "credits": 6,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_2,
  },
  {
    "count": 11,
    "name": "Social Media Networks Analysis",
    "short": "ARMS",
    "credits": 6,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_2,
  },
  {
    "count": 12,
    "name": "Petri Nets and Applications",
    "short": "LFAC 2",
    "credits": 6,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_3,
  },
  {
    "count": 13,
    "name": "Smart Cards and Their Applications",
    "short": "SCA",
    "credits": 6,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_3,
  },
  {
    "count": 14,
    "name": "Automotive specific software engineering",
    "short": "ISSA",
    "credits": 6,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_3,
  },
  {
    "count": 15,
    "name": "Modeling of Digital Systems ",
    "short": "MSD",
    "credits": 6,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.OPTIONAL_3,
  },
  {
    "count": 16,
    "name": "Competitive Programming",
    "short": "PC",
    "credits": 6,
    "materials": "",
    "site": "",
    "password": "",
    "type": ClassType.FACULTY,
  }
];

const FIRST_SEMESTER: Semester = {
  semester: 1,
  semesterCount: 5,
  classes: FIRST_SEMESTER_CLASSES,
};

const SECOND_SEMESTER: Semester = {
  semester: 2,
  semesterCount: 6,
  classes: SECOND_SEMESTER_CLASSES,
};

export const B_THIRD_YEAR: Year = {
  name: 'Third Year',
  count: 3,
  semesters: [
    FIRST_SEMESTER,
    SECOND_SEMESTER,
  ]
};
