import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "../components/Search.css";
function Search() {
  return (
    <Container maxWidth="lg" sx={{ px: { lg: "3%", md: "0" } }}>
      <div className="searchwrapper">
        <div className="searchbox">
          <Grid container>
            <Grid item xs={12} sm={5} md={8} className="col-md-8">
              <input
                type="text"
                className="form-control"
                placeholder="Title, ISBN, Author"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} className="col-md-3">
              <select className="form-control category">
                <option>Latest Added</option>
                <option>Title</option>
                <option>Lowest Price</option>
                <option>Highest Price</option>
              </select>
            </Grid>
            <Grid item xs={12} sm={2} md={1} className="col-md-1">
              <Button variant="contained" className="search-btn">
                Search
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}

export default Search;
