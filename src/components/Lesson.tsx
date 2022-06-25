import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface LessonProps {
  isActive: boolean;
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}
export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE ' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={`rounded relative border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${
          props.isActive && "bg-green-500"
        }`}
      >
        {props.isActive && (
          <div className="w-4 z-10 h-4 top-6 -left-1 absolute rotate-45 bg-green-500 group-hover:border-green-500" />
        )}
        <header className=" flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "text-sm font-medium flex items-center gap-2",
                {
                  "text-white": props.isActive,
                  "text-blue-500": !props.isActive,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={classNames(
              "text-xs rounded py-[0.125rem] px-2 text-white border font-bold",
              {
                "border-white": props.isActive,
                "border-green-300": !props.isActive,
              }
            )}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong
          className={classNames("mt-5 block", {
            "text-white": props.isActive,
            "text-gray-200": !props.isActive,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
