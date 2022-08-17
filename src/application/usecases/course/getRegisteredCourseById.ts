import { Ports } from "~/application/ports";
import { RegisteredCourse } from "~/domain";
import {
  InternalServerError,
  NetworkError,
  NotFoundError,
  UnauthorizedError,
} from "~/domain/result";

/**
 * Return NotFoundError if the course with specified id is not found.
 */
export const getRegisteredCourseById = ({ courseRepository }: Ports) => (
  id: string
): Promise<
  | RegisteredCourse
  | NotFoundError
  | UnauthorizedError
  | NetworkError
  | InternalServerError
> => {
  return courseRepository.getRegisteredCourseById(id);
};
