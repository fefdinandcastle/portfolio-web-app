export interface SkillInterface {
  id: number,
  title: string,
  categories: Category[],
  yearsExperience: number,
  logo: string,
  gradient: string[]
}

export type Category = "frontend" | "backend" | "design";

export const skillsData: SkillInterface[] = [
  {id: 0, title: "Javascript", categories: ["frontend", "backend"], yearsExperience: 5, logo: "/skills_logos/js.png", gradient: ["#EEEEEE", "#EEEEEE"]},
  {id: 1, title: "Typescript", categories: ["frontend"], yearsExperience: 4, logo: "/skills_logos/ts.svg", gradient: ["#EEEEEE", "#EEEEEE"]},
  {id: 2, title: "Node.js", categories: ["frontend", "backend"], yearsExperience: 5, logo: "/skills_logos/node.png", gradient: ["#3C873A", "#398536"]},
  {id: 3, title: "npm", categories: ["frontend","backend"], yearsExperience: 5, logo: "/skills_logos/npm.png", gradient: ["#EEEEEE", "#EEEEEE"]},
  {id: 4, title: "React", categories: ["frontend"], yearsExperience: 5, logo: "/skills_logos/react.svg", gradient: ["#EEEEEE", "#EEEEEE"]},
  {id: 5, title: "Photoshop", categories: ["design"], yearsExperience: 5, logo: "/skills_logos/photoshop.png", gradient: ["#40D0FB", "#4FCCFE"]},
  {id: 6, title: "Three.js", categories: ["frontend"], yearsExperience: 1, logo: "/skills_logos/three.png", gradient: ["#40D0FB", "#4FCCFE"]},
  // {id: 7, title: "Angular", categories: ["frontend"], yearsExperience: 1, logo: "/skills_logos/angular.png", gradient: ["#40D0FB", "#4FCCFE"]},
  {id: 8, title: "AWS Lambda", categories: ["backend"], yearsExperience: 2, logo: "/skills_logos/aws_lambda.png", gradient: ["#40D0FB", "#4FCCFE"]},
  {id: 9, title: "Figma", categories: ["frontend", "design"], yearsExperience: 2, logo: "/skills_logos/figma.png", gradient: ["#40D0FB", "#4FCCFE"]},
  {id: 10, title: "Blender", categories: ["design"], yearsExperience: 10, logo: "/skills_logos/blender.png", gradient: ["#40D0FB", "#4FCCFE"]},
  {id: 11, title: "Redux", categories: ["frontend"], yearsExperience: 3, logo: "/skills_logos/redux.png", gradient: ["#40D0FB", "#4FCCFE"]},
  {id: 12, title: "Next.js", categories: ["frontend"], yearsExperience: 3, logo: "/skills_logos/next.png", gradient: ["#3C873A", "#398536"]},
  {id: 13, title: "Axios", categories: ["frontend"], yearsExperience: 5, logo: "/skills_logos/axios.png", gradient: ["#3C873A", "#398536"]},
  {id: 14, title: "Springboot", categories: ["backend"], yearsExperience: 2, logo: "/skills_logos/springboot.png", gradient: ["#3C873A", "#398536"]},
]

export default skillsData;