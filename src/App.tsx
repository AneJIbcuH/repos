import { useLazyGetReposQuery } from "./store/github/github.api";
import styles from "./App.module.scss";
import { useState } from "react";
import Repo from "./components/Repo";
import HeaderTable from "./components/HeaderTable";
import InfoRepo from "./components/InfoRepo";
import { IRepo } from "./models/models";
import Pagination from "./components/Pagination";
import Table from "./components/table/Table";

const App: React.FC = () => {
  const [search, setSearch] = useState("");
  const [searching, { data }] = useLazyGetReposQuery();
  const [repoInfo, setRepoInfo] = useState<IRepo | null>(null);

  const cardsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentRepos = data?.slice(firstCardIndex, lastCardIndex);

  function searchRepos() {
    searching(search);
  }

  function handleClick(repo: IRepo) {
    setRepoInfo(repo);
  }

  return (
    <div className={styles.body}>
      <div className={styles.nav}>
        <input
          className={styles.input}
          placeholder="Введите поисковый запрос"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={styles.btn} onClick={searchRepos}>
          ИСКАТЬ
        </button>
      </div>

      {!data ? (
        <div className={styles.welcome}>Добро пожаловать</div>
      ) : (
        <div className={styles.content}>
          <Table />
          {/* <div className={styles.search}>
            <div className={styles.resSearch}>Результаты поиска</div>
            <HeaderTable />
            {currentRepos?.map((repo) => (
              <Repo
                repo={repo}
                key={repo.id}
                onClick={() => handleClick(repo)}
              />
            ))}
            <Pagination
              repos={data}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div> */}
          <InfoRepo repo={repoInfo} />
        </div>
      )}
    </div>
  );
};

export default App;
