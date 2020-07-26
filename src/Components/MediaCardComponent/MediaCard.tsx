import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './MediaCard.css';

interface IMediaCardProps {
    ImageUrl: string | undefined;
    Name: string | undefined;
    Hp: number | undefined;
    Attack: number | undefined;
    Type1: string | undefined;
    Type2: string | undefined;


}

function MediaCard(props: IMediaCardProps) {

    return (
        <div>
            <Card className="MediaCardContainer">
                <CardActionArea>
                    <CardMedia
                        className="MediaCardImage"
                        image={props.ImageUrl}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2" className="MediaCardTitle">
                            {props.Name}
                        </Typography>
                        <Typography variant="body2" component="p" className="MediaCardDescription">
                            HP: {props.Hp} <br />
                            Attack: {props.Attack} <br />
                            Type: {props.Type1} {props.Type2}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default MediaCard