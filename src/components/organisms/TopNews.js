import TopNewsSnackbar from "../atoms/TopNewsSnackbar"
import AddNewsButton from "../atoms/AddNewsButton"
import FormDialog from "../molecules/FormDialog"
import Grid from '@mui/material/Grid';
import { useState, useCallback, useEffect } from "react";

export default function TopNews(props) {

  const [open, setOpen] = useState(false)

  const openFormDialog = () => {
    setOpen(true)
  }

  const closeFormDialog = () => {
    setOpen(false)
  }

  const [news_group, setNews] = useState([])

  const getTopNews = useCallback(async () => {
      const res = await fetch("http://localhost:3001/work_news");
      const json = await res.json()
      setNews(json)
      // console.log(json)
    }, []
  );

  useEffect(() => {
    getTopNews();
  }, [getTopNews]);



  return(
    <>
    <Grid container direction="column" spacing={1} sx={{ width: "70%" }}>
      {news_group.map((news) =>
        <Grid item sx={12}>
            <TopNewsSnackbar content={news.content} />
        </Grid>
      )}
      <Grid container item direction="row" justifyContent="flex-end">
        <AddNewsButton onClick={openFormDialog} />
      </Grid>
    </Grid>
    <FormDialog open={open} onClose={closeFormDialog}/>
    </>
  )
}
