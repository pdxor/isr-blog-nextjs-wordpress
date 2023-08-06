"use client"
import React, { useEffect, useState } from 'react';
import CourseHighlightsCard from '@/components/CourseHighlightsCard';
import SH2Text from './text/SH2Text';
import { client } from "../lib/apolloClient";
import { GET_ALL_COURSES } from "@/graphql/queries";

export default function CourseHighlights() {
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
    <div className="pb-4">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
          <SH2Text text="COURSE HIGHLIGHTS" color="black" />

          </div>
          <div className="flex items-center"></div>
        </div>
        <div className="flex overflow-x-auto space-x-4">
          {courses.map((course: any) => (
            <CourseHighlightsCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}