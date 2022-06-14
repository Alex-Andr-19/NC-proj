// @ts-ignore
import {Lesson} from "./Lesson.ts"

interface ApiDataI {
  students: Object[],
  teachers: Object[],
  lessons: [Lesson[]],
  groups: Object[]
}
