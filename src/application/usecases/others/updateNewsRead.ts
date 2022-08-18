import { Ports } from "~/application/ports";
import {
  InternalServerError,
  NetworkError,
  UnauthorizedError,
} from "~/domain/result";

export const updateNewsRead = ({ newsRepository }: Ports) => (
  id: string,
  read: boolean
): Promise<null | UnauthorizedError | NetworkError | InternalServerError> => {
  return newsRepository.updateRead(id, read);
};
