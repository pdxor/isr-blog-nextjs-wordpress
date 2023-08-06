"use client"
import React, { useEffect, useState } from 'react';
import Filter from './icons/Filter';
import Refresh from './icons/Refresh';
import { client } from "../lib/apolloClient";
import { GET_ALL_COURSES } from "@/graphql/queries";
import RecentlyReleasedCard from './RecentlyReleasedCard';
import SH2Text from './text/SH2Text';
import CourseCard from "@/components/CourseCard";
import RecommendedEducator from './RecomendedEducator';
export default function StudentsAreViewing() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await client.query({
        query: GET_ALL_COURSES
      })
      const fetchedCourses = response.data.courses.nodes.slice(0, 10);
      setCourses(fetchedCourses);
    };
    fetchCourses();
  }, []);
  return (
    <div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <SH2Text text="STUDENTS ARE VIEWING" color="black" />
          </div>
          <div className="flex items-center">
            <div className="ml-2">
              <Refresh fill={''} />
            </div>
            <div className="ml-2">
              <Filter fill={''} />
            </div>
          </div>
        </div>
        <div className="flex overflow-x-auto space-x-4">
          {courses.map((course: any) => (
            <CourseCard key={course.uri} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}