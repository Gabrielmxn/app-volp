import { AboutView } from "."
import { useAboutModel } from "./about.model"

export function AboutPage(){
  const methods = useAboutModel()
  return <AboutView {...methods} />
}