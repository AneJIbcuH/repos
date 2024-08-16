import { IRepo } from "../models/models";
import styles from "./InfoRepo.module.scss";

type RepoProps = {
  repo: IRepo | null;
};

const InfoRepo: React.FC<RepoProps> = ({ repo }) => {
  return (
    <>
      {!repo ? (
        <div className={`${styles.info} ${styles.center}`}>
          Выберите репозиторий
        </div>
      ) : (
        <div className={styles.info}>
          <div className={styles.name}>{repo?.name}</div>
          <div className={styles.description}>{repo?.description}</div>
          <div>{repo?.license?.name}</div>
        </div>
      )}
    </>
  );
};

export default InfoRepo;
