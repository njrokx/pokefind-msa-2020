import React, { useState } from 'react';
import { TextField, Grid, Button } from '@material-ui/core'
import './SearchBar.css';
import { IUserInput } from '../../Common/Interfaces';

interface ISearchBarProps {
    SetUserInput: (a: IUserInput) => void;
}

function SearchBar(props: ISearchBarProps) {

    const [SearchQuery, setSearchQuery] = useState<string | null>("");
    const handleSearchQueryChange = (s: string | null) => {
        setSearchQuery(s);
    }

    const [HasFocus, setHasFocus] = useState<boolean>(false);

    const handleSubmit = () => {
        if (SearchQuery?.length !== 0 && SearchQuery !== null && SearchQuery !== "") {
            //var lower = SearchQuery.toLowerCase;
            let UserInput: IUserInput = {
                SearchQuery: SearchQuery,
            }
            props.SetUserInput(UserInput);
        } else {
            setHasFocus(true);
        }
        console.log("submit was presssed");

    }

    return (
        <div className="SearchBarContainer">
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Search Pokemon"
                        variant="outlined"
                        helperText="Enter the pokemon name or id"
                        error={HasFocus && SearchQuery === ""}
                        onClick={() => setHasFocus(true)}
                        value={SearchQuery}
                        onChange={e => handleSearchQueryChange(e.target.value)}
                    />
                </Grid>

                <Grid item xs={6} sm={3}>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Submit
                </Button>
                </Grid>

            </Grid>
        </div >
    )
}

export default SearchBar;