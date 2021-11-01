import React, { useEffect, useState } from 'react';
import { readString } from 'react-papaparse';
import ProductCard from './ProductCard';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Box, Container, Pagination } from '@mui/material';
import SearchComponent from './SearchComponent';

const useStyles = makeStyles({
  gridContainer: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  paginator: {
    justifyContent: 'center',
    padding: '10px',
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    background: 'white',
  },
  marginTop: {
    marginTop: '20px',
    marginBottom: '20px',
  },
});

export default function Productlist() {
  const classes = useStyles();
  const [results, setResults] = useState([]);
  const itemsPerPage = 100;
  const [page, setPage] = useState(1);

  console.log('Length', results?.length);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const papaConfig = {
      complete: (results) => {
        if (results !== null) {
          setResults(results.data);
        }
      },
      header: true,
      download: true,
      skipEmptyLines: true,
      error: (error) => {
        console.log('Error while parsing:', error);
      },
    };

    readString(`${process.env.PUBLIC_URL}/products.csv`, papaConfig);
  }, []);

  const [filter, setFilter] = useState('');

  const filteredData = React.useMemo(() => {
    if (filter === '') return results;
    return results.filter(
      (productItem) =>
        productItem?.title.toLowerCase().includes(filter) ||
        productItem?.gender.toLowerCase().includes(filter)
    );
  }, [results, filter]);

  console.log('filteredData', filteredData);

  return (
    <div>
      <Container fixed className={classes.marginTop}>
        <SearchComponent onSearch={(searchTerm) => setFilter(searchTerm)} />

        <Grid container spacing={2} className={classes.gridContainer}>
          {filteredData
            ?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((productItem) => (
              <Grid item xs={12} sm={6} md={4}>
                <ProductCard productlist={productItem} />
              </Grid>
            ))}
        </Grid>
      </Container>
      <Box className={classes.stickToBottom} component='span'>
        <Pagination
          count={Math.ceil(filteredData?.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color='primary'
          showFirstButton
          showLastButton
          classes={{ ul: classes.paginator }}
        />
      </Box>
    </div>
  );
}
