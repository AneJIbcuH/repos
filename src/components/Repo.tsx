import { IRepo } from "../models/models";
import styles from "./Repo.module.scss";

type RepoProps = {
  repo: IRepo;
  onClick: () => void
};

const Repo: React.FC<RepoProps> = ({ repo, onClick }) => {
  return (
    <div className={`${styles.div} ${styles.hover}`} onClick={onClick}>
      <div>{repo.name}</div>
      <div>{repo.language}</div>
      <div>{repo.forks}</div>
      <div>{repo.stargazers_count}</div>
      <div>{(new Date(repo.updated_at)).toLocaleDateString()}</div>
    </div>
  );
};

export default Repo;
