import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCardComponent/MediaCard';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';
import { IUserInput } from '../../Common/Interfaces';

interface IMediaGridProps {
    SearchQuery: (string | null);
}

function MediaGrid(props: IMediaGridProps) {
    const [Name, setName] = useState<string>("");
    const [ImageUrl, setImageUrl] = useState<string>("");
    const [Type1, setType1] = useState<string>("");
    const [Type2, setType2] = useState<string>("");
    const [Hp, setHp] = useState<number>();
    const [Att, setAtt] = useState<number>();

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + props.SearchQuery?.toLowerCase())
            .then(response => response.json())

            .then(response => {
                setName(response.name)
                setImageUrl(response.sprites.front_default)
                setType1(response.types[0].type.name)
                setType2(response.types[1].type.name)
                setHp(response.stats[0].base_stat)
                setAtt(response.stats[1].base_stat)

            })
            .catch(() => console.log("it didn't work")
            );

    }, [props.SearchQuery])

    var Cards: JSX.Element[] = [];
    Cards.push(
        <Grid key={"card_"} item sm={6} md={4} lg={3} className="MediaGridCard">
            <MediaCard ImageUrl={ImageUrl} Name={Name} Hp={Hp} Attack={Att} Type1={Type1} Type2={Type2} />
        </Grid>
    )
    return (
        <div>
            <Grid container spacing={3} className="MediaGridContainer">
                {Cards}
            </Grid>
        </div>
    )
}
export default MediaGrid 