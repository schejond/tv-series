import React, {Component} from "react";
import SeriesList from "../../components/SeriesList";
import Spinner from "../../components/Spinner";
import Intro from "../../components/Intro";
import {Typography} from "@material-ui/core";

class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFetching: false
    }

    onSeriesInputChange = e => {
        this.setState({seriesName: e.target.value, isFetching: true});
        fetch('https://api.tvmaze.com/search/shows?q=' + e.target.value)
            .then(response => response.json())
            .then(json => {
                this.setState({series: json, isFetching: false});
            });
    }

    render() {
        const {series, seriesName, isFetching} = this.state;
        return (
            <div>
                <Intro message="Here you can search for any TV series"/>

                <div>
                    <input type="text" value={seriesName} onChange={this.onSeriesInputChange} />
                </div>
                {!isFetching && series.length === 0 && seriesName.trim() === '' && <Typography variant="caption">Please enter series name into the input</Typography>}
                {!isFetching && series.length === 0 && seriesName.trim() !== '' && <Typography variant="caption">No TV series have been found for provided input</Typography>}
                {isFetching && <Spinner />}
                {!isFetching && <SeriesList list={this.state.series} />}
            </div>
        );
    }
}

export default Series;