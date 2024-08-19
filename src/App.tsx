import { useLazyGetReposQuery } from "./store/github/github.api";
import { useState } from "react";
import { IRepo } from "./models/models";
import InfoRepo from "./components/InfoRepo";
import Table from "./components/MyTable";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { orange } from "@mui/material/colors";
import Button from "@mui/material/Button";
import styles from "./App.module.scss";

const App: React.FC = () => {
  const [search, setSearch] = useState("");
  const [searching, { data, isFetching }] = useLazyGetReposQuery();
  const [repoInfo, setRepoInfo] = useState<IRepo | null>(null);

  function searchRepos() {
    searching(search);
  }

  return (
    <div className={styles.body}>
      <div className={styles.nav}>
        <input
          className={styles.input}
          placeholder="Введите поисковый запрос"
          onChange={(e) => setSearch(e.target.value)}
        />

        <Box sx={{ m: 1, position: "relative" }}>
          <Button
            variant="contained"
            disabled={isFetching}
            onClick={searchRepos}
          >
            {isFetching ? "ИЩЕМ..." : "ИСКАТЬ"}
          </Button>
          {isFetching && (
            <CircularProgress
              className={styles.cirle}
              size={24}
              sx={{color: orange[500]}}
            />
          )}
        </Box>
      </div>

      {!data ? (
        <div className={styles.welcome}>Добро пожаловать</div>
      ) : (
        <div className={styles.content}>
          <Table repos={data} setRepo={setRepoInfo} />
          <InfoRepo repo={repoInfo} />
        </div>
      )}
    </div>
  );
};

export default App;
