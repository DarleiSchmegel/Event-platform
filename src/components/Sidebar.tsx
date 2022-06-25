import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      availableAt
      title
      lessonType
      slug
    }
  }
`;

interface GetLessonQueryResponse {
  lessons: {
    id: string;
    availableAt: string;
    title: string;
    slug: string;
    lessonType: "live" | "class";
  }[];
}

export function Sidebar(props: {slug: string}) {
  const { data } = useQuery<GetLessonQueryResponse>(GET_LESONS_QUERY);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de Aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              isActive = {props.slug === lesson.slug}
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
