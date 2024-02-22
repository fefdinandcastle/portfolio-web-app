export interface Skill {
  id: number,
  title: string,
  categories: Category[],
  yearsExperience: number,
  logo: string
}

export type Category = "frontend" | "backend" | "design";

export const skillsData: Skill[] = [
  {id: 0, title: "Javascript", categories: ["frontend", "backend"], yearsExperience: 3, logo: ""},
  {id: 1, title: "Typescript", categories: ["frontend"], yearsExperience: 2, logo: ""},
  {id: 2, title: "Node.js", categories: ["frontend", "backend"], yearsExperience: 3, logo: ""},
  {id: 3, title: "npm", categories: ["frontend","backend"], yearsExperience: 3, logo: ""},
  {id: 4, title: "React", categories: ["frontend"], yearsExperience: 3, logo: ""},
  {id: 5, title: "Photoshop", categories: ["design"], yearsExperience: 5, logo: ""},
  {id: 6, title: "Three.js", categories: ["frontend"], yearsExperience: 1, logo: ""},
  {id: 7, title: "Angular", categories: ["frontend"], yearsExperience: 1, logo: ""},
  {id: 8, title: "AWS Lambda", categories: ["backend"], yearsExperience: 1, logo: ""},
]

export default skillsData;