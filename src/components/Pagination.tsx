import { IRepo } from "../models/models";
import styles from "./Pagination.module.scss";

type PaginationProps = {
  repos: IRepo[];
  setCurrentPage(pageNumber: number): void;
  currentPage: number;
};

const Pagination: React.FC<PaginationProps> = ({
    repos,
  setCurrentPage,
  currentPage,
}) => {
  const cardsPerPage = 4;

  const pageNumbers = [];
  for (let c = 1; c <= Math.ceil(repos.length / cardsPerPage); c++) {
    pageNumbers.push(c);
  }

  return (
    <div className={styles.pagination}>
      {pageNumbers.map((page) => (
        <div
          key={page}
          onClick={() => setCurrentPage(page)}
          className={currentPage == page ? `${styles.active}` : ""}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Pagination;