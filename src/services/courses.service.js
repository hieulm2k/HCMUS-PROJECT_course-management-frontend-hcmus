import { get, post } from "./base-http.service";

export const fetchCourses = async () => {
  return await get('api/courses');
}

export const createCourse = async (name, description, section, subject, room) => {
  return await post(`api/courses`, { name, description, section, subject, room });
}
