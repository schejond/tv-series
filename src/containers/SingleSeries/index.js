import React, {Component} from "react";
import Spinner from "../../components/Spinner";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {ButtonBase, Typography} from "@material-ui/core";

class SingleSeries extends Component {
    state = {
        contentToShow: null,
        rows: []
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        fetch('https://api.tvmaze.com/shows/' + id + '?embed=episodes')
            .then(response => response.json())
            .then(json => {
                // console.log(json);
                let premieredDate = new Date(json.premiered);
                premieredDate = premieredDate.getDay() + '.' + premieredDate.getMonth() + '.' + premieredDate.getFullYear();
                this.setState({
                    contentToShow: json,
                    rows: [
                        {title: 'Rating', content: json.rating.average},
                        {title: 'Premiered', content: premieredDate},
                        {title: 'Original language', content: json.language},
                        {title: 'Episodes', content: json._embedded.episodes.length},
                        {title: 'Status', content: json.status},
                    ]
                });
            });

    }

    render() {
        const {contentToShow, rows} = this.state;

        return (
            <div>
                {contentToShow == null && <Spinner/>}
                {contentToShow != null &&
                <div>
                    <Grid container spacing={2}
                          justifyContent="center" style={{margin: '2em'}}>

                        <Grid item xs={2} style={{maxHeight: 400}}>
                            <ButtonBase onClick={() => {
                                window.open(`https://www.imdb.com/title/${contentToShow.externals.imdb}`);
                            }}
                                        title={`Open ${contentToShow.name} on imdb`}>
                                <img src={contentToShow.image.medium} alt="series-img" />
                            </ButtonBase>
                        </Grid>

                        <Grid item xs={3}>
                            <Paper>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography gutterBottom variant="h4">
                                            {contentToShow.name}
                                        </Typography>
                                    </Grid>

                                    {rows.map(row => (
                                        <Grid container spacing={1} key={row.title}>
                                            <Grid item xs={1}/>

                                            <Grid item xs={6}>
                                                <Typography variant="h6" color="primary"
                                                            align="left" noWrap>
                                                    {row.title}:
                                                </Typography>
                                            </Grid>

                                            {/*<Grid item xs={2}/>*/}

                                            <Grid item xs={3}>
                                                <Typography variant="subtitle1"
                                                            align="left"
                                                            noWrap
                                                            style={{
                                                                cursor: 'pointer',
                                                                paddingTop: '0.2em',
                                                                color: 'rosybrown'
                                                            }}>
                                                    {row.content}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={2}/>
                                        </Grid>
                                    ))}

                                    <Grid item xs={12}>
                                        <Typography variant="caption">
                                            <div dangerouslySetInnerHTML={{__html: contentToShow.summary}}/>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
                }
            </div>
        );
    }
}

export default SingleSeries;