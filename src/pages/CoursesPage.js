import React, { useState, useEffect } from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";
import Course from "../components/Course";
import { fetchCourses } from "../services/courses.service";
import CreateCourseDialog from "../components/CreateCourseDialog";

const CoursesWrapper = styled.div`
  width: 100%;
  max-width: 860px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
`;

const CoursesHeader = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 3px solid blue;
`;

const Title = styled.h1`
  width: 100%;
  color: Green;
`;

const CreateButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CoursesContainer = styled.div`
  padding-top: 20px;
`;

const EmptyCoursesPlaceholder = styled.p`
  color: Red;
  text-align: center;
  font-size: 22px;
`;

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true)

  useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await fetchCourses()
        setCourses(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getCourses()
  }, [])

  return (
    <CoursesWrapper>

      <CreateCourseDialog courses={courses} setCourses={setCourses} open={open} setOpen={setOpen} />

      <CoursesHeader>
        <Title>Course Management App</Title>

        <CreateButtonContainer>
          <Fab
            variant="extended"
            onClick={handleOpen}
          >
            <AddIcon />
            Create Courses
          </Fab>
        </CreateButtonContainer>
      </CoursesHeader>

      <CoursesContainer>
        {courses != null ? (
          courses.map((course) => {
            return (
              <Course
                key={course.id}
                id={course.id}
                name={course.name}
                description={course.description}
                section={course.section}
                subject={course.subject}
                room={course.room}
              />
            );
          })
        ) : (
          <EmptyCoursesPlaceholder>
            No courses available. Create one?
          </EmptyCoursesPlaceholder>
        )}
      </CoursesContainer>
    </CoursesWrapper>
  );
};

export default CoursesPage;
